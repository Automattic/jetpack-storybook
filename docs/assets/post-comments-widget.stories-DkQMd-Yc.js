import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{h as ee,t as i}from"./build-module-DuNGIx6S.js";import{gc as a,t as o}from"./build-module-CR6EsQjA.js";import{b as te,g as s}from"./hooks-D7O-CUZK.js";import{M as ne,t as c}from"./src-CldFJNXL.js";import{G as re,t as l}from"./src-CNMphbKh.js";import{Zt as u,mt as ie,t as d,wn as ae}from"./src-DfeFVRmi.js";import{G as oe,K as f,Y as p}from"./report-metric-BX99IAwp.js";import{t as m}from"./widget-state-BbQ25gX8.js";import{r as h,t as g}from"./subscriber-list-skeleton-DBOPBzKb.js";import{C as se,D as ce,E as le,S as _,T as v,b as y,t as b,w as x,x as S}from"./src-CZRP4wgo.js";var C,w,T=e((()=>{C=`_root_6wdsv_2`,w={root:C}}));function ue(){let{reportParams:e}=te(),n=ae(e.post_id),{data:r,isLoading:i,isFetching:a,isError:o,refetch:s}=ie({postId:n,number:O}),c=(0,ee.useMemo)(()=>(r?.comments??[]).map(e=>({id:e.ID,name:e.name,avatarUrl:e.avatar_URL,href:e.URL,secondaryText:re(e.date)})),[r]),l=r?.found??0,u=n<=0||!!r&&c.length===0;return(0,D.jsx)(`div`,{className:w.root,children:(0,D.jsx)(m,{isLoading:i,isFetching:a,isError:!r&&o,isEmpty:u,renderLoading:(0,D.jsx)(g,{rows:O}),error:{description:t(`We couldn't load these comments. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:ne,description:t(n<=0?`Open a post or page report to see its comments here.`:`There are no comments yet.`,`jetpack-premium-analytics-pkg`)},children:(0,D.jsx)(h,{items:c,moreCount:Math.max(0,l-c.length)})})})}function E({attributes:e={}}){return(0,D.jsx)(s,{attributes:e,children:(0,D.jsx)(ue,{})})}var D,O,de=e((()=>{d(),l(),c(),b(),i(),n(),T(),D=r(),O=10})),k,A=e((()=>{o(),k={icon:a,attributes:[],example:{attributes:{}}}})),j,M,N,P,F,I,L,R=e((()=>{j=`jpa/post-comments`,M=`Latest comments`,N=`The latest comments on the post or page being viewed.`,P={content:`The latest comments on the post or page being viewed.`},F=`stats`,I=`framed`,L={name:j,title:M,description:N,help:P,category:F,presentation:I}}));function z({hasPostScope:e}){return{reportParams:{...u(!1),...e?{post_id:U}:{}}}}function B(e){return(0,H.jsx)(E,{attributes:z(e)})}function V({hasPostScope:e,...t}){return(0,H.jsx)(v,{...t,widgetType:_(L,k),renderModule:W,renderComponent:E,attributes:z({hasPostScope:e})})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),oe(),le(),se(),y(),de(),A(),R(),H=r(),f(),U=779,W=`storybook/post-comments`,G=`posts/${U}/replies`,K={title:`Packages/Premium Analytics/Widgets/PostComments`,component:E,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the post detail page's `post_id` report parameter."}},parameters:{docs:{description:{component:`The "Latest comments" widget: recent commenters on the scoped post, with an avatar, relative time, comment link, and "N more" footer.`}}}},q={render:B,args:{hasPostScope:!0},decorators:[S]},J={render:B,args:{hasPostScope:!1},decorators:[S]},Y={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(p(G,`loading`),()=>p(G,null))},X={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(p(G,`error`),()=>p(G,null))},Z={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(p(G,`empty`),()=>p(G,null))},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...x,widgetWidth:1,widgetHeight:2,hasPostScope:!0},argTypes:{...ce,hasPostScope:{control:`boolean`,description:"Include the post detail page's `post_id` report parameter."}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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