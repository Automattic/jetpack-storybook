import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{i as r,n as i,t as a}from"./build-module-yGZutq_9.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{t as s,wl as c}from"./build-module-zwSmKorH.js";import{bt as l}from"./build-module-CpMuGSvV.js";import{C as u,H as d,I as ee,J as f,L as te,V as p,X as ne,st as re,y as m}from"./wp-date-settings-CDzhsiCV.js";import{t as h}from"./src-BYnBLf91.js";import{a as ie}from"./heatmap-chart-DhyXi4Ra.js";import{M as ae,t as g}from"./src-DFNM1k7F.js";import{C as _,G as oe,I as se,L as v,j as y,m as ce,p as b,t as x,u as le}from"./src-B477hvom.js";import{t as ue,u as de}from"./src-C9jVBzb8.js";import{Dn as fe,en as pe,i as S,yt as me}from"./date-filters-panel-CUUYRE5w.js";import{r as he}from"./metric-sparkline-skeleton-DQcGeQoF.js";import{D as ge,J as _e,Z as C,q as ve}from"./report-metric-BOLrE4zz.js";import{t as ye}from"./widget-state-DYQt-Mjy.js";import{C as be,D as xe,E as Se,O as Ce,S as we,T as Te,b as Ee,k as De,t as Oe,w as ke,x as w}from"./src-CtSkOtkK.js";function Ae(e){return e===`average`?`average`:Ne}function je(e){return Object.entries(e).flatMap(([e,t])=>Object.keys(t.months).map(t=>T({year:Number(e),month:Number(t)-1})))}function Me(e,t,n,r){let i=e?.years??{},a=je(i);if(a.length===0||t===`average`&&!e?.averages)return[];let o=t===`average`?e.averages:i,s=Math.min(...a,r?T(r):1/0),c=Math.max(T(n),...a),l=Math.floor(s/12),u=Math.floor(c/12),d=[];for(let e=u;e>=l;e--){let n=o[String(e)],r=Array.from({length:12},(t,r)=>{let i=T({year:e,month:r});return i<s?`before`:i>c?`after`:n?.months[String(r+1)]??0}),i=(t===`average`?n?.overall:n?.total)??null;d.push({year:e,months:r,total:i})}return d}var Ne,T,Pe=t((()=>{Ne=`total`,T=({year:e,month:t})=>e*12+t}));function Fe(e,{lifeStartsAt:t,timeZone:n}){if(!e?.from||!e.to)return null;let r=t?se(t,n):void 0,i=r&&r>e.from?r:e.from;return i.getTime()<=e.to.getTime()?{from:i,to:e.to}:null}function Ie(e,t){let{timeZone:n,now:r}=t;return Fe(_(y([e.year,e.month,1],n),`month`,v(r,n)),t)}function Le(e,t){let{timeZone:n,now:r}=t;return Fe(_(y([e,0,1],n),`year`,v(r,n)),t)}var Re=t((()=>{x()})),ze,Be,E,Ve=t((()=>{ze=`_root_16qty_3`,Be=`_chart_16qty_14`,E={root:ze,chart:Be}}));function He(e,t,n){let r=e[e.length-1],i=r?.months.findIndex(e=>typeof e==`number`)??-1;return!r||i<0||n&&r.year===n.year&&i===n.month?t:new Date(y([r.year,i,1],ce()).getTime())}function Ue(e,t){let{data:n,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}=me({postId:e,fields:[`years`,`averages`,`post`]}),c=(0,D.useMemo)(()=>{let e=n?.post;return le(e?.post_date??(e?.post_date_gmt?`${e.post_date_gmt}Z`:void 0))},[n]),{rows:l,lifeStartsAt:u}=(0,D.useMemo)(()=>{let e=b(),r=c?b(c):void 0,i=r&&{year:r.getFullYear(),month:r.getMonth()},a=Me(n,t,{year:e.getFullYear(),month:e.getMonth()},i);return{rows:a,lifeStartsAt:He(a,c,i)}},[n,t,c]);return{rows:l,lifeStartsAt:u,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}}var D,We=t((()=>{S(),x(),D=e(n(),1),Pe()}));function Ge({metric:e}){let{reportParams:t}=u(),n=fe(t.post_id),{rows:r,lifeStartsAt:a,isLoading:o,isFetching:s,isError:c,error:d,refetch:f}=Ue(n,e),{onChange:p,onApply:m,timeZone:h}=ne(),g=(0,k.useMemo)(()=>[...Array.from({length:12},(e,t)=>({label:de(t,{short:!0}),data:r.map(e=>{let n=e.months[t];return typeof n==`number`?{value:n}:{value:null,placeholder:!0}})})),{label:i(`Totals`,`jetpack-premium-analytics-pkg`),summary:!0,data:r.map(e=>({value:e.total}))}],[r]),_=(0,k.useCallback)(e=>{let t=r[Number(e.getAttribute(`data-row`))];if(!t)return;let n=Number(e.getAttribute(`data-column`)),i={lifeStartsAt:a,timeZone:h},o=g[n]?.summary?Le(t.year,i):Ie({year:t.year,month:n},i);o&&(p(o,oe),m())},[r,g,a,h,p,m]),se=(0,k.useCallback)(e=>{let t=e.target.closest(j);t&&_(t)},[_]),v=(0,k.useCallback)(e=>{if(e.key!==`Enter`&&e.key!==` `)return;let t=e.target.closest(`[role="grid"]`)?.getAttribute(`aria-activedescendant`),n=t?document.getElementById(t):null;n&&e.currentTarget.contains(n)&&n.matches(j)&&(e.preventDefault(),_(n))},[_]),y=c&&r.length===0,ce=(0,k.useMemo)(()=>r.map(e=>String(e.year)),[r]),b=(0,k.useCallback)(({value:t,columnLabel:n,rowLabel:r,column:a})=>(0,A.jsx)(ge,{value:t,cellLabel:g[a]?.summary?r??``:`${n??``} ${r??``}`.trim(),emptyLabel:i(`No views`,`jetpack-premium-analytics-pkg`),formatValue:e===`average`?ee:te}),[e,g]);return(0,A.jsx)(ye,{isLoading:o,isFetching:s,isError:y,isEmpty:n<=0||r.length===0,error:y?re(d,{retryDescription:i(`We couldn't load this post's traffic. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:f}):null,empty:{icon:ae,description:i(n>0?`No views yet.`:`Open a post or page report to see its all-time traffic here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(he,{}),children:(0,A.jsx)(`div`,{className:E.root,onClick:se,onKeyDown:v,children:(0,A.jsx)(ie,{data:g,rowLabels:ce,minCellWidth:Ke,minCellHeight:qe,maxCellHeight:Je,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,renderTooltip:b,className:E.chart,children:(0,A.jsx)(l,{direction:`row`,justify:`center`,children:(0,A.jsx)(ie.Legend,{lessLabel:i(e===`average`?`Fewer views per day`:`Fewer views`,`jetpack-premium-analytics-pkg`),moreLabel:i(e===`average`?`More views per day`:`More views`,`jetpack-premium-analytics-pkg`)})})})})})}function O({attributes:e={}}){return(0,A.jsx)(m,{attributes:e,children:(0,A.jsx)(Ge,{metric:Ae(e.metric)})})}var k,A,Ke,qe,Je,j,Ye=t((()=>{S(),x(),h(),ue(),g(),f(),Oe(),a(),k=e(n(),1),Pe(),Re(),Ve(),We(),A=o(),Ke=56,qe=28,Je=40,j=`[role="gridcell"][data-column][data-row]`})),M,Xe=t((()=>{p(),a(),s(),M={icon:c,attributes:[{id:`metric`,label:r(`Metric`,`label for the views metric selector`,`jetpack-premium-analytics-pkg`),type:`text`,relevance:`high`,Edit:d,elements:[{value:`total`,label:i(`Total views`,`jetpack-premium-analytics-pkg`)},{value:`average`,label:i(`Daily average`,`jetpack-premium-analytics-pkg`)}]}],example:{attributes:{metric:`total`}}}})),N,P,F,I,L,R,z,Ze=t((()=>{N=`jpa/post-all-time-traffic`,P=`All-time traffic`,F=`Every month of views for the post or page being viewed, across its whole life.`,I={content:`Every month of views for the post or page being viewed, shaded by how it compares to the rest. Always the full history: the period above doesn't narrow it. Pick a month to read the rest of the page over it. Daily average leaves the current day out, as the classic Stats table does.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function Qe({hasPostScope:e,metric:t},n=!1){return{metric:t,reportParams:{...pe(n),...e?{post_id:H}:{}}}}function B(e){return(0,V.jsx)(O,{attributes:Qe(e)})}function $e({hasPostScope:e,metric:t,...n}){return(0,V.jsx)(Te,{...n,widgetType:we(z,M),renderModule:et,renderComponent:O,attributes:Qe({hasPostScope:e,metric:t},!0)})}var V,H,et,U,W,G,tt,K,q,J,Y,X,Z,Q,$,nt;t((()=>{S(),ve(),Se(),be(),Ce(),Ee(),Ye(),Xe(),Ze(),V=o(),_e(),H=779,et=`storybook/post-all-time-traffic`,U=`stats/post/${H}`,W={control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},G={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},tt={title:`Packages/Premium Analytics/Widgets/PostAllTimeTraffic`,component:O,tags:[`autodocs`],decorators:[De],argTypes:{hasPostScope:W,metric:G},parameters:{docs:{description:{component:"The \"All-time traffic\" widget: every month of the scoped post's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the post's whole life, whatever period the page shows, and picking a month applies that month to the page. Without a post scope the widget renders a scopeless empty state."}}}},K={render:B,args:{hasPostScope:!0,metric:`total`},decorators:[w]},q={render:B,args:{hasPostScope:!0,metric:`average`},decorators:[w]},J={render:B,args:{hasPostScope:!1,metric:`total`},decorators:[w]},Y={render:B,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(C(U,`loading`),()=>C(U,null))},X={render:B,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(C(U,`error`),()=>C(U,null))},Z={render:B,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(C(U,`error-retryable`),()=>C(U,null))},Q={render:B,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(C(U,`empty`),()=>C(U,null))},$={render:e=>(0,V.jsx)($e,{...e}),args:{...ke,widgetWidth:3,widgetHeight:2,hasPostScope:!0,metric:`total`},argTypes:{...xe,hasPostScope:W,metric:G}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderPostAllTimeTraffic,
  args: {
    hasPostScope: true,
    metric: 'total'
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`Default — the scoped post's monthly views across its life.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderPostAllTimeTraffic,
  args: {
    hasPostScope: true,
    metric: 'average'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`DailyAverage — the same table under the Daily average metric: each cell is
the month's views per day, and the scale and tooltips say so.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderPostAllTimeTraffic,
  args: {
    hasPostScope: false,
    metric: 'total'
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`NoPostScope — the widget without a \`post_id\` report param, as when added
outside a post detail page. Renders the scopeless empty state without
firing a stats request.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderPostAllTimeTraffic,
  args: {
    hasPostScope: true,
    metric: 'total'
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
  render: renderPostAllTimeTraffic,
  args: {
    hasPostScope: true,
    metric: 'total'
  },
  // Off the shared autodocs page — path-keyed override; see setReportMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(POST_STATS_REQUEST_PATH, 'error');
    return () => setReportMockState(POST_STATS_REQUEST_PATH, null);
  }
}`,...X.parameters?.docs?.source},description:{story:`Error — the fetch failed with a permission 403: neutral copy, no retry.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderPostAllTimeTraffic,
  args: {
    hasPostScope: true,
    metric: 'total'
  },
  // Off the shared autodocs page — path-keyed override; see setReportMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(POST_STATS_REQUEST_PATH, 'error-retryable');
    return () => setReportMockState(POST_STATS_REQUEST_PATH, null);
  }
}`,...Z.parameters?.docs?.source},description:{story:"ErrorRetryable — the proxy's `no_connection` 403, which can heal after\nreconnecting, so the widget offers a Retry action.",...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: renderPostAllTimeTraffic,
  args: {
    hasPostScope: true,
    metric: 'total'
  },
  // Off the shared autodocs page — path-keyed override; see setReportMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(POST_STATS_REQUEST_PATH, 'empty');
    return () => setReportMockState(POST_STATS_REQUEST_PATH, null);
  }
}`,...Q.parameters?.docs?.source},description:{story:`Empty — a scoped post the endpoint has no yearly stats for.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => <PostAllTimeTrafficDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    widgetWidth: 3,
    widgetHeight: 2,
    hasPostScope: true,
    metric: 'total'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    hasPostScope: hasPostScopeArgType,
    metric: metricArgType
  }
}`,...$.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...$.parameters?.docs?.description}}},nt=[`Default`,`DailyAverage`,`NoPostScope`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as DailyAverage,K as Default,Q as Empty,X as Error,Z as ErrorRetryable,Y as Loading,J as NoPostScope,$ as WidgetDashboardWithWidget,nt as __namedExportsOrder,tt as default};