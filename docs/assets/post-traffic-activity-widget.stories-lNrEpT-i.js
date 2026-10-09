import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,y as a}from"./build-module-Cs7QYUGY.js";import{Gu as o,Nu as s,Tn as c,t as l}from"./build-module-Cm3Kd3py.js";import{C as u,Ot as d,Sn as ee,T as f,ft as p,nt as te,t as m,yn as h}from"./date-fns-I6jayRk5.js";import{a as g,o as _}from"./heatmap-chart-BcT8lgzB.js";import{P as ne}from"./library-DTloIBum.js";import{t as v}from"./src-fQR6rGKL.js";import{Nt as re,Sn as y,t as b,wn as x}from"./src-BXGbBQuk.js";import{Y as ie,_ as S,rt as ae,ut as C,x as oe}from"./charts-provider-CPqqWd8T.js";import{n as se}from"./use-element-size-CfEB-Wu9.js";import{a as ce}from"./metric-sparkline-skeleton-DJZdvG2u.js";import{n as w,r as T,s as E}from"./register-report-mocks-HpcX_mM9.js";import{t as le}from"./widget-state-Ct82KwxU.js";import{i as ue,n as de}from"./calendar-heatmap-DVQ1iSsI.js";import{t as fe}from"./src-BO6UD8Zu.js";import{a as pe,g as me,h as he,i as ge,m as _e,n as ve,p as ye,r as D}from"./with-widget-canvas-Bkxis0Y9.js";import{n as be,r as xe,t as Se}from"./with-site-locale-DYVUgyWe.js";var O,k,A,j,M,N,P,Ce=e((()=>{O=`_root_1k3qu_3`,k=`_body_1k3qu_12`,A=`_content_1k3qu_3`,j=`_chartArea_1k3qu_29`,M=`_chartHost_1k3qu_43`,N=`_heatmap_1k3qu_50`,P={root:O,body:k,content:A,chartArea:j,chartHost:M,heatmap:N}}));function we(e,t,n){let{data:r,isLoading:i,isFetching:a,isError:s,refetch:c}=re({postId:e,fields:[`data`]}),[l,m]=(0,o.useState)(0);(0,o.useEffect)(()=>{m(0)},[t.from,t.to,n]);let g=C(t.from),_=C(t.to),{days:ne,isPaged:v,canShowOlder:y}=(0,o.useMemo)(()=>{if(!g||!_||g>_)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=h(u(g),{weekStartsOn:1}),a=p(u(_),{weekStartsOn:1}),o=i<f(a,n-1),s=f(a,l*n),c=f(s,n-1);if(o&&c<i){c=i;let e=ee(i,n-1);s=e<a?e:a}let m=u(_);return{days:d({start:c,end:m<s?m:s}).map(e=>{let n=te(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=g&&n<=_?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,g,_,l,n]),b=(0,o.useCallback)(()=>{m(e=>y?e+1:e)},[y]),x=(0,o.useCallback)(()=>{m(e=>Math.max(0,e-1))},[]);return{days:ne,isPaged:v,canShowOlder:y,canShowNewer:l>0,showOlder:b,showNewer:x,isLoading:i,isFetching:a,isError:s,hasData:!!r,refetch:c}}var Te=e((()=>{b(),s(),m(),fe()}));function Ee(e){return e?ae({availWidth:e,cellWidth:L,cellGap:4,minColumns:R}):z}function De(e){return e?Math.max(ke,Math.min(B,Math.floor((e-Ae)/7))):B}function Oe(){let{reportParams:e}=oe(),n=y(e.post_id),[r,i]=(0,o.useState)(),s=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);i(t=>t===e?t:e)}}),{days:l,isPaged:u,canShowOlder:d,canShowNewer:ee,showOlder:f,showNewer:p,isLoading:te,isFetching:m,isError:h,refetch:v}=we(n,e,Ee(r)*7),[re,b]=se(),x=De(b.height),{data:S,rowLabels:ae}=g(l),w=C(e.from),T=C(e.to),E=(0,o.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=l[i*7+r];return(0,I.jsx)(de,{value:e,cellLabel:n,emptyLabel:a&&w&&T&&a.dateString>=w&&a.dateString<=T?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:ie,icon:c})},[l,w,T]);return(0,I.jsx)(`div`,{ref:s,className:P.root,children:(0,I.jsx)(`div`,{className:P.body,children:(0,I.jsx)(le,{isLoading:te,isFetching:m,isError:h,isEmpty:n<=0||S.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:v}]},empty:{icon:ne,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,I.jsx)(ce,{}),children:(0,I.jsx)(`div`,{className:P.content,children:(0,I.jsx)(`div`,{ref:re,className:P.chartArea,children:(0,I.jsx)(ue,{pager:u?{canShowOlder:d,canShowNewer:ee,showOlder:f,showNewer:p}:void 0,className:P.chartHost,children:(0,I.jsx)(_,{data:S,rowLabels:ae,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:x,renderTooltip:E,className:P.heatmap})})})})})})})}function F({attributes:e={}}){return(0,I.jsx)(S,{attributes:e,children:(0,I.jsx)(Oe,{})})}var I,L,R,z,B,ke,Ae,je=e((()=>{b(),v(),fe(),i(),s(),n(),l(),Ce(),Te(),I=r(),L=64,R=4,z=16,B=42,ke=8,Ae=44})),Me,Ne=e((()=>{Me={attributes:[],example:{attributes:{}}}})),Pe,Fe,Ie,Le,Re,ze,Be,Ve,He=e((()=>{Pe=`jpa/post-traffic-activity`,Fe=`jpa/calendar`,Ie=`Traffic activity`,Le=`Daily views for the post or page being viewed, as a calendar heatmap.`,Re={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},ze=`stats`,Be=`framed`,Ve={name:Pe,icon:Fe,title:Ie,description:Le,help:Re,category:ze,presentation:Be}}));function Ue({hasPostScope:e,preset:t},n=!1){return{reportParams:{...x(n,t),...e?{post_id:U}:{}}}}function V(e){return(0,H.jsx)(F,{attributes:Ue(e)})}function We({hasPostScope:e,preset:t,...n}){return(0,H.jsx)(_e,{...n,widgetType:ge(Ve,Me),renderModule:Ge,renderComponent:F,attributes:Ue({hasPostScope:e,preset:t},!0)})}var H,U,Ge,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{b(),w(),he(),pe(),Se(),ve(),je(),Ne(),He(),H=r(),T(),U=779,Ge=`storybook/post-traffic-activity`,W=`stats/post/${U}`,G={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:F,tags:[`autodocs`],decorators:[xe],argTypes:{...be,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},K={render:V,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[D]},q={render:V,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[D]},J={render:V,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[D]},Y={render:V,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[D],beforeEach:()=>(E(W,`loading`),()=>E(W,null))},X={render:V,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[D],beforeEach:()=>(E(W,`error`),()=>E(W,null))},Z={render:V,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[D],beforeEach:()=>(E(W,`empty`),()=>E(W,null))},Q={render:e=>(0,H.jsx)(We,{...e}),args:{...ye,widgetWidth:3,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...me,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}},$=[`Default`,`Paged`,`NoPostScope`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as Default,Z as Empty,X as Error,Y as Loading,J as NoPostScope,q as Paged,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,G as default};