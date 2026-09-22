import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Uu as ee,ju as i,t as a,vc as o}from"./build-module-2iv4IIRq.js";import{m as s,v as te}from"./hooks-Dg4m0pUQ.js";import{M as ne,t as c}from"./src-C-E2d-Lb.js";import{k as l,t as u}from"./src-CJGEmgc4.js";import{Nn as re,r as d,tn as ie,vt as ae}from"./date-period-dropdown-CGT7crLr.js";import{c as f,i as oe,r as se}from"./register-report-mocks-DoORDfMG.js";import{t as ce}from"./widget-state-D20EzGsr.js";import{r as p,t as m}from"./subscriber-list-skeleton-DONSj8MO.js";import{t as h}from"./src-DEBlERQg.js";import{a as g,c as _,i as le,l as ue,n as v,o as y,r as b,s as x}from"./with-widget-canvas-CTYU8MQ3.js";var S,C,w=e((()=>{S=`_root_6wdsv_2`,C={root:S}}));function T(){let{reportParams:e}=te(),n=re(e.post_id),{data:r,isLoading:i,isFetching:a,isError:o,refetch:s}=ae({postId:n,number:O}),c=(0,ee.useMemo)(()=>(r?.comments??[]).map(e=>({id:e.ID,name:e.name,avatarUrl:e.avatar_URL,href:e.URL,secondaryText:l(e.date)})),[r]),u=r?.found??0,d=n<=0||!!r&&c.length===0;return(0,D.jsx)(`div`,{className:C.root,children:(0,D.jsx)(ce,{isLoading:i,isFetching:a,isError:!r&&o,isEmpty:d,renderLoading:(0,D.jsx)(m,{rows:O}),error:{description:t(`We couldn't load these comments. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:ne,description:t(n<=0?`Open a post or page report to see its comments here.`:`There are no comments yet.`,`jetpack-premium-analytics-pkg`)},children:(0,D.jsx)(p,{items:c,moreCount:Math.max(0,u-c.length)})})})}function E({attributes:e={}}){return(0,D.jsx)(s,{attributes:e,children:(0,D.jsx)(T,{})})}var D,O,de=e((()=>{d(),u(),c(),h(),i(),n(),w(),D=r(),O=10})),k,A=e((()=>{a(),k={icon:o,attributes:[],example:{attributes:{}}}})),j,M,N,P,F,I,L,R=e((()=>{j=`jpa/post-comments`,M=`Latest comments`,N=`The latest comments on the post or page being viewed.`,P={content:`The latest comments on the post or page being viewed.`},F=`stats`,I=`framed`,L={name:j,title:M,description:N,help:P,category:F,presentation:I}}));function z({hasPostScope:e}){return{reportParams:{...ie(!1),...e?{post_id:U}:{}}}}function B(e){return(0,H.jsx)(E,{attributes:z(e)})}function V({hasPostScope:e,...t}){return(0,H.jsx)(x,{...t,widgetType:le(L,k),renderModule:W,renderComponent:E,attributes:z({hasPostScope:e})})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),se(),_(),g(),v(),de(),A(),R(),H=r(),oe(),U=779,W=`storybook/post-comments`,G=`posts/${U}/replies`,K={title:`Packages/Premium Analytics/Widgets/PostComments`,component:E,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the post detail page's `post_id` report parameter."}},parameters:{docs:{description:{component:`The "Latest comments" widget: recent commenters on the scoped post, with an avatar, relative time, comment link, and "N more" footer.`}}}},q={render:B,args:{hasPostScope:!0},decorators:[b]},J={render:B,args:{hasPostScope:!1},decorators:[b]},Y={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[b],beforeEach:()=>(f(G,`loading`),()=>f(G,null))},X={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[b],beforeEach:()=>(f(G,`error`),()=>f(G,null))},Z={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[b],beforeEach:()=>(f(G,`empty`),()=>f(G,null))},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...y,widgetWidth:1,widgetHeight:2,hasPostScope:!0},argTypes:{...ue,hasPostScope:{control:`boolean`,description:"Include the post detail page's `post_id` report parameter."}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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