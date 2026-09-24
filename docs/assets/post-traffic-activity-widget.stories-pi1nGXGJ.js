import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,y as a}from"./build-module-BTtYwVLI.js";import{Sl as o,Tn as s,Uu as c,ju as l,t as u}from"./build-module-2iv4IIRq.js";import{C as d,Ot as ee,Sn as te,T as f,ft as p,nt as ne,t as m,yn as re}from"./date-fns-D_SPQh_w.js";import{m as h,v as ie}from"./hooks-D_S3Daya.js";import{a as g,o as _}from"./heatmap-chart-BzKVw2wi.js";import{M as v,t as y}from"./src-C-E2d-Lb.js";import{$t as b,Mn as ae,t as x,vt as oe}from"./src-C04OQBj7.js";import{L as S,O as C,S as se}from"./helpers-BWPW2Zcu.js";import{n as ce}from"./use-element-size-hh3Y94Cm.js";import{a as le}from"./metric-sparkline-skeleton-Ch2gCqi_.js";import{i as ue,n as de}from"./calendar-heatmap-BBAMWXj9.js";import{c as w,i as fe,r as pe}from"./register-report-mocks-BT2vuxqN.js";import{t as me}from"./widget-state-ChVPEzoM.js";import{t as T}from"./src-CxhKdsuF.js";import{a as he,d as ge,f as _e,i as ve,n as ye,p as be,r as E,u as xe}from"./with-widget-canvas-MWt0-NCN.js";import{n as Se,r as Ce,t as we}from"./with-site-locale-CuVqF-ng.js";var D,O,k,A,j,M,N,Te=e((()=>{D=`_root_1k3qu_3`,O=`_body_1k3qu_12`,k=`_content_1k3qu_3`,A=`_chartArea_1k3qu_29`,j=`_chartHost_1k3qu_43`,M=`_heatmap_1k3qu_50`,N={root:D,body:O,content:k,chartArea:A,chartHost:j,heatmap:M}}));function Ee(e,t,n){let{data:r,isLoading:i,isFetching:a,isError:o,refetch:s}=oe({postId:e,fields:[`data`]}),[l,u]=(0,c.useState)(0);(0,c.useEffect)(()=>{u(0)},[t.from,t.to,n]);let m=S(t.from),h=S(t.to),{days:ie,isPaged:g,canShowOlder:_}=(0,c.useMemo)(()=>{if(!m||!h||m>h)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=re(d(m),{weekStartsOn:1}),a=p(d(h),{weekStartsOn:1}),o=i<f(a,n-1),s=f(a,l*n),c=f(s,n-1);if(o&&c<i){c=i;let e=te(i,n-1);s=e<a?e:a}let u=d(h);return{days:ee({start:c,end:u<s?u:s}).map(e=>{let n=ne(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=m&&n<=h?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,m,h,l,n]),v=(0,c.useCallback)(()=>{u(e=>_?e+1:e)},[_]),y=(0,c.useCallback)(()=>{u(e=>Math.max(0,e-1))},[]);return{days:ie,isPaged:g,canShowOlder:_,canShowNewer:l>0,showOlder:v,showNewer:y,isLoading:i,isFetching:a,isError:o,hasData:!!r,refetch:s}}var De=e((()=>{x(),l(),m(),T()}));function Oe(e){return e?C({availWidth:e,cellWidth:I,cellGap:4,minColumns:L}):R}function ke(e){return e?Math.max(B,Math.min(z,Math.floor((e-je)/7))):z}function Ae(){let{reportParams:e}=ie(),n=ae(e.post_id),[r,i]=(0,c.useState)(),o=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);i(t=>t===e?t:e)}}),{days:l,isPaged:u,canShowOlder:d,canShowNewer:ee,showOlder:te,showNewer:f,isLoading:p,isFetching:ne,isError:m,refetch:re}=Ee(n,e,Oe(r)*7),[h,y]=ce(),b=ke(y.height),{data:x,rowLabels:oe}=g(l),C=S(e.from),w=S(e.to),fe=(0,c.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=l[i*7+r];return(0,F.jsx)(de,{value:e,cellLabel:n,emptyLabel:a&&C&&w&&a.dateString>=C&&a.dateString<=w?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:se,icon:s})},[l,C,w]);return(0,F.jsx)(`div`,{ref:o,className:N.root,children:(0,F.jsx)(`div`,{className:N.body,children:(0,F.jsx)(me,{isLoading:p,isFetching:ne,isError:m,isEmpty:n<=0||x.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:re}]},empty:{icon:v,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,F.jsx)(le,{}),children:(0,F.jsx)(`div`,{className:N.content,children:(0,F.jsx)(`div`,{ref:h,className:N.chartArea,children:(0,F.jsx)(ue,{pager:u?{canShowOlder:d,canShowNewer:ee,showOlder:te,showNewer:f}:void 0,className:N.chartHost,children:(0,F.jsx)(_,{data:x,rowLabels:oe,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,tooltipVariant:`dark`,maxCellWidth:64,maxCellHeight:b,renderTooltip:fe,className:N.heatmap})})})})})})})}function P({attributes:e={}}){return(0,F.jsx)(h,{attributes:e,children:(0,F.jsx)(Ae,{})})}var F,I,L,R,z,B,je,Me=e((()=>{x(),y(),T(),i(),l(),n(),u(),Te(),De(),F=r(),I=64,L=4,R=16,z=42,B=8,je=44})),Ne,Pe=e((()=>{u(),Ne={icon:o,attributes:[],example:{attributes:{}}}})),Fe,Ie,Le,Re,ze,Be,Ve,He=e((()=>{Fe=`jpa/post-traffic-activity`,Ie=`Traffic activity`,Le=`Daily views for the post or page being viewed, as a calendar heatmap.`,Re={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},ze=`stats`,Be=`framed`,Ve={name:Fe,title:Ie,description:Le,help:Re,category:ze,presentation:Be}}));function Ue({hasPostScope:e,preset:t},n=!1){return{reportParams:{...b(n,t),...e?{post_id:U}:{}}}}function V(e){return(0,H.jsx)(P,{attributes:Ue(e)})}function We({hasPostScope:e,preset:t,...n}){return(0,H.jsx)(ge,{...n,widgetType:ve(Ve,Ne),renderModule:Ge,renderComponent:P,attributes:Ue({hasPostScope:e,preset:t},!0)})}var H,U,Ge,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{x(),pe(),_e(),he(),we(),ye(),Me(),Pe(),He(),H=r(),fe(),U=779,Ge=`storybook/post-traffic-activity`,W=`stats/post/${U}`,G={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:P,tags:[`autodocs`],decorators:[Ce],argTypes:{...Se,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},K={render:V,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[E]},q={render:V,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[E]},J={render:V,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[E]},Y={render:V,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[E],beforeEach:()=>(w(W,`loading`),()=>w(W,null))},X={render:V,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[E],beforeEach:()=>(w(W,`error`),()=>w(W,null))},Z={render:V,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[E],beforeEach:()=>(w(W,`empty`),()=>w(W,null))},Q={render:e=>(0,H.jsx)(We,{...e}),args:{...xe,widgetWidth:3,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...be,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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