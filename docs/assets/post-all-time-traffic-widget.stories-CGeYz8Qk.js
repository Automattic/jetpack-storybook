import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{i as r,n as i,t as a}from"./build-module-yGZutq_9.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{t as s,wl as c}from"./build-module-zwSmKorH.js";import{bt as l}from"./build-module-CRH4RouM.js";import{C as u,H as d,I as ee,J as te,L as ne,V as f,X as re,st as ie,y as p}from"./wp-date-settings-B7RT01wI.js";import{t as m}from"./src-KcgAjefs.js";import{r as ae}from"./heatmap-chart-BxDN03N2.js";import{M as oe,t as h}from"./src-DFNM1k7F.js";import{C as g,G as se,I as ce,j as _,m as v,p as y,t as b,u as le}from"./src-D_gpVFWl.js";import{t as ue,u as de}from"./src-C2BnX6Rq.js";import{Dn as fe,en as pe,i as x,yt as me}from"./date-filters-panel-Ccn_gPhW.js";import{r as he}from"./metric-sparkline-skeleton-BLdCPefi.js";import{D as ge,J as _e,Z as S,q as ve}from"./report-metric-BHcY1-V2.js";import{t as ye}from"./widget-state-CsjV8Rih.js";import{C as be,D as xe,E as Se,O as Ce,S as we,T as Te,b as Ee,k as De,t as Oe,w as ke,x as C}from"./src-DfyDuJLO.js";function Ae(e){return e===`average`?`average`:Ne}function je(e){return Object.entries(e).flatMap(([e,t])=>Object.keys(t.months).map(t=>w({year:Number(e),month:Number(t)-1})))}function Me(e,t,n,r){let i=e?.years??{},a=je(i);if(a.length===0||t===`average`&&!e?.averages)return[];let o=t===`average`?e.averages:i,s=Math.min(...a,r?w(r):1/0),c=Math.max(w(n),...a),l=Math.floor(s/12),u=Math.floor(c/12),d=[];for(let e=u;e>=l;e--){let n=o[String(e)],r=Array.from({length:12},(t,r)=>{let i=w({year:e,month:r});return i<s?`before`:i>c?`after`:n?.months[String(r+1)]??0}),i=(t===`average`?n?.overall:n?.total)??null;d.push({year:e,months:r,total:i})}return d}var Ne,w,Pe=t((()=>{Ne=`total`,w=({year:e,month:t})=>e*12+t}));function Fe(e,{lifeStartsAt:t,timeZone:n}){if(!e?.from||!e.to)return null;let r=t?ce(t,n):void 0,i=r&&r>e.from?r:e.from;return i.getTime()<=e.to.getTime()?{from:i,to:e.to}:null}function Ie(e,t){let{timeZone:n,now:r=new Date}=t;return Fe(g(_([e.year,e.month,1],n),`month`,r),t)}function Le(e,t){let{timeZone:n,now:r=new Date}=t;return Fe(g(_([e,0,1],n),`year`,r),t)}var Re=t((()=>{b()})),ze,T,E,Be=t((()=>{ze=`_root_16qty_3`,T=`_chart_16qty_14`,E={root:ze,chart:T}}));function Ve(e,t,n){let r=e[e.length-1],i=r?.months.findIndex(e=>typeof e==`number`)??-1;return!r||i<0||n&&r.year===n.year&&i===n.month?t:new Date(_([r.year,i,1],v()).getTime())}function He(e,t){let{data:n,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}=me({postId:e,fields:[`years`,`averages`,`post`]}),c=(0,D.useMemo)(()=>{let e=n?.post;return le(e?.post_date??(e?.post_date_gmt?`${e.post_date_gmt}Z`:void 0))},[n]),{rows:l,lifeStartsAt:u}=(0,D.useMemo)(()=>{let e=y(),r=c?y(c):void 0,i=r&&{year:r.getFullYear(),month:r.getMonth()},a=Me(n,t,{year:e.getFullYear(),month:e.getMonth()},i);return{rows:a,lifeStartsAt:Ve(a,c,i)}},[n,t,c]);return{rows:l,lifeStartsAt:u,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}}var D,Ue=t((()=>{x(),b(),D=e(n(),1),Pe()}));function We({metric:e}){let{reportParams:t}=u(),n=fe(t.post_id),{rows:r,lifeStartsAt:a,isLoading:o,isFetching:s,isError:c,error:d,refetch:te}=He(n,e),{onChange:f,onApply:p,timeZone:m}=re(),h=(0,k.useMemo)(()=>[...Array.from({length:12},(e,t)=>({label:de(t,{short:!0}),data:r.map(e=>{let n=e.months[t];return typeof n==`number`?{value:n}:{value:null,placeholder:!0}})})),{label:i(`Totals`,`jetpack-premium-analytics-pkg`),summary:!0,data:r.map(e=>({value:e.total}))}],[r]),g=(0,k.useCallback)(e=>{let t=r[Number(e.getAttribute(`data-row`))];if(!t)return;let n=Number(e.getAttribute(`data-column`)),i={lifeStartsAt:a,timeZone:m},o=h[n]?.summary?Le(t.year,i):Ie({year:t.year,month:n},i);o&&(f(o,se),p())},[r,h,a,m,f,p]),ce=(0,k.useCallback)(e=>{let t=e.target.closest(j);t&&g(t)},[g]),_=(0,k.useCallback)(e=>{if(e.key!==`Enter`&&e.key!==` `)return;let t=e.target.closest(`[role="grid"]`)?.getAttribute(`aria-activedescendant`),n=t?document.getElementById(t):null;n&&e.currentTarget.contains(n)&&n.matches(j)&&(e.preventDefault(),g(n))},[g]),v=c&&r.length===0,y=(0,k.useMemo)(()=>r.map(e=>String(e.year)),[r]),b=(0,k.useCallback)(({value:t,columnLabel:n,rowLabel:r,column:a})=>(0,A.jsx)(ge,{value:t,cellLabel:h[a]?.summary?r??``:`${n??``} ${r??``}`.trim(),emptyLabel:i(`No views`,`jetpack-premium-analytics-pkg`),formatValue:e===`average`?ee:ne}),[e,h]);return(0,A.jsx)(ye,{isLoading:o,isFetching:s,isError:v,isEmpty:n<=0||r.length===0,error:v?ie(d,{retryDescription:i(`We couldn't load this post's traffic. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:te}):null,empty:{icon:oe,description:i(n>0?`No views yet.`:`Open a post or page report to see its all-time traffic here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(he,{}),children:(0,A.jsx)(`div`,{className:E.root,onClick:ce,onKeyDown:_,children:(0,A.jsx)(ae,{data:h,rowLabels:y,minCellWidth:Ge,minCellHeight:Ke,maxCellHeight:qe,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,renderTooltip:b,className:E.chart,children:(0,A.jsx)(l,{direction:`row`,justify:`center`,children:(0,A.jsx)(ae.Legend,{lessLabel:i(e===`average`?`Fewer views per day`:`Fewer views`,`jetpack-premium-analytics-pkg`),moreLabel:i(e===`average`?`More views per day`:`More views`,`jetpack-premium-analytics-pkg`)})})})})})}function O({attributes:e={}}){return(0,A.jsx)(p,{attributes:e,children:(0,A.jsx)(We,{metric:Ae(e.metric)})})}var k,A,Ge,Ke,qe,j,Je=t((()=>{x(),b(),m(),ue(),h(),te(),Oe(),a(),k=e(n(),1),Pe(),Re(),Be(),Ue(),A=o(),Ge=56,Ke=28,qe=40,j=`[role="gridcell"][data-column][data-row]`})),M,Ye=t((()=>{f(),a(),s(),M={icon:c,attributes:[{id:`metric`,label:r(`Metric`,`label for the views metric selector`,`jetpack-premium-analytics-pkg`),type:`text`,relevance:`high`,Edit:d,elements:[{value:`total`,label:i(`Total views`,`jetpack-premium-analytics-pkg`)},{value:`average`,label:i(`Daily average`,`jetpack-premium-analytics-pkg`)}]}],example:{attributes:{metric:`total`}}}})),N,P,F,I,L,R,Xe,Ze=t((()=>{N=`jpa/post-all-time-traffic`,P=`All-time traffic`,F=`Every month of views for the post or page being viewed, across its whole life.`,I={content:`Every month of views for the post or page being viewed, shaded by how it compares to the rest. Always the full history: the period above doesn't narrow it. Pick a month to read the rest of the page over it. Daily average leaves the current day out, as the classic Stats table does.`},L=`stats`,R=`framed`,Xe={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function Qe({hasPostScope:e,metric:t},n=!1){return{metric:t,reportParams:{...pe(n),...e?{post_id:V}:{}}}}function z(e){return(0,B.jsx)(O,{attributes:Qe(e)})}function $e({hasPostScope:e,metric:t,...n}){return(0,B.jsx)(Te,{...n,widgetType:we(Xe,M),renderModule:et,renderComponent:O,attributes:Qe({hasPostScope:e,metric:t},!0)})}var B,V,et,H,U,W,tt,G,K,q,J,Y,X,Z,Q,$;t((()=>{x(),ve(),Se(),be(),Ce(),Ee(),Je(),Ye(),Ze(),B=o(),_e(),V=779,et=`storybook/post-all-time-traffic`,H=`stats/post/${V}`,U={control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},W={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},tt={title:`Packages/Premium Analytics/Widgets/PostAllTimeTraffic`,component:O,tags:[`autodocs`],decorators:[De],argTypes:{hasPostScope:U,metric:W},parameters:{docs:{description:{component:"The \"All-time traffic\" widget: every month of the scoped post's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the post's whole life, whatever period the page shows, and picking a month applies that month to the page. Without a post scope the widget renders a scopeless empty state."}}}},G={render:z,args:{hasPostScope:!0,metric:`total`},decorators:[C]},K={render:z,args:{hasPostScope:!0,metric:`average`},decorators:[C]},q={render:z,args:{hasPostScope:!1,metric:`total`},decorators:[C]},J={render:z,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(S(H,`loading`),()=>S(H,null))},Y={render:z,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(S(H,`error`),()=>S(H,null))},X={render:z,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(S(H,`error-retryable`),()=>S(H,null))},Z={render:z,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(S(H,`empty`),()=>S(H,null))},Q={render:e=>(0,B.jsx)($e,{...e}),args:{...ke,widgetWidth:3,widgetHeight:2,hasPostScope:!0,metric:`total`},argTypes:{...xe,hasPostScope:U,metric:W}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderPostAllTimeTraffic,
  args: {
    hasPostScope: true,
    metric: 'total'
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`Default — the scoped post's monthly views across its life.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderPostAllTimeTraffic,
  args: {
    hasPostScope: true,
    metric: 'average'
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`DailyAverage — the same table under the Daily average metric: each cell is
the month's views per day, and the scale and tooltips say so.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderPostAllTimeTraffic,
  args: {
    hasPostScope: false,
    metric: 'total'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`NoPostScope — the widget without a \`post_id\` report param, as when added
outside a post detail page. Renders the scopeless empty state without
firing a stats request.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`Loading — the first fetch is still in flight, so the widget shows its
heatmap skeleton. The mock is forced to never resolve for this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`Error — the fetch failed with a permission 403: neutral copy, no retry.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:"ErrorRetryable — the proxy's `no_connection` 403, which can heal after\nreconnecting, so the widget offers a Retry action.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Empty — a scoped post the endpoint has no yearly stats for.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}},$=[`Default`,`DailyAverage`,`NoPostScope`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as DailyAverage,G as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,q as NoPostScope,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,tt as default};