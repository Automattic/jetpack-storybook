import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{i as r,n as i,t as a}from"./build-module-yGZutq_9.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{t as s,wl as c}from"./build-module-zwSmKorH.js";import{gt as l}from"./build-module-By_JkFlY.js";import{C as u,H as d,I as ee,J as te,L as ne,V as f,X as re,st as ie,y as p}from"./wp-date-settings-CG6Lwco7.js";import{t as m}from"./src-C84mEG7D.js";import{r as ae}from"./heatmap-chart-CJHC-efI.js";import{M as oe,t as h}from"./src-DFNM1k7F.js";import{C as g,G as se,I as _,j as v,m as y,p as b,t as x,u as ce}from"./src-D_gpVFWl.js";import{t as le,u as ue}from"./src-DWVfr5GW.js";import{Dn as de,en as fe,i as S,yt as pe}from"./date-filters-panel-DkhWwSMu.js";import{r as me}from"./metric-sparkline-skeleton-tNIQ72Q6.js";import{D as he,G as ge,K as _e,Y as C}from"./report-metric-Cz5vkpwR.js";import{t as ve}from"./widget-state-0ABalMfe.js";import{C as ye,D as be,E as xe,O as Se,S as Ce,T as we,b as Te,k as Ee,t as De,w as Oe,x as w}from"./src-gbelDm7s.js";function ke(e){return e===`average`?`average`:T}function Ae(e){return Object.entries(e).flatMap(([e,t])=>Object.keys(t.months).map(t=>E({year:Number(e),month:Number(t)-1})))}function je(e,t,n,r){let i=e?.years??{},a=Ae(i);if(a.length===0||t===`average`&&!e?.averages)return[];let o=t===`average`?e.averages:i,s=Math.min(...a,r?E(r):1/0),c=Math.max(E(n),...a),l=Math.floor(s/12),u=Math.floor(c/12),d=[];for(let e=u;e>=l;e--){let t=o[String(e)],n=Array.from({length:12},(n,r)=>{let i=E({year:e,month:r});return i<s?`before`:i>c?`after`:t?.months[String(r+1)]??0});d.push({year:e,months:n})}return d}var T,E,D=t((()=>{T=`total`,E=({year:e,month:t})=>e*12+t}));function Me(e,t){let{lifeStartsAt:n,timeZone:r,now:i=new Date}=t,a=g(v([e.year,e.month,1],r),`month`,i);if(!a?.from||!a.to)return null;let o=n?_(n,r):void 0,s=o&&o>a.from?o:a.from;return s.getTime()<=a.to.getTime()?{from:s,to:a.to}:null}var Ne=t((()=>{x()})),O,k,A,Pe=t((()=>{O=`_root_qcbnv_3`,k=`_chart_qcbnv_14`,A={root:O,chart:k}}));function Fe(e,t,n){let r=e[e.length-1],i=r?.months.findIndex(e=>typeof e==`number`)??-1;return!r||i<0||n&&r.year===n.year&&i===n.month?t:new Date(v([r.year,i,1],y()).getTime())}function Ie(e,t){let{data:n,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}=pe({postId:e,fields:[`years`,`averages`,`post`]}),c=(0,j.useMemo)(()=>{let e=n?.post;return ce(e?.post_date??(e?.post_date_gmt?`${e.post_date_gmt}Z`:void 0))},[n]),{rows:l,lifeStartsAt:u}=(0,j.useMemo)(()=>{let e=b(),r=c?b(c):void 0,i=r&&{year:r.getFullYear(),month:r.getMonth()},a=je(n,t,{year:e.getFullYear(),month:e.getMonth()},i);return{rows:a,lifeStartsAt:Fe(a,c,i)}},[n,t,c]);return{rows:l,lifeStartsAt:u,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}}var j,Le=t((()=>{S(),x(),j=e(n(),1),D()}));function Re({metric:e}){let{reportParams:t}=u(),n=de(t.post_id),{rows:r,lifeStartsAt:a,isLoading:o,isFetching:s,isError:c,error:d,refetch:te}=Ie(n,e),{onChange:f,onApply:p,timeZone:m}=re(),h=(0,N.useCallback)(e=>{let t=r[Number(e.getAttribute(`data-row`))];if(!t)return;let n=Number(e.getAttribute(`data-column`)),i=Me({year:t.year,month:n},{lifeStartsAt:a,timeZone:m});i&&(f(i,se),p())},[r,a,m,f,p]),g=(0,N.useCallback)(e=>{let t=e.target.closest(L);t&&h(t)},[h]),_=(0,N.useCallback)(e=>{if(e.key!==`Enter`&&e.key!==` `)return;let t=e.target.closest(`[role="grid"]`)?.getAttribute(`aria-activedescendant`),n=t?document.getElementById(t):null;n&&e.currentTarget.contains(n)&&n.matches(L)&&(e.preventDefault(),h(n))},[h]),v=c&&r.length===0,y=(0,N.useMemo)(()=>Array.from({length:12},(e,t)=>({label:ue(t,{short:!0}),data:r.map(e=>{let n=e.months[t];return typeof n==`number`?{value:n}:{value:null,placeholder:!0}})})),[r]),b=(0,N.useMemo)(()=>r.map(e=>String(e.year)),[r]),x=(0,N.useCallback)(({value:t,columnLabel:n,rowLabel:r})=>(0,P.jsx)(he,{value:t,cellLabel:`${n??``} ${r??``}`.trim(),emptyLabel:i(`No views`,`jetpack-premium-analytics-pkg`),formatValue:e===`average`?ee:ne}),[e]);return(0,P.jsx)(ve,{isLoading:o,isFetching:s,isError:v,isEmpty:n<=0||r.length===0,error:v?ie(d,{retryDescription:i(`We couldn't load this post's traffic. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:te}):null,empty:{icon:oe,description:i(n>0?`No views yet.`:`Open a post or page report to see its all-time traffic here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,P.jsx)(me,{}),children:(0,P.jsx)(`div`,{className:A.root,onClick:g,onKeyDown:_,children:(0,P.jsx)(ae,{data:y,rowLabels:b,minCellWidth:F,minCellHeight:I,maxCellHeight:ze,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,renderTooltip:x,className:A.chart,children:(0,P.jsx)(l,{direction:`row`,justify:`center`,children:(0,P.jsx)(ae.Legend,{lessLabel:i(e===`average`?`Fewer views per day`:`Fewer views`,`jetpack-premium-analytics-pkg`),moreLabel:i(e===`average`?`More views per day`:`More views`,`jetpack-premium-analytics-pkg`)})})})})})}function M({attributes:e={}}){return(0,P.jsx)(p,{attributes:e,children:(0,P.jsx)(Re,{metric:ke(e.metric)})})}var N,P,F,I,ze,L,Be=t((()=>{S(),x(),m(),le(),h(),te(),De(),a(),N=e(n(),1),D(),Ne(),Pe(),Le(),P=o(),F=56,I=28,ze=40,L=`[role="gridcell"][data-column][data-row]`})),Ve,He=t((()=>{f(),a(),s(),Ve={icon:c,attributes:[{id:`metric`,label:r(`Metric`,`label for the views metric selector`,`jetpack-premium-analytics-pkg`),type:`text`,relevance:`high`,Edit:d,elements:[{value:`total`,label:i(`Total views`,`jetpack-premium-analytics-pkg`)},{value:`average`,label:i(`Daily average`,`jetpack-premium-analytics-pkg`)}]}],example:{attributes:{metric:`total`}}}})),Ue,We,Ge,Ke,qe,Je,Ye,Xe=t((()=>{Ue=`jpa/post-all-time-traffic`,We=`All-time traffic`,Ge=`Every month of views for the post or page being viewed, across its whole life.`,Ke={content:`Every month of views for the post or page being viewed, shaded by how it compares to the rest. Always the full history: the period above doesn't narrow it. Pick a month to read the rest of the page over it. Daily average leaves the current day out, as the classic Stats table does.`},qe=`stats`,Je=`framed`,Ye={name:Ue,title:We,description:Ge,help:Ke,category:qe,presentation:Je}}));function Ze({hasPostScope:e,metric:t},n=!1){return{metric:t,reportParams:{...fe(n),...e?{post_id:B}:{}}}}function R(e){return(0,z.jsx)(M,{attributes:Ze(e)})}function Qe({hasPostScope:e,metric:t,...n}){return(0,z.jsx)(we,{...n,widgetType:Ce(Ye,Ve),renderModule:$e,renderComponent:M,attributes:Ze({hasPostScope:e,metric:t},!0)})}var z,B,$e,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{S(),ge(),xe(),ye(),Se(),Te(),Be(),He(),Xe(),z=o(),_e(),B=779,$e=`storybook/post-all-time-traffic`,V=`stats/post/${B}`,H={control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},U={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},W={title:`Packages/Premium Analytics/Widgets/PostAllTimeTraffic`,component:M,tags:[`autodocs`],decorators:[Ee],argTypes:{hasPostScope:H,metric:U},parameters:{docs:{description:{component:"The \"All-time traffic\" widget: every month of the scoped post's views, one row per year, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the post's whole life, whatever period the page shows, and picking a month applies that month to the page. Without a post scope the widget renders a scopeless empty state."}}}},G={render:R,args:{hasPostScope:!0,metric:`total`},decorators:[w]},K={render:R,args:{hasPostScope:!0,metric:`average`},decorators:[w]},q={render:R,args:{hasPostScope:!1,metric:`total`},decorators:[w]},J={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(C(V,`loading`),()=>C(V,null))},Y={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(C(V,`error`),()=>C(V,null))},X={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(C(V,`error-retryable`),()=>C(V,null))},Z={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(C(V,`empty`),()=>C(V,null))},Q={render:e=>(0,z.jsx)(Qe,{...e}),args:{...Oe,widgetWidth:3,widgetHeight:2,hasPostScope:!0,metric:`total`},argTypes:{...be,hasPostScope:H,metric:U}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}},$=[`Default`,`DailyAverage`,`NoPostScope`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as DailyAverage,G as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,q as NoPostScope,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,W as default};