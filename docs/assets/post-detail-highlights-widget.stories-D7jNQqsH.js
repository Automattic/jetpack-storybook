import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Tn as i,Uu as a,Vt as o,ju as s,t as c,ul as l,vc as ee}from"./build-module-2iv4IIRq.js";import{Ct as u,m as d,v as f}from"./hooks-C6OkIAXq.js";import{M as te,t as p}from"./src-C-E2d-Lb.js";import{Nn as ne,bt as m,r as h,tn as g}from"./date-period-dropdown-C_NQedKn.js";import{r as re,t as ie}from"./metric-tile-grid-skeleton-Cb-cPgvE.js";import{c as _,i as ae,r as oe}from"./register-report-mocks-eTbhiWCl.js";import{t as se}from"./widget-state-CBXQsQGF.js";import{t as v}from"./src-BL9UUyJm.js";import{a as ce,c as le,i as ue,l as y,n as de,o as fe,r as b,s as pe}from"./with-widget-canvas-DzgOz1Yd.js";var x,S,C=e((()=>{x=`_root_owpvf_1`,S={root:x}}));function w(e,t,n){let r=0;for(let i of e)i.date>=t&&i.date<=n&&(r+=i.views);return r}function T(e,t){let{data:n,isLoading:r,isFetching:i,isError:o,refetch:s}=m({postId:e,fields:[`data`,`like_count`,`post`]});return{...(0,a.useMemo)(()=>{let e=n?.data??[],r=u(t.from),i=u(t.to),a=u(t.compare_from),o=u(t.compare_to),s=t.comp===`1`,c=r&&i?w(e,r,i):e.reduce((e,t)=>e+t.views,0),l;return s&&(l=a&&o?w(e,a,o):null),{views:c,viewsPrevious:l,comments:n?.post?.comment_count??0,likes:n?.like_count??0,hasComparison:s}},[n,t.comp,t.from,t.to,t.compare_from,t.compare_to]),isLoading:r,isFetching:i,isError:o,hasData:!!n,refetch:s}}var E=e((()=>{h(),v(),s()}));function me(){let{reportParams:e}=f(),n=ne(e.post_id),{views:r,viewsPrevious:s,comments:c,likes:l,hasComparison:u,isLoading:d,isFetching:p,isError:m,hasData:h,refetch:g}=T(n,e),_=(0,a.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),icon:i,value:r,previousValue:s,note:t(`Views in the selected date range.`,`jetpack-premium-analytics-pkg`)},{key:`likes`,label:t(`Likes`,`jetpack-premium-analytics-pkg`),icon:o,value:l,previousValue:u?null:void 0,note:A()},{key:`comments`,label:t(`Comments`,`jetpack-premium-analytics-pkg`),icon:ee,value:c,previousValue:u?null:void 0,note:A()}],[r,s,c,l,u]);return(0,O.jsx)(`div`,{className:S.root,children:(0,O.jsx)(se,{isLoading:d,isFetching:p,isError:!h&&m,isEmpty:n<=0,error:{description:t(`We couldn't load this post's highlights. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:g}]},empty:{icon:te,description:t(`Open a post or page report to see its highlights here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,O.jsx)(ie,{tiles:_.length}),children:(0,O.jsx)(re,{tiles:_,dataFormat:k})})})}function D({attributes:e={}}){return(0,O.jsx)(d,{attributes:e,children:(0,O.jsx)(me,{})})}var O,k,A,he=e((()=>{h(),p(),v(),s(),n(),c(),C(),E(),O=r(),k={type:`number`,options:{useMultipliers:!0,decimals:0}},A=()=>t(`All-time total — this metric has no per-post history.`,`jetpack-premium-analytics-pkg`)})),j,ge=e((()=>{c(),j={icon:l,attributes:[],example:{attributes:{}}}})),M,N,P,F,I,L,R,_e=e((()=>{M=`jpa/post-detail-highlights`,N=`Post highlights`,P=`Views, comments, and likes for the post or page being viewed.`,F={content:`Views, comments, and likes for the post or page being viewed.`},I=`stats`,L=`framed`,R={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function z({withComparison:e,hasPostScope:t}){return{reportParams:{...g(e),...t?{post_id:H}:{}}}}function B(e){return(0,V.jsx)(D,{attributes:z(e)})}function ve({withComparison:e,hasPostScope:t,...n}){return(0,V.jsx)(pe,{...n,widgetType:ue(R,j),renderModule:U,renderComponent:D,attributes:z({withComparison:e,hasPostScope:t})})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),oe(),le(),ce(),de(),he(),ge(),_e(),V=r(),ae(),H=779,U=`storybook/post-detail-highlights`,W=`stats/post/${H}`,G={title:`Packages/Premium Analytics/Widgets/PostDetailHighlights`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}},parameters:{docs:{description:{component:`The "Post highlights" widget: the scoped post's views, comments, and likes as metric tiles — the post detail Traffic view's highlights card. Views is period-scoped and carries a delta when comparison is on; comments and likes are lifetime totals with no per-post history, so their tiles show a note instead of a delta. Without a post scope the widget renders a scopeless empty state.`}}}},K={render:B,args:{withComparison:!1,hasPostScope:!0},decorators:[b]},q={render:B,args:{withComparison:!0,hasPostScope:!0},decorators:[b]},J={render:B,args:{withComparison:!1,hasPostScope:!1},decorators:[b]},Y={render:B,args:{withComparison:!1,hasPostScope:!0},tags:[`!autodocs`],decorators:[b],beforeEach:()=>(_(W,`loading`),()=>_(W,null))},X={render:B,args:{withComparison:!1,hasPostScope:!0},tags:[`!autodocs`],decorators:[b],beforeEach:()=>(_(W,`error`),()=>_(W,null))},Z={render:B,args:{withComparison:!1,hasPostScope:!0},tags:[`!autodocs`],decorators:[b],beforeEach:()=>(_(W,`empty`),()=>_(W,null))},Q={render:e=>(0,V.jsx)(ve,{...e}),args:{...fe,widgetWidth:3,widgetHeight:1,withComparison:!0,hasPostScope:!0},argTypes:{...y,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`NoPostScope`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as Default,Z as Empty,X as Error,Y as Loading,J as NoPostScope,Q as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,G as default};