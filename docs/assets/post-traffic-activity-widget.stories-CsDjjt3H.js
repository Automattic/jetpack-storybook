import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-BXs6jvWf.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{D as i,a}from"./build-module-CPyY8_lO.js";import{ou as o,t as s,vu as c,xn as l}from"./build-module-D8x1-0PG.js";import{An as u,Ht as ee,J as te,fn as ne,t as d,tn as f,x as p,y as m}from"./date-fns-BYhs6DQD.js";import{a as h,o as g}from"./heatmap-chart-EoJdw_D5.js";import{Gt as re,Sn as _,bn as ie,t as v}from"./src-CU_16BOb.js";import{At as y,H as ae,I as oe,J as se,yt as ce,zt as b}from"./charts-provider-DOirnpAA.js";import{t as le}from"./widget-state-DnbF8hrz.js";import{n as ue}from"./use-element-size-Dwg7_1on.js";import{i as x}from"./with-story-router-CI3ZTRlv.js";import{a as de}from"./metric-sparkline-skeleton-D--yuw66.js";import{n as S,r as C,s as w}from"./register-report-mocks-C2D4cGS-.js";import{i as fe,n as pe}from"./calendar-heatmap-DeBk_IKS.js";import{a as me,c as he,i as T,l as ge,o as _e,r as ve,s as ye,u as be}from"./with-widget-canvas-_EJfaAe7.js";import{n as xe,r as Se,t as Ce}from"./with-site-locale-CDMmojck.js";var E,D,O,k,A,j,M,we=e((()=>{E=`_root_1k3qu_3`,D=`_body_1k3qu_12`,O=`_content_1k3qu_3`,k=`_chartArea_1k3qu_29`,A=`_chartHost_1k3qu_43`,j=`_heatmap_1k3qu_50`,M={root:E,body:D,content:O,chartArea:k,chartHost:A,heatmap:j}}));function Te(e,t,n){let{data:r,isLoading:i,isFetching:a,isError:o,refetch:s}=re({postId:e,fields:[`data`]}),[l,d]=(0,c.useState)(0);(0,c.useEffect)(()=>{d(0)},[t.from,t.to,n]);let h=b(t.from),g=b(t.to),{days:_,isPaged:ie,canShowOlder:v}=(0,c.useMemo)(()=>{if(!h||!g||h>g)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=f(m(h),{weekStartsOn:1}),a=ne(m(g),{weekStartsOn:1}),o=i<p(a,n-1),s=p(a,l*n),c=p(s,n-1);if(o&&c<i){c=i;let e=u(i,n-1);s=e<a?e:a}let d=m(g);return{days:te({start:c,end:d<s?d:s}).map(e=>{let n=ee(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=h&&n<=g?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,h,g,l,n]),y=(0,c.useCallback)(()=>{d(e=>v?e+1:e)},[v]),ae=(0,c.useCallback)(()=>{d(e=>Math.max(0,e-1))},[]);return{days:_,isPaged:ie,canShowOlder:v,canShowNewer:l>0,showOlder:y,showNewer:ae,isLoading:i,isFetching:a,isError:o,hasData:!!r,refetch:s}}var Ee=e((()=>{v(),o(),d(),x()}));function De(e){return e?y({availWidth:e,cellWidth:F,cellGap:4,minColumns:I}):L}function Oe(e){return e?Math.max(z,Math.min(R,Math.floor((e-B)/7))):R}function ke(){let{reportParams:e}=ae(),n=se(),r=ie(e.post_id),[a,o]=(0,c.useState)(),s=i(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);o(t=>t===e?t:e)}}),{days:u,isPaged:ee,canShowOlder:te,canShowNewer:ne,showOlder:d,showNewer:f,isLoading:p,isFetching:m,isError:re,refetch:_}=Te(r,e,De(a)*7),[v,y]=ue(),oe=Oe(y.height),{data:x,rowLabels:S}=h(u),C=b(e.from),w=b(e.to),me=(0,c.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=u[i*7+r];return(0,P.jsx)(pe,{value:e,cellLabel:n,emptyLabel:a&&C&&w&&a.dateString>=C&&a.dateString<=w?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:ce,icon:l})},[u,C,w]);return(0,P.jsx)(`div`,{ref:s,className:M.root,children:(0,P.jsx)(`div`,{className:M.body,children:(0,P.jsx)(le,{isLoading:p,isFetching:m,isError:re,isEmpty:r<=0||x.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:_}]},empty:{description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,P.jsx)(de,{}),children:(0,P.jsx)(`div`,{className:M.content,children:(0,P.jsx)(`div`,{ref:v,className:M.chartArea,children:(0,P.jsx)(fe,{pager:ee?{canShowOlder:te,canShowNewer:ne,showOlder:d,showNewer:f}:void 0,className:M.chartHost,children:(0,P.jsx)(g,{data:x,rowLabels:S,ariaLabel:n,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:oe,renderTooltip:me,className:M.heatmap})})})})})})})}function N({attributes:e={}}){return(0,P.jsx)(oe,{attributes:e,children:(0,P.jsx)(ke,{})})}var P,F,I,L,R,z,B,Ae=e((()=>{v(),x(),a(),o(),n(),s(),we(),Ee(),P=r(),F=64,I=4,L=16,R=42,z=8,B=44})),V,je,Me,Ne,Pe,Fe,Ie,Le,Re=e((()=>{V=`jpa/post-traffic-activity`,je=`jpa/calendar`,Me=`Traffic activity`,Ne=`Daily views for the post or page being viewed, as a calendar heatmap.`,Pe={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},Fe=`stats`,Ie=`framed`,Le={name:V,icon:je,title:Me,description:Ne,help:Pe,category:Fe,presentation:Ie}}));function ze({hasPostScope:e,preset:t},n=!1){return{reportParams:{..._(n,t),...e?{post_id:W}:{}}}}function H(e){return(0,U.jsx)(N,{attributes:ze(e)})}function Be({hasPostScope:e,preset:t,...n}){return(0,U.jsx)(he,{...n,widgetType:me(Le),renderModule:Ve,renderComponent:N,attributes:ze({hasPostScope:e,preset:t},!0)})}var U,W,Ve,G,He,K,q,J,Y,X,Z,Q,$;e((()=>{v(),S(),ge(),_e(),Ce(),ve(),Ae(),Re(),U=r(),C(),W=779,Ve=`storybook/post-traffic-activity`,G=`stats/post/${W}`,He={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:N,tags:[`autodocs`],decorators:[Se],argTypes:{...xe,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},K={render:H,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[T]},q={render:H,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[T]},J={render:H,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[T]},Y={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[T],beforeEach:()=>(w(G,`loading`),()=>w(G,null))},X={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[T],beforeEach:()=>(w(G,`error`),()=>w(G,null))},Z={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[T],beforeEach:()=>(w(G,`empty`),()=>w(G,null))},Q={tags:[`widget-dashboard`],render:e=>(0,U.jsx)(Be,{...e}),args:{...ye,widgetWidth:3,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...be,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},$=[`Default`,`Paged`,`NoPostScope`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
  tags: ['widget-dashboard'],
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
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}}}))();export{K as Default,Z as Empty,X as Error,Y as Loading,J as NoPostScope,q as Paged,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,He as default};