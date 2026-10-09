import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Gu as i,Nu as a,Tn as o,Vt as s,t as c,vc as l}from"./build-module-Cm3Kd3py.js";import{P as ee}from"./library-DTloIBum.js";import{t as u}from"./src-fQR6rGKL.js";import{En as d,Nt as f,On as p,t as m}from"./src-eFflVWkb.js";import{_ as h,ct as g,x as te}from"./charts-provider-CG5jlyMR.js";import{n as _,r as v,s as y}from"./register-report-mocks-CaddGZDb.js";import{t as ne}from"./widget-state-Dy1Xd117.js";import{r as re,t as ie}from"./metric-tile-grid-skeleton-C6Ov72po.js";import{t as b}from"./src-B1RxCXze.js";import{a as ae,g as oe,h as x,i as se,m as ce,n as le,p as ue,r as S}from"./with-widget-canvas-fJNR6VE0.js";var C,w,de=e((()=>{C=`_root_owpvf_1`,w={root:C}}));function T(e,t,n){let r=0;for(let i of e)i.date>=t&&i.date<=n&&(r+=i.views);return r}function fe(e,t){let{data:n,isLoading:r,isFetching:a,isError:o,refetch:s}=f({postId:e,fields:[`data`,`like_count`,`post`]});return{...(0,i.useMemo)(()=>{let e=n?.data??[],r=g(t.from),i=g(t.to),a=g(t.compare_from),o=g(t.compare_to),s=t.comp===`1`,c=r&&i?T(e,r,i):e.reduce((e,t)=>e+t.views,0),l;return s&&(l=a&&o?T(e,a,o):null),{views:c,viewsPrevious:l,comments:n?.post?.comment_count??0,likes:n?.like_count??0,hasComparison:s}},[n,t.comp,t.from,t.to,t.compare_from,t.compare_to]),isLoading:r,isFetching:a,isError:o,hasData:!!n,refetch:s}}var pe=e((()=>{m(),b(),a()}));function me(){let{reportParams:e}=te(),n=d(e.post_id),{views:r,viewsPrevious:a,comments:c,likes:u,hasComparison:f,isLoading:p,isFetching:m,isError:h,hasData:g,refetch:_}=fe(n,e),v=(0,i.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),icon:o,value:r,previousValue:a,note:t(`Views in the selected date range.`,`jetpack-premium-analytics-pkg`)},{key:`likes`,label:t(`Likes`,`jetpack-premium-analytics-pkg`),icon:s,value:u,previousValue:f?null:void 0,note:k()},{key:`comments`,label:t(`Comments`,`jetpack-premium-analytics-pkg`),icon:l,value:c,previousValue:f?null:void 0,note:k()}],[r,a,c,u,f]);return(0,D.jsx)(`div`,{className:w.root,children:(0,D.jsx)(ne,{isLoading:p,isFetching:m,isError:!g&&h,isEmpty:n<=0,error:{description:t(`We couldn't load this post's highlights. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:_}]},empty:{icon:ee,description:t(`Open a post or page report to see its highlights here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,D.jsx)(ie,{tiles:v.length}),children:(0,D.jsx)(re,{tiles:v,dataFormat:O})})})}function E({attributes:e={}}){return(0,D.jsx)(h,{attributes:e,children:(0,D.jsx)(me,{})})}var D,O,k,he=e((()=>{m(),u(),b(),a(),n(),c(),de(),pe(),D=r(),O={type:`number`,options:{useMultipliers:!0,decimals:0}},k=()=>t(`All-time total — this metric has no per-post history.`,`jetpack-premium-analytics-pkg`)})),A,ge=e((()=>{A={attributes:[],example:{attributes:{}}}})),j,M,N,P,F,I,L,R,_e=e((()=>{j=`jpa/post-detail-highlights`,M=`jpa/chart-bar`,N=`Post highlights`,P=`Views, comments, and likes for the post or page being viewed.`,F={content:`Views, comments, and likes for the post or page being viewed.`},I=`stats`,L=`framed`,R={name:j,icon:M,title:N,description:P,help:F,category:I,presentation:L}}));function z({withComparison:e,hasPostScope:t}){return{reportParams:{...p(e),...t?{post_id:H}:{}}}}function B(e){return(0,V.jsx)(E,{attributes:z(e)})}function ve({withComparison:e,hasPostScope:t,...n}){return(0,V.jsx)(ce,{...n,widgetType:se(R,A),renderModule:U,renderComponent:E,attributes:z({withComparison:e,hasPostScope:t})})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),_(),x(),ae(),le(),he(),ge(),_e(),V=r(),v(),H=779,U=`storybook/post-detail-highlights`,W=`stats/post/${H}`,G={title:`Packages/Premium Analytics/Widgets/PostDetailHighlights`,component:E,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}},parameters:{docs:{description:{component:`The "Post highlights" widget: the scoped post's views, comments, and likes as metric tiles — the post detail Traffic view's highlights card. Views is period-scoped and carries a delta when comparison is on; comments and likes are lifetime totals with no per-post history, so their tiles show a note instead of a delta. Without a post scope the widget renders a scopeless empty state.`}}}},K={render:B,args:{withComparison:!1,hasPostScope:!0},decorators:[S]},q={render:B,args:{withComparison:!0,hasPostScope:!0},decorators:[S]},J={render:B,args:{withComparison:!1,hasPostScope:!1},decorators:[S]},Y={render:B,args:{withComparison:!1,hasPostScope:!0},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(y(W,`loading`),()=>y(W,null))},X={render:B,args:{withComparison:!1,hasPostScope:!0},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(y(W,`error`),()=>y(W,null))},Z={render:B,args:{withComparison:!1,hasPostScope:!0},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(y(W,`empty`),()=>y(W,null))},Q={render:e=>(0,V.jsx)(ve,{...e}),args:{...ue,widgetWidth:3,widgetHeight:1,withComparison:!0,hasPostScope:!0},argTypes:{...oe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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