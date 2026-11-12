import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-BXs6jvWf.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{D as i,a}from"./build-module-CPyY8_lO.js";import{ou as o,t as s,vu as c,xn as l}from"./build-module-D8x1-0PG.js";import{An as u,Ht as ee,J as d,fn as te,t as f,tn as p,x as m,y as h}from"./date-fns-BYhs6DQD.js";import{B as g,I as _,It as v,K as ne,kt as y,vt as b}from"./charts-provider-BmHzZhpi.js";import{a as re,o as ie}from"./heatmap-chart-EoJdw_D5.js";import{Gt as x,Sn as S,bn as ae,t as C}from"./src-BcILQ8ng.js";import{t as oe}from"./widget-state-DnbF8hrz.js";import{n as se}from"./use-element-size-Dwg7_1on.js";import{t as w}from"./src-CInHWJwC.js";import{a as ce}from"./metric-sparkline-skeleton-D--yuw66.js";import{n as le,r as T,s as E}from"./register-report-mocks-DEKgkFm4.js";import{i as ue,n as de}from"./calendar-heatmap-DeBk_IKS.js";import{a as D,c as fe,i as O,l as pe,o as me,r as he,s as ge,u as _e}from"./with-widget-canvas-C4Pi56Ui.js";import{n as ve,r as ye,t as be}from"./with-site-locale-CDMmojck.js";var xe,Se,Ce,we,Te,Ee,k,De=e((()=>{xe=`_root_1k3qu_3`,Se=`_body_1k3qu_12`,Ce=`_content_1k3qu_3`,we=`_chartArea_1k3qu_29`,Te=`_chartHost_1k3qu_43`,Ee=`_heatmap_1k3qu_50`,k={root:xe,body:Se,content:Ce,chartArea:we,chartHost:Te,heatmap:Ee}}));function Oe(e,t,n){let{data:r,isLoading:i,isFetching:a,isError:o,refetch:s}=x({postId:e,fields:[`data`]}),[l,f]=(0,c.useState)(0);(0,c.useEffect)(()=>{f(0)},[t.from,t.to,n]);let g=v(t.from),_=v(t.to),{days:ne,isPaged:y,canShowOlder:b}=(0,c.useMemo)(()=>{if(!g||!_||g>_)return{days:[],isPaged:!1,canShowOlder:!1};let e=r?.data??[],t=new Map(e.map(e=>[e.date,e.views])),i=p(h(g),{weekStartsOn:1}),a=te(h(_),{weekStartsOn:1}),o=i<m(a,n-1),s=m(a,l*n),c=m(s,n-1);if(o&&c<i){c=i;let e=u(i,n-1);s=e<a?e:a}let f=h(_);return{days:d({start:c,end:f<s?f:s}).map(e=>{let n=ee(e,`yyyy-MM-dd`);return{dateString:n,value:(n>=g&&n<=_?t.get(n):void 0)||null}}),isPaged:o,canShowOlder:i<c}},[r,g,_,l,n]),re=(0,c.useCallback)(()=>{f(e=>b?e+1:e)},[b]),ie=(0,c.useCallback)(()=>{f(e=>Math.max(0,e-1))},[]);return{days:ne,isPaged:y,canShowOlder:b,canShowNewer:l>0,showOlder:re,showNewer:ie,isLoading:i,isFetching:a,isError:o,hasData:!!r,refetch:s}}var ke=e((()=>{C(),o(),f(),w()}));function Ae(e){return e?y({availWidth:e,cellWidth:M,cellGap:4,minColumns:N}):P}function je(e){return e?Math.max(I,Math.min(F,Math.floor((e-L)/7))):F}function Me(){let{reportParams:e}=g(),n=ne(),r=ae(e.post_id),[a,o]=(0,c.useState)(),s=i(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);o(t=>t===e?t:e)}}),{days:u,isPaged:ee,canShowOlder:d,canShowNewer:te,showOlder:f,showNewer:p,isLoading:m,isFetching:h,isError:_,refetch:y}=Oe(r,e,Ae(a)*7),[x,S]=se(),C=je(S.height),{data:w,rowLabels:le}=re(u),T=v(e.from),E=v(e.to),D=(0,c.useCallback)(({value:e,cellLabel:n,row:r,column:i})=>{let a=u[i*7+r];return(0,j.jsx)(de,{value:e,cellLabel:n,emptyLabel:a&&T&&E&&a.dateString>=T&&a.dateString<=E?t(`No views`,`jetpack-premium-analytics-pkg`):t(`No data`,`jetpack-premium-analytics-pkg`),formatValue:b,icon:l})},[u,T,E]);return(0,j.jsx)(`div`,{ref:s,className:k.root,children:(0,j.jsx)(`div`,{className:k.body,children:(0,j.jsx)(oe,{isLoading:m,isFetching:h,isError:_,isEmpty:r<=0||w.length===0,error:{description:t(`We couldn't load this traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:y}]},empty:{description:t(`Open a post or page report to see its traffic activity here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(ce,{}),children:(0,j.jsx)(`div`,{className:k.content,children:(0,j.jsx)(`div`,{ref:x,className:k.chartArea,children:(0,j.jsx)(ue,{pager:ee?{canShowOlder:d,canShowNewer:te,showOlder:f,showNewer:p}:void 0,className:k.chartHost,children:(0,j.jsx)(ie,{data:w,rowLabels:le,ariaLabel:n,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,maxCellWidth:64,maxCellHeight:C,renderTooltip:D,className:k.heatmap})})})})})})})}function A({attributes:e={}}){return(0,j.jsx)(_,{attributes:e,children:(0,j.jsx)(Me,{})})}var j,M,N,P,F,I,L,Ne=e((()=>{C(),w(),a(),o(),n(),s(),De(),ke(),j=r(),M=64,N=4,P=16,F=42,I=8,L=44})),R,z,B,V,H,Pe,Fe,Ie,Le=e((()=>{R=`jpa/post-traffic-activity`,z=`jpa/calendar`,B=`Traffic activity`,V=`Daily views for the post or page being viewed, as a calendar heatmap.`,H={content:`Daily views for the post or page being viewed, as a calendar heatmap.`},Pe=`stats`,Fe=`framed`,Ie={name:R,icon:z,title:B,description:V,help:H,category:Pe,presentation:Fe}}));function Re({hasPostScope:e,preset:t},n=!1){return{reportParams:{...S(n,t),...e?{post_id:G}:{}}}}function U(e){return(0,W.jsx)(A,{attributes:Re(e)})}function ze({hasPostScope:e,preset:t,...n}){return(0,W.jsx)(fe,{...n,widgetType:D(Ie),renderModule:Be,renderComponent:A,attributes:Re({hasPostScope:e,preset:t},!0)})}var W,G,Be,K,Ve,q,J,Y,X,Z,Q,$,He;e((()=>{C(),le(),pe(),me(),be(),he(),Ne(),Le(),W=r(),T(),G=779,Be=`storybook/post-traffic-activity`,K=`stats/post/${G}`,Ve={title:`Packages/Premium Analytics/Widgets/PostTrafficActivity`,component:A,tags:[`autodocs`],decorators:[ye],argTypes:{...ve,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}},parameters:{docs:{description:{component:`The "Traffic activity" widget: the scoped post's daily views over the dashboard date range as a calendar heatmap — the post detail Traffic view's activity card, replacing the legacy months table. Days without traffic stay blank cells, per the design, while the grid stays complete. Without a post scope the widget renders a scopeless empty state.`}}}},q={render:U,args:{hasPostScope:!0,preset:`last-30-days`},decorators:[O]},J={render:U,args:{hasPostScope:!0,preset:`last-365-days`},decorators:[O]},Y={render:U,args:{hasPostScope:!1,preset:`last-30-days`},decorators:[O]},X={render:U,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[O],beforeEach:()=>(E(K,`loading`),()=>E(K,null))},Z={render:U,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[O],beforeEach:()=>(E(K,`error`),()=>E(K,null))},Q={render:U,args:{hasPostScope:!0,preset:`last-30-days`},tags:[`!autodocs`],decorators:[O],beforeEach:()=>(E(K,`empty`),()=>E(K,null))},$={tags:[`widget-dashboard`],render:e=>(0,W.jsx)(ze,{...e}),args:{...ge,widgetWidth:3,widgetHeight:2,hasPostScope:!0,preset:`last-30-days`},argTypes:{..._e,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},preset:{control:`select`,options:[`last-30-days`,`last-365-days`],description:`Dashboard date range used to exercise single-page and paged layouts.`}}},He=[`Default`,`Paged`,`NoPostScope`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...$.parameters?.docs?.description}}}}))();export{q as Default,Q as Empty,Z as Error,X as Loading,Y as NoPostScope,J as Paged,$ as WidgetDashboardWithWidget,He as __namedExportsOrder,Ve as default};