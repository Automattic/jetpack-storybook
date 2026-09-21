import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,y as a}from"./build-module-BTtYwVLI.js";import{Sl as o,Tn as s,Uu as c,ju as l,t as u}from"./build-module-2iv4IIRq.js";import{C as d,Ot as ee,Sn as te,T as f,ft as ne,nt as re,t as p,yn as m}from"./date-fns-D_SPQh_w.js";import{G as h,Z as g,m as _,v,xt as y}from"./hooks-D1qZnH3R.js";import{a as b,o as x}from"./heatmap-chart-DpOZCR4v.js";import{M as ie,t as S}from"./src-C-E2d-Lb.js";import{Nn as ae,bt as C,r as w,tn as T}from"./date-period-dropdown-C9fxDnd0.js";import{n as oe}from"./use-element-size-hh3Y94Cm.js";import{a as se}from"./metric-sparkline-skeleton-CgEjauHB.js";import{i as ce,n as le}from"./calendar-heatmap-CTmjkW_m.js";import{c as E,i as ue,r as de}from"./register-report-mocks-X0p7n8EE.js";import{t as fe}from"./widget-state-BaX56W5u.js";import{t as D}from"./src-Caz9VwDS.js";import{a as pe,c as me,i as he,l as ge,n as _e,o as ve,r as O,s as ye}from"./with-widget-canvas-B4P8QcDF.js";import{n as be,r as xe,t as Se}from"./with-site-locale-CuVqF-ng.js";var k,A,j,M,N,P,F,Ce=e((()=>{k=`_root_1k3qu_3`,A=`_body_1k3qu_12`,j=`_content_1k3qu_3`,M=`_chartArea_1k3qu_29`,N=`_chartHost_1k3qu_43`,P=`_heatmap_1k3qu_50`,F={root:k,body:A,content:j,chartArea:M,chartHost:N,heatmap:P}}));function we(e,t,n){let{data:r,isLoading:i,isFetching:a,isError:o,refetch:s}=C({postId:e,fields:[`data`]}),[l,u]=(0,c.useState)(0);(0,c.useEffect)(()=>{u(0)},[t.from,t.to,n]);let p=y(t.from),h=y(t.to),{days:g,isPaged:_,canShowOlder:v}=(0,c.useMemo)(()=>{if(!p||!h||p>h)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=m(d(p),{weekStartsOn:1}),a=ne(d(h),{weekStartsOn:1}),o=i<f(a,n-1),s=f(a,l*n),c=f(s,n-1);if(o&&c<i){c=i;let e=te(i,n-1);s=e<a?e:a}let u=d(h);return{days:ee({start:c,end:u<s?u:s}).map(e=>{let n=re(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=p&&n<=h?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,p,h,l,n]),b=(0,c.useCallback)(()=>{u(e=>v?e+1:e)},[v]),x=(0,c.useCallback)(()=>{u(e=>Math.max(0,e-1))},[]);return{days:g,isPaged:_,canShowOlder:v,canShowNewer:l>0,showOlder:b,showNewer:x,isLoading:i,isFetching:a,isError:o,hasData:!!r,refetch:s}}var Te=e((()=>{w(),l(),p(),D()}));function Ee(e){return e?g({availWidth:e,cellWidth:R,cellGap:4,minColumns:ke}):z}function De(e){return e?Math.max(Ae,Math.min(B,Math.floor((e-je)/7))):B}function Oe(){let{reportParams:e}=v(),n=ae(e.post_id),[r,i]=(0,c.useState)(),o=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);i(t=>t===e?t:e)}}),{days:l,isPaged:u,canShowOlder:d,canShowNewer:ee,showOlder:te,showNewer:f,isLoading:ne,isFetching:re,isError:p,refetch:m}=we(n,e,Ee(r)*7),[g,_]=oe(),S=De(_.height),{data:C,rowLabels:w}=b(l),T=y(e.from),E=y(e.to),ue=(0,c.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=l[i*7+r];return(0,L.jsx)(le,{value:e,cellLabel:n,emptyLabel:a&&T&&E&&a.dateString>=T&&a.dateString<=E?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:h,icon:s})},[l,T,E]);return(0,L.jsx)(`div`,{ref:o,className:F.root,children:(0,L.jsx)(`div`,{className:F.body,children:(0,L.jsx)(fe,{isLoading:ne,isFetching:re,isError:p,isEmpty:n<=0||C.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:m}]},empty:{icon:ie,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,L.jsx)(se,{}),children:(0,L.jsx)(`div`,{className:F.content,children:(0,L.jsx)(`div`,{ref:g,className:F.chartArea,children:(0,L.jsx)(ce,{pager:u?{canShowOlder:d,canShowNewer:ee,showOlder:te,showNewer:f}:void 0,className:F.chartHost,children:(0,L.jsx)(x,{data:C,rowLabels:w,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,tooltipVariant:`dark`,maxCellWidth:64,maxCellHeight:S,renderTooltip:ue,className:F.heatmap})})})})})})})}function I({attributes:e={}}){return(0,L.jsx)(_,{attributes:e,children:(0,L.jsx)(Oe,{})})}var L,R,ke,z,B,Ae,je,Me=e((()=>{w(),S(),D(),i(),l(),n(),u(),Ce(),Te(),L=r(),R=64,ke=4,z=16,B=42,Ae=8,je=44})),Ne,Pe=e((()=>{u(),Ne={icon:o,attributes:[],example:{attributes:{}}}})),Fe,Ie,Le,Re,ze,Be,Ve,He=e((()=>{Fe=`jpa/post-traffic-activity`,Ie=`Traffic activity`,Le=`Daily views for the post or page being viewed, as a calendar heatmap.`,Re={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},ze=`stats`,Be=`framed`,Ve={name:Fe,title:Ie,description:Le,help:Re,category:ze,presentation:Be}}));function Ue({hasPostScope:e,preset:t},n=!1){return{reportParams:{...T(n,t),...e?{post_id:U}:{}}}}function V(e){return(0,H.jsx)(I,{attributes:Ue(e)})}function We({hasPostScope:e,preset:t,...n}){return(0,H.jsx)(ye,{...n,widgetType:he(Ve,Ne),renderModule:Ge,renderComponent:I,attributes:Ue({hasPostScope:e,preset:t},!0)})}var H,U,Ge,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{w(),de(),me(),pe(),Se(),_e(),Me(),Pe(),He(),H=r(),ue(),U=779,Ge=`storybook/post-traffic-activity`,W=`stats/post/${U}`,G={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:I,tags:[`autodocs`],decorators:[xe],argTypes:{...be,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},K={render:V,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[O]},q={render:V,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[O]},J={render:V,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[O]},Y={render:V,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[O],beforeEach:()=>(E(W,`loading`),()=>E(W,null))},X={render:V,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[O],beforeEach:()=>(E(W,`error`),()=>E(W,null))},Z={render:V,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[O],beforeEach:()=>(E(W,`empty`),()=>E(W,null))},Q={render:e=>(0,H.jsx)(We,{...e}),args:{...ve,widgetWidth:3,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...ge,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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