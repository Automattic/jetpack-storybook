import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-BXs6jvWf.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{ou as i,vu as a}from"./build-module-D8x1-0PG.js";import{B as o,I as s}from"./charts-provider-BmHzZhpi.js";import{L as c,t as l}from"./src-M-MiwiMQ.js";import{Sn as u,Ut as ee,bn as d,t as f}from"./src-BcILQ8ng.js";import{t as te}from"./widget-state-DnbF8hrz.js";import{t as p}from"./src-BXUpbDcT.js";import{n as ne,r as m,s as h}from"./register-report-mocks-DEKgkFm4.js";import{r as re,t as g}from"./subscriber-list-skeleton-BJuerhq4.js";import{a as _,c as v,i as y,l as b,o as ie,r as ae,s as oe,u as x}from"./with-widget-canvas-BXILxgDl.js";var S,C,w=e((()=>{S=`_root_6wdsv_2`,C={root:S}}));function T(){let{reportParams:e}=o(),n=d(e.post_id),{data:r,isLoading:i,isFetching:s,isError:l,refetch:u}=ee({postId:n,number:O}),f=(0,a.useMemo)(()=>(r?.comments??[]).map(e=>({id:e.ID,name:e.name,avatarUrl:e.avatar_URL,href:e.URL,secondaryText:c(e.date)})),[r]),p=n<=0||!!r&&f.length===0;return(0,D.jsx)(`div`,{className:C.root,children:(0,D.jsx)(te,{isLoading:i,isFetching:s,isError:!r&&l,isEmpty:p,renderLoading:(0,D.jsx)(g,{rows:O}),error:{description:t(`We couldn't load these comments. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{description:t(n<=0?`Open a post or page report to see its comments here.`:`This post has no comments yet.`,`jetpack-premium-analytics-pkg`)},children:(0,D.jsx)(re,{items:f,moreCount:r?.found===void 0?null:Math.max(0,r.found-f.length)})})})}function E({attributes:e={}}){return(0,D.jsx)(s,{attributes:e,children:(0,D.jsx)(T,{})})}var D,O,k=e((()=>{f(),l(),p(),i(),n(),w(),D=r(),O=10})),A,j,M,N,P,F,I,L,R=e((()=>{A=`jpa/post-comments`,j=`jpa/comment`,M=`Latest comments`,N=`The latest comments on the post or page being viewed.`,P={content:`The latest comments on the post or page being viewed.`},F=`stats`,I=`framed`,L={name:A,icon:j,title:M,description:N,help:P,category:F,presentation:I}}));function z({hasPostScope:e}){return{reportParams:{...u(!1),...e?{post_id:U}:{}}}}function B(e){return(0,H.jsx)(E,{attributes:z(e)})}function V({hasPostScope:e,...t}){return(0,H.jsx)(v,{...t,widgetType:_(L),renderModule:W,renderComponent:E,attributes:z({hasPostScope:e})})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),ne(),b(),ie(),ae(),k(),R(),H=r(),m(),U=779,W=`storybook/post-comments`,G=`posts/${U}/replies`,K={title:`Packages/Premium Analytics/Widgets/PostComments`,component:E,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the post detail page's `post_id` report parameter."}},parameters:{docs:{description:{component:`The "Latest comments" widget: recent commenters on the scoped post, with an avatar, relative time, comment link, and "N more" footer.`}}}},q={render:B,args:{hasPostScope:!0},decorators:[y]},J={render:B,args:{hasPostScope:!1},decorators:[y]},Y={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[y],beforeEach:()=>(h(G,`loading`),()=>h(G,null))},X={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[y],beforeEach:()=>(h(G,`error`),()=>h(G,null))},Z={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[y],beforeEach:()=>(h(G,`empty`),()=>h(G,null))},Q={tags:[`widget-dashboard`],render:e=>(0,H.jsx)(V,{...e}),args:{...oe,widgetWidth:1,widgetHeight:2,hasPostScope:!0},argTypes:{...x,hasPostScope:{control:`boolean`,description:"Include the post detail page's `post_id` report parameter."}}},$=[`Default`,`NoPostScope`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
  tags: ['widget-dashboard'],
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