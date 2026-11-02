import{n as e,o as t,r as n}from"./rolldown-runtime-DAXXjFlN.js";import{t as r}from"./react-_iuu1rfF.js";import{n as i,r as a,t as o}from"./build-module-sy00sX6O.js";import{t as s}from"./jsx-runtime-CFwixLRt.js";import{i as c,r as l}from"./dist-CrsX--bj.js";import{D as u,m as d,n as f,r as p,t as m,v as h}from"./build-module-i8T-xzfR.js";import{Cr as g,ou as _,t as v,vu as y,xn as ee}from"./build-module-CPdP9iK8.js";import{X as b,hn as x,j as S,t as te}from"./date-fns-V6dsVcup.js";import{a as C,n as w,t as ne}from"./src-DpxsllRm.js";import{At as re,B as ie,Dt as ae,I as oe,tt as se}from"./charts-provider-DYHAyfl9.js";import{_ as ce,d as le,g as ue,t as de,y as fe}from"./src-C7ZJjxnS.js";import{An as pe,On as me,dt as he,jn as ge,kn as _e,l as ve,t as T,vn as E,xn as ye}from"./src-eG9MNHBB.js";import{t as be}from"./widget-state-C3D1Qqri.js";import{i as D,n as xe,r as Se}from"./with-story-router-jp4AnJMN.js";import{t as Ce}from"./chart-empty-state-DGBgM8T0.js";import{n as we,o as Te,r as Ee,s as O}from"./register-report-mocks-4SvdwSTg.js";import{r as De,t as Oe}from"./metric-tabs-chart-skeleton-CXgvYXoO.js";import{a as ke,c as Ae,g as je,h as Me,i as Ne,m as Pe,n as Fe,o as Ie,p as Le,r as k,s as Re}from"./with-widget-canvas-DU1nkmfv.js";import{n as ze,t as Be}from"./force-stats-mock-state-C0IYZ2Zb.js";import{n as Ve,r as He,t as Ue}from"./with-site-time-zone-B0D8ga1m.js";import{n as We,t as Ge}from"./use-no-published-posts-CnqS0TcR.js";import{n as Ke,t as qe}from"./with-story-period-host-BPp_Rjwi.js";function Je(e={},t){if(t.type===`SET_PREFERENCE_DEFAULTS`){let{scope:n,defaults:r}=t;return{...e,[n]:{...e[n],...r}}}return e}function Ye(e){let t;return(n,r)=>{if(r.type===`SET_PERSISTENCE_LAYER`){let{persistenceLayer:e,persistedData:n}=r;return t=e,n}let i=e(n,r);return r.type===`SET_PREFERENCE_VALUE`&&t?.set(i),i}}var Xe,Ze,Qe=e((()=>{f(),Xe=Ye((e={},t)=>{if(t.type===`SET_PREFERENCE_VALUE`){let{scope:n,name:r,value:i}=t;return{...e,[n]:{...e[n],[r]:i}}}return e}),Ze=m({defaults:Je,preferences:Xe})})),$e=n({set:()=>tt,setDefaults:()=>nt,setPersistenceLayer:()=>rt,toggle:()=>et});function et(e,t){return function({select:n,dispatch:r}){let i=n.get(e,t);r.set(e,t,!i)}}function tt(e,t,n){return{type:`SET_PREFERENCE_VALUE`,scope:e,name:t,value:n}}function nt(e,t){return{type:`SET_PREFERENCE_DEFAULTS`,scope:e,defaults:t}}async function rt(e){return{type:`SET_PERSISTENCE_LAYER`,persistenceLayer:e,persistedData:await e.get()}}var it=e((()=>{})),at=n({get:()=>st}),ot,st,ct=e((()=>{c(),ot=e=>(t,n,r)=>[`allowRightClickOverrides`,`distractionFree`,`editorMode`,`fixedToolbar`,`focusMode`,`hiddenBlockTypes`,`inactivePanels`,`keepCaretInsideBlock`,`mostUsedBlocks`,`openPanels`,`showBlockBreadcrumbs`,`showIconLabels`,`showListViewByDefault`,`isPublishSidebarEnabled`,`isComplementaryAreaVisible`,`pinnedItems`].includes(r)&&[`core/edit-post`,`core/edit-site`].includes(n)?(l(`wp.data.select( 'core/preferences' ).get( '${n}', '${r}' )`,{since:`6.5`,alternative:`wp.data.select( 'core/preferences' ).get( 'core', '${r}' )`}),e(t,`core`,r)):e(t,n,r),st=ot((e,t,n)=>{let r=e.preferences[t]?.[n];return r===void 0?e.defaults[t]?.[n]:r})})),lt,ut=e((()=>{lt=`core/preferences`})),A,dt=e((()=>{f(),Qe(),it(),ct(),ut(),A=u(lt,{reducer:Ze,actions:$e,selectors:at}),p(A)})),ft=e((()=>{})),pt=e((()=>{})),mt=e((()=>{ft(),dt(),pt()}));function ht(e,t){let n=e.from??``,r=e.to??``;return pe(e.preset,n,r).includes(`hour`)||ge(n,r)>gt?{}:t===`line`?{extra:[`day`]}:{unavailable:{intervals:[`day`],hint:i(`Switch to the line chart to see each day.`,`jetpack-premium-analytics-pkg`)}}}var gt,_t=e((()=>{T(),o(),gt=366})),vt,yt,bt=e((()=>{vt=`_root_sp1nf_1`,yt={root:vt}}));function xt(){let e=h(e=>e(A).get(ye,j)===!0,[]),{set:t}=d(A);return[e,(0,St.useCallback)(n=>{n!==e&&t(ye,j,n)},[e,t])]}var St,j,Ct=e((()=>{D(),f(),mt(),St=t(r(),1),j=`trafficChartPreviousPeriod`}));function wt(e,t){let n=e[t];return typeof n==`number`?n:void 0}function M(e,t,n,r){let i=[],a=(e?.data??[]).map(e=>fe(e.date_start,t));return(e?.data??[]).forEach((e,o)=>{let s=a[o],c=r?r[o]:s,l=n(e);if(!c||!s||l===void 0)return;let u=fe(e.date_end,t),d=u?{endDate:u}:{};i.push(r?{date:c,realDate:s,...d,value:l}:{date:c,...d,value:l})}),{points:i,dates:a}}function Tt(e){let t=wt(e,`views`),n=wt(e,`visitors`);return t!==void 0&&n!==void 0&&n>0?t/n:void 0}function Et(e){return Array.isArray(e.post_titles)?e.post_titles.length:void 0}function Dt(e,t,n,r){if(!r)return n;let i=[];return re(e?.data??[],t?.data??[],r).forEach((e,t)=>{e!==void 0&&(i[e]=n[t])}),i}function Ot(e,t){return e.filter(e=>e.value!==0||t.some(t=>t.date.getTime()===e.date.getTime()&&t.value!==0))}function kt(e,t,n,r){return[{label:i(`Views per visitor`,`jetpack-premium-analytics-pkg`),icon:ee,dataFormat:At,currentReport:e.views,current:M(e.views,t,Tt),comparisonReport:n?.views,valueOf:Tt,isCount:!1},{label:i(`Posts published`,`jetpack-premium-analytics-pkg`),icon:g,countLabel:jt,currentReport:e.posts,current:M(e.posts,t,Et),comparisonReport:n?.posts,valueOf:Et,isCount:!0}].map(({label:e,icon:n,dataFormat:i,countLabel:a,currentReport:o,current:s,comparisonReport:c,valueOf:l,isCount:u})=>{let d=c?M(c,t,l,Dt(o,c,s.dates,r)).points:[],f=u?Ot(s.points,d):s.points,p=u?Ot(d,s.points):d;return{label:e,icon:n,dataFormat:i,countLabel:a,data:f,previous:p.length?p:void 0}}).filter(e=>e.data.length||e.previous)}var At,jt,Mt=e((()=>{de(),D(),o(),v(),At={type:`average`},jt=e=>a(`%s Post published`,`%s Posts published`,e,`jetpack-premium-analytics-pkg`)}));function Nt(){let e=C()?.site?.wpcom?.blog_id;if(e)try{let t=window.localStorage.getItem(`jetpack_stats_chart_type_${e}`);return t===`bar`||t===`line`?t:void 0}catch{return}}var Pt=e((()=>{ne()}));function N(){return Nt()??`bar`}var P,Ft,It,Lt,F=e((()=>{o(),Ie(),_t(),Pt(),P=[`hour`,`day`,`week`,`month`,`year`],Ft=[{id:`views`,label:i(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>a(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:i(`Visitors`,`jetpack-premium-analytics-pkg`),countLabel:e=>a(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`),counterpartId:`views`,counterpartHidden:!0},{id:`comments`,label:i(`Comments`,`jetpack-premium-analytics-pkg`),countLabel:e=>a(`%s Comment`,`%s Comments`,e,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:i(`Likes`,`jetpack-premium-analytics-pkg`),countLabel:e=>a(`%s Like`,`%s Likes`,e,`jetpack-premium-analytics-pkg`)}],It={...Re((e,t)=>ht(e,t.chartType??N())),elements:Ae(P)},Lt={attributes:[It,{id:`chartType`,getValue:({item:e})=>e.chartType??N()}],example:{attributes:{}}}}));function Rt(e){let t=ue(e.from),n=ue(e.to);return S(t,x(t))&&S(n,b(n))}function I(e,t,n){return{...e,stat_fields:t,period:n}}function zt(e,t){let n=t===`hour`,r=n&&Rt(e),a=(0,y.useCallback)(e=>!n||Bt.has(e),[n]),o=(0,y.useMemo)(()=>I(e,n?`views`:`views,visitors`,t),[e,t,n]),s=(0,y.useMemo)(()=>n?I(e,`visitors,likes,comments`,`day`):I(e,`likes,comments,post_titles`,t),[e,t,n]),c=he(o),l=he(s,{enabled:!n||r}),u=c.primary.data,d=c.comparison.data,f=c.hasComparison,p=c.timezone,m=l.primary.data,h=l.comparison.data,g=l.hasComparison,_=l.timezone,{periodStarts:v}=c,ee=c.isError&&!u?.data?.length,b=l.isError&&!m?.data?.length,x=r&&!b,S=(0,y.useMemo)(()=>kt({views:u,posts:n?void 0:m},p,f?{views:d,posts:g?h:void 0}:void 0,v),[u,p,d,f,m,h,g,n,v]),te=(0,y.useMemo)(()=>Ft.map(e=>{let t=e.id===`views`||e.id===`visitors`&&!n,r=e.id===`views`||e.id===`visitors`,o={...ae({primary:t?u:m,comparison:t?d:h,hasComparison:t?f:g,field:e.id,label:e.label,countLabel:e.countLabel,zone:t?p:_,periodStarts:v}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,counterpartHidden:`counterpartHidden`in e?e.counterpartHidden:void 0,tooltipExtras:r&&S.length?S:void 0};if(a(e.id))return o;let s=i(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`);return x?{...o,current:[],previous:void 0,seriesUnavailable:s}:{...o,unavailable:s}}),[a,n,x,S,u,d,f,p,m,h,g,_,v]),{refetch:C}=c,{refetch:w}=l,ne=(0,y.useCallback)(()=>{C(),w()},[C,w]),re=ee||b&&!n;return{metrics:te,isLoading:c.isLoading||l.isLoading,isFetching:c.isFetching||l.isFetching,isError:re,refetch:ne}}var Bt,Vt=e((()=>{T(),de(),_(),o(),te(),Mt(),F(),D(),Bt=new Set([`views`])}));function Ht({chartType:e,interval:t}){let{reportParams:n}=ie(),{openPeriod:r}=me(),a=_e(),[o,s]=xt(),c=ve({...n,interval:t},P,a,ht(n,e)),l=(0,Ut.useMemo)(()=>{if(!r)return;let e={from:le(n.from),to:le(n.to)};return t=>{let n=se(t,c,e,{timeZone:ce()});n&&r(n)}},[r,c,n.from,n.to]),{metrics:u,isLoading:d,isFetching:f,isError:p,refetch:m}=zt(n,c),h=i(`Traffic metric`,`jetpack-premium-analytics-pkg`),g=u.find(e=>e.key===`views`),{noPublishedPosts:_,isChecking:v}=We(!d&&!p&&g?.value===0&&g.current.every(e=>e.value===0||e.value===null)&&(g.previous?.every(e=>e.value===0||e.value===null)??!0));return(0,R.jsx)(`div`,{className:yt.root,children:(0,R.jsx)(be,{isLoading:d||v,isFetching:f,isError:p,error:{description:i(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:m}]},renderLoading:(0,R.jsx)(Oe,{}),children:(0,R.jsx)(De,{metrics:u,dataFormat:Wt,chartType:e,groupLabel:h,tickResolution:c,onDatumClick:l,chartTitle:i(`Traffic summary`,`jetpack-premium-analytics-pkg`),previousPeriodShown:o,onPreviousPeriodShownChange:s,empty:_?(0,R.jsx)(Ce,{text:i(`You haven't published any posts yet. Get started by creating your first one.`,`jetpack-premium-analytics-pkg`),action:{label:i(`Create post`,`jetpack-premium-analytics-pkg`),href:w(`post-new.php`)}}):(0,R.jsx)(Ce,{})})})})}function L({attributes:e={},setError:t}){return(0,R.jsx)(oe,{attributes:e,setError:t,options:{from:`/`},children:(0,R.jsx)(Ht,{chartType:e.chartType??N(),interval:e.chartInterval})})}var Ut,R,Wt,Gt=e((()=>{ne(),T(),de(),D(),o(),Ut=t(r(),1),Ge(),_t(),bt(),Ct(),Vt(),F(),R=s(),Wt={type:`number`,options:{useMultipliers:!0,decimals:0}}})),Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn=e((()=>{Kt=`jpa/traffic-chart`,qt=`jpa/trending-up`,Jt=`Traffic summary`,Yt=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,Xt={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},Zt=`traffic`,Qt=`framed`,$t=[{id:`chartInterval`},{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],en={name:Kt,icon:qt,title:Jt,description:Yt,help:Xt,category:Zt,presentation:Qt,attributes:$t}}));function z({withComparison:e,chartType:t}){return(0,V.jsx)(L,{attributes:{reportParams:E(e),chartType:t}})}function B(e){return(0,V.jsx)(L,{attributes:{reportParams:E(!1,e)}})}function nn({withComparison:e,chartType:t,...n}){return(0,V.jsx)(Pe,{...n,widgetType:an,renderModule:rn,renderComponent:L,attributes:{reportParams:E(e),chartType:t}})}var V,rn,an,H,U,on,sn,W,G,K,q,J,Y,X,Z,Q,$,cn;e((()=>{T(),Me(),ke(),qe(),xe(),Fe(),Ue(),we(),ze(),Gt(),F(),tn(),V=s(),Ee(),rn=`storybook/traffic-chart`,an=Ne(en,Lt),H={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},U={chartType:`bar`},on={...Le,widgetWidth:3},sn={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:L,tags:[`autodocs`],decorators:[Ke,Se,He],argTypes:{...Ve,withComparison:{control:`boolean`},...H},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs (Views, Visitors, Likes, and Comments) over a comparative chart. The date range and comparison come from the dashboard controls. The bucket size is the widget's own `chartInterval` attribute, clamped to what the range allows. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is drawn too: as a same-color dashed line for `line`, or in gray in a slot beside the current period for `bar`. On the Views and Visitors tabs, `bar` draws visitors inside the views bar, as Jetpack Stats v1 does. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; at the hourly grain the second request asks for visitors, likes, and comments in daily buckets, so their cards still show the day totals (skipped for a window that does not cover whole days, such as `Last 24 hours`). Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},W={render:z,args:{withComparison:!1,...U},decorators:[k]},G={render:z,args:{withComparison:!0,...U},decorators:[k]},K={render:z,args:{withComparison:!1,chartType:`line`},decorators:[k]},q={render:z,args:{withComparison:!0,chartType:`line`},decorators:[k]},J={render:e=>(0,V.jsx)(Pe,{...e,widgetType:an,renderModule:rn,renderComponent:L,attributes:{reportParams:E(!1,`last-24-hours`)}}),args:{...on},argTypes:{...je}},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[k],beforeEach:()=>(O(`stats/visits`,`loading`),()=>O(`stats/visits`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[k],beforeEach:()=>(O(`stats/visits`,`error`),()=>O(`stats/visits`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[k],beforeEach:()=>(O(`stats/visits`,`empty`),Te(`/wp/v2/posts`,[{id:1}]),()=>{O(`stats/visits`,null),Te(`/wp/v2/posts`,null)})},Q={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[k],beforeEach:()=>{let e=window.JetpackScriptData;return window.JetpackScriptData={...e,site:{...e?.site,admin_url:`https://example.com/blog/wp-admin/`}},O(`stats/visits`,`empty`),Be(`/wp/v2/posts`,`empty`),()=>{window.JetpackScriptData=e,O(`stats/visits`,null),Be(`/wp/v2/posts`,null)}}},$={render:e=>(0,V.jsx)(nn,{...e}),args:{...on,withComparison:!0,...U},argTypes:{...je,withComparison:{control:`boolean`},...H}},cn=[`Default`,`WithComparison`,`LineChart`,`LineChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`EmptyNoPosts`,`WidgetDashboardWithWidget`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}}}))();export{W as Default,Z as Empty,Q as EmptyNoPosts,X as Error,J as Hourly,K as LineChart,q as LineChartWithComparison,Y as Loading,$ as WidgetDashboardWithWidget,G as WithComparison,cn as __namedExportsOrder,sn as default};