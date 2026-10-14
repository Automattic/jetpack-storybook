import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-BXPCp--5.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Gu as i,Nu as a,Tn as o,Vt as s,t as c,vc as l}from"./build-module-Cm3Kd3py.js";import{cn as u,jt as d,t as f,un as p}from"./src-Coriej0V.js";import{m,st as h,v as ee}from"./charts-provider-Cx31X0zK.js";import{n as g,r as _,s as v}from"./register-report-mocks-BRxzgwOP.js";import{t as te}from"./widget-state-BEcWGQan.js";import{r as ne,t as y}from"./metric-tile-grid-skeleton-D7GrFATw.js";import{t as b}from"./src-DtqXi9T7.js";import{a as re,g as ie,h as ae,i as oe,m as x,n as se,p as ce,r as S}from"./with-widget-canvas-N6vYp7La.js";var C,w,le=e((()=>{C=`_root_owpvf_1`,w={root:C}}));function T(e,t,n){let r=0;for(let i of e)i.date>=t&&i.date<=n&&(r+=i.views);return r}function ue(e,t){let{data:n,isLoading:r,isFetching:a,isError:o,refetch:s}=d({postId:e,fields:[`data`,`like_count`,`post`]});return{...(0,i.useMemo)(()=>{let e=n?.data??[],r=h(t.from),i=h(t.to),a=h(t.compare_from),o=h(t.compare_to),s=t.comp===`1`,c=r&&i?T(e,r,i):e.reduce((e,t)=>e+t.views,0),l;return s&&(l=a&&o?T(e,a,o):null),{views:c,viewsPrevious:l,comments:n?.post?.comment_count??0,likes:n?.like_count??0,hasComparison:s}},[n,t.comp,t.from,t.to,t.compare_from,t.compare_to]),isLoading:r,isFetching:a,isError:o,hasData:!!n,refetch:s}}var de=e((()=>{f(),b(),a()}));function fe(){let{reportParams:e}=ee(),n=u(e.post_id),{views:r,viewsPrevious:a,comments:c,likes:d,hasComparison:f,isLoading:p,isFetching:m,isError:h,hasData:g,refetch:_}=ue(n,e),v=(0,i.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),icon:o,value:r,previousValue:a,note:t(`Views in the selected date range.`,`jetpack-premium-analytics-pkg`)},{key:`likes`,label:t(`Likes`,`jetpack-premium-analytics-pkg`),icon:s,value:d,previousValue:f?null:void 0,note:k()},{key:`comments`,label:t(`Comments`,`jetpack-premium-analytics-pkg`),icon:l,value:c,previousValue:f?null:void 0,note:k()}],[r,a,c,d,f]);return(0,D.jsx)(`div`,{className:w.root,children:(0,D.jsx)(te,{isLoading:p,isFetching:m,isError:!g&&h,isEmpty:n<=0,error:{description:t(`We couldn't load this post's highlights. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:_}]},empty:{description:t(`Open a post or page report to see its highlights here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,D.jsx)(y,{tiles:v.length}),children:(0,D.jsx)(ne,{tiles:v,dataFormat:O})})})}function E({attributes:e={}}){return(0,D.jsx)(m,{attributes:e,children:(0,D.jsx)(fe,{})})}var D,O,k,pe=e((()=>{f(),b(),a(),n(),c(),le(),de(),D=r(),O={type:`number`,options:{useMultipliers:!0,decimals:0}},k=()=>t(`All-time total — this metric has no per-post history.`,`jetpack-premium-analytics-pkg`)})),A,me=e((()=>{A={attributes:[],example:{attributes:{}}}})),j,M,N,P,F,I,L,R,he=e((()=>{j=`jpa/post-detail-highlights`,M=`jpa/chart-bar`,N=`Post highlights`,P=`Views, comments, and likes for the post or page being viewed.`,F={content:`Views, comments, and likes for the post or page being viewed.`},I=`stats`,L=`framed`,R={name:j,icon:M,title:N,description:P,help:F,category:I,presentation:L}}));function z({withComparison:e,hasPostScope:t}){return{reportParams:{...p(e),...t?{post_id:H}:{}}}}function B(e){return(0,V.jsx)(E,{attributes:z(e)})}function ge({withComparison:e,hasPostScope:t,...n}){return(0,V.jsx)(x,{...n,widgetType:oe(R,A),renderModule:U,renderComponent:E,attributes:z({withComparison:e,hasPostScope:t})})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),g(),ae(),re(),se(),pe(),me(),he(),V=r(),_(),H=779,U=`storybook/post-detail-highlights`,W=`stats/post/${H}`,G={title:`Packages/Premium Analytics/Widgets/PostDetailHighlights`,component:E,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}},parameters:{docs:{description:{component:`The "Post highlights" widget: the scoped post's views, comments, and likes as metric tiles — the post detail Traffic view's highlights card. Views is period-scoped and carries a delta when comparison is on; comments and likes are lifetime totals with no per-post history, so their tiles show a note instead of a delta. Without a post scope the widget renders a scopeless empty state.`}}}},K={render:B,args:{withComparison:!1,hasPostScope:!0},decorators:[S]},q={render:B,args:{withComparison:!0,hasPostScope:!0},decorators:[S]},J={render:B,args:{withComparison:!1,hasPostScope:!1},decorators:[S]},Y={render:B,args:{withComparison:!1,hasPostScope:!0},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(v(W,`loading`),()=>v(W,null))},X={render:B,args:{withComparison:!1,hasPostScope:!0},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(v(W,`error`),()=>v(W,null))},Z={render:B,args:{withComparison:!1,hasPostScope:!0},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(v(W,`empty`),()=>v(W,null))},Q={render:e=>(0,V.jsx)(ge,{...e}),args:{...ce,widgetWidth:3,widgetHeight:1,withComparison:!0,hasPostScope:!0},argTypes:{...ie,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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