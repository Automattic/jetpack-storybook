import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,y as a}from"./build-module-BTtYwVLI.js";import{Sl as o,Tn as s,Uu as c,ju as l,t as u}from"./build-module-2iv4IIRq.js";import{C as d,Ot as ee,Sn as te,T as f,ft as p,nt as ne,t as m,yn as re}from"./date-fns-I6jayRk5.js";import{m as h,v as ie}from"./hooks-C6uC8D6p.js";import{a as g,o as _}from"./heatmap-chart-ByDrpkhs.js";import{M as v,t as y}from"./src-C-E2d-Lb.js";import{Fn as ae,nn as oe,t as b,vt as se}from"./src-C9rlvqIx.js";import{L as x,O as S,S as ce}from"./helpers-C3PYD0ul.js";import{n as le}from"./use-element-size-hh3Y94Cm.js";import{a as ue}from"./metric-sparkline-skeleton-C_t2wNmA.js";import{i as de,n as fe}from"./calendar-heatmap-DfOuZB-t.js";import{c as C,i as pe,r as me}from"./register-report-mocks-jOVWgqW2.js";import{t as he}from"./widget-state-DFM0RGEq.js";import{t as w}from"./src-BYRMloPq.js";import{a as ge,d as _e,f as ve,i as ye,n as be,p as xe,r as T,u as Se}from"./with-widget-canvas-Co9pnelY.js";import{n as Ce,r as we,t as Te}from"./with-site-locale-CuVqF-ng.js";var E,D,O,k,A,j,M,Ee=e((()=>{E=`_root_1k3qu_3`,D=`_body_1k3qu_12`,O=`_content_1k3qu_3`,k=`_chartArea_1k3qu_29`,A=`_chartHost_1k3qu_43`,j=`_heatmap_1k3qu_50`,M={root:E,body:D,content:O,chartArea:k,chartHost:A,heatmap:j}}));function De(e,t,n){let{data:r,isLoading:i,isFetching:a,isError:o,refetch:s}=se({postId:e,fields:[`data`]}),[l,u]=(0,c.useState)(0);(0,c.useEffect)(()=>{u(0)},[t.from,t.to,n]);let m=x(t.from),h=x(t.to),{days:ie,isPaged:g,canShowOlder:_}=(0,c.useMemo)(()=>{if(!m||!h||m>h)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=re(d(m),{weekStartsOn:1}),a=p(d(h),{weekStartsOn:1}),o=i<f(a,n-1),s=f(a,l*n),c=f(s,n-1);if(o&&c<i){c=i;let e=te(i,n-1);s=e<a?e:a}let u=d(h);return{days:ee({start:c,end:u<s?u:s}).map(e=>{let n=ne(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=m&&n<=h?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,m,h,l,n]),v=(0,c.useCallback)(()=>{u(e=>_?e+1:e)},[_]),y=(0,c.useCallback)(()=>{u(e=>Math.max(0,e-1))},[]);return{days:ie,isPaged:g,canShowOlder:_,canShowNewer:l>0,showOlder:v,showNewer:y,isLoading:i,isFetching:a,isError:o,hasData:!!r,refetch:s}}var Oe=e((()=>{b(),l(),m(),w()}));function ke(e){return e?S({availWidth:e,cellWidth:F,cellGap:4,minColumns:I}):L}function Ae(e){return e?Math.max(z,Math.min(R,Math.floor((e-B)/7))):R}function je(){let{reportParams:e}=ie(),n=ae(e.post_id),[r,i]=(0,c.useState)(),o=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);i(t=>t===e?t:e)}}),{days:l,isPaged:u,canShowOlder:d,canShowNewer:ee,showOlder:te,showNewer:f,isLoading:p,isFetching:ne,isError:m,refetch:re}=De(n,e,ke(r)*7),[h,y]=le(),oe=Ae(y.height),{data:b,rowLabels:se}=g(l),S=x(e.from),C=x(e.to),pe=(0,c.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=l[i*7+r];return(0,P.jsx)(fe,{value:e,cellLabel:n,emptyLabel:a&&S&&C&&a.dateString>=S&&a.dateString<=C?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:ce,icon:s})},[l,S,C]);return(0,P.jsx)(`div`,{ref:o,className:M.root,children:(0,P.jsx)(`div`,{className:M.body,children:(0,P.jsx)(he,{isLoading:p,isFetching:ne,isError:m,isEmpty:n<=0||b.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:re}]},empty:{icon:v,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,P.jsx)(ue,{}),children:(0,P.jsx)(`div`,{className:M.content,children:(0,P.jsx)(`div`,{ref:h,className:M.chartArea,children:(0,P.jsx)(de,{pager:u?{canShowOlder:d,canShowNewer:ee,showOlder:te,showNewer:f}:void 0,className:M.chartHost,children:(0,P.jsx)(_,{data:b,rowLabels:se,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,tooltipVariant:`dark`,maxCellWidth:64,maxCellHeight:oe,renderTooltip:pe,className:M.heatmap})})})})})})})}function N({attributes:e={}}){return(0,P.jsx)(h,{attributes:e,children:(0,P.jsx)(je,{})})}var P,F,I,L,R,z,B,Me=e((()=>{b(),y(),w(),i(),l(),n(),u(),Ee(),Oe(),P=r(),F=64,I=4,L=16,R=42,z=8,B=44})),Ne,Pe=e((()=>{u(),Ne={icon:o,attributes:[],example:{attributes:{}}}})),Fe,Ie,Le,Re,ze,Be,Ve,He=e((()=>{Fe=`jpa/post-traffic-activity`,Ie=`Traffic activity`,Le=`Daily views for the post or page being viewed, as a calendar heatmap.`,Re={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},ze=`stats`,Be=`framed`,Ve={name:Fe,title:Ie,description:Le,help:Re,category:ze,presentation:Be}}));function Ue({hasPostScope:e,preset:t},n=!1){return{reportParams:{...oe(n,t),...e?{post_id:U}:{}}}}function V(e){return(0,H.jsx)(N,{attributes:Ue(e)})}function We({hasPostScope:e,preset:t,...n}){return(0,H.jsx)(_e,{...n,widgetType:ye(Ve,Ne),renderModule:Ge,renderComponent:N,attributes:Ue({hasPostScope:e,preset:t},!0)})}var H,U,Ge,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{b(),me(),ve(),ge(),Te(),be(),Me(),Pe(),He(),H=r(),pe(),U=779,Ge=`storybook/post-traffic-activity`,W=`stats/post/${U}`,G={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:N,tags:[`autodocs`],decorators:[we],argTypes:{...Ce,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},K={render:V,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[T]},q={render:V,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[T]},J={render:V,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[T]},Y={render:V,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[T],beforeEach:()=>(C(W,`loading`),()=>C(W,null))},X={render:V,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[T],beforeEach:()=>(C(W,`error`),()=>C(W,null))},Z={render:V,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[T],beforeEach:()=>(C(W,`empty`),()=>C(W,null))},Q={render:e=>(0,H.jsx)(We,{...e}),args:{...Se,widgetWidth:3,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...xe,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderPostTrafficActivity,
  args: {
    hasPostScope: true,
    preset: 'last-30-days'
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`Default — the scoped post's daily view heatmap for the dashboard range.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderPostTrafficActivity,
  args: {
    hasPostScope: true,
    preset: 'last-365-days'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Paged — a deterministic year-long range that always exceeds one page at
the default story width, exposing both pager controls for direct review.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderPostTrafficActivity,
  args: {
    hasPostScope: false,
    preset: 'last-30-days'
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`NoPostScope — the widget without a \`post_id\` report param, as when added
outside a post detail page. Renders the scopeless empty state without
firing a stats request.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderPostTrafficActivity,
  args: {
    hasPostScope: true,
    preset: 'last-30-days'
  },
  // Off the shared autodocs page — path-keyed override; see setReportMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(POST_STATS_REQUEST_PATH, 'loading');
    return () => setReportMockState(POST_STATS_REQUEST_PATH, null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`Loading — the first fetch is still in flight, so the widget shows its
heatmap skeleton. The mock is forced to never resolve for this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderPostTrafficActivity,
  args: {
    hasPostScope: true,
    preset: 'last-30-days'
  },
  // Off the shared autodocs page — path-keyed override; see setReportMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(POST_STATS_REQUEST_PATH, 'error');
    return () => setReportMockState(POST_STATS_REQUEST_PATH, null);
  }
}`,...X.parameters?.docs?.source},description:{story:`Error — the fetch failed with a 403: the widget shows its error copy and a
Retry action, which re-runs the query (still mocked as failing here).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderPostTrafficActivity,
  args: {
    hasPostScope: true,
    preset: 'last-30-days'
  },
  // Off the shared autodocs page — path-keyed override; see setReportMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(POST_STATS_REQUEST_PATH, 'empty');
    return () => setReportMockState(POST_STATS_REQUEST_PATH, null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Empty — a scoped post with no views in the range: the grid stays complete
and every cell is blank, per the sparse design. The widget's empty state
covers only a missing post scope (see NoPostScope), so this is what a
traffic-free post actually looks like.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <PostTrafficActivityDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    widgetWidth: 3,
    widgetHeight: 2,
    hasPostScope: true,
    preset: 'last-30-days'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    hasPostScope: {
      control: 'boolean',
      description: 'Include the \`post_id\` report param the post detail page seeds from its URL.'
    },
    preset: {
      control: 'select',
      options: ['last-30-days', 'last-365-days'],
      description: 'Dashboard date range used to exercise single-page and paged layouts.'
    }
  }
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}},$=[`Default`,`Paged`,`NoPostScope`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as Default,Z as Empty,X as Error,Y as Loading,J as NoPostScope,q as Paged,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,G as default};