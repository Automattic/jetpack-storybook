import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,y as a}from"./build-module-C3v6-Qcj.js";import{Tn as o,Vu as s,bl as c,ku as l,t as u}from"./build-module-DNhkEVJn.js";import{C as d,Ot as ee,Sn as f,T as p,ft as te,nt as m,t as h,yn as ne}from"./date-fns-I6jayRk5.js";import{m as g,v as re}from"./hooks-B7ZLXs37.js";import{a as ie,o as _}from"./heatmap-chart-BlaiUleb.js";import{M as v,t as y}from"./src-DzwlO62w.js";import{$t as b,Mn as ae,ht as x,t as S}from"./src-DbPUhH64.js";import{L as C,O as w,S as oe}from"./helpers-DiovautF.js";import{n as se}from"./use-element-size-xsY89M7Z.js";import{a as ce}from"./metric-sparkline-skeleton-85GBsWnX.js";import{i as le,n as ue}from"./calendar-heatmap-57j4w86H.js";import{n as T,r as de,s as E}from"./register-report-mocks-CxwTeDLi.js";import{t as fe}from"./widget-state-CYntyx_C.js";import{t as D}from"./src-6QGxnGHN.js";import{a as pe,d as me,f as he,i as ge,n as _e,p as ve,r as O,u as ye}from"./with-widget-canvas-DEXi_eSa.js";import{n as be,r as xe,t as Se}from"./with-site-locale-CuVqF-ng.js";var k,A,j,M,N,P,F,Ce=e((()=>{k=`_root_1k3qu_3`,A=`_body_1k3qu_12`,j=`_content_1k3qu_3`,M=`_chartArea_1k3qu_29`,N=`_chartHost_1k3qu_43`,P=`_heatmap_1k3qu_50`,F={root:k,body:A,content:j,chartArea:M,chartHost:N,heatmap:P}}));function we(e,t,n){let{data:r,isLoading:i,isFetching:a,isError:o,refetch:c}=x({postId:e,fields:[`data`]}),[l,u]=(0,s.useState)(0);(0,s.useEffect)(()=>{u(0)},[t.from,t.to,n]);let h=C(t.from),g=C(t.to),{days:re,isPaged:ie,canShowOlder:_}=(0,s.useMemo)(()=>{if(!h||!g||h>g)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=ne(d(h),{weekStartsOn:1}),a=te(d(g),{weekStartsOn:1}),o=i<p(a,n-1),s=p(a,l*n),c=p(s,n-1);if(o&&c<i){c=i;let e=f(i,n-1);s=e<a?e:a}let u=d(g);return{days:ee({start:c,end:u<s?u:s}).map(e=>{let n=m(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=h&&n<=g?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,h,g,l,n]),v=(0,s.useCallback)(()=>{u(e=>_?e+1:e)},[_]),y=(0,s.useCallback)(()=>{u(e=>Math.max(0,e-1))},[]);return{days:re,isPaged:ie,canShowOlder:_,canShowNewer:l>0,showOlder:v,showNewer:y,isLoading:i,isFetching:a,isError:o,hasData:!!r,refetch:c}}var Te=e((()=>{S(),l(),h(),D()}));function Ee(e){return e?w({availWidth:e,cellWidth:R,cellGap:4,minColumns:ke}):z}function De(e){return e?Math.max(Ae,Math.min(B,Math.floor((e-je)/7))):B}function Oe(){let{reportParams:e}=re(),n=ae(e.post_id),[r,i]=(0,s.useState)(),c=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);i(t=>t===e?t:e)}}),{days:l,isPaged:u,canShowOlder:d,canShowNewer:ee,showOlder:f,showNewer:p,isLoading:te,isFetching:m,isError:h,refetch:ne}=we(n,e,Ee(r)*7),[g,y]=se(),b=De(y.height),{data:x,rowLabels:S}=ie(l),w=C(e.from),T=C(e.to),de=(0,s.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=l[i*7+r];return(0,L.jsx)(ue,{value:e,cellLabel:n,emptyLabel:a&&w&&T&&a.dateString>=w&&a.dateString<=T?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:oe,icon:o})},[l,w,T]);return(0,L.jsx)(`div`,{ref:c,className:F.root,children:(0,L.jsx)(`div`,{className:F.body,children:(0,L.jsx)(fe,{isLoading:te,isFetching:m,isError:h,isEmpty:n<=0||x.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:ne}]},empty:{icon:v,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,L.jsx)(ce,{}),children:(0,L.jsx)(`div`,{className:F.content,children:(0,L.jsx)(`div`,{ref:g,className:F.chartArea,children:(0,L.jsx)(le,{pager:u?{canShowOlder:d,canShowNewer:ee,showOlder:f,showNewer:p}:void 0,className:F.chartHost,children:(0,L.jsx)(_,{data:x,rowLabels:S,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,tooltipVariant:`dark`,maxCellWidth:64,maxCellHeight:b,renderTooltip:de,className:F.heatmap})})})})})})})}function I({attributes:e={}}){return(0,L.jsx)(g,{attributes:e,children:(0,L.jsx)(Oe,{})})}var L,R,ke,z,B,Ae,je,Me=e((()=>{S(),y(),D(),i(),l(),n(),u(),Ce(),Te(),L=r(),R=64,ke=4,z=16,B=42,Ae=8,je=44})),Ne,Pe=e((()=>{u(),Ne={icon:c,attributes:[],example:{attributes:{}}}})),Fe,Ie,Le,Re,ze,Be,Ve,He=e((()=>{Fe=`jpa/post-traffic-activity`,Ie=`Traffic activity`,Le=`Daily views for the post or page being viewed, as a calendar heatmap.`,Re={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},ze=`stats`,Be=`framed`,Ve={name:Fe,title:Ie,description:Le,help:Re,category:ze,presentation:Be}}));function Ue({hasPostScope:e,preset:t},n=!1){return{reportParams:{...b(n,t),...e?{post_id:U}:{}}}}function V(e){return(0,H.jsx)(I,{attributes:Ue(e)})}function We({hasPostScope:e,preset:t,...n}){return(0,H.jsx)(me,{...n,widgetType:ge(Ve,Ne),renderModule:Ge,renderComponent:I,attributes:Ue({hasPostScope:e,preset:t},!0)})}var H,U,Ge,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{S(),T(),he(),pe(),Se(),_e(),Me(),Pe(),He(),H=r(),de(),U=779,Ge=`storybook/post-traffic-activity`,W=`stats/post/${U}`,G={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:I,tags:[`autodocs`],decorators:[xe],argTypes:{...be,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},K={render:V,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[O]},q={render:V,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[O]},J={render:V,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[O]},Y={render:V,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[O],beforeEach:()=>(E(W,`loading`),()=>E(W,null))},X={render:V,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[O],beforeEach:()=>(E(W,`error`),()=>E(W,null))},Z={render:V,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[O],beforeEach:()=>(E(W,`empty`),()=>E(W,null))},Q={render:e=>(0,H.jsx)(We,{...e}),args:{...ye,widgetWidth:3,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...ve,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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