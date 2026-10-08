import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,y as a}from"./build-module-C3v6-Qcj.js";import{Tn as o,Vu as s,bl as c,ku as l,t as u}from"./build-module-DNhkEVJn.js";import{C as d,Ot as ee,Sn as f,T as p,ft as m,nt as h,t as g,yn as te}from"./date-fns-I6jayRk5.js";import{a as _,o as ne}from"./heatmap-chart-0x0nQ_Gt.js";import{M as re,t as v}from"./src-DzwlO62w.js";import{An as y,Mn as b,Nt as x,t as S}from"./src-DygifJof.js";import{_ as ie,ct as C,q as ae,tt as w,x as oe}from"./charts-provider-DNUqMNZG.js";import{n as se}from"./use-element-size-xsY89M7Z.js";import{a as ce}from"./metric-sparkline-skeleton-B4vrR-wb.js";import{n as T,r as le,s as E}from"./register-report-mocks-C_qgEqOT.js";import{t as ue}from"./widget-state-CMAN2tuW.js";import{i as de,n as fe}from"./calendar-heatmap-DP5IGwoY.js";import{t as pe}from"./src-BrWJPATs.js";import{a as me,g as he,h as ge,i as _e,m as ve,n as ye,p as be,r as D}from"./with-widget-canvas-2TyZAVq6.js";import{n as xe,r as Se,t as Ce}from"./with-site-locale-DYVUgyWe.js";var O,k,A,j,M,N,P,we=e((()=>{O=`_root_1k3qu_3`,k=`_body_1k3qu_12`,A=`_content_1k3qu_3`,j=`_chartArea_1k3qu_29`,M=`_chartHost_1k3qu_43`,N=`_heatmap_1k3qu_50`,P={root:O,body:k,content:A,chartArea:j,chartHost:M,heatmap:N}}));function Te(e,t,n){let{data:r,isLoading:i,isFetching:a,isError:o,refetch:c}=x({postId:e,fields:[`data`]}),[l,u]=(0,s.useState)(0);(0,s.useEffect)(()=>{u(0)},[t.from,t.to,n]);let g=C(t.from),_=C(t.to),{days:ne,isPaged:re,canShowOlder:v}=(0,s.useMemo)(()=>{if(!g||!_||g>_)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=te(d(g),{weekStartsOn:1}),a=m(d(_),{weekStartsOn:1}),o=i<p(a,n-1),s=p(a,l*n),c=p(s,n-1);if(o&&c<i){c=i;let e=f(i,n-1);s=e<a?e:a}let u=d(_);return{days:ee({start:c,end:u<s?u:s}).map(e=>{let n=h(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=g&&n<=_?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,g,_,l,n]),y=(0,s.useCallback)(()=>{u(e=>v?e+1:e)},[v]),b=(0,s.useCallback)(()=>{u(e=>Math.max(0,e-1))},[]);return{days:ne,isPaged:re,canShowOlder:v,canShowNewer:l>0,showOlder:y,showNewer:b,isLoading:i,isFetching:a,isError:o,hasData:!!r,refetch:c}}var Ee=e((()=>{S(),l(),g(),pe()}));function De(e){return e?w({availWidth:e,cellWidth:L,cellGap:4,minColumns:R}):z}function Oe(e){return e?Math.max(V,Math.min(B,Math.floor((e-Ae)/7))):B}function ke(){let{reportParams:e}=oe(),n=y(e.post_id),[r,i]=(0,s.useState)(),c=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);i(t=>t===e?t:e)}}),{days:l,isPaged:u,canShowOlder:d,canShowNewer:ee,showOlder:f,showNewer:p,isLoading:m,isFetching:h,isError:g,refetch:te}=Te(n,e,De(r)*7),[v,b]=se(),x=Oe(b.height),{data:S,rowLabels:ie}=_(l),w=C(e.from),T=C(e.to),le=(0,s.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=l[i*7+r];return(0,I.jsx)(fe,{value:e,cellLabel:n,emptyLabel:a&&w&&T&&a.dateString>=w&&a.dateString<=T?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:ae,icon:o})},[l,w,T]);return(0,I.jsx)(`div`,{ref:c,className:P.root,children:(0,I.jsx)(`div`,{className:P.body,children:(0,I.jsx)(ue,{isLoading:m,isFetching:h,isError:g,isEmpty:n<=0||S.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:te}]},empty:{icon:re,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,I.jsx)(ce,{}),children:(0,I.jsx)(`div`,{className:P.content,children:(0,I.jsx)(`div`,{ref:v,className:P.chartArea,children:(0,I.jsx)(de,{pager:u?{canShowOlder:d,canShowNewer:ee,showOlder:f,showNewer:p}:void 0,className:P.chartHost,children:(0,I.jsx)(ne,{data:S,rowLabels:ie,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:x,renderTooltip:le,className:P.heatmap})})})})})})})}function F({attributes:e={}}){return(0,I.jsx)(ie,{attributes:e,children:(0,I.jsx)(ke,{})})}var I,L,R,z,B,V,Ae,je=e((()=>{S(),v(),pe(),i(),l(),n(),u(),we(),Ee(),I=r(),L=64,R=4,z=16,B=42,V=8,Ae=44})),Me,Ne=e((()=>{u(),Me={icon:c,attributes:[],example:{attributes:{}}}})),Pe,Fe,Ie,Le,Re,ze,Be,Ve=e((()=>{Pe=`jpa/post-traffic-activity`,Fe=`Traffic activity`,Ie=`Daily views for the post or page being viewed, as a calendar heatmap.`,Le={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},Re=`stats`,ze=`framed`,Be={name:Pe,title:Fe,description:Ie,help:Le,category:Re,presentation:ze}}));function He({hasPostScope:e,preset:t},n=!1){return{reportParams:{...b(n,t),...e?{post_id:W}:{}}}}function H(e){return(0,U.jsx)(F,{attributes:He(e)})}function Ue({hasPostScope:e,preset:t,...n}){return(0,U.jsx)(ve,{...n,widgetType:_e(Be,Me),renderModule:We,renderComponent:F,attributes:He({hasPostScope:e,preset:t},!0)})}var U,W,We,G,K,q,J,Y,X,Z,Q,$,Ge;e((()=>{S(),T(),ge(),me(),Ce(),ye(),je(),Ne(),Ve(),U=r(),le(),W=779,We=`storybook/post-traffic-activity`,G=`stats/post/${W}`,K={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:F,tags:[`autodocs`],decorators:[Se],argTypes:{...xe,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},q={render:H,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[D]},J={render:H,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[D]},Y={render:H,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[D]},X={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[D],beforeEach:()=>(E(G,`loading`),()=>E(G,null))},Z={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[D],beforeEach:()=>(E(G,`error`),()=>E(G,null))},Q={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[D],beforeEach:()=>(E(G,`empty`),()=>E(G,null))},$={render:e=>(0,U.jsx)(Ue,{...e}),args:{...be,widgetWidth:3,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...he,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...$.parameters?.docs?.description}}},Ge=[`Default`,`Paged`,`NoPostScope`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Q as Empty,Z as Error,X as Loading,Y as NoPostScope,J as Paged,$ as WidgetDashboardWithWidget,Ge as __namedExportsOrder,K as default};