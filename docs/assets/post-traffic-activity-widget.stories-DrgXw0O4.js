import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-sy00sX6O.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{t as i,y as a}from"./build-module-C1bSdN2H.js";import{ou as o,t as s,vu as c,xn as l}from"./build-module-CPdP9iK8.js";import{Pt as ee,Sn as te,W as u,in as d,qt as ne,t as f,x as p,y as m}from"./date-fns-V6dsVcup.js";import{B as h,I as g,Mt as _,Q as re,Tt as v,mt as y}from"./charts-provider-CQF40eTg.js";import{a as ie,o as ae}from"./heatmap-chart-CI3vvFZf.js";import{Ut as b,gn as oe,t as x,vn as S}from"./src-BwEQ_OJQ.js";import{t as se}from"./widget-state-C5-GuX-o.js";import{n as ce}from"./use-element-size-BtrJtMoi.js";import{i as C}from"./with-story-router-DkeR1qN6.js";import{a as le}from"./metric-sparkline-skeleton-D9sktiIx.js";import{n as w,r as T,s as E}from"./register-report-mocks-B-OTOegr.js";import{i as ue,n as de}from"./calendar-heatmap-B3LUn9Mb.js";import{a as fe,g as pe,h as me,i as he,m as ge,n as _e,p as ve,r as D}from"./with-widget-canvas-8ry8XA2Z.js";import{n as ye,r as be,t as xe}from"./with-site-locale-Cycv7IqK.js";var O,Se,Ce,we,Te,Ee,k,De=e((()=>{O=`_root_1k3qu_3`,Se=`_body_1k3qu_12`,Ce=`_content_1k3qu_3`,we=`_chartArea_1k3qu_29`,Te=`_chartHost_1k3qu_43`,Ee=`_heatmap_1k3qu_50`,k={root:O,body:Se,content:Ce,chartArea:we,chartHost:Te,heatmap:Ee}}));function Oe(e,t,n){let{data:r,isLoading:i,isFetching:a,isError:o,refetch:s}=b({postId:e,fields:[`data`]}),[l,f]=(0,c.useState)(0);(0,c.useEffect)(()=>{f(0)},[t.from,t.to,n]);let h=_(t.from),g=_(t.to),{days:re,isPaged:v,canShowOlder:y}=(0,c.useMemo)(()=>{if(!h||!g||h>g)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=ne(m(h),{weekStartsOn:1}),a=d(m(g),{weekStartsOn:1}),o=i<p(a,n-1),s=p(a,l*n),c=p(s,n-1);if(o&&c<i){c=i;let e=te(i,n-1);s=e<a?e:a}let f=m(g);return{days:u({start:c,end:f<s?f:s}).map(e=>{let n=ee(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=h&&n<=g?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,h,g,l,n]),ie=(0,c.useCallback)(()=>{f(e=>y?e+1:e)},[y]),ae=(0,c.useCallback)(()=>{f(e=>Math.max(0,e-1))},[]);return{days:re,isPaged:v,canShowOlder:y,canShowNewer:l>0,showOlder:ie,showNewer:ae,isLoading:i,isFetching:a,isError:o,hasData:!!r,refetch:s}}var ke=e((()=>{x(),o(),f(),C()}));function Ae(e){return e?v({availWidth:e,cellWidth:M,cellGap:4,minColumns:N}):P}function je(e){return e?Math.max(I,Math.min(F,Math.floor((e-L)/7))):F}function Me(){let{reportParams:e}=h(),n=oe(e.post_id),[r,i]=(0,c.useState)(),o=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);i(t=>t===e?t:e)}}),{days:s,isPaged:ee,canShowOlder:te,canShowNewer:u,showOlder:d,showNewer:ne,isLoading:f,isFetching:p,isError:m,refetch:g}=Oe(n,e,Ae(r)*7),[v,b]=ce(),x=je(b.height),{data:S,rowLabels:C}=ie(s),w=_(e.from),T=_(e.to),E=(0,c.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=s[i*7+r];return(0,j.jsx)(de,{value:e,cellLabel:n,emptyLabel:a&&w&&T&&a.dateString>=w&&a.dateString<=T?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:y,icon:l})},[s,w,T]);return(0,j.jsx)(`div`,{ref:o,className:k.root,children:(0,j.jsx)(`div`,{className:k.body,children:(0,j.jsx)(se,{isLoading:f,isFetching:p,isError:m,isEmpty:n<=0||S.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:g}]},empty:{description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(le,{}),children:(0,j.jsx)(`div`,{className:k.content,children:(0,j.jsx)(`div`,{ref:v,className:k.chartArea,children:(0,j.jsx)(ue,{pager:ee?{canShowOlder:te,canShowNewer:u,showOlder:d,showNewer:ne}:void 0,className:k.chartHost,children:(0,j.jsx)(ae,{data:S,rowLabels:C,ariaLabel:re(t(`Traffic activity`,`jetpack-premium-analytics-pkg`)),primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:x,renderTooltip:E,className:k.heatmap})})})})})})})}function A({attributes:e={}}){return(0,j.jsx)(g,{attributes:e,children:(0,j.jsx)(Me,{})})}var j,M,N,P,F,I,L,Ne=e((()=>{x(),C(),i(),o(),n(),s(),De(),ke(),j=r(),M=64,N=4,P=16,F=42,I=8,L=44})),R,z,B,V,Pe,Fe,Ie,Le,Re=e((()=>{R=`jpa/post-traffic-activity`,z=`jpa/calendar`,B=`Traffic activity`,V=`Daily views for the post or page being viewed, as a calendar heatmap.`,Pe={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},Fe=`stats`,Ie=`framed`,Le={name:R,icon:z,title:B,description:V,help:Pe,category:Fe,presentation:Ie}}));function ze({hasPostScope:e,preset:t},n=!1){return{reportParams:{...S(n,t),...e?{post_id:W}:{}}}}function H(e){return(0,U.jsx)(A,{attributes:ze(e)})}function Be({hasPostScope:e,preset:t,...n}){return(0,U.jsx)(ge,{...n,widgetType:he(Le),renderModule:Ve,renderComponent:A,attributes:ze({hasPostScope:e,preset:t},!0)})}var U,W,Ve,G,He,K,q,J,Y,X,Z,Q,$;e((()=>{x(),w(),me(),fe(),xe(),_e(),Ne(),Re(),U=r(),T(),W=779,Ve=`storybook/post-traffic-activity`,G=`stats/post/${W}`,He={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:A,tags:[`autodocs`],decorators:[be],argTypes:{...ye,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},K={render:H,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[D]},q={render:H,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[D]},J={render:H,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[D]},Y={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[D],beforeEach:()=>(E(G,`loading`),()=>E(G,null))},X={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[D],beforeEach:()=>(E(G,`error`),()=>E(G,null))},Z={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[D],beforeEach:()=>(E(G,`empty`),()=>E(G,null))},Q={render:e=>(0,U.jsx)(Be,{...e}),args:{...ve,widgetWidth:3,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...pe,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},$=[`Default`,`Paged`,`NoPostScope`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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