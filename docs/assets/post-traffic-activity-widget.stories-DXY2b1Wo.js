import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,y as a}from"./build-module-C8z-j0fb.js";import{Gu as o,Nu as s,t as c,wl as l}from"./build-module-zwSmKorH.js";import{St as ee,X as u,ot as te,pn as ne,t as d,vn as f,x as p,y as m}from"./date-fns-D7Rx6aVe.js";import{b as h,g}from"./hooks-Bdkur3yI.js";import{n as _,o as re}from"./heatmap-chart-BQFPruew.js";import{M as v,t as y}from"./src-DFNM1k7F.js";import{Zt as b,gt as x,t as S,wn as ie}from"./src-DIpXiMbL.js";import{s as C}from"./calendar-heatmap-window-DOhjG5IT.js";import{n as ae}from"./use-element-size-B8P2vuwZ.js";import{D as w,c as oe}from"./chart-tooltip-CEk5SH_N.js";import{r as se}from"./metric-sparkline-skeleton-CGoZfKmn.js";import{D as ce,G as T,K as le,Y as E,k as ue}from"./report-metric-BbMTDs3Q.js";import{t as de}from"./widget-state-BHh37Nb4.js";import{C as fe,D as pe,E as me,S as he,T as ge,b as _e,t as D,w as ve,x as O}from"./src-BYJkp6c3.js";var k,A,j,M,N,P,F,ye=e((()=>{k=`_root_1k3qu_3`,A=`_body_1k3qu_12`,j=`_content_1k3qu_3`,M=`_chartArea_1k3qu_29`,N=`_chartHost_1k3qu_43`,P=`_heatmap_1k3qu_50`,F={root:k,body:A,content:j,chartArea:M,chartHost:N,heatmap:P}}));function be(e,t,n){let{data:r,isLoading:i,isFetching:a,isError:s,refetch:c}=x({postId:e,fields:[`data`]}),[l,d]=(0,o.useState)(0);(0,o.useEffect)(()=>{d(0)},[t.from,t.to,n]);let h=w(t.from),g=w(t.to),{days:_,isPaged:re,canShowOlder:v}=(0,o.useMemo)(()=>{if(!h||!g||h>g)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=ne(m(h),{weekStartsOn:1}),a=te(m(g),{weekStartsOn:1}),o=i<p(a,n-1),s=p(a,l*n),c=p(s,n-1);if(o&&c<i){c=i;let e=f(i,n-1);s=e<a?e:a}let d=m(g);return{days:ee({start:c,end:d<s?d:s}).map(e=>{let n=u(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=h&&n<=g?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,h,g,l,n]),y=(0,o.useCallback)(()=>{d(e=>v?e+1:e)},[v]),b=(0,o.useCallback)(()=>{d(e=>Math.max(0,e-1))},[]);return{days:_,isPaged:re,canShowOlder:v,canShowNewer:l>0,showOlder:y,showNewer:b,isLoading:i,isFetching:a,isError:s,hasData:!!r,refetch:c}}var xe=e((()=>{S(),s(),d(),D()}));function Se(e){return e?C({availWidth:e,cellWidth:R,cellGap:4,minColumns:z}):B}function Ce(e){return e?Math.max(Te,Math.min(V,Math.floor((e-Ee)/7))):V}function we(){let{reportParams:e}=h(),n=ie(e.post_id),[r,i]=(0,o.useState)(),s=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);i(t=>t===e?t:e)}}),{days:c,isPaged:l,canShowOlder:ee,canShowNewer:u,showOlder:te,showNewer:ne,isLoading:d,isFetching:f,isError:p,refetch:m}=be(n,e,Se(r)*7),[g,y]=ae(),b=Ce(y.height),{data:x,rowLabels:S}=(0,o.useMemo)(()=>re(c),[c]),C=w(e.from),T=w(e.to),le=(0,o.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=c[i*7+r];return(0,L.jsx)(ce,{value:e,cellLabel:n,emptyLabel:a&&C&&T&&a.dateString>=C&&a.dateString<=T?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:oe})},[c,C,T]);return(0,L.jsx)(`div`,{ref:s,className:F.root,children:(0,L.jsx)(`div`,{className:F.body,children:(0,L.jsx)(de,{isLoading:d,isFetching:f,isError:p,isEmpty:n<=0||x.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:m}]},empty:{icon:v,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,L.jsx)(se,{}),children:(0,L.jsx)(`div`,{className:F.content,children:(0,L.jsx)(`div`,{ref:g,className:F.chartArea,children:(0,L.jsx)(ue,{pager:l?{canShowOlder:ee,canShowNewer:u,showOlder:te,showNewer:ne}:void 0,className:F.chartHost,children:(0,L.jsx)(_,{data:x,rowLabels:S,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:b,renderTooltip:le,className:F.heatmap})})})})})})})}function I({attributes:e={}}){return(0,L.jsx)(g,{attributes:e,children:(0,L.jsx)(we,{})})}var L,R,z,B,V,Te,Ee,De=e((()=>{S(),y(),D(),i(),s(),n(),ye(),xe(),L=r(),R=64,z=4,B=16,V=42,Te=8,Ee=44})),Oe,ke=e((()=>{c(),Oe={icon:l,attributes:[],example:{attributes:{}}}})),Ae,je,Me,Ne,Pe,Fe,Ie,Le=e((()=>{Ae=`jpa/post-traffic-activity`,je=`Traffic activity`,Me=`Daily views for the post or page being viewed, as a calendar heatmap.`,Ne={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},Pe=`stats`,Fe=`framed`,Ie={name:Ae,title:je,description:Me,help:Ne,category:Pe,presentation:Fe}}));function Re({hasPostScope:e,preset:t},n=!1){return{reportParams:{...b(n,t),...e?{post_id:W}:{}}}}function H(e){return(0,U.jsx)(I,{attributes:Re(e)})}function ze({hasPostScope:e,preset:t,...n}){return(0,U.jsx)(ge,{...n,widgetType:he(Ie,Oe),renderModule:Be,renderComponent:I,attributes:Re({hasPostScope:e,preset:t},!0)})}var U,W,Be,G,Ve,K,q,J,Y,X,Z,Q,$;e((()=>{S(),T(),me(),fe(),_e(),De(),ke(),Le(),U=r(),le(),W=779,Be=`storybook/post-traffic-activity`,G=`stats/post/${W}`,Ve={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:I,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},K={render:H,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[O]},q={render:H,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[O]},J={render:H,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[O]},Y={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[O],beforeEach:()=>(E(G,`loading`),()=>E(G,null))},X={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[O],beforeEach:()=>(E(G,`error`),()=>E(G,null))},Z={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[O],beforeEach:()=>(E(G,`empty`),()=>E(G,null))},Q={render:e=>(0,U.jsx)(ze,{...e}),args:{...ve,widgetWidth:4,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...pe,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
    widgetWidth: 4,
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
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}},$=[`Default`,`Paged`,`NoPostScope`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as Default,Z as Empty,X as Error,Y as Loading,J as NoPostScope,q as Paged,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Ve as default};