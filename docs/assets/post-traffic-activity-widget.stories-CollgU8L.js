import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-DQe4AOzJ.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{t as i,y as a}from"./build-module-CT-mI-B8.js";import{Mu as o,bu as s,t as c,xn as l}from"./build-module-BI3_PVVO.js";import{Pt as ee,Sn as te,W as ne,in as u,qt as d,t as f,x as p,y as m}from"./date-fns-V6dsVcup.js";import{a as h,o as g}from"./heatmap-chart-CRHRPQle.js";import{Rt as re,dn as ie,pn as _,t as v}from"./src-5g9sGwvT.js";import{O as ae,W as oe,m as se,ot as y,tt as b,v as ce}from"./charts-provider-Dz_9KfQe.js";import{Q as x,X as S,Y as C,Z as le,ct as ue,lt as de,ot as fe,st as pe,t as w}from"./src-CwWcdYh9.js";import{t as me}from"./widget-state-CgiqWOxt.js";import{n as he}from"./use-element-size-B3nS-stj.js";import{a as ge}from"./metric-sparkline-skeleton-BmLQ7bjI.js";import{a as _e,o as ve,u as T}from"./widget-state-B6SJsJzX.js";import{i as ye,n as be}from"./calendar-heatmap-QOULTODC.js";import{n as xe,r as Se,t as Ce}from"./with-site-locale-Cycv7IqK.js";var E,D,O,k,A,j,M,we=e((()=>{E=`_root_1k3qu_3`,D=`_body_1k3qu_12`,O=`_content_1k3qu_3`,k=`_chartArea_1k3qu_29`,A=`_chartHost_1k3qu_43`,j=`_heatmap_1k3qu_50`,M={root:E,body:D,content:O,chartArea:k,chartHost:A,heatmap:j}}));function Te(e,t,n){let{data:r,isLoading:i,isFetching:a,isError:s,refetch:c}=re({postId:e,fields:[`data`]}),[l,f]=(0,o.useState)(0);(0,o.useEffect)(()=>{f(0)},[t.from,t.to,n]);let h=y(t.from),g=y(t.to),{days:ie,isPaged:_,canShowOlder:v}=(0,o.useMemo)(()=>{if(!h||!g||h>g)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=d(m(h),{weekStartsOn:1}),a=u(m(g),{weekStartsOn:1}),o=i<p(a,n-1),s=p(a,l*n),c=p(s,n-1);if(o&&c<i){c=i;let e=te(i,n-1);s=e<a?e:a}let f=m(g);return{days:ne({start:c,end:f<s?f:s}).map(e=>{let n=ee(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=h&&n<=g?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,h,g,l,n]),ae=(0,o.useCallback)(()=>{f(e=>v?e+1:e)},[v]),oe=(0,o.useCallback)(()=>{f(e=>Math.max(0,e-1))},[]);return{days:ie,isPaged:_,canShowOlder:v,canShowNewer:l>0,showOlder:ae,showNewer:oe,isLoading:i,isFetching:a,isError:s,hasData:!!r,refetch:c}}var Ee=e((()=>{v(),s(),f(),w()}));function De(e){return e?b({availWidth:e,cellWidth:F,cellGap:4,minColumns:I}):L}function Oe(e){return e?Math.max(z,Math.min(R,Math.floor((e-B)/7))):R}function ke(){let{reportParams:e}=ce(),n=ie(e.post_id),[r,i]=(0,o.useState)(),s=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);i(t=>t===e?t:e)}}),{days:c,isPaged:ee,canShowOlder:te,canShowNewer:ne,showOlder:u,showNewer:d,isLoading:f,isFetching:p,isError:m,refetch:re}=Te(n,e,De(r)*7),[_,v]=he(),se=Oe(v.height),{data:b,rowLabels:x}=h(c),S=y(e.from),C=y(e.to),le=(0,o.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=c[i*7+r];return(0,P.jsx)(be,{value:e,cellLabel:n,emptyLabel:a&&S&&C&&a.dateString>=S&&a.dateString<=C?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:oe,icon:l})},[c,S,C]);return(0,P.jsx)(`div`,{ref:s,className:M.root,children:(0,P.jsx)(`div`,{className:M.body,children:(0,P.jsx)(me,{isLoading:f,isFetching:p,isError:m,isEmpty:n<=0||b.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:re}]},empty:{description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,P.jsx)(ge,{}),children:(0,P.jsx)(`div`,{className:M.content,children:(0,P.jsx)(`div`,{ref:_,className:M.chartArea,children:(0,P.jsx)(ye,{pager:ee?{canShowOlder:te,canShowNewer:ne,showOlder:u,showNewer:d}:void 0,className:M.chartHost,children:(0,P.jsx)(g,{data:b,rowLabels:x,ariaLabel:ae(t(`Traffic activity`,`jetpack-premium-analytics-pkg`)),primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:se,renderTooltip:le,className:M.heatmap})})})})})})})}function N({attributes:e={}}){return(0,P.jsx)(se,{attributes:e,children:(0,P.jsx)(ke,{})})}var P,F,I,L,R,z,B,Ae=e((()=>{v(),w(),i(),s(),n(),c(),we(),Ee(),P=r(),F=64,I=4,L=16,R=42,z=8,B=44})),V,je,Me,Ne,Pe,Fe,Ie,Le,Re=e((()=>{V=`jpa/post-traffic-activity`,je=`jpa/calendar`,Me=`Traffic activity`,Ne=`Daily views for the post or page being viewed, as a calendar heatmap.`,Pe={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},Fe=`stats`,Ie=`framed`,Le={name:V,icon:je,title:Me,description:Ne,help:Pe,category:Fe,presentation:Ie}}));function ze({hasPostScope:e,preset:t},n=!1){return{reportParams:{..._(n,t),...e?{post_id:W}:{}}}}function H(e){return(0,U.jsx)(N,{attributes:ze(e)})}function Be({hasPostScope:e,preset:t,...n}){return(0,U.jsx)(pe,{...n,widgetType:le(Le),renderModule:Ve,renderComponent:N,attributes:ze({hasPostScope:e,preset:t},!0)})}var U,W,Ve,G,He,K,q,J,Y,X,Z,Q,$;e((()=>{v(),_e(),ue(),x(),Ce(),C(),Ae(),Re(),U=r(),ve(),W=779,Ve=`storybook/post-traffic-activity`,G=`stats/post/${W}`,He={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:N,tags:[`autodocs`],decorators:[Se],argTypes:{...xe,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},K={render:H,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[S]},q={render:H,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[S]},J={render:H,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[S]},Y={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(T(G,`loading`),()=>T(G,null))},X={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(T(G,`error`),()=>T(G,null))},Z={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(T(G,`empty`),()=>T(G,null))},Q={render:e=>(0,U.jsx)(Be,{...e}),args:{...fe,widgetWidth:3,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...de,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},$=[`Default`,`Paged`,`NoPostScope`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}}}))();export{K as Default,Z as Empty,X as Error,Y as Loading,J as NoPostScope,q as Paged,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,He as default};