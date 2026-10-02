import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,y as a}from"./build-module-C3v6-Qcj.js";import{Tn as o,Vu as s,bl as c,ku as l,t as u}from"./build-module-DNhkEVJn.js";import{C as d,Ot as ee,Sn as te,T as f,ft as p,nt as m,t as h,yn as ne}from"./date-fns-I6jayRk5.js";import{m as g,v as re}from"./hooks-BNYntG_W.js";import{a as ie,o as _}from"./heatmap-chart-BUiEUfOD.js";import{M as v,t as y}from"./src-DzwlO62w.js";import{Un as ae,cn as b,t as x,wt as oe}from"./src-Cz6uELaK.js";import{L as S,O as C,S as se}from"./helpers-BSsxUP7j.js";import{n as ce}from"./use-element-size-xsY89M7Z.js";import{a as le}from"./metric-sparkline-skeleton-D0FyfZqx.js";import{n as w,r as ue,s as T}from"./register-report-mocks-DXhMAhe-.js";import{t as de}from"./widget-state-Dibf9iiP.js";import{i as fe,n as pe}from"./calendar-heatmap-B77eShd9.js";import{t as E}from"./src-Da-6qwPK.js";import{a as me,d as he,f as ge,i as _e,n as ve,p as ye,r as D,u as be}from"./with-widget-canvas-Exi8inW-.js";import{n as xe,r as Se,t as Ce}from"./with-site-locale-DYVUgyWe.js";var O,k,A,j,M,N,P,we=e((()=>{O=`_root_1k3qu_3`,k=`_body_1k3qu_12`,A=`_content_1k3qu_3`,j=`_chartArea_1k3qu_29`,M=`_chartHost_1k3qu_43`,N=`_heatmap_1k3qu_50`,P={root:O,body:k,content:A,chartArea:j,chartHost:M,heatmap:N}}));function Te(e,t,n){let{data:r,isLoading:i,isFetching:a,isError:o,refetch:c}=oe({postId:e,fields:[`data`]}),[l,u]=(0,s.useState)(0);(0,s.useEffect)(()=>{u(0)},[t.from,t.to,n]);let h=S(t.from),g=S(t.to),{days:re,isPaged:ie,canShowOlder:_}=(0,s.useMemo)(()=>{if(!h||!g||h>g)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=ne(d(h),{weekStartsOn:1}),a=p(d(g),{weekStartsOn:1}),o=i<f(a,n-1),s=f(a,l*n),c=f(s,n-1);if(o&&c<i){c=i;let e=te(i,n-1);s=e<a?e:a}let u=d(g);return{days:ee({start:c,end:u<s?u:s}).map(e=>{let n=m(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=h&&n<=g?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,h,g,l,n]),v=(0,s.useCallback)(()=>{u(e=>_?e+1:e)},[_]),y=(0,s.useCallback)(()=>{u(e=>Math.max(0,e-1))},[]);return{days:re,isPaged:ie,canShowOlder:_,canShowNewer:l>0,showOlder:v,showNewer:y,isLoading:i,isFetching:a,isError:o,hasData:!!r,refetch:c}}var Ee=e((()=>{x(),l(),h(),E()}));function De(e){return e?C({availWidth:e,cellWidth:Ae,cellGap:4,minColumns:L}):R}function Oe(e){return e?Math.max(B,Math.min(z,Math.floor((e-V)/7))):z}function ke(){let{reportParams:e}=re(),n=ae(e.post_id),[r,i]=(0,s.useState)(),c=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);i(t=>t===e?t:e)}}),{days:l,isPaged:u,canShowOlder:d,canShowNewer:ee,showOlder:te,showNewer:f,isLoading:p,isFetching:m,isError:h,refetch:ne}=Te(n,e,De(r)*7),[g,y]=ce(),b=Oe(y.height),{data:x,rowLabels:oe}=ie(l),C=S(e.from),w=S(e.to),ue=(0,s.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=l[i*7+r];return(0,I.jsx)(pe,{value:e,cellLabel:n,emptyLabel:a&&C&&w&&a.dateString>=C&&a.dateString<=w?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:se,icon:o})},[l,C,w]);return(0,I.jsx)(`div`,{ref:c,className:P.root,children:(0,I.jsx)(`div`,{className:P.body,children:(0,I.jsx)(de,{isLoading:p,isFetching:m,isError:h,isEmpty:n<=0||x.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:ne}]},empty:{icon:v,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,I.jsx)(le,{}),children:(0,I.jsx)(`div`,{className:P.content,children:(0,I.jsx)(`div`,{ref:g,className:P.chartArea,children:(0,I.jsx)(fe,{pager:u?{canShowOlder:d,canShowNewer:ee,showOlder:te,showNewer:f}:void 0,className:P.chartHost,children:(0,I.jsx)(_,{data:x,rowLabels:oe,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,tooltipVariant:`dark`,maxCellWidth:64,maxCellHeight:b,renderTooltip:ue,className:P.heatmap})})})})})})})}function F({attributes:e={}}){return(0,I.jsx)(g,{attributes:e,children:(0,I.jsx)(ke,{})})}var I,Ae,L,R,z,B,V,je=e((()=>{x(),y(),E(),i(),l(),n(),u(),we(),Ee(),I=r(),Ae=64,L=4,R=16,z=42,B=8,V=44})),Me,Ne=e((()=>{u(),Me={icon:c,attributes:[],example:{attributes:{}}}})),Pe,Fe,Ie,Le,Re,ze,Be,Ve=e((()=>{Pe=`jpa/post-traffic-activity`,Fe=`Traffic activity`,Ie=`Daily views for the post or page being viewed, as a calendar heatmap.`,Le={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},Re=`stats`,ze=`framed`,Be={name:Pe,title:Fe,description:Ie,help:Le,category:Re,presentation:ze}}));function He({hasPostScope:e,preset:t},n=!1){return{reportParams:{...b(n,t),...e?{post_id:W}:{}}}}function H(e){return(0,U.jsx)(F,{attributes:He(e)})}function Ue({hasPostScope:e,preset:t,...n}){return(0,U.jsx)(he,{...n,widgetType:_e(Be,Me),renderModule:We,renderComponent:F,attributes:He({hasPostScope:e,preset:t},!0)})}var U,W,We,G,K,q,J,Y,X,Z,Q,$,Ge;e((()=>{x(),w(),ge(),me(),Ce(),ve(),je(),Ne(),Ve(),U=r(),ue(),W=779,We=`storybook/post-traffic-activity`,G=`stats/post/${W}`,K={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:F,tags:[`autodocs`],decorators:[Se],argTypes:{...xe,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},q={render:H,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[D]},J={render:H,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[D]},Y={render:H,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[D]},X={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[D],beforeEach:()=>(T(G,`loading`),()=>T(G,null))},Z={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[D],beforeEach:()=>(T(G,`error`),()=>T(G,null))},Q={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[D],beforeEach:()=>(T(G,`empty`),()=>T(G,null))},$={render:e=>(0,U.jsx)(Ue,{...e}),args:{...be,widgetWidth:3,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...ye,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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