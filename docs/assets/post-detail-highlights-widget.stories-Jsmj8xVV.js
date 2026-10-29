import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-DQe4AOzJ.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{Lt as i,Mu as a,bu as o,mc as s,t as c,xn as l}from"./build-module-BI3_PVVO.js";import{F as u,jt as d,z as ee}from"./charts-provider-DWkxm3u5.js";import{Bt as f,hn as p,pn as te,t as m}from"./src-DfQ3R5pV.js";import{t as ne}from"./widget-state-B-3KFlZy.js";import{i as h}from"./with-story-router-lCcAreTD.js";import{n as g,r as _,s as v}from"./register-report-mocks-xm2nLXrN.js";import{r as re,t as ie}from"./metric-tile-grid-skeleton-B0Kb4Hje.js";import{a as ae,g as y,h as oe,i as se,m as ce,n as le,p as ue,r as b}from"./with-widget-canvas-DXflARoK.js";var x,S,de=e((()=>{x=`_root_owpvf_1`,S={root:x}}));function C(e,t,n){let r=0;for(let i of e)i.date>=t&&i.date<=n&&(r+=i.views);return r}function w(e,t){let{data:n,isLoading:r,isFetching:i,isError:o,refetch:s}=f({postId:e,fields:[`data`,`like_count`,`post`]});return{...(0,a.useMemo)(()=>{let e=n?.data??[],r=d(t.from),i=d(t.to),a=d(t.compare_from),o=d(t.compare_to),s=t.comp===`1`,c=r&&i?C(e,r,i):e.reduce((e,t)=>e+t.views,0),l;return s&&(l=a&&o?C(e,a,o):null),{views:c,viewsPrevious:l,comments:n?.post?.comment_count??0,likes:n?.like_count??0,hasComparison:s}},[n,t.comp,t.from,t.to,t.compare_from,t.compare_to]),isLoading:r,isFetching:i,isError:o,hasData:!!n,refetch:s}}var fe=e((()=>{m(),h(),o()}));function pe(){let{reportParams:e}=ee(),n=te(e.post_id),{views:r,viewsPrevious:o,comments:c,likes:u,hasComparison:d,isLoading:f,isFetching:p,isError:m,hasData:h,refetch:g}=w(n,e),_=(0,a.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),icon:l,value:r,previousValue:o,note:t(`Views in the selected date range.`,`jetpack-premium-analytics-pkg`)},{key:`likes`,label:t(`Likes`,`jetpack-premium-analytics-pkg`),icon:i,value:u,previousValue:d?null:void 0,note:O()},{key:`comments`,label:t(`Comments`,`jetpack-premium-analytics-pkg`),icon:s,value:c,previousValue:d?null:void 0,note:O()}],[r,o,c,u,d]);return(0,E.jsx)(`div`,{className:S.root,children:(0,E.jsx)(ne,{isLoading:f,isFetching:p,isError:!h&&m,isEmpty:n<=0,error:{description:t(`We couldn't load this post's highlights. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:g}]},empty:{description:t(`Open a post or page report to see its highlights here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,E.jsx)(ie,{tiles:_.length}),children:(0,E.jsx)(re,{tiles:_,dataFormat:D})})})}function T({attributes:e={}}){return(0,E.jsx)(u,{attributes:e,children:(0,E.jsx)(pe,{})})}var E,D,O,k=e((()=>{m(),h(),o(),n(),c(),de(),fe(),E=r(),D={type:`number`,options:{useMultipliers:!0,decimals:0}},O=()=>t(`All-time total — this metric has no per-post history.`,`jetpack-premium-analytics-pkg`)})),A,j,M,N,P,F,I,L,R=e((()=>{A=`jpa/post-detail-highlights`,j=`jpa/chart-bar`,M=`Post highlights`,N=`Views, comments, and likes for the post or page being viewed.`,P={content:`Views, comments, and likes for the post or page being viewed.`},F=`stats`,I=`framed`,L={name:A,icon:j,title:M,description:N,help:P,category:F,presentation:I}}));function z({withComparison:e,hasPostScope:t}){return{reportParams:{...p(e),...t?{post_id:H}:{}}}}function B(e){return(0,V.jsx)(T,{attributes:z(e)})}function me({withComparison:e,hasPostScope:t,...n}){return(0,V.jsx)(ce,{...n,widgetType:se(L),renderModule:U,renderComponent:T,attributes:z({withComparison:e,hasPostScope:t})})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),g(),oe(),ae(),le(),k(),R(),V=r(),_(),H=779,U=`storybook/post-detail-highlights`,W=`stats/post/${H}`,G={title:`Packages/Premium Analytics/Widgets/PostDetailHighlights`,component:T,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}},parameters:{docs:{description:{component:`The "Post highlights" widget: the scoped post's views, comments, and likes as metric tiles — the post detail Traffic view's highlights card. Views is period-scoped and carries a delta when comparison is on; comments and likes are lifetime totals with no per-post history, so their tiles show a note instead of a delta. Without a post scope the widget renders a scopeless empty state.`}}}},K={render:B,args:{withComparison:!1,hasPostScope:!0},decorators:[b]},q={render:B,args:{withComparison:!0,hasPostScope:!0},decorators:[b]},J={render:B,args:{withComparison:!1,hasPostScope:!1},decorators:[b]},Y={render:B,args:{withComparison:!1,hasPostScope:!0},tags:[`!autodocs`],decorators:[b],beforeEach:()=>(v(W,`loading`),()=>v(W,null))},X={render:B,args:{withComparison:!1,hasPostScope:!0},tags:[`!autodocs`],decorators:[b],beforeEach:()=>(v(W,`error`),()=>v(W,null))},Z={render:B,args:{withComparison:!1,hasPostScope:!0},tags:[`!autodocs`],decorators:[b],beforeEach:()=>(v(W,`empty`),()=>v(W,null))},Q={render:e=>(0,V.jsx)(me,{...e}),args:{...ue,widgetWidth:3,widgetHeight:1,withComparison:!0,hasPostScope:!0},argTypes:{...y,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}}},$=[`Default`,`WithComparison`,`NoPostScope`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}}}))();export{K as Default,Z as Empty,X as Error,Y as Loading,J as NoPostScope,Q as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,G as default};