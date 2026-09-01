import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{h as i,t as a}from"./build-module-DuNGIx6S.js";import{t as o,y as s}from"./build-module-BcmRfNb-.js";import{bl as c,t as l}from"./build-module-CR6EsQjA.js";import{C as u,Ot as ee,T as d,ft as f,nt as p,t as m,wn as te,yn as h}from"./date-fns-C16LGmyW.js";import{b as g,g as _}from"./hooks-CCr23ATW.js";import{n as v,o as ne}from"./heatmap-chart-BYnr9xNh.js";import{M as y,t as b}from"./src-CldFJNXL.js";import{Zt as x,gt as S,t as C,wn as re}from"./src-CwHQugbh.js";import{s as w}from"./calendar-heatmap-window-KIJzItWz.js";import{n as ie}from"./use-element-size-Cd7Hy3NJ.js";import{D as T,c as ae}from"./chart-tooltip-BD7xGykv.js";import{r as oe}from"./metric-sparkline-skeleton-CGuH3BWu.js";import{D as se,G as E,K as ce,Y as D,k as le}from"./report-metric-D6Fv61ek.js";import{t as ue}from"./widget-state-DJmOe0SV.js";import{C as de,D as fe,E as pe,S as me,T as he,b as ge,t as O,w as _e,x as k}from"./src-C1FmDW_I.js";var A,j,M,N,P,F,I,ve=e((()=>{A=`_root_1k3qu_3`,j=`_body_1k3qu_12`,M=`_content_1k3qu_3`,N=`_chartArea_1k3qu_29`,P=`_chartHost_1k3qu_43`,F=`_heatmap_1k3qu_50`,I={root:A,body:j,content:M,chartArea:N,chartHost:P,heatmap:F}}));function ye(e,t,n){let{data:r,isLoading:a,isFetching:o,isError:s,refetch:c}=S({postId:e,fields:[`data`]}),[l,m]=(0,i.useState)(0);(0,i.useEffect)(()=>{m(0)},[t.from,t.to,n]);let g=T(t.from),_=T(t.to),{days:v,isPaged:ne,canShowOlder:y}=(0,i.useMemo)(()=>{if(!g||!_||g>_)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=h(u(g),{weekStartsOn:1}),a=f(u(_),{weekStartsOn:1}),o=i<d(a,n-1),s=d(a,l*n),c=d(s,n-1);if(o&&c<i){c=i;let e=te(i,n-1);s=e<a?e:a}let m=u(_);return{days:ee({start:c,end:m<s?m:s}).map(e=>{let n=p(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=g&&n<=_?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,g,_,l,n]),b=(0,i.useCallback)(()=>{m(e=>y?e+1:e)},[y]),x=(0,i.useCallback)(()=>{m(e=>Math.max(0,e-1))},[]);return{days:v,isPaged:ne,canShowOlder:y,canShowNewer:l>0,showOlder:b,showNewer:x,isLoading:a,isFetching:o,isError:s,hasData:!!r,refetch:c}}var be=e((()=>{C(),a(),m(),O()}));function xe(e){return e?w({availWidth:e,cellWidth:z,cellGap:4,minColumns:B}):we}function Se(e){return e?Math.max(Te,Math.min(V,Math.floor((e-Ee)/7))):V}function Ce(){let{reportParams:e}=g(),n=re(e.post_id),[r,a]=(0,i.useState)(),o=s(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);a(t=>t===e?t:e)}}),{days:c,isPaged:l,canShowOlder:u,canShowNewer:ee,showOlder:d,showNewer:f,isLoading:p,isFetching:m,isError:te,refetch:h}=ye(n,e,xe(r)*7),[_,b]=ie(),x=Se(b.height),{data:S,rowLabels:C}=(0,i.useMemo)(()=>ne(c),[c]),w=T(e.from),E=T(e.to),ce=(0,i.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=c[i*7+r];return(0,R.jsx)(se,{value:e,cellLabel:n,emptyLabel:a&&w&&E&&a.dateString>=w&&a.dateString<=E?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:ae})},[c,w,E]);return(0,R.jsx)(`div`,{ref:o,className:I.root,children:(0,R.jsx)(`div`,{className:I.body,children:(0,R.jsx)(ue,{isLoading:p,isFetching:m,isError:te,isEmpty:n<=0||S.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:h}]},empty:{icon:y,description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,R.jsx)(oe,{}),children:(0,R.jsx)(`div`,{className:I.content,children:(0,R.jsx)(`div`,{ref:_,className:I.chartArea,children:(0,R.jsx)(le,{pager:l?{canShowOlder:u,canShowNewer:ee,showOlder:d,showNewer:f}:void 0,className:I.chartHost,children:(0,R.jsx)(v,{data:S,rowLabels:C,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:x,renderTooltip:ce,className:I.heatmap})})})})})})})}function L({attributes:e={}}){return(0,R.jsx)(_,{attributes:e,children:(0,R.jsx)(Ce,{})})}var R,z,B,we,V,Te,Ee,De=e((()=>{C(),b(),O(),o(),a(),n(),ve(),be(),R=r(),z=64,B=4,we=16,V=42,Te=8,Ee=44})),Oe,ke=e((()=>{l(),Oe={icon:c,attributes:[],example:{attributes:{}}}})),Ae,je,Me,Ne,Pe,Fe,Ie,Le=e((()=>{Ae=`jpa/post-traffic-activity`,je=`Traffic activity`,Me=`Daily views for the post or page being viewed, as a calendar heatmap.`,Ne={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},Pe=`stats`,Fe=`framed`,Ie={name:Ae,title:je,description:Me,help:Ne,category:Pe,presentation:Fe}}));function Re({hasPostScope:e,preset:t},n=!1){return{reportParams:{...x(n,t),...e?{post_id:W}:{}}}}function H(e){return(0,U.jsx)(L,{attributes:Re(e)})}function ze({hasPostScope:e,preset:t,...n}){return(0,U.jsx)(he,{...n,widgetType:me(Ie,Oe),renderModule:Be,renderComponent:L,attributes:Re({hasPostScope:e,preset:t},!0)})}var U,W,Be,G,Ve,K,q,J,Y,X,Z,Q,$;e((()=>{C(),E(),pe(),de(),ge(),De(),ke(),Le(),U=r(),ce(),W=779,Be=`storybook/post-traffic-activity`,G=`stats/post/${W}`,Ve={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:L,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},K={render:H,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[k]},q={render:H,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[k]},J={render:H,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[k]},Y={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[k],beforeEach:()=>(D(G,`loading`),()=>D(G,null))},X={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[k],beforeEach:()=>(D(G,`error`),()=>D(G,null))},Z={render:H,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[k],beforeEach:()=>(D(G,`empty`),()=>D(G,null))},Q={render:e=>(0,U.jsx)(ze,{...e}),args:{..._e,widgetWidth:4,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{...fe,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
    widgetWidth: 4,
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