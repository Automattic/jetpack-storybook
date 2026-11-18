import{n as e,o as t,r as n}from"./rolldown-runtime-DAXXjFlN.js";import{t as r}from"./react-_iuu1rfF.js";import{n as i,r as a,t as o}from"./build-module-BXs6jvWf.js";import{t as s}from"./jsx-runtime-CFwixLRt.js";import{M as c,j as l}from"./index-fn-Dtbeakz0.js";import{D as u,m as d,n as f,r as p,t as m,v as h}from"./build-module-B8XnS9-x.js";import{p as g,t as _}from"./build-module-nWjoY2Yf.js";import{Cn as v,Q as y,j as b,t as x}from"./date-fns-C2ge_Nvz.js";import{o as ee,r as S,t as C}from"./src-BgnB_EuX.js";import{Cr as w,t as T,xn as te}from"./build-module-9xOavgS3.js";import{d as E,m as ne,t as re}from"./src-z4GjgCWe.js";import{Fn as ie,In as ae,Pn as oe,pt as se,t as D,u as ce,wn as le,xn as O}from"./src-0XClGMDx.js";import{H as ue,I as de,It as fe,Mt as pe,Nt as me,bt as he,f as ge,z as _e}from"./charts-provider-EOurbVgo.js";import{t as ve}from"./widget-state-CYMiYxCB.js";import{i as k,n as ye,r as be}from"./with-story-router-WQoeSQUQ.js";import{t as xe}from"./chart-empty-state-O1s34TLF.js";import{n as Se,o as Ce,r as we,s as A}from"./register-report-mocks-Ch99HCsV.js";import{r as Te,t as Ee}from"./metric-tabs-chart-skeleton-DFNUJuyn.js";import{n as De,r as Oe,t as ke}from"./src-ByKxhmjI.js";import{a as Ae,c as je,i as j,l as Me,o as Ne,r as Pe,s as Fe,u as Ie}from"./with-widget-canvas-CFFUAl_t.js";import{n as Le,t as Re}from"./force-stats-mock-state-BAjXKLs7.js";import{n as ze,r as Be,t as Ve}from"./with-site-time-zone-RgAxKbai.js";import{n as He,t as Ue}from"./use-no-published-posts-B0hr6a2A.js";import{n as We,t as Ge}from"./with-story-period-host-B6TmRVbo.js";function Ke(e={},t){if(t.type===`SET_PREFERENCE_DEFAULTS`){let{scope:n,defaults:r}=t;return{...e,[n]:{...e[n],...r}}}return e}function qe(e){let t;return(n,r)=>{if(r.type===`SET_PERSISTENCE_LAYER`){let{persistenceLayer:e,persistedData:n}=r;return t=e,n}let i=e(n,r);return r.type===`SET_PREFERENCE_VALUE`&&t?.set(i),i}}var Je,Ye,Xe=e((()=>{f(),Je=qe((e={},t)=>{if(t.type===`SET_PREFERENCE_VALUE`){let{scope:n,name:r,value:i}=t;return{...e,[n]:{...e[n],[r]:i}}}return e}),Ye=m({defaults:Ke,preferences:Je})})),Ze=n({set:()=>$e,setDefaults:()=>et,setPersistenceLayer:()=>tt,toggle:()=>Qe});function Qe(e,t){return function({select:n,dispatch:r}){let i=n.get(e,t);r.set(e,t,!i)}}function $e(e,t,n){return{type:`SET_PREFERENCE_VALUE`,scope:e,name:t,value:n}}function et(e,t){return{type:`SET_PREFERENCE_DEFAULTS`,scope:e,defaults:t}}async function tt(e){return{type:`SET_PERSISTENCE_LAYER`,persistenceLayer:e,persistedData:await e.get()}}var nt=e((()=>{})),rt=n({get:()=>at}),it,at,ot=e((()=>{c(),it=e=>(t,n,r)=>[`allowRightClickOverrides`,`distractionFree`,`editorMode`,`fixedToolbar`,`focusMode`,`hiddenBlockTypes`,`inactivePanels`,`keepCaretInsideBlock`,`mostUsedBlocks`,`openPanels`,`showBlockBreadcrumbs`,`showIconLabels`,`showListViewByDefault`,`isPublishSidebarEnabled`,`isComplementaryAreaVisible`,`pinnedItems`].includes(r)&&[`core/edit-post`,`core/edit-site`].includes(n)?(l(`wp.data.select( 'core/preferences' ).get( '${n}', '${r}' )`,{since:`6.5`,alternative:`wp.data.select( 'core/preferences' ).get( 'core', '${r}' )`}),e(t,`core`,r)):e(t,n,r),at=it((e,t,n)=>{let r=e.preferences[t]?.[n];return r===void 0?e.defaults[t]?.[n]:r})})),st,ct=e((()=>{st=`core/preferences`})),M,lt=e((()=>{f(),Xe(),nt(),ot(),ct(),M=u(st,{reducer:Ye,actions:Ze,selectors:rt}),p(M)})),ut=e((()=>{lt()})),dt=e((()=>{})),ft=e((()=>{lt(),ut(),dt()}));function pt(e,t){let n=e.from??``,r=e.to??``;return ie(e.preset,n,r).includes(`hour`)||ae(n,r)>mt?{}:t===`line`?{extra:[`day`]}:{unavailable:{intervals:[`day`],hint:i(`Switch to the line chart to see each day.`,`jetpack-premium-analytics-pkg`)}}}var mt,ht=e((()=>{D(),o(),mt=366})),gt,_t,vt=e((()=>{gt=`_root_sp1nf_1`,_t={root:gt}}));function yt(){let e=h(e=>e(M).get(le,N)===!0,[]),{set:t}=d(M);return[e,(0,bt.useCallback)(n=>{n!==e&&t(le,N,n)},[e,t])]}var bt,N,xt=e((()=>{k(),f(),ft(),bt=t(r(),1),N=`trafficChartPreviousPeriod`}));function St(e,t){let n=e[t];return typeof n==`number`?n:void 0}function P(e,t,n,r){let i=[],a=(e?.data??[]).map(e=>ne(e.date_start,t));return(e?.data??[]).forEach((e,o)=>{let s=a[o],c=r?r[o]:s,l=n(e);if(!c||!s||l===void 0)return;let u=ne(e.date_end,t),d=u?{endDate:u}:{};i.push(r?{date:c,realDate:s,...d,value:l}:{date:c,...d,value:l})}),{points:i,dates:a}}function Ct(e){let t=St(e,`views`),n=St(e,`visitors`);return t!==void 0&&n!==void 0&&n>0?t/n:void 0}function wt(e){return Array.isArray(e.post_titles)?e.post_titles.length:void 0}function Tt(e,t,n,r){if(!r)return n;let i=[];return fe(e?.data??[],t?.data??[],r).forEach((e,t)=>{e!==void 0&&(i[e]=n[t])}),i}function Et(e,t){return e.filter(e=>e.value!==0||t.some(t=>t.date.getTime()===e.date.getTime()&&t.value!==0))}function Dt(e,t,n,r){return[{label:i(`Views per visitor`,`jetpack-premium-analytics-pkg`),icon:te,dataFormat:Ot,currentReport:e.views,current:P(e.views,t,Ct),comparisonReport:n?.views,valueOf:Ct,isCount:!1},{label:i(`Posts published`,`jetpack-premium-analytics-pkg`),icon:w,countLabel:kt,currentReport:e.posts,current:P(e.posts,t,wt),comparisonReport:n?.posts,valueOf:wt,isCount:!0}].map(({label:e,icon:n,dataFormat:i,countLabel:a,currentReport:o,current:s,comparisonReport:c,valueOf:l,isCount:u})=>{let d=c?P(c,t,l,Tt(o,c,s.dates,r)).points:[],f=u?Et(s.points,d):s.points,p=u?Et(d,s.points):d;return{label:e,icon:n,dataFormat:i,countLabel:a,data:f,previous:p.length?p:void 0}}).filter(e=>e.data.length||e.previous)}var Ot,kt,At=e((()=>{re(),k(),o(),T(),Ot={type:`average`},kt=e=>a(`%s Post published`,`%s Posts published`,e,`jetpack-premium-analytics-pkg`)}));function jt(){let e=ee()?.site?.wpcom?.blog_id;return e?`jetpack_stats_chart_type_${e}`:void 0}function Mt(){let e=jt();if(e)try{let t=window.localStorage.getItem(e);return t===`bar`||t===`line`?t:void 0}catch{return}}function Nt(e){let t=jt();if(t)try{window.localStorage.setItem(t,e)}catch{}}var Pt=e((()=>{C()}));function F(){return Mt()??`bar`}var I,Ft,It,Lt,Rt=e((()=>{o(),ke(),ht(),Pt(),I=[`hour`,`day`,`week`,`month`,`quarter`,`year`],Ft=[{id:`views`,label:i(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>a(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:i(`Visitors`,`jetpack-premium-analytics-pkg`),countLabel:e=>a(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`),counterpartId:`views`,counterpartHidden:!0},{id:`comments`,label:i(`Comments`,`jetpack-premium-analytics-pkg`),countLabel:e=>a(`%s Comment`,`%s Comments`,e,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:i(`Likes`,`jetpack-premium-analytics-pkg`),countLabel:e=>a(`%s Like`,`%s Likes`,e,`jetpack-premium-analytics-pkg`)}],It={...De((e,t)=>pt(e,t.chartType??F())),elements:Oe(I)},Lt={attributes:[It,{id:`chartType`,getValue:({item:e})=>e.chartType??F(),setValue:({value:e})=>(Nt(e),{chartType:e})}],example:{attributes:{}}}}));function zt(e){let t=E(e.from),n=E(e.to);return b(t,v(t))&&b(n,y(n))}function Bt(e,t,n){return{...e,stat_fields:t,period:n}}function Vt(e,t){let n=t===`hour`,r=n&&zt(e),a=(0,g.useCallback)(e=>!n||Ht.has(e),[n]),o=(0,g.useMemo)(()=>Bt(e,n?`views`:`views,visitors`,t),[e,t,n]),s=(0,g.useMemo)(()=>n?Bt(e,`visitors,likes,comments`,`day`):Bt(e,`likes,comments,post_titles`,t),[e,t,n]),c=se(o),l=se(s,{enabled:!n||r}),u=c.primary.data,d=c.comparison.data,f=c.hasComparison,p=c.timezone,m=l.primary.data,h=l.comparison.data,_=l.hasComparison,v=l.timezone,{periodStarts:y}=c,b=c.isError&&!u?.data?.length,x=l.isError&&!m?.data?.length,ee=r&&!x,S=(0,g.useMemo)(()=>Dt({views:u,posts:n?void 0:m},p,f?{views:d,posts:_?h:void 0}:void 0,y),[u,p,d,f,m,h,_,n,y]),C=(0,g.useMemo)(()=>Ft.map(e=>{let t=e.id===`views`||e.id===`visitors`&&!n,r=e.id===`views`||e.id===`visitors`,o={...me({primary:t?u:m,comparison:t?d:h,hasComparison:t?f:_,field:e.id,label:e.label,countLabel:e.countLabel,zone:t?p:v,periodStarts:y}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,counterpartHidden:`counterpartHidden`in e?e.counterpartHidden:void 0,tooltipExtras:r&&S.length?S:void 0};if(a(e.id))return o;let s=i(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`);return ee?{...o,current:[],previous:void 0,seriesUnavailable:s}:{...o,unavailable:s}}),[a,n,ee,S,u,d,f,p,m,h,_,v,y]),{refetch:w}=c,{refetch:T}=l,te=(0,g.useCallback)(()=>{w(),T()},[w,T]),E=b||x&&!n;return{metrics:C,isLoading:c.isLoading||l.isLoading,isFetching:c.isFetching||l.isFetching,isError:E,csvIsError:c.primary.isError||!n&&l.primary.isError,csvIsPlaceholderData:c.primary.isPlaceholderData||!n&&l.primary.isPlaceholderData,timezone:p,refetch:te}}var Ht,Ut=e((()=>{D(),re(),_(),o(),x(),At(),Rt(),k(),Ht=new Set([`views`])}));function Wt({chartType:e,interval:t}){let{reportParams:n}=ue(),r=oe(),[a,o]=yt(),s=ce({...n,interval:t},I,r,pt(n,e)),c=_e(s),{metrics:l,isLoading:u,isFetching:d,isError:f,csvIsError:p,csvIsPlaceholderData:m,timezone:h,refetch:g}=Vt(n,s),_=i(`Traffic metric`,`jetpack-premium-analytics-pkg`),v=l.find(e=>e.key===`views`),y=(0,Gt.useMemo)(()=>v?.current.some(e=>(e.value??0)>0)?pe(l,{zone:h,withTime:s===`hour`,dateLabel:i(`Date`,`jetpack-premium-analytics-pkg`)}):void 0,[l,v,h,s]);ge({csv:y&&{...y,filenamePrefix:`traffic-summary`,hasDateRange:!0,status:{isLoading:u,isFetching:d,isError:p,isPlaceholderData:m}}});let{noPublishedPosts:b,isChecking:x}=He(!u&&!f&&v?.value===0&&v.current.every(e=>e.value===0||e.value===null)&&(v.previous?.every(e=>e.value===0||e.value===null)??!0));return(0,R.jsx)(`div`,{className:_t.root,children:(0,R.jsx)(ve,{isLoading:u||x,isFetching:d,isError:f,error:{description:i(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:g}]},renderLoading:(0,R.jsx)(Ee,{}),children:(0,R.jsx)(Te,{metrics:l,dataFormat:he,chartType:e,groupLabel:_,tickResolution:s,onDatumClick:c,previousPeriodShown:a,onPreviousPeriodShownChange:o,empty:b?(0,R.jsx)(xe,{text:i(`You haven't published any posts yet. Get started by creating your first one.`,`jetpack-premium-analytics-pkg`),action:{label:i(`Create post`,`jetpack-premium-analytics-pkg`),href:S(`post-new.php`)}}):(0,R.jsx)(xe,{})})})})}function L({attributes:e={},setError:t}){return(0,R.jsx)(de,{attributes:e,setError:t,options:{from:`/`},children:(0,R.jsx)(Wt,{chartType:e.chartType??F(),interval:e.chartInterval})})}var Gt,R,Kt=e((()=>{C(),D(),k(),o(),Gt=t(r(),1),Ue(),ht(),vt(),xt(),Ut(),Rt(),R=s()})),qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn=e((()=>{qt=`jpa/traffic-chart`,Jt=`jpa/trending-up`,Yt=`Traffic summary`,Xt=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,Zt={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},Qt=`traffic`,$t=`framed`,en=[{id:`chartInterval`},{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],tn={name:qt,icon:Jt,title:Yt,description:Xt,help:Zt,category:Qt,presentation:$t,attributes:en}}));function z({withComparison:e,chartType:t}){return(0,V.jsx)(L,{attributes:{reportParams:O(e),chartType:t}})}function B(e){return(0,V.jsx)(L,{attributes:{reportParams:O(!1,e)}})}function rn({withComparison:e,chartType:t,...n}){return(0,V.jsx)(je,{...n,widgetType:H,renderModule:an,renderComponent:L,attributes:{reportParams:O(e),chartType:t}})}var V,an,H,on,U,sn,cn,W,G,K,q,J,Y,X,Z,Q,$,ln;e((()=>{D(),Me(),Ne(),Ge(),ye(),Pe(),Ve(),Se(),Le(),Kt(),Rt(),nn(),V=s(),we(),an=`storybook/traffic-chart`,H=Ae(tn,Lt),on={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},U={chartType:`bar`},sn={...Fe,widgetWidth:3},cn={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:L,tags:[`autodocs`],decorators:[We,be,Be],argTypes:{...ze,withComparison:{control:`boolean`},...on},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs (Views, Visitors, Likes, and Comments) over a comparative chart. The date range and comparison come from the dashboard controls. The bucket size is the widget's own `chartInterval` attribute, clamped to what the range allows. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is drawn too: as a same-color dashed line for `line`, or in gray in a slot beside the current period for `bar`. On the Views and Visitors tabs, `bar` draws visitors inside the views bar, as Jetpack Stats v1 does. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; at the hourly grain the second request asks for visitors, likes, and comments in daily buckets, so their cards still show the day totals (skipped for a window that does not cover whole days, such as `Last 24 hours`). Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},W={render:z,args:{withComparison:!1,...U},decorators:[j]},G={render:z,args:{withComparison:!0,...U},decorators:[j]},K={render:z,args:{withComparison:!1,chartType:`line`},decorators:[j]},q={render:z,args:{withComparison:!0,chartType:`line`},decorators:[j]},J={tags:[`widget-dashboard`],render:e=>(0,V.jsx)(je,{...e,widgetType:H,renderModule:an,renderComponent:L,attributes:{reportParams:O(!1,`last-24-hours`)}}),args:{...sn},argTypes:{...Ie}},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[j],beforeEach:()=>(A(`stats/visits`,`loading`),()=>A(`stats/visits`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[j],beforeEach:()=>(A(`stats/visits`,`error`),()=>A(`stats/visits`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[j],beforeEach:()=>(A(`stats/visits`,`empty`),Ce(`/wp/v2/posts`,[{id:1}]),()=>{A(`stats/visits`,null),Ce(`/wp/v2/posts`,null)})},Q={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[j],beforeEach:()=>{let e=window.JetpackScriptData;return window.JetpackScriptData={...e,site:{...e?.site,admin_url:`https://example.com/blog/wp-admin/`}},A(`stats/visits`,`empty`),Re(`/wp/v2/posts`,`empty`),()=>{window.JetpackScriptData=e,A(`stats/visits`,null),Re(`/wp/v2/posts`,null)}}},$={tags:[`widget-dashboard`],render:e=>(0,V.jsx)(rn,{...e}),args:{...sn,withComparison:!0,...U},argTypes:{...Ie,withComparison:{control:`boolean`},...on}},ln=[`Default`,`WithComparison`,`LineChart`,`LineChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`EmptyNoPosts`,`WidgetDashboardWithWidget`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: false,
    ...DEFAULT_CHART_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...W.parameters?.docs?.source},description:{story:`The widget on its own, current period only.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: true,
    ...DEFAULT_CHART_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`Same close-up with comparison on: the previous period takes a gray slot beside the current one,
and on the Views and Visitors tabs visitors sits inside the views bar.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:"The same widget drawn as lines — the `chartType` attribute set to `line`.",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: true,
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Lines with comparison on: the previous period is a dashed line in the same color.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  tags: ['widget-dashboard'],
  render: args => <WidgetDashboardWithWidgetStory {...args} widgetType={storyWidgetType} renderModule={TRAFFIC_CHART_RENDER_MODULE} renderComponent={TrafficChartRender as ComponentType<WidgetRenderProps<unknown>>} attributes={{
    reportParams: getDefaultQueryParams(false, 'last-24-hours')
  }} />,
  args: {
    ...DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...J.parameters?.docs?.source},description:{story:`An hourly range (\`Last 24 hours\`), where the chart draws hourly buckets.
\`stats/visits\` fills Views alone at that grain, so the other three tabs show
a placeholder and, when selected, the reason — rather than a \`0\` they cannot
back up. The likes and comments request is skipped entirely.

Mounted through the dashboard harness rather than the close-up canvas: hour
ticks are the point of the story, and the canvas is too narrow to draw an
axis at all.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderTrafficChartOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'loading');
    return () => setReportMockState('stats/visits', null);
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderTrafficChartOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'error');
    return () => setReportMockState('stats/visits', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the queries — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderTrafficChartOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'empty');
    setReportMockResponse('/wp/v2/posts', [{
      id: 1
    }]);
    return () => {
      setReportMockState('stats/visits', null);
      setReportMockResponse('/wp/v2/posts', null);
    };
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no points: the tabs stay at zero and the plot shows the
no-results message in place of a flat line.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => renderTrafficChartOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    const scriptData = window.JetpackScriptData;
    window.JetpackScriptData = {
      ...scriptData,
      site: {
        ...scriptData?.site,
        admin_url: 'https://example.com/blog/wp-admin/'
      }
    } as typeof window.JetpackScriptData;
    setReportMockState('stats/visits', 'empty');
    forceStatsMockState('/wp/v2/posts', 'empty');
    return () => {
      window.JetpackScriptData = scriptData;
      setReportMockState('stats/visits', null);
      forceStatsMockState('/wp/v2/posts', null);
    };
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['widget-dashboard'],
  render: args => <TrafficChartDashboardStory {...args} />,
  args: {
    ...DASHBOARD_STORY_ARGS,
    withComparison: true,
    ...DEFAULT_CHART_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean'
    },
    ...CHART_TYPE_ARG_TYPES
  }
}`,...$.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}}}))();export{W as Default,Z as Empty,Q as EmptyNoPosts,X as Error,J as Hourly,K as LineChart,q as LineChartWithComparison,Y as Loading,$ as WidgetDashboardWithWidget,G as WithComparison,ln as __namedExportsOrder,cn as default};