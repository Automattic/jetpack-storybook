import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,y as a}from"./build-module-BTtYwVLI.js";import{Sl as o,Uu as s,ju as c,t as l}from"./build-module-2iv4IIRq.js";import{St as ee,X as te,dn as u,mn as d,ot as ne,t as f,x as p,y as m}from"./date-fns-CeH7Uo-X.js";import{Un as h,b as g,g as _,q as re,yt as v}from"./hooks-BbY_7vAN.js";import{a as y,o as ie}from"./heatmap-chart-DIS7vrqJ.js";import{M as b,t as ae}from"./src-C-E2d-Lb.js";import{Mn as oe,bt as x,r as S,tn as C}from"./date-period-dropdown-BxD6jp0f.js";import{n as se}from"./use-element-size-hh3Y94Cm.js";import{r as ce}from"./metric-sparkline-skeleton-DhOOUYVI.js";import{i as le,o as ue}from"./monthly-heatmap-Bs-u8aFh.js";import{c as w,i as de,r as fe}from"./register-report-mocks-CMw_bmLU.js";import{t as pe}from"./widget-state-BVR-30j3.js";import{t as T}from"./src-VPmVMB9c.js";import{a as me,c as he,i as ge,l as _e,n as ve,o as ye,r as E,s as be}from"./with-widget-canvas-DM07quD6.js";import{n as xe,r as Se,t as Ce}from"./with-site-locale-CuVqF-ng.js";var D,O,k,A,j,M,N,we=e((()=>{D=`_root_1k3qu_3`,O=`_body_1k3qu_12`,k=`_content_1k3qu_3`,A=`_chartArea_1k3qu_29`,j=`_chartHost_1k3qu_43`,M=`_heatmap_1k3qu_50`,N={root:D,body:O,content:k,chartArea:A,chartHost:j,heatmap:M}}));function Te(e,t,n){let{data:r,isLoading:i,isFetching:a,isError:o,refetch:c}=x({postId:e,fields:[`data`]}),[l,f]=(0,s.useState)(0);(0,s.useEffect)(()=>{f(0)},[t.from,t.to,n]);let h=v(t.from),g=v(t.to),{days:_,isPaged:re,canShowOlder:y}=(0,s.useMemo)(()=>{if(!h||!g||h>g)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=u(m(h),{weekStartsOn:1}),a=ne(m(g),{weekStartsOn:1}),o=i<p(a,n-1),s=p(a,l*n),c=p(s,n-1);if(o&&c<i){c=i;let e=d(i,n-1);s=e<a?e:a}let f=m(g);return{days:ee({start:c,end:f<s?f:s}).map(e=>{let n=te(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=h&&n<=g?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,h,g,l,n]),ie=(0,s.useCallback)(()=>{f(e=>y?e+1:e)},[y]),b=(0,s.useCallback)(()=>{f(e=>Math.max(0,e-1))},[]);return{days:_,isPaged:re,canShowOlder:y,canShowNewer:l>0,showOlder:ie,showNewer:b,isLoading:i,isFetching:a,isError:o,hasData:!!r,refetch:c}}var Ee=e((()=>{S(),c(),f(),T()}));function De(e){return e?h({availWidth:e,cellWidth:I,cellGap:4,minColumns:L}):R}function Oe(e){return e?Math.max(B,Math.min(z,Math.floor((e-V)/7))):z}function ke(){let{reportParams:e}=g(),n=oe(e.post_id),[r,i]=(0,s.useState)(),o=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);i(t=>t===e?t:e)}}),{days:c,isPaged:l,canShowOlder:ee,canShowNewer:te,showOlder:u,showNewer:d,isLoading:ne,isFetching:f,isError:p,refetch:m}=Te(n,e,De(r)*7),[h,_]=se(),ae=Oe(_.height),{data:x,rowLabels:S}=y(c),C=v(e.from),w=v(e.to),de=(0,s.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=c[i*7+r];return(0,F.jsx)(le,{value:e,cellLabel:n,emptyLabel:a&&C&&w&&a.dateString>=C&&a.dateString<=w?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:re})},[c,C,w]);return(0,F.jsx)(`div`,{ref:o,className:N.root,children:(0,F.jsx)(`div`,{className:N.body,children:(0,F.jsx)(pe,{isLoading:ne,isFetching:f,isError:p,isEmpty:n<=0||x.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:m}]},empty:{icon:b,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,F.jsx)(ce,{}),children:(0,F.jsx)(`div`,{className:N.content,children:(0,F.jsx)(`div`,{ref:h,className:N.chartArea,children:(0,F.jsx)(ue,{pager:l?{canShowOlder:ee,canShowNewer:te,showOlder:u,showNewer:d}:void 0,className:N.chartHost,children:(0,F.jsx)(ie,{data:x,rowLabels:S,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:ae,renderTooltip:de,className:N.heatmap})})})})})})})}function P({attributes:e={}}){return(0,F.jsx)(_,{attributes:e,children:(0,F.jsx)(ke,{})})}var F,I,L,R,z,B,V,Ae=e((()=>{S(),ae(),T(),i(),c(),n(),we(),Ee(),F=r(),I=64,L=4,R=16,z=42,B=8,V=44})),je,Me=e((()=>{l(),je={icon:o,attributes:[],example:{attributes:{}}}})),Ne,Pe,Fe,Ie,Le,Re,ze,Be=e((()=>{Ne=`jpa/post-traffic-activity`,Pe=`Traffic activity`,Fe=`Daily views for the post or page being viewed, as a calendar heatmap.`,Ie={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},Le=`stats`,Re=`framed`,ze={name:Ne,title:Pe,description:Fe,help:Ie,category:Le,presentation:Re}}));function Ve({hasPostScope:e,preset:t},n=!1){return{reportParams:{...C(n,t),...e?{post_id:W}:{}}}}function H(e){return(0,U.jsx)(P,{attributes:Ve(e)})}function He({hasPostScope:e,preset:t,...n}){return(0,U.jsx)(be,{...n,widgetType:ge(ze,je),renderModule:Ue,renderComponent:P,attributes:Ve({hasPostScope:e,preset:t},!0)})}var U,W,Ue,G,We,K,q,J,Y,X,Z,Q,$;e((()=>{S(),fe(),he(),me(),Ce(),ve(),Ae(),Me(),Be(),U=r(),de(),W=779,Ue=`storybook/post-traffic-activity`,G=`stats/post/${W}`,We={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:P,tags:[`autodocs`],decorators:[Se],argTypes:{...xe,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},K={render:H,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[E]},q={render:H,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[E]},J={render:H,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[E]},Y={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[E],beforeEach:()=>(w(G,`loading`),()=>w(G,null))},X={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[E],beforeEach:()=>(w(G,`error`),()=>w(G,null))},Z={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[E],beforeEach:()=>(w(G,`empty`),()=>w(G,null))},Q={render:e=>(0,U.jsx)(He,{...e}),args:{...ye,widgetWidth:3,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{..._e,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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