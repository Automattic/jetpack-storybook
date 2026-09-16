import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,y as a}from"./build-module-BTtYwVLI.js";import{Sl as o,Uu as s,ju as c,t as l}from"./build-module-2iv4IIRq.js";import{St as u,X as d,dn as ee,mn as te,ot as ne,t as f,x as p,y as m}from"./date-fns-CeH7Uo-X.js";import{G as h,Rn as g,b as re,g as _,mt as v}from"./hooks-mA3z50gB.js";import{i as y,r as ie}from"./heatmap-chart-Bdke2A3G.js";import{M as b,t as x}from"./src-C-E2d-Lb.js";import{$t as S,kn as ae,r as C,vt as w}from"./date-period-dropdown-Dwb4djg-.js";import{n as oe}from"./use-element-size-hh3Y94Cm.js";import{r as se}from"./metric-sparkline-skeleton--bn6bxPP.js";import{i as ce,o as le}from"./monthly-heatmap-BW92JFI8.js";import{i as T,r as ue,s as E}from"./register-report-mocks-Cz5967Ky.js";import{t as de}from"./widget-state-_olmMtkU.js";import{t as fe}from"./src-GGu9IYe5.js";import{a as pe,c as me,i as he,l as ge,n as _e,o as ve,r as D,s as ye}from"./with-widget-canvas-DukLvgS9.js";import{n as be,r as xe,t as Se}from"./with-site-locale-CuVqF-ng.js";var O,k,A,j,M,N,P,Ce=e((()=>{O=`_root_1k3qu_3`,k=`_body_1k3qu_12`,A=`_content_1k3qu_3`,j=`_chartArea_1k3qu_29`,M=`_chartHost_1k3qu_43`,N=`_heatmap_1k3qu_50`,P={root:O,body:k,content:A,chartArea:j,chartHost:M,heatmap:N}}));function we(e,t,n){let{data:r,isLoading:i,isFetching:a,isError:o,refetch:c}=w({postId:e,fields:[`data`]}),[l,f]=(0,s.useState)(0);(0,s.useEffect)(()=>{f(0)},[t.from,t.to,n]);let h=v(t.from),g=v(t.to),{days:re,isPaged:_,canShowOlder:y}=(0,s.useMemo)(()=>{if(!h||!g||h>g)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=ee(m(h),{weekStartsOn:1}),a=ne(m(g),{weekStartsOn:1}),o=i<p(a,n-1),s=p(a,l*n),c=p(s,n-1);if(o&&c<i){c=i;let e=te(i,n-1);s=e<a?e:a}let f=m(g);return{days:u({start:c,end:f<s?f:s}).map(e=>{let n=d(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=h&&n<=g?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,h,g,l,n]),ie=(0,s.useCallback)(()=>{f(e=>y?e+1:e)},[y]),b=(0,s.useCallback)(()=>{f(e=>Math.max(0,e-1))},[]);return{days:re,isPaged:_,canShowOlder:y,canShowNewer:l>0,showOlder:ie,showNewer:b,isLoading:i,isFetching:a,isError:o,hasData:!!r,refetch:c}}var Te=e((()=>{C(),c(),f(),fe()}));function Ee(e){return e?g({availWidth:e,cellWidth:L,cellGap:4,minColumns:R}):ke}function De(e){return e?Math.max(B,Math.min(z,Math.floor((e-V)/7))):z}function Oe(){let{reportParams:e}=re(),n=ae(e.post_id),[r,i]=(0,s.useState)(),o=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);i(t=>t===e?t:e)}}),{days:c,isPaged:l,canShowOlder:u,canShowNewer:d,showOlder:ee,showNewer:te,isLoading:ne,isFetching:f,isError:p,refetch:m}=we(n,e,Ee(r)*7),[g,_]=oe(),x=De(_.height),{data:S,rowLabels:C}=ie(c),w=v(e.from),T=v(e.to),ue=(0,s.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=c[i*7+r];return(0,I.jsx)(ce,{value:e,cellLabel:n,emptyLabel:a&&w&&T&&a.dateString>=w&&a.dateString<=T?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:h})},[c,w,T]);return(0,I.jsx)(`div`,{ref:o,className:P.root,children:(0,I.jsx)(`div`,{className:P.body,children:(0,I.jsx)(de,{isLoading:ne,isFetching:f,isError:p,isEmpty:n<=0||S.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:m}]},empty:{icon:b,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,I.jsx)(se,{}),children:(0,I.jsx)(`div`,{className:P.content,children:(0,I.jsx)(`div`,{ref:g,className:P.chartArea,children:(0,I.jsx)(le,{pager:l?{canShowOlder:u,canShowNewer:d,showOlder:ee,showNewer:te}:void 0,className:P.chartHost,children:(0,I.jsx)(y,{data:S,rowLabels:C,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:x,renderTooltip:ue,className:P.heatmap})})})})})})})}function F({attributes:e={}}){return(0,I.jsx)(_,{attributes:e,children:(0,I.jsx)(Oe,{})})}var I,L,R,ke,z,B,V,Ae=e((()=>{C(),x(),fe(),i(),c(),n(),Ce(),Te(),I=r(),L=64,R=4,ke=16,z=42,B=8,V=44})),je,Me=e((()=>{l(),je={icon:o,attributes:[],example:{attributes:{}}}})),Ne,Pe,Fe,Ie,Le,Re,ze,Be=e((()=>{Ne=`jpa/post-traffic-activity`,Pe=`Traffic activity`,Fe=`Daily views for the post or page being viewed, as a calendar heatmap.`,Ie={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},Le=`stats`,Re=`framed`,ze={name:Ne,title:Pe,description:Fe,help:Ie,category:Le,presentation:Re}}));function Ve({hasPostScope:e,preset:t},n=!1){return{reportParams:{...S(n,t),...e?{post_id:W}:{}}}}function H(e){return(0,U.jsx)(F,{attributes:Ve(e)})}function He({hasPostScope:e,preset:t,...n}){return(0,U.jsx)(ye,{...n,widgetType:he(ze,je),renderModule:Ue,renderComponent:F,attributes:Ve({hasPostScope:e,preset:t},!0)})}var U,W,Ue,G,We,K,q,J,Y,X,Z,Q,$;e((()=>{C(),ue(),me(),pe(),Se(),_e(),Ae(),Me(),Be(),U=r(),T(),W=779,Ue=`storybook/post-traffic-activity`,G=`stats/post/${W}`,We={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:F,tags:[`autodocs`],decorators:[xe],argTypes:{...be,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},K={render:H,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[D]},q={render:H,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[D]},J={render:H,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[D]},Y={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[D],beforeEach:()=>(E(G,`loading`),()=>E(G,null))},X={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[D],beforeEach:()=>(E(G,`error`),()=>E(G,null))},Z={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[D],beforeEach:()=>(E(G,`empty`),()=>E(G,null))},Q={render:e=>(0,U.jsx)(He,{...e}),args:{...ve,widgetWidth:3,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...ge,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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