import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Dn as i,Gu as a,Nu as o,Vt as s,bc as c,fl as l,t as u}from"./build-module-zwSmKorH.js";import{U as d,b as ee,g as f}from"./hooks-Dk-uVJEm.js";import{M as p,t as m}from"./src-DFNM1k7F.js";import{Dn as te,en as h,i as g,yt as _}from"./date-filters-panel-OKa2RXV0.js";import{r as ne,t as re}from"./metric-tile-grid-skeleton-L-BotP8g.js";import{G as v,K as y,Y as b}from"./report-metric-Cc2D08jq.js";import{t as ie}from"./widget-state-j1BHeQS0.js";import{C as ae,D as oe,E as se,S as ce,T as le,b as x,t as S,w as ue,x as C}from"./src-C21YKTgv.js";var w,T,de=e((()=>{w=`_root_owpvf_1`,T={root:w}}));function E(e,t,n){let r=0;for(let i of e)i.date>=t&&i.date<=n&&(r+=i.views);return r}function fe(e,t){let{data:n,isLoading:r,isFetching:i,isError:o,refetch:s}=_({postId:e,fields:[`data`,`like_count`,`post`]});return{...(0,a.useMemo)(()=>{let e=n?.data??[],r=d(t.from),i=d(t.to),a=d(t.compare_from),o=d(t.compare_to),s=t.comp===`1`,c=r&&i?E(e,r,i):e.reduce((e,t)=>e+t.views,0),l;return s&&(l=a&&o?E(e,a,o):null),{views:c,viewsPrevious:l,comments:n?.post?.comment_count??0,likes:n?.like_count??0,hasComparison:s}},[n,t.comp,t.from,t.to,t.compare_from,t.compare_to]),isLoading:r,isFetching:i,isError:o,hasData:!!n,refetch:s}}var pe=e((()=>{g(),S(),o()}));function me(){let{reportParams:e}=ee(),n=te(e.post_id),{views:r,viewsPrevious:o,comments:l,likes:u,hasComparison:d,isLoading:f,isFetching:m,isError:h,hasData:g,refetch:_}=fe(n,e),v=(0,a.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),icon:i,value:r,previousValue:o,note:t(`Views in the selected date range.`,`jetpack-premium-analytics-pkg`)},{key:`likes`,label:t(`Likes`,`jetpack-premium-analytics-pkg`),icon:s,value:u,previousValue:d?null:void 0,note:A()},{key:`comments`,label:t(`Comments`,`jetpack-premium-analytics-pkg`),icon:c,value:l,previousValue:d?null:void 0,note:A()}],[r,o,l,u,d]);return(0,O.jsx)(`div`,{className:T.root,children:(0,O.jsx)(ie,{isLoading:f,isFetching:m,isError:!g&&h,isEmpty:n<=0,error:{description:t(`We couldn't load this post's highlights. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:_}]},empty:{icon:p,description:t(`Open a post or page report to see its highlights here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,O.jsx)(re,{tiles:v.length}),children:(0,O.jsx)(ne,{tiles:v,dataFormat:k})})})}function D({attributes:e={}}){return(0,O.jsx)(f,{attributes:e,children:(0,O.jsx)(me,{})})}var O,k,A,he=e((()=>{g(),m(),S(),o(),n(),u(),de(),pe(),O=r(),k={type:`number`,options:{useMultipliers:!0,decimals:0}},A=()=>t(`All-time total — this metric has no per-post history.`,`jetpack-premium-analytics-pkg`)})),j,ge=e((()=>{u(),j={icon:l,attributes:[],example:{attributes:{}}}})),M,N,P,F,I,L,R,_e=e((()=>{M=`jpa/post-detail-highlights`,N=`Post highlights`,P=`Views, comments, and likes for the post or page being viewed.`,F={content:`Views, comments, and likes for the post or page being viewed.`},I=`stats`,L=`framed`,R={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function z({withComparison:e,hasPostScope:t}){return{reportParams:{...h(e),...t?{post_id:H}:{}}}}function B(e){return(0,V.jsx)(D,{attributes:z(e)})}function ve({withComparison:e,hasPostScope:t,...n}){return(0,V.jsx)(le,{...n,widgetType:ce(R,j),renderModule:U,renderComponent:D,attributes:z({withComparison:e,hasPostScope:t})})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),v(),se(),ae(),x(),he(),ge(),_e(),V=r(),y(),H=779,U=`storybook/post-detail-highlights`,W=`stats/post/${H}`,G={title:`Packages/Premium Analytics/Widgets/PostDetailHighlights`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}},parameters:{docs:{description:{component:`The "Post highlights" widget: the scoped post's views, comments, and likes as metric tiles — the post detail Traffic view's highlights card. Views is period-scoped and carries a delta when comparison is on; comments and likes are lifetime totals with no per-post history, so their tiles show a note instead of a delta. Without a post scope the widget renders a scopeless empty state.`}}}},K={render:B,args:{withComparison:!1,hasPostScope:!0},decorators:[C]},q={render:B,args:{withComparison:!0,hasPostScope:!0},decorators:[C]},J={render:B,args:{withComparison:!1,hasPostScope:!1},decorators:[C]},Y={render:B,args:{withComparison:!1,hasPostScope:!0},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(b(W,`loading`),()=>b(W,null))},X={render:B,args:{withComparison:!1,hasPostScope:!0},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(b(W,`error`),()=>b(W,null))},Z={render:B,args:{withComparison:!1,hasPostScope:!0},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(b(W,`empty`),()=>b(W,null))},Q={render:e=>(0,V.jsx)(ve,{...e}),args:{...ue,widgetWidth:4,widgetHeight:1,withComparison:!0,hasPostScope:!0},argTypes:{...oe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
    widgetWidth: 4,
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