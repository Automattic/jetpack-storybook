import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-yGZutq_9.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,y as a}from"./build-module-B1v_iyu9.js";import{Gu as o,Nu as s,t as c,wl as l}from"./build-module-zwSmKorH.js";import{St as ee,X as u,dn as d,mn as te,ot as f,t as p,x as m,y as h}from"./date-fns-CeH7Uo-X.js";import{C as g,Fn as _,W as ne,dt as v,y}from"./wp-date-settings-CW5FZTJ_.js";import{i as b,r as re}from"./heatmap-chart-BVfz1PU6.js";import{M as x,t as S}from"./src-DFNM1k7F.js";import{Dn as ie,en as C,i as w,yt as T}from"./date-filters-panel-0XPBEx-6.js";import{n as ae}from"./use-element-size-XoXca_wq.js";import{r as oe}from"./metric-sparkline-skeleton-BKUEvKhP.js";import{i as se,o as ce}from"./monthly-heatmap-6FnvSeLE.js";import{U as E,W as le,q as D}from"./report-metric-BTOc0d-U.js";import{t as ue}from"./widget-state-DMe2VpLE.js";import{C as de,D as fe,E as pe,S as me,T as he,b as ge,t as O,w as _e,x as k}from"./src-Do5nX7h4.js";import{n as ve,r as ye,t as be}from"./with-site-locale-CVenMu6B.js";var A,j,M,N,P,F,I,xe=e((()=>{A=`_root_1k3qu_3`,j=`_body_1k3qu_12`,M=`_content_1k3qu_3`,N=`_chartArea_1k3qu_29`,P=`_chartHost_1k3qu_43`,F=`_heatmap_1k3qu_50`,I={root:A,body:j,content:M,chartArea:N,chartHost:P,heatmap:F}}));function Se(e,t,n){let{data:r,isLoading:i,isFetching:a,isError:s,refetch:c}=T({postId:e,fields:[`data`]}),[l,p]=(0,o.useState)(0);(0,o.useEffect)(()=>{p(0)},[t.from,t.to,n]);let g=v(t.from),_=v(t.to),{days:ne,isPaged:y,canShowOlder:b}=(0,o.useMemo)(()=>{if(!g||!_||g>_)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=d(h(g),{weekStartsOn:1}),a=f(h(_),{weekStartsOn:1}),o=i<m(a,n-1),s=m(a,l*n),c=m(s,n-1);if(o&&c<i){c=i;let e=te(i,n-1);s=e<a?e:a}let p=h(_);return{days:ee({start:c,end:p<s?p:s}).map(e=>{let n=u(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=g&&n<=_?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,g,_,l,n]),re=(0,o.useCallback)(()=>{p(e=>b?e+1:e)},[b]),x=(0,o.useCallback)(()=>{p(e=>Math.max(0,e-1))},[]);return{days:ne,isPaged:y,canShowOlder:b,canShowNewer:l>0,showOlder:re,showNewer:x,isLoading:i,isFetching:a,isError:s,hasData:!!r,refetch:c}}var Ce=e((()=>{w(),s(),p(),O()}));function we(e){return e?_({availWidth:e,cellWidth:z,cellGap:4,minColumns:B}):V}function Te(e){return e?Math.max(De,Math.min(H,Math.floor((e-Oe)/7))):H}function Ee(){let{reportParams:e}=g(),n=ie(e.post_id),[r,i]=(0,o.useState)(),s=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);i(t=>t===e?t:e)}}),{days:c,isPaged:l,canShowOlder:ee,canShowNewer:u,showOlder:d,showNewer:te,isLoading:f,isFetching:p,isError:m,refetch:h}=Se(n,e,we(r)*7),[_,y]=ae(),S=Te(y.height),{data:C,rowLabels:w}=re(c),T=v(e.from),E=v(e.to),le=(0,o.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=c[i*7+r];return(0,R.jsx)(se,{value:e,cellLabel:n,emptyLabel:a&&T&&E&&a.dateString>=T&&a.dateString<=E?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:ne})},[c,T,E]);return(0,R.jsx)(`div`,{ref:s,className:I.root,children:(0,R.jsx)(`div`,{className:I.body,children:(0,R.jsx)(ue,{isLoading:f,isFetching:p,isError:m,isEmpty:n<=0||C.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:h}]},empty:{icon:x,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,R.jsx)(oe,{}),children:(0,R.jsx)(`div`,{className:I.content,children:(0,R.jsx)(`div`,{ref:_,className:I.chartArea,children:(0,R.jsx)(ce,{pager:l?{canShowOlder:ee,canShowNewer:u,showOlder:d,showNewer:te}:void 0,className:I.chartHost,children:(0,R.jsx)(b,{data:C,rowLabels:w,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:S,renderTooltip:le,className:I.heatmap})})})})})})})}function L({attributes:e={}}){return(0,R.jsx)(y,{attributes:e,children:(0,R.jsx)(Ee,{})})}var R,z,B,V,H,De,Oe,ke=e((()=>{w(),S(),O(),i(),s(),n(),xe(),Ce(),R=r(),z=64,B=4,V=16,H=42,De=8,Oe=44})),Ae,je=e((()=>{c(),Ae={icon:l,attributes:[],example:{attributes:{}}}})),Me,Ne,Pe,Fe,Ie,Le,Re,ze=e((()=>{Me=`jpa/post-traffic-activity`,Ne=`Traffic activity`,Pe=`Daily views for the post or page being viewed, as a calendar heatmap.`,Fe={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},Ie=`stats`,Le=`framed`,Re={name:Me,title:Ne,description:Pe,help:Fe,category:Ie,presentation:Le}}));function Be({hasPostScope:e,preset:t},n=!1){return{reportParams:{...C(n,t),...e?{post_id:G}:{}}}}function U(e){return(0,W.jsx)(L,{attributes:Be(e)})}function Ve({hasPostScope:e,preset:t,...n}){return(0,W.jsx)(he,{...n,widgetType:me(Re,Ae),renderModule:He,renderComponent:L,attributes:Be({hasPostScope:e,preset:t},!0)})}var W,G,He,K,Ue,q,J,Y,X,Z,Q,$,We;e((()=>{w(),E(),pe(),de(),be(),ge(),ke(),je(),ze(),W=r(),le(),G=779,He=`storybook/post-traffic-activity`,K=`stats/post/${G}`,Ue={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:L,tags:[`autodocs`],decorators:[ye],argTypes:{...ve,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},q={render:U,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[k]},J={render:U,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[k]},Y={render:U,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[k]},X={render:U,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[k],beforeEach:()=>(D(K,`loading`),()=>D(K,null))},Z={render:U,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[k],beforeEach:()=>(D(K,`error`),()=>D(K,null))},Q={render:U,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[k],beforeEach:()=>(D(K,`empty`),()=>D(K,null))},$={render:e=>(0,W.jsx)(Ve,{...e}),args:{..._e,widgetWidth:3,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...fe,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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