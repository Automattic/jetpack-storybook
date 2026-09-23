import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,y as a}from"./build-module-BTtYwVLI.js";import{Sl as o,Tn as s,Uu as c,ju as l,t as u}from"./build-module-2iv4IIRq.js";import{C as d,Ot as ee,Sn as f,T as p,ft as te,nt as ne,t as m,yn as re}from"./date-fns-D_SPQh_w.js";import{Tt as h,gt as g,m as _,ut as v,v as y}from"./hooks-D2-uOzcc.js";import{a as b,o as x}from"./heatmap-chart-YBiIn3dt.js";import{M as ie,t as ae}from"./src-C-E2d-Lb.js";import{$t as S,Mn as oe,t as C,vt as w}from"./src-0ge7d6kt.js";import{n as se}from"./use-element-size-hh3Y94Cm.js";import{a as ce}from"./metric-sparkline-skeleton-DmwrmOFt.js";import{i as le,n as ue}from"./calendar-heatmap-DdqfEUf9.js";import{c as T,i as de,r as fe}from"./register-report-mocks-DAHzORiq.js";import{t as pe}from"./widget-state-BlFCjv4l.js";import{t as me}from"./src-Ddik3icB.js";import{a as he,d as ge,f as _e,i as ve,n as ye,p as be,r as E,u as xe}from"./with-widget-canvas-q45aoI9y.js";import{n as Se,r as Ce,t as we}from"./with-site-locale-CuVqF-ng.js";var D,O,k,A,j,M,N,Te=e((()=>{D=`_root_1k3qu_3`,O=`_body_1k3qu_12`,k=`_content_1k3qu_3`,A=`_chartArea_1k3qu_29`,j=`_chartHost_1k3qu_43`,M=`_heatmap_1k3qu_50`,N={root:D,body:O,content:k,chartArea:A,chartHost:j,heatmap:M}}));function Ee(e,t,n){let{data:r,isLoading:i,isFetching:a,isError:o,refetch:s}=w({postId:e,fields:[`data`]}),[l,u]=(0,c.useState)(0);(0,c.useEffect)(()=>{u(0)},[t.from,t.to,n]);let m=h(t.from),g=h(t.to),{days:_,isPaged:v,canShowOlder:y}=(0,c.useMemo)(()=>{if(!m||!g||m>g)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=re(d(m),{weekStartsOn:1}),a=te(d(g),{weekStartsOn:1}),o=i<p(a,n-1),s=p(a,l*n),c=p(s,n-1);if(o&&c<i){c=i;let e=f(i,n-1);s=e<a?e:a}let u=d(g);return{days:ee({start:c,end:u<s?u:s}).map(e=>{let n=ne(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=m&&n<=g?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,m,g,l,n]),b=(0,c.useCallback)(()=>{u(e=>y?e+1:e)},[y]),x=(0,c.useCallback)(()=>{u(e=>Math.max(0,e-1))},[]);return{days:_,isPaged:v,canShowOlder:y,canShowNewer:l>0,showOlder:b,showNewer:x,isLoading:i,isFetching:a,isError:o,hasData:!!r,refetch:s}}var De=e((()=>{C(),l(),m(),me()}));function Oe(e){return e?g({availWidth:e,cellWidth:I,cellGap:4,minColumns:L}):R}function ke(e){return e?Math.max(B,Math.min(z,Math.floor((e-V)/7))):z}function Ae(){let{reportParams:e}=y(),n=oe(e.post_id),[r,i]=(0,c.useState)(),o=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);i(t=>t===e?t:e)}}),{days:l,isPaged:u,canShowOlder:d,canShowNewer:ee,showOlder:f,showNewer:p,isLoading:te,isFetching:ne,isError:m,refetch:re}=Ee(n,e,Oe(r)*7),[g,_]=se(),ae=ke(_.height),{data:S,rowLabels:C}=b(l),w=h(e.from),T=h(e.to),de=(0,c.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=l[i*7+r];return(0,F.jsx)(ue,{value:e,cellLabel:n,emptyLabel:a&&w&&T&&a.dateString>=w&&a.dateString<=T?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:v,icon:s})},[l,w,T]);return(0,F.jsx)(`div`,{ref:o,className:N.root,children:(0,F.jsx)(`div`,{className:N.body,children:(0,F.jsx)(pe,{isLoading:te,isFetching:ne,isError:m,isEmpty:n<=0||S.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:re}]},empty:{icon:ie,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,F.jsx)(ce,{}),children:(0,F.jsx)(`div`,{className:N.content,children:(0,F.jsx)(`div`,{ref:g,className:N.chartArea,children:(0,F.jsx)(le,{pager:u?{canShowOlder:d,canShowNewer:ee,showOlder:f,showNewer:p}:void 0,className:N.chartHost,children:(0,F.jsx)(x,{data:S,rowLabels:C,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,tooltipVariant:`dark`,maxCellWidth:64,maxCellHeight:ae,renderTooltip:de,className:N.heatmap})})})})})})})}function P({attributes:e={}}){return(0,F.jsx)(_,{attributes:e,children:(0,F.jsx)(Ae,{})})}var F,I,L,R,z,B,V,je=e((()=>{C(),ae(),me(),i(),l(),n(),u(),Te(),De(),F=r(),I=64,L=4,R=16,z=42,B=8,V=44})),Me,Ne=e((()=>{u(),Me={icon:o,attributes:[],example:{attributes:{}}}})),Pe,Fe,Ie,Le,Re,ze,Be,Ve=e((()=>{Pe=`jpa/post-traffic-activity`,Fe=`Traffic activity`,Ie=`Daily views for the post or page being viewed, as a calendar heatmap.`,Le={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},Re=`stats`,ze=`framed`,Be={name:Pe,title:Fe,description:Ie,help:Le,category:Re,presentation:ze}}));function He({hasPostScope:e,preset:t},n=!1){return{reportParams:{...S(n,t),...e?{post_id:W}:{}}}}function H(e){return(0,U.jsx)(P,{attributes:He(e)})}function Ue({hasPostScope:e,preset:t,...n}){return(0,U.jsx)(ge,{...n,widgetType:ve(Be,Me),renderModule:We,renderComponent:P,attributes:He({hasPostScope:e,preset:t},!0)})}var U,W,We,G,K,q,J,Y,X,Z,Q,$,Ge;e((()=>{C(),fe(),_e(),he(),we(),ye(),je(),Ne(),Ve(),U=r(),de(),W=779,We=`storybook/post-traffic-activity`,G=`stats/post/${W}`,K={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:P,tags:[`autodocs`],decorators:[Ce],argTypes:{...Se,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},q={render:H,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[E]},J={render:H,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[E]},Y={render:H,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[E]},X={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[E],beforeEach:()=>(T(G,`loading`),()=>T(G,null))},Z={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[E],beforeEach:()=>(T(G,`error`),()=>T(G,null))},Q={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[E],beforeEach:()=>(T(G,`empty`),()=>T(G,null))},$={render:e=>(0,U.jsx)(Ue,{...e}),args:{...xe,widgetWidth:3,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...be,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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