import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-DQe4AOzJ.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{t as i,y as a}from"./build-module-CT-mI-B8.js";import{Mu as o,bu as s,t as c,xn as l}from"./build-module-BI3_PVVO.js";import{Pt as ee,Sn as te,W as u,in as ne,qt as d,t as f,x as p,y as m}from"./date-fns-V6dsVcup.js";import{F as h,Z as g,jt as _,pt as re,wt as v,z as y}from"./charts-provider-DvCItWWe.js";import{a as ie,o as ae}from"./heatmap-chart-BMQ9osiL.js";import{Bt as oe,hn as b,pn as se,t as x}from"./src-DfQ3R5pV.js";import{t as ce}from"./widget-state-CzEbVQbD.js";import{n as le}from"./use-element-size-B3nS-stj.js";import{i as S}from"./with-story-router-CvK3wtLx.js";import{a as ue}from"./metric-sparkline-skeleton-BJHDL68Q.js";import{n as C,r as w,s as T}from"./register-report-mocks-xm2nLXrN.js";import{i as de,n as fe}from"./calendar-heatmap-CmFbt3Nk.js";import{a as pe,g as me,h as he,i as ge,m as _e,n as ve,p as ye,r as E}from"./with-widget-canvas-BvhxMQvd.js";import{n as be,r as xe,t as Se}from"./with-site-locale-Cycv7IqK.js";var D,O,k,A,j,M,N,Ce=e((()=>{D=`_root_1k3qu_3`,O=`_body_1k3qu_12`,k=`_content_1k3qu_3`,A=`_chartArea_1k3qu_29`,j=`_chartHost_1k3qu_43`,M=`_heatmap_1k3qu_50`,N={root:D,body:O,content:k,chartArea:A,chartHost:j,heatmap:M}}));function we(e,t,n){let{data:r,isLoading:i,isFetching:a,isError:s,refetch:c}=oe({postId:e,fields:[`data`]}),[l,f]=(0,o.useState)(0);(0,o.useEffect)(()=>{f(0)},[t.from,t.to,n]);let h=_(t.from),g=_(t.to),{days:re,isPaged:v,canShowOlder:y}=(0,o.useMemo)(()=>{if(!h||!g||h>g)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=d(m(h),{weekStartsOn:1}),a=ne(m(g),{weekStartsOn:1}),o=i<p(a,n-1),s=p(a,l*n),c=p(s,n-1);if(o&&c<i){c=i;let e=te(i,n-1);s=e<a?e:a}let f=m(g);return{days:u({start:c,end:f<s?f:s}).map(e=>{let n=ee(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=h&&n<=g?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,h,g,l,n]),ie=(0,o.useCallback)(()=>{f(e=>y?e+1:e)},[y]),ae=(0,o.useCallback)(()=>{f(e=>Math.max(0,e-1))},[]);return{days:re,isPaged:v,canShowOlder:y,canShowNewer:l>0,showOlder:ie,showNewer:ae,isLoading:i,isFetching:a,isError:s,hasData:!!r,refetch:c}}var Te=e((()=>{x(),s(),f(),S()}));function Ee(e){return e?v({availWidth:e,cellWidth:I,cellGap:4,minColumns:L}):R}function De(e){return e?Math.max(B,Math.min(z,Math.floor((e-V)/7))):z}function Oe(){let{reportParams:e}=y(),n=se(e.post_id),[r,i]=(0,o.useState)(),s=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);i(t=>t===e?t:e)}}),{days:c,isPaged:ee,canShowOlder:te,canShowNewer:u,showOlder:ne,showNewer:d,isLoading:f,isFetching:p,isError:m,refetch:h}=we(n,e,Ee(r)*7),[v,oe]=le(),b=De(oe.height),{data:x,rowLabels:S}=ie(c),C=_(e.from),w=_(e.to),T=(0,o.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=c[i*7+r];return(0,F.jsx)(fe,{value:e,cellLabel:n,emptyLabel:a&&C&&w&&a.dateString>=C&&a.dateString<=w?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:re,icon:l})},[c,C,w]);return(0,F.jsx)(`div`,{ref:s,className:N.root,children:(0,F.jsx)(`div`,{className:N.body,children:(0,F.jsx)(ce,{isLoading:f,isFetching:p,isError:m,isEmpty:n<=0||x.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:h}]},empty:{description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,F.jsx)(ue,{}),children:(0,F.jsx)(`div`,{className:N.content,children:(0,F.jsx)(`div`,{ref:v,className:N.chartArea,children:(0,F.jsx)(de,{pager:ee?{canShowOlder:te,canShowNewer:u,showOlder:ne,showNewer:d}:void 0,className:N.chartHost,children:(0,F.jsx)(ae,{data:x,rowLabels:S,ariaLabel:g(t(`Traffic activity`,`jetpack-premium-analytics-pkg`)),primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:b,renderTooltip:T,className:N.heatmap})})})})})})})}function P({attributes:e={}}){return(0,F.jsx)(h,{attributes:e,children:(0,F.jsx)(Oe,{})})}var F,I,L,R,z,B,V,ke=e((()=>{x(),S(),i(),s(),n(),c(),Ce(),Te(),F=r(),I=64,L=4,R=16,z=42,B=8,V=44})),Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re=e((()=>{Ae=`jpa/post-traffic-activity`,je=`jpa/calendar`,Me=`Traffic activity`,Ne=`Daily views for the post or page being viewed, as a calendar heatmap.`,Pe={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},Fe=`stats`,Ie=`framed`,Le={name:Ae,icon:je,title:Me,description:Ne,help:Pe,category:Fe,presentation:Ie}}));function ze({hasPostScope:e,preset:t},n=!1){return{reportParams:{...b(n,t),...e?{post_id:W}:{}}}}function H(e){return(0,U.jsx)(P,{attributes:ze(e)})}function Be({hasPostScope:e,preset:t,...n}){return(0,U.jsx)(_e,{...n,widgetType:ge(Le),renderModule:Ve,renderComponent:P,attributes:ze({hasPostScope:e,preset:t},!0)})}var U,W,Ve,G,He,K,q,J,Y,X,Z,Q,$;e((()=>{x(),C(),he(),pe(),Se(),ve(),ke(),Re(),U=r(),w(),W=779,Ve=`storybook/post-traffic-activity`,G=`stats/post/${W}`,He={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:P,tags:[`autodocs`],decorators:[xe],argTypes:{...be,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},K={render:H,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[E]},q={render:H,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[E]},J={render:H,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[E]},Y={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[E],beforeEach:()=>(T(G,`loading`),()=>T(G,null))},X={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[E],beforeEach:()=>(T(G,`error`),()=>T(G,null))},Z={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[E],beforeEach:()=>(T(G,`empty`),()=>T(G,null))},Q={render:e=>(0,U.jsx)(Be,{...e}),args:{...ye,widgetWidth:3,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...me,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},$=[`Default`,`Paged`,`NoPostScope`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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