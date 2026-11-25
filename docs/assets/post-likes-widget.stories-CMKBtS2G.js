import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-BXs6jvWf.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{j as i,t as a}from"./build-module-Dxhc9xxH.js";import{t as o,z as s}from"./src-CUJg-cBz.js";import{Cn as c,Tn as l,Ut as ee,t as u}from"./src-kLKkyRUy.js";import{H as te,I as d}from"./charts-provider-Bk_WeVSh.js";import{t as ne}from"./widget-state-BDhu7m0a.js";import{i as f}from"./with-story-router-DG5K3c91.js";import{n as p,r as m,s as h}from"./register-report-mocks-BvgO505f.js";import{r as g,t as _}from"./subscriber-list-skeleton-CFE-1DO-.js";import{a as re,c as ie,i as v,l as ae,o as oe,r as y,s as b,u as x}from"./with-widget-canvas-wY4pBWZv.js";var S,C,w=e((()=>{S=`_root_6wdsv_2`,C={root:S}}));function T(){let{reportParams:e}=te(),n=c(e.post_id),{data:r,isLoading:a,isFetching:o,isError:l,refetch:u}=ee({postId:n,number:O}),d=(0,i.useMemo)(()=>(r?.likes??[]).map(e=>({id:e.ID,name:e.name||e.login,avatarUrl:e.avatar_URL,href:e.login?`https://wordpress.com/reader/users/${e.login}`:void 0,secondaryText:s(e.date_liked)})),[r]),f=r?.found??0,p=n<=0||!!r&&d.length===0;return(0,D.jsx)(`div`,{className:C.root,children:(0,D.jsx)(ne,{isLoading:a,isFetching:o,isError:!r&&l,isEmpty:p,renderLoading:(0,D.jsx)(_,{rows:O}),error:{description:t(`We couldn't load these likes. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{description:t(n<=0?`Open a post or page report to see its likes here.`:`There are no likes yet.`,`jetpack-premium-analytics-pkg`)},children:(0,D.jsx)(g,{items:d,moreCount:Math.max(0,f-d.length)})})})}function E({attributes:e={}}){return(0,D.jsx)(d,{attributes:e,children:(0,D.jsx)(T,{})})}var D,O,k=e((()=>{u(),o(),f(),a(),n(),w(),D=r(),O=10})),A,j,M,N,P,F,I,L,R=e((()=>{A=`jpa/post-likes`,j=`jpa/star-empty`,M=`Latest likes`,N=`The people who liked the post or page being viewed.`,P={content:`The people who liked the post or page being viewed.`},F=`stats`,I=`framed`,L={name:A,icon:j,title:M,description:N,help:P,category:F,presentation:I}}));function z({hasPostScope:e}){return{reportParams:{...l(!1),...e?{post_id:U}:{}}}}function B(e){return(0,H.jsx)(E,{attributes:z(e)})}function V({hasPostScope:e,...t}){return(0,H.jsx)(ie,{...t,widgetType:re(L),renderModule:W,renderComponent:E,attributes:z({hasPostScope:e})})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),p(),ae(),oe(),y(),k(),R(),H=r(),m(),U=779,W=`storybook/post-likes`,G=`posts/${U}/likes`,K={title:`Packages/Premium Analytics/Widgets/PostLikes`,component:E,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}},parameters:{docs:{description:{component:`The "Latest likes" widget: the scoped post's likers as an avatar roster with an "N more" footer — the post detail Traffic view's likes card. Each row carries the like's relative time. Without a post scope the widget renders a scopeless empty state.`}}}},q={render:B,args:{hasPostScope:!0},decorators:[v]},J={render:B,args:{hasPostScope:!1},decorators:[v]},Y={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[v],beforeEach:()=>(h(G,`loading`),()=>h(G,null))},X={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[v],beforeEach:()=>(h(G,`error`),()=>h(G,null))},Z={render:B,args:{hasPostScope:!0},tags:[`!autodocs`],decorators:[v],beforeEach:()=>(h(G,`empty`),()=>h(G,null))},Q={tags:[`widget-dashboard`],render:e=>(0,H.jsx)(V,{...e}),args:{...b,widgetWidth:1,widgetHeight:2,hasPostScope:!0},argTypes:{...x,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}}},$=[`Default`,`NoPostScope`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
  tags: ['widget-dashboard'],
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
scrolling inside the widget frame's content viewport.`,...Q.parameters?.docs?.description}}}}))();export{q as Default,Z as Empty,X as Error,Y as Loading,J as NoPostScope,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};