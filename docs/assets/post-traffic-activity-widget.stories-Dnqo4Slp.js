import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,y as a}from"./build-module-BTtYwVLI.js";import{Sl as o,Uu as s,ju as c,t as l}from"./build-module-2iv4IIRq.js";import{C as u,Ot as d,Sn as f,T as p,ft as ee,nt as te,t as m,yn as ne}from"./date-fns-D_SPQh_w.js";import{G as h,Z as g,bt as _,m as v,v as y}from"./hooks-D_-KwK9o.js";import{a as b,o as x}from"./heatmap-chart-BYxZs8P6.js";import{M as S,t as C}from"./src-C-E2d-Lb.js";import{Mn as re,bt as w,r as T,tn as E}from"./date-period-dropdown-G9YUPeqM.js";import{n as ie}from"./use-element-size-hh3Y94Cm.js";import{a as ae}from"./metric-sparkline-skeleton-3TnjN20S.js";import{i as oe,n as se}from"./calendar-heatmap-CMHDLco5.js";import{c as D,i as ce,r as le}from"./register-report-mocks-Bkj09xXC.js";import{t as ue}from"./widget-state-C7QUic5j.js";import{t as O}from"./src-BJzObm5Z.js";import{a as de,c as fe,i as pe,l as me,n as he,o as ge,r as k,s as _e}from"./with-widget-canvas-KqQDaNTN.js";import{n as ve,r as ye,t as be}from"./with-site-locale-CuVqF-ng.js";var A,j,M,N,P,F,I,xe=e((()=>{A=`_root_1k3qu_3`,j=`_body_1k3qu_12`,M=`_content_1k3qu_3`,N=`_chartArea_1k3qu_29`,P=`_chartHost_1k3qu_43`,F=`_heatmap_1k3qu_50`,I={root:A,body:j,content:M,chartArea:N,chartHost:P,heatmap:F}}));function Se(e,t,n){let{data:r,isLoading:i,isFetching:a,isError:o,refetch:c}=w({postId:e,fields:[`data`]}),[l,m]=(0,s.useState)(0);(0,s.useEffect)(()=>{m(0)},[t.from,t.to,n]);let h=_(t.from),g=_(t.to),{days:v,isPaged:y,canShowOlder:b}=(0,s.useMemo)(()=>{if(!h||!g||h>g)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=ne(u(h),{weekStartsOn:1}),a=ee(u(g),{weekStartsOn:1}),o=i<p(a,n-1),s=p(a,l*n),c=p(s,n-1);if(o&&c<i){c=i;let e=f(i,n-1);s=e<a?e:a}let m=u(g);return{days:d({start:c,end:m<s?m:s}).map(e=>{let n=te(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=h&&n<=g?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,h,g,l,n]),x=(0,s.useCallback)(()=>{m(e=>b?e+1:e)},[b]),S=(0,s.useCallback)(()=>{m(e=>Math.max(0,e-1))},[]);return{days:v,isPaged:y,canShowOlder:b,canShowNewer:l>0,showOlder:x,showNewer:S,isLoading:i,isFetching:a,isError:o,hasData:!!r,refetch:c}}var Ce=e((()=>{T(),c(),m(),O()}));function we(e){return e?g({availWidth:e,cellWidth:z,cellGap:4,minColumns:De}):B}function Te(e){return e?Math.max(Oe,Math.min(V,Math.floor((e-ke)/7))):V}function Ee(){let{reportParams:e}=y(),n=re(e.post_id),[r,i]=(0,s.useState)(),o=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);i(t=>t===e?t:e)}}),{days:c,isPaged:l,canShowOlder:u,canShowNewer:d,showOlder:f,showNewer:p,isLoading:ee,isFetching:te,isError:m,refetch:ne}=Se(n,e,we(r)*7),[g,v]=ie(),C=Te(v.height),{data:w,rowLabels:T}=b(c),E=_(e.from),D=_(e.to),ce=(0,s.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=c[i*7+r];return(0,R.jsx)(se,{value:e,cellLabel:n,emptyLabel:a&&E&&D&&a.dateString>=E&&a.dateString<=D?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:h})},[c,E,D]);return(0,R.jsx)(`div`,{ref:o,className:I.root,children:(0,R.jsx)(`div`,{className:I.body,children:(0,R.jsx)(ue,{isLoading:ee,isFetching:te,isError:m,isEmpty:n<=0||w.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:ne}]},empty:{icon:S,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,R.jsx)(ae,{}),children:(0,R.jsx)(`div`,{className:I.content,children:(0,R.jsx)(`div`,{ref:g,className:I.chartArea,children:(0,R.jsx)(oe,{pager:l?{canShowOlder:u,canShowNewer:d,showOlder:f,showNewer:p}:void 0,className:I.chartHost,children:(0,R.jsx)(x,{data:w,rowLabels:T,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:C,renderTooltip:ce,className:I.heatmap})})})})})})})}function L({attributes:e={}}){return(0,R.jsx)(v,{attributes:e,children:(0,R.jsx)(Ee,{})})}var R,z,De,B,V,Oe,ke,Ae=e((()=>{T(),C(),O(),i(),c(),n(),xe(),Ce(),R=r(),z=64,De=4,B=16,V=42,Oe=8,ke=44})),je,Me=e((()=>{l(),je={icon:o,attributes:[],example:{attributes:{}}}})),Ne,Pe,Fe,Ie,Le,Re,ze,Be=e((()=>{Ne=`jpa/post-traffic-activity`,Pe=`Traffic activity`,Fe=`Daily views for the post or page being viewed, as a calendar heatmap.`,Ie={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},Le=`stats`,Re=`framed`,ze={name:Ne,title:Pe,description:Fe,help:Ie,category:Le,presentation:Re}}));function Ve({hasPostScope:e,preset:t},n=!1){return{reportParams:{...E(n,t),...e?{post_id:W}:{}}}}function H(e){return(0,U.jsx)(L,{attributes:Ve(e)})}function He({hasPostScope:e,preset:t,...n}){return(0,U.jsx)(_e,{...n,widgetType:pe(ze,je),renderModule:Ue,renderComponent:L,attributes:Ve({hasPostScope:e,preset:t},!0)})}var U,W,Ue,G,We,K,q,J,Y,X,Z,Q,$;e((()=>{T(),le(),fe(),de(),be(),he(),Ae(),Me(),Be(),U=r(),ce(),W=779,Ue=`storybook/post-traffic-activity`,G=`stats/post/${W}`,We={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:L,tags:[`autodocs`],decorators:[ye],argTypes:{...ve,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},K={render:H,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[k]},q={render:H,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[k]},J={render:H,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[k]},Y={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[k],beforeEach:()=>(D(G,`loading`),()=>D(G,null))},X={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[k],beforeEach:()=>(D(G,`error`),()=>D(G,null))},Z={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[k],beforeEach:()=>(D(G,`empty`),()=>D(G,null))},Q={render:e=>(0,U.jsx)(He,{...e}),args:{...ge,widgetWidth:3,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...me,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}},$=[`Default`,`Paged`,`NoPostScope`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as Default,Z as Empty,X as Error,Y as Loading,J as NoPostScope,q as Paged,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,We as default};