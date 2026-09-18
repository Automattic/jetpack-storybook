import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,y as a}from"./build-module-BTtYwVLI.js";import{Sl as o,Uu as s,ju as c,t as l}from"./build-module-2iv4IIRq.js";import{St as ee,X as u,dn as d,mn as te,ot as ne,t as f,x as p,y as m}from"./date-fns-CeH7Uo-X.js";import{G as h,Z as g,bt as _,m as v,v as re}from"./hooks-BJxRUOt9.js";import{a as y,o as b}from"./heatmap-chart-C4W_Munm.js";import{M as x,t as S}from"./src-C-E2d-Lb.js";import{Mn as ie,bt as C,r as w,tn as T}from"./date-period-dropdown-CVjEXpo_.js";import{n as ae}from"./use-element-size-hh3Y94Cm.js";import{a as oe}from"./metric-sparkline-skeleton-BkS3SrJN.js";import{i as se,n as ce}from"./calendar-heatmap-BB8WxK2i.js";import{c as E,i as le,r as ue}from"./register-report-mocks-CQIxSdXf.js";import{t as de}from"./widget-state-CvBoIkua.js";import{t as D}from"./src-BOq6qKHJ.js";import{a as fe,c as pe,i as me,l as he,n as ge,o as _e,r as O,s as ve}from"./with-widget-canvas-CGGdJm6r.js";import{n as ye,r as be,t as xe}from"./with-site-locale-CuVqF-ng.js";var k,A,j,M,N,P,F,Se=e((()=>{k=`_root_1k3qu_3`,A=`_body_1k3qu_12`,j=`_content_1k3qu_3`,M=`_chartArea_1k3qu_29`,N=`_chartHost_1k3qu_43`,P=`_heatmap_1k3qu_50`,F={root:k,body:A,content:j,chartArea:M,chartHost:N,heatmap:P}}));function Ce(e,t,n){let{data:r,isLoading:i,isFetching:a,isError:o,refetch:c}=C({postId:e,fields:[`data`]}),[l,f]=(0,s.useState)(0);(0,s.useEffect)(()=>{f(0)},[t.from,t.to,n]);let h=_(t.from),g=_(t.to),{days:v,isPaged:re,canShowOlder:y}=(0,s.useMemo)(()=>{if(!h||!g||h>g)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=d(m(h),{weekStartsOn:1}),a=ne(m(g),{weekStartsOn:1}),o=i<p(a,n-1),s=p(a,l*n),c=p(s,n-1);if(o&&c<i){c=i;let e=te(i,n-1);s=e<a?e:a}let f=m(g);return{days:ee({start:c,end:f<s?f:s}).map(e=>{let n=u(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=h&&n<=g?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,h,g,l,n]),b=(0,s.useCallback)(()=>{f(e=>y?e+1:e)},[y]),x=(0,s.useCallback)(()=>{f(e=>Math.max(0,e-1))},[]);return{days:v,isPaged:re,canShowOlder:y,canShowNewer:l>0,showOlder:b,showNewer:x,isLoading:i,isFetching:a,isError:o,hasData:!!r,refetch:c}}var we=e((()=>{w(),c(),f(),D()}));function Te(e){return e?g({availWidth:e,cellWidth:R,cellGap:4,minColumns:Oe}):z}function Ee(e){return e?Math.max(V,Math.min(B,Math.floor((e-ke)/7))):B}function De(){let{reportParams:e}=re(),n=ie(e.post_id),[r,i]=(0,s.useState)(),o=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);i(t=>t===e?t:e)}}),{days:c,isPaged:l,canShowOlder:ee,canShowNewer:u,showOlder:d,showNewer:te,isLoading:ne,isFetching:f,isError:p,refetch:m}=Ce(n,e,Te(r)*7),[g,v]=ae(),S=Ee(v.height),{data:C,rowLabels:w}=y(c),T=_(e.from),E=_(e.to),le=(0,s.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=c[i*7+r];return(0,L.jsx)(ce,{value:e,cellLabel:n,emptyLabel:a&&T&&E&&a.dateString>=T&&a.dateString<=E?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:h})},[c,T,E]);return(0,L.jsx)(`div`,{ref:o,className:F.root,children:(0,L.jsx)(`div`,{className:F.body,children:(0,L.jsx)(de,{isLoading:ne,isFetching:f,isError:p,isEmpty:n<=0||C.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:m}]},empty:{icon:x,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,L.jsx)(oe,{}),children:(0,L.jsx)(`div`,{className:F.content,children:(0,L.jsx)(`div`,{ref:g,className:F.chartArea,children:(0,L.jsx)(se,{pager:l?{canShowOlder:ee,canShowNewer:u,showOlder:d,showNewer:te}:void 0,className:F.chartHost,children:(0,L.jsx)(b,{data:C,rowLabels:w,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:S,renderTooltip:le,className:F.heatmap})})})})})})})}function I({attributes:e={}}){return(0,L.jsx)(v,{attributes:e,children:(0,L.jsx)(De,{})})}var L,R,Oe,z,B,V,ke,Ae=e((()=>{w(),S(),D(),i(),c(),n(),Se(),we(),L=r(),R=64,Oe=4,z=16,B=42,V=8,ke=44})),je,Me=e((()=>{l(),je={icon:o,attributes:[],example:{attributes:{}}}})),Ne,Pe,Fe,Ie,Le,Re,ze,Be=e((()=>{Ne=`jpa/post-traffic-activity`,Pe=`Traffic activity`,Fe=`Daily views for the post or page being viewed, as a calendar heatmap.`,Ie={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},Le=`stats`,Re=`framed`,ze={name:Ne,title:Pe,description:Fe,help:Ie,category:Le,presentation:Re}}));function Ve({hasPostScope:e,preset:t},n=!1){return{reportParams:{...T(n,t),...e?{post_id:W}:{}}}}function H(e){return(0,U.jsx)(I,{attributes:Ve(e)})}function He({hasPostScope:e,preset:t,...n}){return(0,U.jsx)(ve,{...n,widgetType:me(ze,je),renderModule:Ue,renderComponent:I,attributes:Ve({hasPostScope:e,preset:t},!0)})}var U,W,Ue,G,We,K,q,J,Y,X,Z,Q,$;e((()=>{w(),ue(),pe(),fe(),xe(),ge(),Ae(),Me(),Be(),U=r(),le(),W=779,Ue=`storybook/post-traffic-activity`,G=`stats/post/${W}`,We={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:I,tags:[`autodocs`],decorators:[be],argTypes:{...ye,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},K={render:H,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[O]},q={render:H,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[O]},J={render:H,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[O]},Y={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[O],beforeEach:()=>(E(G,`loading`),()=>E(G,null))},X={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[O],beforeEach:()=>(E(G,`error`),()=>E(G,null))},Z={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[O],beforeEach:()=>(E(G,`empty`),()=>E(G,null))},Q={render:e=>(0,U.jsx)(He,{...e}),args:{..._e,widgetWidth:3,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...he,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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