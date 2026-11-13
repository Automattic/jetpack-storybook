import{n as e,o as t,r as n}from"./rolldown-runtime-DAXXjFlN.js";import{t as r}from"./react-_iuu1rfF.js";import{n as i,r as a,t as o}from"./build-module-BXs6jvWf.js";import{t as s}from"./jsx-runtime-CFwixLRt.js";import{M as c,j as l}from"./index-fn-Dtbeakz0.js";import{D as u,m as d,n as f,r as p,t as m,v as h}from"./build-module-dJD1IfGR.js";import{Cr as g,ou as _,t as v,vu as y,xn as b}from"./build-module-D8x1-0PG.js";import{Cn as x,et as S,j as C,t as ee}from"./date-fns-BYhs6DQD.js";import{o as w,r as T,t as E}from"./src-BgnB_EuX.js";import{d as te,f as ne,m as re,o as ie,t as ae}from"./src-M-MiwiMQ.js";import{Fn as oe,In as se,Ln as ce,Pn as le,Sn as D,Tn as ue,l as de,pt as fe,t as O}from"./src-BcILQ8ng.js";import{B as pe,I as me,It as he,Mt as ge,Nt as _e,f as ve,gt as ye,rt as be}from"./charts-provider-C5HA2SSg.js";import{t as xe}from"./widget-state-DnbF8hrz.js";import{i as k,n as Se,r as Ce}from"./with-story-router-C7WVHY_h.js";import{t as we}from"./chart-empty-state-CsHzxy7t.js";import{n as Te,o as Ee,r as De,s as A}from"./register-report-mocks-DEKgkFm4.js";import{r as Oe,t as ke}from"./metric-tabs-chart-skeleton-nynLduFq.js";import{n as Ae,r as je,t as Me}from"./src-C9JGo_Mf.js";import{a as Ne,c as Pe,i as j,l as Fe,o as Ie,r as Le,s as Re,u as ze}from"./with-widget-canvas-DoZ3Ea1y.js";import{n as Be,t as Ve}from"./force-stats-mock-state-CZ4B651-.js";import{n as He,r as Ue,t as We}from"./with-site-time-zone-RgAxKbai.js";import{n as Ge,t as Ke}from"./use-no-published-posts-BsH8zm-d.js";import{n as qe,t as Je}from"./with-story-period-host-DKBpfBGf.js";function Ye(e={},t){if(t.type===`SET_PREFERENCE_DEFAULTS`){let{scope:n,defaults:r}=t;return{...e,[n]:{...e[n],...r}}}return e}function Xe(e){let t;return(n,r)=>{if(r.type===`SET_PERSISTENCE_LAYER`){let{persistenceLayer:e,persistedData:n}=r;return t=e,n}let i=e(n,r);return r.type===`SET_PREFERENCE_VALUE`&&t?.set(i),i}}var Ze,Qe,$e=e((()=>{f(),Ze=Xe((e={},t)=>{if(t.type===`SET_PREFERENCE_VALUE`){let{scope:n,name:r,value:i}=t;return{...e,[n]:{...e[n],[r]:i}}}return e}),Qe=m({defaults:Ye,preferences:Ze})})),et=n({set:()=>nt,setDefaults:()=>rt,setPersistenceLayer:()=>it,toggle:()=>tt});function tt(e,t){return function({select:n,dispatch:r}){let i=n.get(e,t);r.set(e,t,!i)}}function nt(e,t,n){return{type:`SET_PREFERENCE_VALUE`,scope:e,name:t,value:n}}function rt(e,t){return{type:`SET_PREFERENCE_DEFAULTS`,scope:e,defaults:t}}async function it(e){return{type:`SET_PERSISTENCE_LAYER`,persistenceLayer:e,persistedData:await e.get()}}var at=e((()=>{})),ot=n({get:()=>ct}),st,ct,lt=e((()=>{c(),st=e=>(t,n,r)=>[`allowRightClickOverrides`,`distractionFree`,`editorMode`,`fixedToolbar`,`focusMode`,`hiddenBlockTypes`,`inactivePanels`,`keepCaretInsideBlock`,`mostUsedBlocks`,`openPanels`,`showBlockBreadcrumbs`,`showIconLabels`,`showListViewByDefault`,`isPublishSidebarEnabled`,`isComplementaryAreaVisible`,`pinnedItems`].includes(r)&&[`core/edit-post`,`core/edit-site`].includes(n)?(l(`wp.data.select( 'core/preferences' ).get( '${n}', '${r}' )`,{since:`6.5`,alternative:`wp.data.select( 'core/preferences' ).get( 'core', '${r}' )`}),e(t,`core`,r)):e(t,n,r),ct=st((e,t,n)=>{let r=e.preferences[t]?.[n];return r===void 0?e.defaults[t]?.[n]:r})})),ut,dt=e((()=>{ut=`core/preferences`})),M,ft=e((()=>{f(),$e(),at(),lt(),dt(),M=u(ut,{reducer:Qe,actions:et,selectors:ot}),p(M)})),pt=e((()=>{ft()})),mt=e((()=>{})),ht=e((()=>{ft(),pt(),mt()}));function gt(e,t){let n=e.from??``,r=e.to??``;return se(e.preset,n,r).includes(`hour`)||ce(n,r)>_t?{}:t===`line`?{extra:[`day`]}:{unavailable:{intervals:[`day`],hint:i(`Switch to the line chart to see each day.`,`jetpack-premium-analytics-pkg`)}}}var _t,vt=e((()=>{O(),o(),_t=366})),yt,bt,xt=e((()=>{yt=`_root_sp1nf_1`,bt={root:yt}}));function St(){let e=h(e=>e(M).get(ue,wt)===!0,[]),{set:t}=d(M);return[e,(0,Ct.useCallback)(n=>{n!==e&&t(ue,wt,n)},[e,t])]}var Ct,wt,Tt=e((()=>{k(),f(),ht(),Ct=t(r(),1),wt=`trafficChartPreviousPeriod`}));function Et(e,t){let n=e[t];return typeof n==`number`?n:void 0}function Dt(e,t,n,r){let i=[],a=(e?.data??[]).map(e=>re(e.date_start,t));return(e?.data??[]).forEach((e,o)=>{let s=a[o],c=r?r[o]:s,l=n(e);if(!c||!s||l===void 0)return;let u=re(e.date_end,t),d=u?{endDate:u}:{};i.push(r?{date:c,realDate:s,...d,value:l}:{date:c,...d,value:l})}),{points:i,dates:a}}function Ot(e){let t=Et(e,`views`),n=Et(e,`visitors`);return t!==void 0&&n!==void 0&&n>0?t/n:void 0}function kt(e){return Array.isArray(e.post_titles)?e.post_titles.length:void 0}function At(e,t,n,r){if(!r)return n;let i=[];return he(e?.data??[],t?.data??[],r).forEach((e,t)=>{e!==void 0&&(i[e]=n[t])}),i}function jt(e,t){return e.filter(e=>e.value!==0||t.some(t=>t.date.getTime()===e.date.getTime()&&t.value!==0))}function Mt(e,t,n,r){return[{label:i(`Views per visitor`,`jetpack-premium-analytics-pkg`),icon:b,dataFormat:Nt,currentReport:e.views,current:Dt(e.views,t,Ot),comparisonReport:n?.views,valueOf:Ot,isCount:!1},{label:i(`Posts published`,`jetpack-premium-analytics-pkg`),icon:g,countLabel:Pt,currentReport:e.posts,current:Dt(e.posts,t,kt),comparisonReport:n?.posts,valueOf:kt,isCount:!0}].map(({label:e,icon:n,dataFormat:i,countLabel:a,currentReport:o,current:s,comparisonReport:c,valueOf:l,isCount:u})=>{let d=c?Dt(c,t,l,At(o,c,s.dates,r)).points:[],f=u?jt(s.points,d):s.points,p=u?jt(d,s.points):d;return{label:e,icon:n,dataFormat:i,countLabel:a,data:f,previous:p.length?p:void 0}}).filter(e=>e.data.length||e.previous)}var Nt,Pt,Ft=e((()=>{ae(),k(),o(),v(),Nt={type:`average`},Pt=e=>a(`%s Post published`,`%s Posts published`,e,`jetpack-premium-analytics-pkg`)}));function It(){let e=w()?.site?.wpcom?.blog_id;return e?`jetpack_stats_chart_type_${e}`:void 0}function Lt(){let e=It();if(e)try{let t=window.localStorage.getItem(e);return t===`bar`||t===`line`?t:void 0}catch{return}}function Rt(e){let t=It();if(t)try{window.localStorage.setItem(t,e)}catch{}}var zt=e((()=>{E()}));function N(){return Lt()??`bar`}var P,Bt,Vt,Ht,F=e((()=>{o(),Me(),vt(),zt(),P=[`hour`,`day`,`week`,`month`,`quarter`,`year`],Bt=[{id:`views`,label:i(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>a(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:i(`Visitors`,`jetpack-premium-analytics-pkg`),countLabel:e=>a(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`),counterpartId:`views`,counterpartHidden:!0},{id:`comments`,label:i(`Comments`,`jetpack-premium-analytics-pkg`),countLabel:e=>a(`%s Comment`,`%s Comments`,e,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:i(`Likes`,`jetpack-premium-analytics-pkg`),countLabel:e=>a(`%s Like`,`%s Likes`,e,`jetpack-premium-analytics-pkg`)}],Vt={...Ae((e,t)=>gt(e,t.chartType??N())),elements:je(P)},Ht={attributes:[Vt,{id:`chartType`,getValue:({item:e})=>e.chartType??N(),setValue:({value:e})=>(Rt(e),{chartType:e})}],example:{attributes:{}}}}));function Ut(e){let t=te(e.from),n=te(e.to);return C(t,x(t))&&C(n,S(n))}function I(e,t,n){return{...e,stat_fields:t,period:n}}function Wt(e,t){let n=t===`hour`,r=n&&Ut(e),a=(0,y.useCallback)(e=>!n||Gt.has(e),[n]),o=(0,y.useMemo)(()=>I(e,n?`views`:`views,visitors`,t),[e,t,n]),s=(0,y.useMemo)(()=>n?I(e,`visitors,likes,comments`,`day`):I(e,`likes,comments,post_titles`,t),[e,t,n]),c=fe(o),l=fe(s,{enabled:!n||r}),u=c.primary.data,d=c.comparison.data,f=c.hasComparison,p=c.timezone,m=l.primary.data,h=l.comparison.data,g=l.hasComparison,_=l.timezone,{periodStarts:v}=c,b=c.isError&&!u?.data?.length,x=l.isError&&!m?.data?.length,S=r&&!x,C=(0,y.useMemo)(()=>Mt({views:u,posts:n?void 0:m},p,f?{views:d,posts:g?h:void 0}:void 0,v),[u,p,d,f,m,h,g,n,v]),ee=(0,y.useMemo)(()=>Bt.map(e=>{let t=e.id===`views`||e.id===`visitors`&&!n,r=e.id===`views`||e.id===`visitors`,o={..._e({primary:t?u:m,comparison:t?d:h,hasComparison:t?f:g,field:e.id,label:e.label,countLabel:e.countLabel,zone:t?p:_,periodStarts:v}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,counterpartHidden:`counterpartHidden`in e?e.counterpartHidden:void 0,tooltipExtras:r&&C.length?C:void 0};if(a(e.id))return o;let s=i(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`);return S?{...o,current:[],previous:void 0,seriesUnavailable:s}:{...o,unavailable:s}}),[a,n,S,C,u,d,f,p,m,h,g,_,v]),{refetch:w}=c,{refetch:T}=l,E=(0,y.useCallback)(()=>{w(),T()},[w,T]),te=b||x&&!n;return{metrics:ee,isLoading:c.isLoading||l.isLoading,isFetching:c.isFetching||l.isFetching,isError:te,csvIsError:c.primary.isError||!n&&l.primary.isError,csvIsPlaceholderData:c.primary.isPlaceholderData||!n&&l.primary.isPlaceholderData,timezone:p,refetch:E}}var Gt,Kt=e((()=>{O(),ae(),_(),o(),ee(),Ft(),F(),k(),Gt=new Set([`views`])}));function qt({chartType:e,interval:t}){let{reportParams:n}=pe(),{openPeriod:r}=le(),a=oe(),[o,s]=St(),c=de({...n,interval:t},P,a,gt(n,e)),l=(0,R.useMemo)(()=>{if(!r)return;let e={from:ie(n.from),to:ie(n.to)};return t=>{let n=be(t,c,e,{timeZone:ne()});n&&r(n)}},[r,c,n.from,n.to]),{metrics:u,isLoading:d,isFetching:f,isError:p,csvIsError:m,csvIsPlaceholderData:h,timezone:g,refetch:_}=Wt(n,c),v=i(`Traffic metric`,`jetpack-premium-analytics-pkg`),y=u.find(e=>e.key===`views`),b=(0,R.useMemo)(()=>y?.current.some(e=>(e.value??0)>0)?ge(u,{zone:g,withTime:c===`hour`,dateLabel:i(`Date`,`jetpack-premium-analytics-pkg`)}):void 0,[u,y,g,c]);ve({csv:b&&{...b,filenamePrefix:`traffic-summary`,hasDateRange:!0,status:{isLoading:d,isFetching:f,isError:m,isPlaceholderData:h}}});let{noPublishedPosts:x,isChecking:S}=Ge(!d&&!p&&y?.value===0&&y.current.every(e=>e.value===0||e.value===null)&&(y.previous?.every(e=>e.value===0||e.value===null)??!0));return(0,z.jsx)(`div`,{className:bt.root,children:(0,z.jsx)(xe,{isLoading:d||S,isFetching:f,isError:p,error:{description:i(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:_}]},renderLoading:(0,z.jsx)(ke,{}),children:(0,z.jsx)(Oe,{metrics:u,dataFormat:ye,chartType:e,groupLabel:v,tickResolution:c,onDatumClick:l,previousPeriodShown:o,onPreviousPeriodShownChange:s,empty:x?(0,z.jsx)(we,{text:i(`You haven't published any posts yet. Get started by creating your first one.`,`jetpack-premium-analytics-pkg`),action:{label:i(`Create post`,`jetpack-premium-analytics-pkg`),href:T(`post-new.php`)}}):(0,z.jsx)(we,{})})})})}function L({attributes:e={},setError:t}){return(0,z.jsx)(me,{attributes:e,setError:t,options:{from:`/`},children:(0,z.jsx)(qt,{chartType:e.chartType??N(),interval:e.chartInterval})})}var R,z,Jt=e((()=>{E(),O(),ae(),k(),o(),R=t(r(),1),Ke(),vt(),xt(),Tt(),Kt(),F(),z=s()})),Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an=e((()=>{Yt=`jpa/traffic-chart`,Xt=`jpa/trending-up`,Zt=`Traffic summary`,Qt=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,$t={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},en=`traffic`,tn=`framed`,nn=[{id:`chartInterval`},{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],rn={name:Yt,icon:Xt,title:Zt,description:Qt,help:$t,category:en,presentation:tn,attributes:nn}}));function B({withComparison:e,chartType:t}){return(0,H.jsx)(L,{attributes:{reportParams:D(e),chartType:t}})}function V(e){return(0,H.jsx)(L,{attributes:{reportParams:D(!1,e)}})}function on({withComparison:e,chartType:t,...n}){return(0,H.jsx)(Pe,{...n,widgetType:cn,renderModule:sn,renderComponent:L,attributes:{reportParams:D(e),chartType:t}})}var H,sn,cn,ln,U,un,dn,W,G,K,q,J,Y,X,Z,Q,$,fn;e((()=>{O(),Fe(),Ie(),Je(),Se(),Le(),We(),Te(),Be(),Jt(),F(),an(),H=s(),De(),sn=`storybook/traffic-chart`,cn=Ne(rn,Ht),ln={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},U={chartType:`bar`},un={...Re,widgetWidth:3},dn={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:L,tags:[`autodocs`],decorators:[qe,Ce,Ue],argTypes:{...He,withComparison:{control:`boolean`},...ln},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs (Views, Visitors, Likes, and Comments) over a comparative chart. The date range and comparison come from the dashboard controls. The bucket size is the widget's own `chartInterval` attribute, clamped to what the range allows. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is drawn too: as a same-color dashed line for `line`, or in gray in a slot beside the current period for `bar`. On the Views and Visitors tabs, `bar` draws visitors inside the views bar, as Jetpack Stats v1 does. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; at the hourly grain the second request asks for visitors, likes, and comments in daily buckets, so their cards still show the day totals (skipped for a window that does not cover whole days, such as `Last 24 hours`). Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},W={render:B,args:{withComparison:!1,...U},decorators:[j]},G={render:B,args:{withComparison:!0,...U},decorators:[j]},K={render:B,args:{withComparison:!1,chartType:`line`},decorators:[j]},q={render:B,args:{withComparison:!0,chartType:`line`},decorators:[j]},J={tags:[`widget-dashboard`],render:e=>(0,H.jsx)(Pe,{...e,widgetType:cn,renderModule:sn,renderComponent:L,attributes:{reportParams:D(!1,`last-24-hours`)}}),args:{...un},argTypes:{...ze}},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[j],beforeEach:()=>(A(`stats/visits`,`loading`),()=>A(`stats/visits`,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[j],beforeEach:()=>(A(`stats/visits`,`error`),()=>A(`stats/visits`,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[j],beforeEach:()=>(A(`stats/visits`,`empty`),Ee(`/wp/v2/posts`,[{id:1}]),()=>{A(`stats/visits`,null),Ee(`/wp/v2/posts`,null)})},Q={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[j],beforeEach:()=>{let e=window.JetpackScriptData;return window.JetpackScriptData={...e,site:{...e?.site,admin_url:`https://example.com/blog/wp-admin/`}},A(`stats/visits`,`empty`),Ve(`/wp/v2/posts`,`empty`),()=>{window.JetpackScriptData=e,A(`stats/visits`,null),Ve(`/wp/v2/posts`,null)}}},$={tags:[`widget-dashboard`],render:e=>(0,H.jsx)(on,{...e}),args:{...un,withComparison:!0,...U},argTypes:{...ze,withComparison:{control:`boolean`},...ln}},fn=[`Default`,`WithComparison`,`LineChart`,`LineChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`EmptyNoPosts`,`WidgetDashboardWithWidget`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}}}))();export{W as Default,Z as Empty,Q as EmptyNoPosts,X as Error,J as Hourly,K as LineChart,q as LineChartWithComparison,Y as Loading,$ as WidgetDashboardWithWidget,G as WithComparison,fn as __namedExportsOrder,dn as default};