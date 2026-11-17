import{n as e,o as t,r as n}from"./rolldown-runtime-DAXXjFlN.js";import{t as r}from"./react-_iuu1rfF.js";import{n as i,r as a,t as o}from"./build-module-BXs6jvWf.js";import{t as s}from"./jsx-runtime-CFwixLRt.js";import{M as c,j as l}from"./index-fn-Dtbeakz0.js";import{D as u,m as d,n as f,r as p,t as m,v as h}from"./build-module-B8XnS9-x.js";import{p as g,t as _}from"./build-module-nWjoY2Yf.js";import{Q as v,j as y,t as ee,xn as b}from"./date-fns-CnA56WYe.js";import{o as te,r as x,t as S}from"./src-BgnB_EuX.js";import{Cr as C,t as w,xn as ne}from"./build-module-9xOavgS3.js";import{d as re,m as ie,t as ae}from"./src-IF7Px86m.js";import{Mn as oe,Nn as se,Pn as ce,Sn as le,t as T,u as ue,ut as de,yn as E}from"./src-CZL40WWg.js";import{H as fe,I as pe,It as me,Mt as he,Nt as ge,bt as _e,f as ve,z as ye}from"./charts-provider-tm6f8w9R.js";import{t as be}from"./widget-state-CKBw0Wsm.js";import{i as D,n as xe,r as Se}from"./with-story-router-Q554LWJ5.js";import{t as Ce}from"./chart-empty-state-C0VatJ1P.js";import{n as we,o as Te,r as Ee,s as O}from"./register-report-mocks-DoU-6jmc.js";import{r as De,t as Oe}from"./metric-tabs-chart-skeleton-CmUJ1FaS.js";import{n as ke,r as Ae,t as je}from"./src-CR7zQ6ex.js";import{a as Me,c as Ne,i as k,l as Pe,o as Fe,r as Ie,s as Le,u as Re}from"./with-widget-canvas-DJOx4lEW.js";import{n as ze,t as Be}from"./force-stats-mock-state-TDtrLO8p.js";import{n as Ve,r as He,t as Ue}from"./with-site-time-zone-RgAxKbai.js";import{n as We,t as Ge}from"./use-no-published-posts-nDwkmcqM.js";import{n as Ke,t as qe}from"./with-story-period-host-1AEYdn4q.js";function Je(e={},t){if(t.type===`SET_PREFERENCE_DEFAULTS`){let{scope:n,defaults:r}=t;return{...e,[n]:{...e[n],...r}}}return e}function Ye(e){let t;return(n,r)=>{if(r.type===`SET_PERSISTENCE_LAYER`){let{persistenceLayer:e,persistedData:n}=r;return t=e,n}let i=e(n,r);return r.type===`SET_PREFERENCE_VALUE`&&t?.set(i),i}}var Xe,Ze,Qe=e((()=>{f(),Xe=Ye((e={},t)=>{if(t.type===`SET_PREFERENCE_VALUE`){let{scope:n,name:r,value:i}=t;return{...e,[n]:{...e[n],[r]:i}}}return e}),Ze=m({defaults:Je,preferences:Xe})})),$e=n({set:()=>tt,setDefaults:()=>nt,setPersistenceLayer:()=>rt,toggle:()=>et});function et(e,t){return function({select:n,dispatch:r}){let i=n.get(e,t);r.set(e,t,!i)}}function tt(e,t,n){return{type:`SET_PREFERENCE_VALUE`,scope:e,name:t,value:n}}function nt(e,t){return{type:`SET_PREFERENCE_DEFAULTS`,scope:e,defaults:t}}async function rt(e){return{type:`SET_PERSISTENCE_LAYER`,persistenceLayer:e,persistedData:await e.get()}}var it=e((()=>{})),at=n({get:()=>st}),ot,st,ct=e((()=>{c(),ot=e=>(t,n,r)=>[`allowRightClickOverrides`,`distractionFree`,`editorMode`,`fixedToolbar`,`focusMode`,`hiddenBlockTypes`,`inactivePanels`,`keepCaretInsideBlock`,`mostUsedBlocks`,`openPanels`,`showBlockBreadcrumbs`,`showIconLabels`,`showListViewByDefault`,`isPublishSidebarEnabled`,`isComplementaryAreaVisible`,`pinnedItems`].includes(r)&&[`core/edit-post`,`core/edit-site`].includes(n)?(l(`wp.data.select( 'core/preferences' ).get( '${n}', '${r}' )`,{since:`6.5`,alternative:`wp.data.select( 'core/preferences' ).get( 'core', '${r}' )`}),e(t,`core`,r)):e(t,n,r),st=ot((e,t,n)=>{let r=e.preferences[t]?.[n];return r===void 0?e.defaults[t]?.[n]:r})})),lt,ut=e((()=>{lt=`core/preferences`})),A,dt=e((()=>{f(),Qe(),it(),ct(),ut(),A=u(lt,{reducer:Ze,actions:$e,selectors:at}),p(A)})),ft=e((()=>{dt()})),pt=e((()=>{})),mt=e((()=>{dt(),ft(),pt()}));function ht(e,t){let n=e.from??``,r=e.to??``;return se(e.preset,n,r).includes(`hour`)||ce(n,r)>gt?{}:t===`line`?{extra:[`day`]}:{unavailable:{intervals:[`day`],hint:i(`Switch to the line chart to see each day.`,`jetpack-premium-analytics-pkg`)}}}var gt,_t=e((()=>{T(),o(),gt=366})),vt,yt,bt=e((()=>{vt=`_root_sp1nf_1`,yt={root:vt}}));function xt(){let e=h(e=>e(A).get(le,j)===!0,[]),{set:t}=d(A);return[e,(0,St.useCallback)(n=>{n!==e&&t(le,j,n)},[e,t])]}var St,j,Ct=e((()=>{D(),f(),mt(),St=t(r(),1),j=`trafficChartPreviousPeriod`}));function wt(e,t){let n=e[t];return typeof n==`number`?n:void 0}function M(e,t,n,r){let i=[],a=(e?.data??[]).map(e=>ie(e.date_start,t));return(e?.data??[]).forEach((e,o)=>{let s=a[o],c=r?r[o]:s,l=n(e);if(!c||!s||l===void 0)return;let u=ie(e.date_end,t),d=u?{endDate:u}:{};i.push(r?{date:c,realDate:s,...d,value:l}:{date:c,...d,value:l})}),{points:i,dates:a}}function Tt(e){let t=wt(e,`views`),n=wt(e,`visitors`);return t!==void 0&&n!==void 0&&n>0?t/n:void 0}function Et(e){return Array.isArray(e.post_titles)?e.post_titles.length:void 0}function Dt(e,t,n,r){if(!r)return n;let i=[];return me(e?.data??[],t?.data??[],r).forEach((e,t)=>{e!==void 0&&(i[e]=n[t])}),i}function Ot(e,t){return e.filter(e=>e.value!==0||t.some(t=>t.date.getTime()===e.date.getTime()&&t.value!==0))}function kt(e,t,n,r){return[{label:i(`Views per visitor`,`jetpack-premium-analytics-pkg`),icon:ne,dataFormat:At,currentReport:e.views,current:M(e.views,t,Tt),comparisonReport:n?.views,valueOf:Tt,isCount:!1},{label:i(`Posts published`,`jetpack-premium-analytics-pkg`),icon:C,countLabel:jt,currentReport:e.posts,current:M(e.posts,t,Et),comparisonReport:n?.posts,valueOf:Et,isCount:!0}].map(({label:e,icon:n,dataFormat:i,countLabel:a,currentReport:o,current:s,comparisonReport:c,valueOf:l,isCount:u})=>{let d=c?M(c,t,l,Dt(o,c,s.dates,r)).points:[],f=u?Ot(s.points,d):s.points,p=u?Ot(d,s.points):d;return{label:e,icon:n,dataFormat:i,countLabel:a,data:f,previous:p.length?p:void 0}}).filter(e=>e.data.length||e.previous)}var At,jt,Mt=e((()=>{ae(),D(),o(),w(),At={type:`average`},jt=e=>a(`%s Post published`,`%s Posts published`,e,`jetpack-premium-analytics-pkg`)}));function Nt(){let e=te()?.site?.wpcom?.blog_id;return e?`jetpack_stats_chart_type_${e}`:void 0}function Pt(){let e=Nt();if(e)try{let t=window.localStorage.getItem(e);return t===`bar`||t===`line`?t:void 0}catch{return}}function Ft(e){let t=Nt();if(t)try{window.localStorage.setItem(t,e)}catch{}}var It=e((()=>{S()}));function N(){return Pt()??`bar`}var P,Lt,Rt,zt,F=e((()=>{o(),je(),_t(),It(),P=[`hour`,`day`,`week`,`month`,`quarter`,`year`],Lt=[{id:`views`,label:i(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>a(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:i(`Visitors`,`jetpack-premium-analytics-pkg`),countLabel:e=>a(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`),counterpartId:`views`,counterpartHidden:!0},{id:`comments`,label:i(`Comments`,`jetpack-premium-analytics-pkg`),countLabel:e=>a(`%s Comment`,`%s Comments`,e,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:i(`Likes`,`jetpack-premium-analytics-pkg`),countLabel:e=>a(`%s Like`,`%s Likes`,e,`jetpack-premium-analytics-pkg`)}],Rt={...ke((e,t)=>ht(e,t.chartType??N())),elements:Ae(P)},zt={attributes:[Rt,{id:`chartType`,getValue:({item:e})=>e.chartType??N(),setValue:({value:e})=>(Ft(e),{chartType:e})}],example:{attributes:{}}}}));function Bt(e){let t=re(e.from),n=re(e.to);return y(t,b(t))&&y(n,v(n))}function I(e,t,n){return{...e,stat_fields:t,period:n}}function Vt(e,t){let n=t===`hour`,r=n&&Bt(e),a=(0,g.useCallback)(e=>!n||Ht.has(e),[n]),o=(0,g.useMemo)(()=>I(e,n?`views`:`views,visitors`,t),[e,t,n]),s=(0,g.useMemo)(()=>n?I(e,`visitors,likes,comments`,`day`):I(e,`likes,comments,post_titles`,t),[e,t,n]),c=de(o),l=de(s,{enabled:!n||r}),u=c.primary.data,d=c.comparison.data,f=c.hasComparison,p=c.timezone,m=l.primary.data,h=l.comparison.data,_=l.hasComparison,v=l.timezone,{periodStarts:y}=c,ee=c.isError&&!u?.data?.length,b=l.isError&&!m?.data?.length,te=r&&!b,x=(0,g.useMemo)(()=>kt({views:u,posts:n?void 0:m},p,f?{views:d,posts:_?h:void 0}:void 0,y),[u,p,d,f,m,h,_,n,y]),S=(0,g.useMemo)(()=>Lt.map(e=>{let t=e.id===`views`||e.id===`visitors`&&!n,r=e.id===`views`||e.id===`visitors`,o={...ge({primary:t?u:m,comparison:t?d:h,hasComparison:t?f:_,field:e.id,label:e.label,countLabel:e.countLabel,zone:t?p:v,periodStarts:y}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,counterpartHidden:`counterpartHidden`in e?e.counterpartHidden:void 0,tooltipExtras:r&&x.length?x:void 0};if(a(e.id))return o;let s=i(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`);return te?{...o,current:[],previous:void 0,seriesUnavailable:s}:{...o,unavailable:s}}),[a,n,te,x,u,d,f,p,m,h,_,v,y]),{refetch:C}=c,{refetch:w}=l,ne=(0,g.useCallback)(()=>{C(),w()},[C,w]),re=ee||b&&!n;return{metrics:S,isLoading:c.isLoading||l.isLoading,isFetching:c.isFetching||l.isFetching,isError:re,csvIsError:c.primary.isError||!n&&l.primary.isError,csvIsPlaceholderData:c.primary.isPlaceholderData||!n&&l.primary.isPlaceholderData,timezone:p,refetch:ne}}var Ht,Ut=e((()=>{T(),ae(),_(),o(),ee(),Mt(),F(),D(),Ht=new Set([`views`])}));function Wt({chartType:e,interval:t}){let{reportParams:n}=fe(),r=oe(),[a,o]=xt(),s=ue({...n,interval:t},P,r,ht(n,e)),c=ye(s),{metrics:l,isLoading:u,isFetching:d,isError:f,csvIsError:p,csvIsPlaceholderData:m,timezone:h,refetch:g}=Vt(n,s),_=i(`Traffic metric`,`jetpack-premium-analytics-pkg`),v=l.find(e=>e.key===`views`),y=(0,Gt.useMemo)(()=>v?.current.some(e=>(e.value??0)>0)?he(l,{zone:h,withTime:s===`hour`,dateLabel:i(`Date`,`jetpack-premium-analytics-pkg`)}):void 0,[l,v,h,s]);ve({csv:y&&{...y,filenamePrefix:`traffic-summary`,hasDateRange:!0,status:{isLoading:u,isFetching:d,isError:p,isPlaceholderData:m}}});let{noPublishedPosts:ee,isChecking:b}=We(!u&&!f&&v?.value===0&&v.current.every(e=>e.value===0||e.value===null)&&(v.previous?.every(e=>e.value===0||e.value===null)??!0));return(0,R.jsx)(`div`,{className:yt.root,children:(0,R.jsx)(be,{isLoading:u||b,isFetching:d,isError:f,error:{description:i(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:g}]},renderLoading:(0,R.jsx)(Oe,{}),children:(0,R.jsx)(De,{metrics:l,dataFormat:_e,chartType:e,groupLabel:_,tickResolution:s,onDatumClick:c,previousPeriodShown:a,onPreviousPeriodShownChange:o,empty:ee?(0,R.jsx)(Ce,{text:i(`You haven't published any posts yet. Get started by creating your first one.`,`jetpack-premium-analytics-pkg`),action:{label:i(`Create post`,`jetpack-premium-analytics-pkg`),href:x(`post-new.php`)}}):(0,R.jsx)(Ce,{})})})})}function L({attributes:e={},setError:t}){return(0,R.jsx)(pe,{attributes:e,setError:t,options:{from:`/`},children:(0,R.jsx)(Wt,{chartType:e.chartType??N(),interval:e.chartInterval})})}var Gt,R,Kt=e((()=>{S(),T(),D(),o(),Gt=t(r(),1),Ge(),_t(),bt(),Ct(),Ut(),F(),R=s()})),qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn=e((()=>{qt=`jpa/traffic-chart`,Jt=`jpa/trending-up`,Yt=`Traffic summary`,Xt=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,Zt={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},Qt=`traffic`,$t=`framed`,en=[{id:`chartInterval`},{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],tn={name:qt,icon:Jt,title:Yt,description:Xt,help:Zt,category:Qt,presentation:$t,attributes:en}}));function z({withComparison:e,chartType:t}){return(0,V.jsx)(L,{attributes:{reportParams:E(e),chartType:t}})}function B(e){return(0,V.jsx)(L,{attributes:{reportParams:E(!1,e)}})}function rn({withComparison:e,chartType:t,...n}){return(0,V.jsx)(Ne,{...n,widgetType:H,renderModule:an,renderComponent:L,attributes:{reportParams:E(e),chartType:t}})}var V,an,H,on,U,sn,cn,W,G,K,q,J,Y,X,Z,Q,$,ln;e((()=>{T(),Pe(),Fe(),qe(),xe(),Ie(),Ue(),we(),ze(),Kt(),F(),nn(),V=s(),Ee(),an=`storybook/traffic-chart`,H=Me(tn,zt),on={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},U={chartType:`bar`},sn={...Le,widgetWidth:3},cn={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:L,tags:[`autodocs`],decorators:[Ke,Se,He],argTypes:{...Ve,withComparison:{control:`boolean`},...on},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs (Views, Visitors, Likes, and Comments) over a comparative chart. The date range and comparison come from the dashboard controls. The bucket size is the widget's own `chartInterval` attribute, clamped to what the range allows. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is drawn too: as a same-color dashed line for `line`, or in gray in a slot beside the current period for `bar`. On the Views and Visitors tabs, `bar` draws visitors inside the views bar, as Jetpack Stats v1 does. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; at the hourly grain the second request asks for visitors, likes, and comments in daily buckets, so their cards still show the day totals (skipped for a window that does not cover whole days, such as `Last 24 hours`). Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},W={render:z,args:{withComparison:!1,...U},decorators:[k]},G={render:z,args:{withComparison:!0,...U},decorators:[k]},K={render:z,args:{withComparison:!1,chartType:`line`},decorators:[k]},q={render:z,args:{withComparison:!0,chartType:`line`},decorators:[k]},J={tags:[`widget-dashboard`],render:e=>(0,V.jsx)(Ne,{...e,widgetType:H,renderModule:an,renderComponent:L,attributes:{reportParams:E(!1,`last-24-hours`)}}),args:{...sn},argTypes:{...Re}},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[k],beforeEach:()=>(O(`stats/visits`,`loading`),()=>O(`stats/visits`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[k],beforeEach:()=>(O(`stats/visits`,`error`),()=>O(`stats/visits`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[k],beforeEach:()=>(O(`stats/visits`,`empty`),Te(`/wp/v2/posts`,[{id:1}]),()=>{O(`stats/visits`,null),Te(`/wp/v2/posts`,null)})},Q={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[k],beforeEach:()=>{let e=window.JetpackScriptData;return window.JetpackScriptData={...e,site:{...e?.site,admin_url:`https://example.com/blog/wp-admin/`}},O(`stats/visits`,`empty`),Be(`/wp/v2/posts`,`empty`),()=>{window.JetpackScriptData=e,O(`stats/visits`,null),Be(`/wp/v2/posts`,null)}}},$={tags:[`widget-dashboard`],render:e=>(0,V.jsx)(rn,{...e}),args:{...sn,withComparison:!0,...U},argTypes:{...Re,withComparison:{control:`boolean`},...on}},ln=[`Default`,`WithComparison`,`LineChart`,`LineChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`EmptyNoPosts`,`WidgetDashboardWithWidget`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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