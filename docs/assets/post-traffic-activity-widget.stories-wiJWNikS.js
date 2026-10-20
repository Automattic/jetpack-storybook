import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-BXPCp--5.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,y as a}from"./build-module-D50o9sls.js";import{Gu as o,Nu as s,Tn as c,t as l}from"./build-module-CDZL_1rk.js";import{Pt as u,Sn as ee,W as te,in as ne,qt as d,t as f,x as p,y as m}from"./date-fns-CHwAqcMr.js";import{a as h,o as g}from"./heatmap-chart-BU_NaTBT.js";import{Rt as re,dn as ie,pn as _,t as v}from"./src-B6LqpDSL.js";import{M as ae,Y as oe,dt as y,m as se,ot as b,v as ce}from"./charts-provider-CJqdldYb.js";import{n as le}from"./use-element-size-CHDS-1my.js";import{a as ue}from"./metric-sparkline-skeleton-CPlrHN9E.js";import{n as x,r as S,s as C}from"./register-report-mocks-FY7ItI5N.js";import{t as de}from"./widget-state-Dp1CIogZ.js";import{i as fe,n as pe}from"./calendar-heatmap-Bwumnyep.js";import{t as w}from"./src-DJCrYDNr.js";import{a as me,g as he,h as ge,i as _e,m as ve,n as ye,p as be,r as T}from"./with-widget-canvas-ZnD-REnd.js";import{n as xe,r as Se,t as Ce}from"./with-site-locale-DInVfcqF.js";var E,D,O,k,A,j,M,we=e((()=>{E=`_root_1k3qu_3`,D=`_body_1k3qu_12`,O=`_content_1k3qu_3`,k=`_chartArea_1k3qu_29`,A=`_chartHost_1k3qu_43`,j=`_heatmap_1k3qu_50`,M={root:E,body:D,content:O,chartArea:k,chartHost:A,heatmap:j}}));function Te(e,t,n){let{data:r,isLoading:i,isFetching:a,isError:s,refetch:c}=re({postId:e,fields:[`data`]}),[l,f]=(0,o.useState)(0);(0,o.useEffect)(()=>{f(0)},[t.from,t.to,n]);let h=y(t.from),g=y(t.to),{days:ie,isPaged:_,canShowOlder:v}=(0,o.useMemo)(()=>{if(!h||!g||h>g)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=d(m(h),{weekStartsOn:1}),a=ne(m(g),{weekStartsOn:1}),o=i<p(a,n-1),s=p(a,l*n),c=p(s,n-1);if(o&&c<i){c=i;let e=ee(i,n-1);s=e<a?e:a}let f=m(g);return{days:te({start:c,end:f<s?f:s}).map(e=>{let n=u(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=h&&n<=g?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,h,g,l,n]),ae=(0,o.useCallback)(()=>{f(e=>v?e+1:e)},[v]),oe=(0,o.useCallback)(()=>{f(e=>Math.max(0,e-1))},[]);return{days:ie,isPaged:_,canShowOlder:v,canShowNewer:l>0,showOlder:ae,showNewer:oe,isLoading:i,isFetching:a,isError:s,hasData:!!r,refetch:c}}var Ee=e((()=>{v(),s(),f(),w()}));function De(e){return e?b({availWidth:e,cellWidth:F,cellGap:4,minColumns:I}):L}function Oe(e){return e?Math.max(z,Math.min(R,Math.floor((e-B)/7))):R}function ke(){let{reportParams:e}=ce(),n=ie(e.post_id),[r,i]=(0,o.useState)(),s=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);i(t=>t===e?t:e)}}),{days:l,isPaged:u,canShowOlder:ee,canShowNewer:te,showOlder:ne,showNewer:d,isLoading:f,isFetching:p,isError:m,refetch:re}=Te(n,e,De(r)*7),[_,v]=le(),se=Oe(v.height),{data:b,rowLabels:x}=h(l),S=y(e.from),C=y(e.to),w=(0,o.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=l[i*7+r];return(0,P.jsx)(pe,{value:e,cellLabel:n,emptyLabel:a&&S&&C&&a.dateString>=S&&a.dateString<=C?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:oe,icon:c})},[l,S,C]);return(0,P.jsx)(`div`,{ref:s,className:M.root,children:(0,P.jsx)(`div`,{className:M.body,children:(0,P.jsx)(de,{isLoading:f,isFetching:p,isError:m,isEmpty:n<=0||b.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:re}]},empty:{description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,P.jsx)(ue,{}),children:(0,P.jsx)(`div`,{className:M.content,children:(0,P.jsx)(`div`,{ref:_,className:M.chartArea,children:(0,P.jsx)(fe,{pager:u?{canShowOlder:ee,canShowNewer:te,showOlder:ne,showNewer:d}:void 0,className:M.chartHost,children:(0,P.jsx)(g,{data:b,rowLabels:x,ariaLabel:ae(t(`Traffic activity`,`jetpack-premium-analytics-pkg`)),primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:se,renderTooltip:w,className:M.heatmap})})})})})})})}function N({attributes:e={}}){return(0,P.jsx)(se,{attributes:e,children:(0,P.jsx)(ke,{})})}var P,F,I,L,R,z,B,Ae=e((()=>{v(),w(),i(),s(),n(),l(),we(),Ee(),P=r(),F=64,I=4,L=16,R=42,z=8,B=44})),V,H,je,Me,Ne,Pe,Fe,Ie,Le=e((()=>{V=`jpa/post-traffic-activity`,H=`jpa/calendar`,je=`Traffic activity`,Me=`Daily views for the post or page being viewed, as a calendar heatmap.`,Ne={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},Pe=`stats`,Fe=`framed`,Ie={name:V,icon:H,title:je,description:Me,help:Ne,category:Pe,presentation:Fe}}));function Re({hasPostScope:e,preset:t},n=!1){return{reportParams:{..._(n,t),...e?{post_id:G}:{}}}}function U(e){return(0,W.jsx)(N,{attributes:Re(e)})}function ze({hasPostScope:e,preset:t,...n}){return(0,W.jsx)(ve,{...n,widgetType:_e(Ie),renderModule:Be,renderComponent:N,attributes:Re({hasPostScope:e,preset:t},!0)})}var W,G,Be,K,Ve,q,J,Y,X,Z,Q,$,He;e((()=>{v(),x(),ge(),me(),Ce(),ye(),Ae(),Le(),W=r(),S(),G=779,Be=`storybook/post-traffic-activity`,K=`stats/post/${G}`,Ve={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:N,tags:[`autodocs`],decorators:[Se],argTypes:{...xe,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},q={render:U,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[T]},J={render:U,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[T]},Y={render:U,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[T]},X={render:U,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[T],beforeEach:()=>(C(K,`loading`),()=>C(K,null))},Z={render:U,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[T],beforeEach:()=>(C(K,`error`),()=>C(K,null))},Q={render:U,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[T],beforeEach:()=>(C(K,`empty`),()=>C(K,null))},$={render:e=>(0,W.jsx)(ze,{...e}),args:{...be,widgetWidth:3,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...he,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderPostTrafficActivity,
  args: {
    hasPostScope: true,
    preset: 'last-30-days'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Default — the scoped post's daily view heatmap for the dashboard range.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderPostTrafficActivity,
  args: {
    hasPostScope: true,
    preset: 'last-365-days'
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`Paged — a deterministic year-long range that always exceeds one page at
the default story width, exposing both pager controls for direct review.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderPostTrafficActivity,
  args: {
    hasPostScope: false,
    preset: 'last-30-days'
  },
  decorators: [withWidgetCanvas]
}`,...Y.parameters?.docs?.source},description:{story:`NoPostScope — the widget without a \`post_id\` report param, as when added
outside a post detail page. Renders the scopeless empty state without
firing a stats request.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`Loading — the first fetch is still in flight, so the widget shows its
heatmap skeleton. The mock is forced to never resolve for this story.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Error — the fetch failed with a 403: the widget shows its error copy and a
Retry action, which re-runs the query (still mocked as failing here).`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Empty — a scoped post with no views in the range: the grid stays complete
and every cell is blank, per the sparse design. The widget's empty state
covers only a missing post scope (see NoPostScope), so this is what a
traffic-free post actually looks like.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...$.parameters?.docs?.description}}},He=[`Default`,`Paged`,`NoPostScope`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Q as Empty,Z as Error,X as Loading,Y as NoPostScope,J as Paged,$ as WidgetDashboardWithWidget,He as __namedExportsOrder,Ve as default};