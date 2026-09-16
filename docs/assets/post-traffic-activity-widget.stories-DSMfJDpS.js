import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-yGZutq_9.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,y as a}from"./build-module-B1v_iyu9.js";import{Gu as o,Nu as s,t as c,wl as l}from"./build-module-zwSmKorH.js";import{St as ee,X as u,dn as d,mn as te,ot as f,t as p,x as m,y as h}from"./date-fns-CeH7Uo-X.js";import{G as g,Rn as _,b as ne,g as v,mt as y}from"./hooks-1sbxUh5m.js";import{i as b,r as re}from"./heatmap-chart-BtDEbg6w.js";import{M as x,t as S}from"./src-DFNM1k7F.js";import{Dn as ie,en as C,i as w,yt as T}from"./date-filters-panel-B9i11_yc.js";import{n as ae}from"./use-element-size-XoXca_wq.js";import{r as oe}from"./metric-sparkline-skeleton-BGq65zYd.js";import{i as se,o as ce}from"./monthly-heatmap-B1qeqGyC.js";import{i as E,r as le,s as D}from"./register-report-mocks-CU-0P7gZ.js";import{t as ue}from"./widget-state-DTTvqQeU.js";import{t as de}from"./src-Q8WIHIXL.js";import{a as fe,c as pe,i as me,l as he,n as ge,o as _e,r as O,s as ve}from"./with-widget-canvas-0dl_RFTX.js";import{n as ye,r as be,t as xe}from"./with-site-locale-CVenMu6B.js";var k,A,j,M,N,P,F,Se=e((()=>{k=`_root_1k3qu_3`,A=`_body_1k3qu_12`,j=`_content_1k3qu_3`,M=`_chartArea_1k3qu_29`,N=`_chartHost_1k3qu_43`,P=`_heatmap_1k3qu_50`,F={root:k,body:A,content:j,chartArea:M,chartHost:N,heatmap:P}}));function Ce(e,t,n){let{data:r,isLoading:i,isFetching:a,isError:s,refetch:c}=T({postId:e,fields:[`data`]}),[l,p]=(0,o.useState)(0);(0,o.useEffect)(()=>{p(0)},[t.from,t.to,n]);let g=y(t.from),_=y(t.to),{days:ne,isPaged:v,canShowOlder:b}=(0,o.useMemo)(()=>{if(!g||!_||g>_)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=d(h(g),{weekStartsOn:1}),a=f(h(_),{weekStartsOn:1}),o=i<m(a,n-1),s=m(a,l*n),c=m(s,n-1);if(o&&c<i){c=i;let e=te(i,n-1);s=e<a?e:a}let p=h(_);return{days:ee({start:c,end:p<s?p:s}).map(e=>{let n=u(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=g&&n<=_?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,g,_,l,n]),re=(0,o.useCallback)(()=>{p(e=>b?e+1:e)},[b]),x=(0,o.useCallback)(()=>{p(e=>Math.max(0,e-1))},[]);return{days:ne,isPaged:v,canShowOlder:b,canShowNewer:l>0,showOlder:re,showNewer:x,isLoading:i,isFetching:a,isError:s,hasData:!!r,refetch:c}}var we=e((()=>{w(),s(),p(),de()}));function Te(e){return e?_({availWidth:e,cellWidth:R,cellGap:4,minColumns:z}):B}function Ee(e){return e?Math.max(H,Math.min(V,Math.floor((e-Oe)/7))):V}function De(){let{reportParams:e}=ne(),n=ie(e.post_id),[r,i]=(0,o.useState)(),s=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);i(t=>t===e?t:e)}}),{days:c,isPaged:l,canShowOlder:ee,canShowNewer:u,showOlder:d,showNewer:te,isLoading:f,isFetching:p,isError:m,refetch:h}=Ce(n,e,Te(r)*7),[_,v]=ae(),S=Ee(v.height),{data:C,rowLabels:w}=re(c),T=y(e.from),E=y(e.to),le=(0,o.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=c[i*7+r];return(0,L.jsx)(se,{value:e,cellLabel:n,emptyLabel:a&&T&&E&&a.dateString>=T&&a.dateString<=E?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:g})},[c,T,E]);return(0,L.jsx)(`div`,{ref:s,className:F.root,children:(0,L.jsx)(`div`,{className:F.body,children:(0,L.jsx)(ue,{isLoading:f,isFetching:p,isError:m,isEmpty:n<=0||C.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:h}]},empty:{icon:x,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,L.jsx)(oe,{}),children:(0,L.jsx)(`div`,{className:F.content,children:(0,L.jsx)(`div`,{ref:_,className:F.chartArea,children:(0,L.jsx)(ce,{pager:l?{canShowOlder:ee,canShowNewer:u,showOlder:d,showNewer:te}:void 0,className:F.chartHost,children:(0,L.jsx)(b,{data:C,rowLabels:w,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:S,renderTooltip:le,className:F.heatmap})})})})})})})}function I({attributes:e={}}){return(0,L.jsx)(v,{attributes:e,children:(0,L.jsx)(De,{})})}var L,R,z,B,V,H,Oe,ke=e((()=>{w(),S(),de(),i(),s(),n(),Se(),we(),L=r(),R=64,z=4,B=16,V=42,H=8,Oe=44})),Ae,je=e((()=>{c(),Ae={icon:l,attributes:[],example:{attributes:{}}}})),Me,Ne,Pe,Fe,Ie,Le,Re,ze=e((()=>{Me=`jpa/post-traffic-activity`,Ne=`Traffic activity`,Pe=`Daily views for the post or page being viewed, as a calendar heatmap.`,Fe={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},Ie=`stats`,Le=`framed`,Re={name:Me,title:Ne,description:Pe,help:Fe,category:Ie,presentation:Le}}));function Be({hasPostScope:e,preset:t},n=!1){return{reportParams:{...C(n,t),...e?{post_id:G}:{}}}}function U(e){return(0,W.jsx)(I,{attributes:Be(e)})}function Ve({hasPostScope:e,preset:t,...n}){return(0,W.jsx)(ve,{...n,widgetType:me(Re,Ae),renderModule:He,renderComponent:I,attributes:Be({hasPostScope:e,preset:t},!0)})}var W,G,He,K,Ue,q,J,Y,X,Z,Q,$,We;e((()=>{w(),le(),pe(),fe(),xe(),ge(),ke(),je(),ze(),W=r(),E(),G=779,He=`storybook/post-traffic-activity`,K=`stats/post/${G}`,Ue={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:I,tags:[`autodocs`],decorators:[be],argTypes:{...ye,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},q={render:U,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[O]},J={render:U,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[O]},Y={render:U,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[O]},X={render:U,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[O],beforeEach:()=>(D(K,`loading`),()=>D(K,null))},Z={render:U,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[O],beforeEach:()=>(D(K,`error`),()=>D(K,null))},Q={render:U,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[O],beforeEach:()=>(D(K,`empty`),()=>D(K,null))},$={render:e=>(0,W.jsx)(Ve,{...e}),args:{..._e,widgetWidth:3,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...he,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...$.parameters?.docs?.description}}},We=[`Default`,`Paged`,`NoPostScope`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Q as Empty,Z as Error,X as Loading,Y as NoPostScope,J as Paged,$ as WidgetDashboardWithWidget,We as __namedExportsOrder,Ue as default};