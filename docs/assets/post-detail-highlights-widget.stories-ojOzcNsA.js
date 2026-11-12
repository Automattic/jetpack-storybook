import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-BXs6jvWf.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{Lt as i,Qs as a,ou as o,t as s,vu as c,xn as l}from"./build-module-D8x1-0PG.js";import{B as u,I as d,It as f,gt as ee}from"./charts-provider-BmHzZhpi.js";import{Gt as p,Sn as m,bn as te,t as h}from"./src-BcILQ8ng.js";import{t as ne}from"./widget-state-DnbF8hrz.js";import{t as g}from"./src-CInHWJwC.js";import{n as _,r as v,s as y}from"./register-report-mocks-DEKgkFm4.js";import{r as re,t as b}from"./metric-tile-grid-skeleton-B-RJClt-.js";import{a as x,c as ie,i as S,l as ae,o as oe,r as se,s as ce,u as le}from"./with-widget-canvas-C4Pi56Ui.js";var C,w,ue=e((()=>{C=`_root_owpvf_1`,w={root:C}}));function T(e,t,n){let r=0;for(let i of e)i.date>=t&&i.date<=n&&(r+=i.views);return r}function de(e,t){let{data:n,isLoading:r,isFetching:i,isError:a,refetch:o}=p({postId:e,fields:[`data`,`like_count`,`post`]});return{...(0,c.useMemo)(()=>{let e=n?.data??[],r=f(t.from),i=f(t.to),a=f(t.compare_from),o=f(t.compare_to),s=t.comp===`1`,c=r&&i?T(e,r,i):e.reduce((e,t)=>e+t.views,0),l;return s&&(l=a&&o?T(e,a,o):null),{views:c,viewsPrevious:l,comments:n?.post?.comment_count??0,likes:n?.like_count??0,hasComparison:s}},[n,t.comp,t.from,t.to,t.compare_from,t.compare_to]),isLoading:r,isFetching:i,isError:a,hasData:!!n,refetch:o}}var fe=e((()=>{h(),g(),o()}));function E(){let{reportParams:e}=u(),n=te(e.post_id),{views:r,viewsPrevious:o,comments:s,likes:d,hasComparison:f,isLoading:p,isFetching:m,isError:h,hasData:g,refetch:_}=de(n,e),v=(0,c.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),icon:l,value:r,previousValue:o,note:t(`Views in the selected date range.`,`jetpack-premium-analytics-pkg`)},{key:`likes`,label:t(`Likes`,`jetpack-premium-analytics-pkg`),icon:i,value:d,previousValue:f?null:void 0,note:k()},{key:`comments`,label:t(`Comments`,`jetpack-premium-analytics-pkg`),icon:a,value:s,previousValue:f?null:void 0,note:k()}],[r,o,s,d,f]);return(0,O.jsx)(`div`,{className:w.root,children:(0,O.jsx)(ne,{isLoading:p,isFetching:m,isError:!g&&h,isEmpty:n<=0,error:{description:t(`We couldn't load this post's highlights. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:_}]},empty:{description:t(`Open a post or page report to see its highlights here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,O.jsx)(b,{tiles:v.length}),children:(0,O.jsx)(re,{tiles:v,dataFormat:ee})})})}function D({attributes:e={}}){return(0,O.jsx)(d,{attributes:e,children:(0,O.jsx)(E,{})})}var O,k,pe=e((()=>{h(),g(),o(),n(),s(),ue(),fe(),O=r(),k=()=>t(`All-time total — this metric has no per-post history.`,`jetpack-premium-analytics-pkg`)})),A,j,M,N,P,F,I,L,R=e((()=>{A=`jpa/post-detail-highlights`,j=`jpa/chart-bar`,M=`Post highlights`,N=`Views, comments, and likes for the post or page being viewed.`,P={content:`Views, comments, and likes for the post or page being viewed.`},F=`stats`,I=`framed`,L={name:A,icon:j,title:M,description:N,help:P,category:F,presentation:I}}));function z({withComparison:e,hasPostScope:t}){return{reportParams:{...m(e),...t?{post_id:H}:{}}}}function B(e){return(0,V.jsx)(D,{attributes:z(e)})}function me({withComparison:e,hasPostScope:t,...n}){return(0,V.jsx)(ie,{...n,widgetType:x(L),renderModule:U,renderComponent:D,attributes:z({withComparison:e,hasPostScope:t})})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),_(),ae(),oe(),se(),pe(),R(),V=r(),v(),H=779,U=`storybook/post-detail-highlights`,W=`stats/post/${H}`,G={title:`Packages/Premium Analytics/Widgets/PostDetailHighlights`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}},parameters:{docs:{description:{component:`The "Post highlights" widget: the scoped post's views, comments, and likes as metric tiles — the post detail Traffic view's highlights card. Views is period-scoped and carries a delta when comparison is on; comments and likes are lifetime totals with no per-post history, so their tiles show a note instead of a delta. Without a post scope the widget renders a scopeless empty state.`}}}},K={render:B,args:{withComparison:!1,hasPostScope:!0},decorators:[S]},q={render:B,args:{withComparison:!0,hasPostScope:!0},decorators:[S]},J={render:B,args:{withComparison:!1,hasPostScope:!1},decorators:[S]},Y={render:B,args:{withComparison:!1,hasPostScope:!0},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(y(W,`loading`),()=>y(W,null))},X={render:B,args:{withComparison:!1,hasPostScope:!0},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(y(W,`error`),()=>y(W,null))},Z={render:B,args:{withComparison:!1,hasPostScope:!0},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(y(W,`empty`),()=>y(W,null))},Q={tags:[`widget-dashboard`],render:e=>(0,V.jsx)(me,{...e}),args:{...ce,widgetWidth:3,widgetHeight:1,withComparison:!0,hasPostScope:!0},argTypes:{...le,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}}},$=[`Default`,`WithComparison`,`NoPostScope`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderPostDetailHighlights,
  args: {
    withComparison: false,
    hasPostScope: true
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`Default — the scoped post's highlights for the primary period only; the
Views tile shows no delta.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderPostDetailHighlights,
  args: {
    withComparison: true,
    hasPostScope: true
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`WithComparison — the previous-period comparison from the date range picker;
the Views tile carries a delta while comments and likes keep the comparison
layout without a fabricated delta.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderPostDetailHighlights,
  args: {
    withComparison: false,
    hasPostScope: false
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`NoPostScope — the widget without a \`post_id\` report param, as when added
outside a post detail page. Renders the scopeless empty state without
firing a stats request.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderPostDetailHighlights,
  args: {
    withComparison: false,
    hasPostScope: true
  },
  // Off the shared autodocs page — path-keyed override; see setReportMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(POST_STATS_REQUEST_PATH, 'loading');
    return () => setReportMockState(POST_STATS_REQUEST_PATH, null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`Loading — the first fetch is still in flight, so the tiles show their
skeleton. The mock is forced to never resolve for this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderPostDetailHighlights,
  args: {
    withComparison: false,
    hasPostScope: true
  },
  // Off the shared autodocs page — path-keyed override; see setReportMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(POST_STATS_REQUEST_PATH, 'error');
    return () => setReportMockState(POST_STATS_REQUEST_PATH, null);
  }
}`,...X.parameters?.docs?.source},description:{story:`Error — the fetch failed with a 403 and there is nothing cached to keep on
screen, so the widget shows its error copy with a Retry action.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderPostDetailHighlights,
  args: {
    withComparison: false,
    hasPostScope: true
  },
  // Off the shared autodocs page — path-keyed override; see setReportMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(POST_STATS_REQUEST_PATH, 'empty');
    return () => setReportMockState(POST_STATS_REQUEST_PATH, null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Empty — a scoped post with no recorded activity: every tile reads 0. The
widget's empty state covers only a missing post scope (see NoPostScope), so
this is what a data-free post actually looks like.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['widget-dashboard'],
  render: args => <PostDetailHighlightsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    widgetWidth: 3,
    widgetHeight: 1,
    withComparison: true,
    hasPostScope: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean',
      description: 'Include previous-period comparison report params.'
    },
    hasPostScope: {
      control: 'boolean',
      description: 'Include the \`post_id\` report param the post detail page seeds from its URL.'
    }
  }
}`,...Q.parameters?.docs?.source}}}}))();export{K as Default,Z as Empty,X as Error,Y as Loading,J as NoPostScope,Q as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,G as default};