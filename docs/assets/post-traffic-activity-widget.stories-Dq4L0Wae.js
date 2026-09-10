import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-yGZutq_9.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,y as a}from"./build-module-B1v_iyu9.js";import{Gu as o,Nu as s,t as c,wl as l}from"./build-module-zwSmKorH.js";import{St as u,X as ee,gn as d,ot as f,pn as te,t as p,x as m,y as h}from"./date-fns-BSWzdn8-.js";import{C as g,L as _,On as v,it as y,y as b}from"./wp-date-settings-BpBuF6Q7.js";import{n as x,o as ne}from"./heatmap-chart-BGT6Prky.js";import{M as re,t as S}from"./src-DFNM1k7F.js";import{Dn as ie,en as C,i as w,yt as T}from"./date-filters-panel-BesjwNyg.js";import{n as ae}from"./use-element-size-XoXca_wq.js";import{r as oe}from"./metric-sparkline-skeleton-DdaD9P6M.js";import{D as se,J as E,Z as D,k as ce,q as le}from"./report-metric-VOrPgISw.js";import{t as ue}from"./widget-state-D5So945o.js";import{C as de,D as fe,E as pe,S as me,T as he,b as ge,t as O,w as _e,x as k}from"./src-duY2T9f-.js";var A,j,M,N,P,F,I,ve=e((()=>{A=`_root_1k3qu_3`,j=`_body_1k3qu_12`,M=`_content_1k3qu_3`,N=`_chartArea_1k3qu_29`,P=`_chartHost_1k3qu_43`,F=`_heatmap_1k3qu_50`,I={root:A,body:j,content:M,chartArea:N,chartHost:P,heatmap:F}}));function ye(e,t,n){let{data:r,isLoading:i,isFetching:a,isError:s,refetch:c}=T({postId:e,fields:[`data`]}),[l,p]=(0,o.useState)(0);(0,o.useEffect)(()=>{p(0)},[t.from,t.to,n]);let g=y(t.from),_=y(t.to),{days:v,isPaged:b,canShowOlder:x}=(0,o.useMemo)(()=>{if(!g||!_||g>_)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=te(h(g),{weekStartsOn:1}),a=f(h(_),{weekStartsOn:1}),o=i<m(a,n-1),s=m(a,l*n),c=m(s,n-1);if(o&&c<i){c=i;let e=d(i,n-1);s=e<a?e:a}let p=h(_);return{days:u({start:c,end:p<s?p:s}).map(e=>{let n=ee(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=g&&n<=_?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,g,_,l,n]),ne=(0,o.useCallback)(()=>{p(e=>x?e+1:e)},[x]),re=(0,o.useCallback)(()=>{p(e=>Math.max(0,e-1))},[]);return{days:v,isPaged:b,canShowOlder:x,canShowNewer:l>0,showOlder:ne,showNewer:re,isLoading:i,isFetching:a,isError:s,hasData:!!r,refetch:c}}var be=e((()=>{w(),s(),p(),O()}));function xe(e){return e?v({availWidth:e,cellWidth:z,cellGap:4,minColumns:B}):we}function Se(e){return e?Math.max(Te,Math.min(V,Math.floor((e-Ee)/7))):V}function Ce(){let{reportParams:e}=g(),n=ie(e.post_id),[r,i]=(0,o.useState)(),s=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);i(t=>t===e?t:e)}}),{days:c,isPaged:l,canShowOlder:u,canShowNewer:ee,showOlder:d,showNewer:f,isLoading:te,isFetching:p,isError:m,refetch:h}=ye(n,e,xe(r)*7),[v,b]=ae(),S=Se(b.height),{data:C,rowLabels:w}=(0,o.useMemo)(()=>ne(c),[c]),T=y(e.from),E=y(e.to),D=(0,o.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=c[i*7+r];return(0,R.jsx)(se,{value:e,cellLabel:n,emptyLabel:a&&T&&E&&a.dateString>=T&&a.dateString<=E?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:_})},[c,T,E]);return(0,R.jsx)(`div`,{ref:s,className:I.root,children:(0,R.jsx)(`div`,{className:I.body,children:(0,R.jsx)(ue,{isLoading:te,isFetching:p,isError:m,isEmpty:n<=0||C.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:h}]},empty:{icon:re,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,R.jsx)(oe,{}),children:(0,R.jsx)(`div`,{className:I.content,children:(0,R.jsx)(`div`,{ref:v,className:I.chartArea,children:(0,R.jsx)(ce,{pager:l?{canShowOlder:u,canShowNewer:ee,showOlder:d,showNewer:f}:void 0,className:I.chartHost,children:(0,R.jsx)(x,{data:C,rowLabels:w,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:S,renderTooltip:D,className:I.heatmap})})})})})})})}function L({attributes:e={}}){return(0,R.jsx)(b,{attributes:e,children:(0,R.jsx)(Ce,{})})}var R,z,B,we,V,Te,Ee,De=e((()=>{w(),S(),O(),i(),s(),n(),ve(),be(),R=r(),z=64,B=4,we=16,V=42,Te=8,Ee=44})),Oe,ke=e((()=>{c(),Oe={icon:l,attributes:[],example:{attributes:{}}}})),Ae,je,Me,Ne,Pe,Fe,Ie,Le=e((()=>{Ae=`jpa/post-traffic-activity`,je=`Traffic activity`,Me=`Daily views for the post or page being viewed, as a calendar heatmap.`,Ne={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},Pe=`stats`,Fe=`framed`,Ie={name:Ae,title:je,description:Me,help:Ne,category:Pe,presentation:Fe}}));function Re({hasPostScope:e,preset:t},n=!1){return{reportParams:{...C(n,t),...e?{post_id:W}:{}}}}function H(e){return(0,U.jsx)(L,{attributes:Re(e)})}function ze({hasPostScope:e,preset:t,...n}){return(0,U.jsx)(he,{...n,widgetType:me(Ie,Oe),renderModule:Be,renderComponent:L,attributes:Re({hasPostScope:e,preset:t},!0)})}var U,W,Be,G,Ve,K,q,J,Y,X,Z,Q,$;e((()=>{w(),le(),pe(),de(),ge(),De(),ke(),Le(),U=r(),E(),W=779,Be=`storybook/post-traffic-activity`,G=`stats/post/${W}`,Ve={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:L,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},K={render:H,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[k]},q={render:H,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[k]},J={render:H,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[k]},Y={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[k],beforeEach:()=>(D(G,`loading`),()=>D(G,null))},X={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[k],beforeEach:()=>(D(G,`error`),()=>D(G,null))},Z={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[k],beforeEach:()=>(D(G,`empty`),()=>D(G,null))},Q={render:e=>(0,U.jsx)(ze,{...e}),args:{..._e,widgetWidth:3,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...fe,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}},$=[`Default`,`Paged`,`NoPostScope`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as Default,Z as Empty,X as Error,Y as Loading,J as NoPostScope,q as Paged,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Ve as default};