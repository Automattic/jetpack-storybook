import{n as e,o as t,r as n}from"./rolldown-runtime-DAXXjFlN.js";import{t as r}from"./react-_iuu1rfF.js";import{n as i,r as a,t as o}from"./build-module-BXs6jvWf.js";import{t as s}from"./jsx-runtime-CFwixLRt.js";import{M as c,j as l}from"./index-fn-Dtbeakz0.js";import{D as u,m as d,n as f,r as p,t as m,v as h}from"./build-module-dJD1IfGR.js";import{Cr as g,ou as _,t as v,vu as y,xn as ee}from"./build-module-D8x1-0PG.js";import{Cn as b,et as x,j as S,t as te}from"./date-fns-BYhs6DQD.js";import{o as C,r as w,t as ne}from"./src-BgnB_EuX.js";import{B as re,I as ie,Pt as ae,gt as oe,jt as se,rt as ce}from"./charts-provider-DlzzitxZ.js";import{d as le,f as ue,m as de,o as fe,t as T}from"./src-M-MiwiMQ.js";import{Cn as pe,Fn as me,Mn as he,Nn as ge,Pn as _e,bn as E,dt as ve,l as ye,t as D}from"./src-B74DAjRW.js";import{t as be}from"./widget-state-DnbF8hrz.js";import{t as O}from"./src-xiNP1C2z.js";import{t as xe}from"./chart-empty-state-CsHzxy7t.js";import{n as Se,o as Ce,r as we,s as k}from"./register-report-mocks-7jG8EqFP.js";import{r as Te,t as Ee}from"./metric-tabs-chart-skeleton-C6MPEAJd.js";import{n as De,r as Oe}from"./with-story-router-PrDUv03Y.js";import{n as ke,r as Ae,t as je}from"./src-wHOXk9yf.js";import{a as Me,c as Ne,i as A,l as Pe,o as Fe,r as Ie,s as Le,u as Re}from"./with-widget-canvas-ClpnRGg2.js";import{n as ze,t as Be}from"./force-stats-mock-state-LHJpdv1k.js";import{n as Ve,r as He,t as Ue}from"./with-site-time-zone-RgAxKbai.js";import{n as We,t as Ge}from"./use-no-published-posts-ipT5mnWc.js";import{n as Ke,t as qe}from"./with-story-period-host-BC5nnTmr.js";function Je(e={},t){if(t.type===`SET_PREFERENCE_DEFAULTS`){let{scope:n,defaults:r}=t;return{...e,[n]:{...e[n],...r}}}return e}function Ye(e){let t;return(n,r)=>{if(r.type===`SET_PERSISTENCE_LAYER`){let{persistenceLayer:e,persistedData:n}=r;return t=e,n}let i=e(n,r);return r.type===`SET_PREFERENCE_VALUE`&&t?.set(i),i}}var Xe,Ze,Qe=e((()=>{f(),Xe=Ye((e={},t)=>{if(t.type===`SET_PREFERENCE_VALUE`){let{scope:n,name:r,value:i}=t;return{...e,[n]:{...e[n],[r]:i}}}return e}),Ze=m({defaults:Je,preferences:Xe})})),$e=n({set:()=>tt,setDefaults:()=>nt,setPersistenceLayer:()=>rt,toggle:()=>et});function et(e,t){return function({select:n,dispatch:r}){let i=n.get(e,t);r.set(e,t,!i)}}function tt(e,t,n){return{type:`SET_PREFERENCE_VALUE`,scope:e,name:t,value:n}}function nt(e,t){return{type:`SET_PREFERENCE_DEFAULTS`,scope:e,defaults:t}}async function rt(e){return{type:`SET_PERSISTENCE_LAYER`,persistenceLayer:e,persistedData:await e.get()}}var it=e((()=>{})),at=n({get:()=>st}),ot,st,ct=e((()=>{c(),ot=e=>(t,n,r)=>[`allowRightClickOverrides`,`distractionFree`,`editorMode`,`fixedToolbar`,`focusMode`,`hiddenBlockTypes`,`inactivePanels`,`keepCaretInsideBlock`,`mostUsedBlocks`,`openPanels`,`showBlockBreadcrumbs`,`showIconLabels`,`showListViewByDefault`,`isPublishSidebarEnabled`,`isComplementaryAreaVisible`,`pinnedItems`].includes(r)&&[`core/edit-post`,`core/edit-site`].includes(n)?(l(`wp.data.select( 'core/preferences' ).get( '${n}', '${r}' )`,{since:`6.5`,alternative:`wp.data.select( 'core/preferences' ).get( 'core', '${r}' )`}),e(t,`core`,r)):e(t,n,r),st=ot((e,t,n)=>{let r=e.preferences[t]?.[n];return r===void 0?e.defaults[t]?.[n]:r})})),lt,ut=e((()=>{lt=`core/preferences`})),j,dt=e((()=>{f(),Qe(),it(),ct(),ut(),j=u(lt,{reducer:Ze,actions:$e,selectors:at}),p(j)})),ft=e((()=>{dt()})),pt=e((()=>{})),mt=e((()=>{dt(),ft(),pt()}));function ht(e,t){let n=e.from??``,r=e.to??``;return _e(e.preset,n,r).includes(`hour`)||me(n,r)>gt?{}:t===`line`?{extra:[`day`]}:{unavailable:{intervals:[`day`],hint:i(`Switch to the line chart to see each day.`,`jetpack-premium-analytics-pkg`)}}}var gt,_t=e((()=>{D(),o(),gt=366})),vt,yt,bt=e((()=>{vt=`_root_sp1nf_1`,yt={root:vt}}));function xt(){let e=h(e=>e(j).get(pe,M)===!0,[]),{set:t}=d(j);return[e,(0,St.useCallback)(n=>{n!==e&&t(pe,M,n)},[e,t])]}var St,M,Ct=e((()=>{O(),f(),mt(),St=t(r(),1),M=`trafficChartPreviousPeriod`}));function wt(e,t){let n=e[t];return typeof n==`number`?n:void 0}function N(e,t,n,r){let i=[],a=(e?.data??[]).map(e=>de(e.date_start,t));return(e?.data??[]).forEach((e,o)=>{let s=a[o],c=r?r[o]:s,l=n(e);if(!c||!s||l===void 0)return;let u=de(e.date_end,t),d=u?{endDate:u}:{};i.push(r?{date:c,realDate:s,...d,value:l}:{date:c,...d,value:l})}),{points:i,dates:a}}function Tt(e){let t=wt(e,`views`),n=wt(e,`visitors`);return t!==void 0&&n!==void 0&&n>0?t/n:void 0}function Et(e){return Array.isArray(e.post_titles)?e.post_titles.length:void 0}function Dt(e,t,n,r){if(!r)return n;let i=[];return ae(e?.data??[],t?.data??[],r).forEach((e,t)=>{e!==void 0&&(i[e]=n[t])}),i}function Ot(e,t){return e.filter(e=>e.value!==0||t.some(t=>t.date.getTime()===e.date.getTime()&&t.value!==0))}function kt(e,t,n,r){return[{label:i(`Views per visitor`,`jetpack-premium-analytics-pkg`),icon:ee,dataFormat:At,currentReport:e.views,current:N(e.views,t,Tt),comparisonReport:n?.views,valueOf:Tt,isCount:!1},{label:i(`Posts published`,`jetpack-premium-analytics-pkg`),icon:g,countLabel:jt,currentReport:e.posts,current:N(e.posts,t,Et),comparisonReport:n?.posts,valueOf:Et,isCount:!0}].map(({label:e,icon:n,dataFormat:i,countLabel:a,currentReport:o,current:s,comparisonReport:c,valueOf:l,isCount:u})=>{let d=c?N(c,t,l,Dt(o,c,s.dates,r)).points:[],f=u?Ot(s.points,d):s.points,p=u?Ot(d,s.points):d;return{label:e,icon:n,dataFormat:i,countLabel:a,data:f,previous:p.length?p:void 0}}).filter(e=>e.data.length||e.previous)}var At,jt,Mt=e((()=>{T(),O(),o(),v(),At={type:`average`},jt=e=>a(`%s Post published`,`%s Posts published`,e,`jetpack-premium-analytics-pkg`)}));function Nt(){let e=C()?.site?.wpcom?.blog_id;return e?`jetpack_stats_chart_type_${e}`:void 0}function Pt(){let e=Nt();if(e)try{let t=window.localStorage.getItem(e);return t===`bar`||t===`line`?t:void 0}catch{return}}function Ft(e){let t=Nt();if(t)try{window.localStorage.setItem(t,e)}catch{}}var It=e((()=>{ne()}));function P(){return Pt()??`bar`}var F,Lt,Rt,zt,I=e((()=>{o(),je(),_t(),It(),F=[`hour`,`day`,`week`,`month`,`quarter`,`year`],Lt=[{id:`views`,label:i(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>a(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:i(`Visitors`,`jetpack-premium-analytics-pkg`),countLabel:e=>a(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`),counterpartId:`views`,counterpartHidden:!0},{id:`comments`,label:i(`Comments`,`jetpack-premium-analytics-pkg`),countLabel:e=>a(`%s Comment`,`%s Comments`,e,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:i(`Likes`,`jetpack-premium-analytics-pkg`),countLabel:e=>a(`%s Like`,`%s Likes`,e,`jetpack-premium-analytics-pkg`)}],Rt={...ke((e,t)=>ht(e,t.chartType??P())),elements:Ae(F)},zt={attributes:[Rt,{id:`chartType`,getValue:({item:e})=>e.chartType??P(),setValue:({value:e})=>(Ft(e),{chartType:e})}],example:{attributes:{}}}}));function Bt(e){let t=le(e.from),n=le(e.to);return S(t,b(t))&&S(n,x(n))}function Vt(e,t,n){return{...e,stat_fields:t,period:n}}function Ht(e,t){let n=t===`hour`,r=n&&Bt(e),a=(0,y.useCallback)(e=>!n||Ut.has(e),[n]),o=(0,y.useMemo)(()=>Vt(e,n?`views`:`views,visitors`,t),[e,t,n]),s=(0,y.useMemo)(()=>n?Vt(e,`visitors,likes,comments`,`day`):Vt(e,`likes,comments,post_titles`,t),[e,t,n]),c=ve(o),l=ve(s,{enabled:!n||r}),u=c.primary.data,d=c.comparison.data,f=c.hasComparison,p=c.timezone,m=l.primary.data,h=l.comparison.data,g=l.hasComparison,_=l.timezone,{periodStarts:v}=c,ee=c.isError&&!u?.data?.length,b=l.isError&&!m?.data?.length,x=r&&!b,S=(0,y.useMemo)(()=>kt({views:u,posts:n?void 0:m},p,f?{views:d,posts:g?h:void 0}:void 0,v),[u,p,d,f,m,h,g,n,v]),te=(0,y.useMemo)(()=>Lt.map(e=>{let t=e.id===`views`||e.id===`visitors`&&!n,r=e.id===`views`||e.id===`visitors`,o={...se({primary:t?u:m,comparison:t?d:h,hasComparison:t?f:g,field:e.id,label:e.label,countLabel:e.countLabel,zone:t?p:_,periodStarts:v}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,counterpartHidden:`counterpartHidden`in e?e.counterpartHidden:void 0,tooltipExtras:r&&S.length?S:void 0};if(a(e.id))return o;let s=i(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`);return x?{...o,current:[],previous:void 0,seriesUnavailable:s}:{...o,unavailable:s}}),[a,n,x,S,u,d,f,p,m,h,g,_,v]),{refetch:C}=c,{refetch:w}=l,ne=(0,y.useCallback)(()=>{C(),w()},[C,w]),re=ee||b&&!n;return{metrics:te,isLoading:c.isLoading||l.isLoading,isFetching:c.isFetching||l.isFetching,isError:re,refetch:ne}}var Ut,Wt=e((()=>{D(),T(),_(),o(),te(),Mt(),I(),O(),Ut=new Set([`views`])}));function Gt({chartType:e,interval:t}){let{reportParams:n}=re(),{openPeriod:r}=he(),a=ge(),[o,s]=xt(),c=ye({...n,interval:t},F,a,ht(n,e)),l=(0,Kt.useMemo)(()=>{if(!r)return;let e={from:fe(n.from),to:fe(n.to)};return t=>{let n=ce(t,c,e,{timeZone:ue()});n&&r(n)}},[r,c,n.from,n.to]),{metrics:u,isLoading:d,isFetching:f,isError:p,refetch:m}=Ht(n,c),h=i(`Traffic metric`,`jetpack-premium-analytics-pkg`),g=u.find(e=>e.key===`views`),{noPublishedPosts:_,isChecking:v}=We(!d&&!p&&g?.value===0&&g.current.every(e=>e.value===0||e.value===null)&&(g.previous?.every(e=>e.value===0||e.value===null)??!0));return(0,R.jsx)(`div`,{className:yt.root,children:(0,R.jsx)(be,{isLoading:d||v,isFetching:f,isError:p,error:{description:i(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:i(`Retry`,`jetpack-premium-analytics-pkg`),onClick:m}]},renderLoading:(0,R.jsx)(Ee,{}),children:(0,R.jsx)(Te,{metrics:u,dataFormat:oe,chartType:e,groupLabel:h,tickResolution:c,onDatumClick:l,previousPeriodShown:o,onPreviousPeriodShownChange:s,empty:_?(0,R.jsx)(xe,{text:i(`You haven't published any posts yet. Get started by creating your first one.`,`jetpack-premium-analytics-pkg`),action:{label:i(`Create post`,`jetpack-premium-analytics-pkg`),href:w(`post-new.php`)}}):(0,R.jsx)(xe,{})})})})}function L({attributes:e={},setError:t}){return(0,R.jsx)(ie,{attributes:e,setError:t,options:{from:`/`},children:(0,R.jsx)(Gt,{chartType:e.chartType??P(),interval:e.chartInterval})})}var Kt,R,qt=e((()=>{ne(),D(),T(),O(),o(),Kt=t(r(),1),Ge(),_t(),bt(),Ct(),Wt(),I(),R=s()})),Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn=e((()=>{Jt=`jpa/traffic-chart`,Yt=`jpa/trending-up`,Xt=`Traffic summary`,Zt=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,Qt={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},$t=`traffic`,en=`framed`,tn=[{id:`chartInterval`},{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],nn={name:Jt,icon:Yt,title:Xt,description:Zt,help:Qt,category:$t,presentation:en,attributes:tn}}));function z({withComparison:e,chartType:t}){return(0,V.jsx)(L,{attributes:{reportParams:E(e),chartType:t}})}function B(e){return(0,V.jsx)(L,{attributes:{reportParams:E(!1,e)}})}function an({withComparison:e,chartType:t,...n}){return(0,V.jsx)(Ne,{...n,widgetType:on,renderModule:H,renderComponent:L,attributes:{reportParams:E(e),chartType:t}})}var V,H,on,sn,U,cn,ln,W,G,K,q,J,Y,X,Z,Q,$,un;e((()=>{D(),Pe(),Fe(),qe(),De(),Ie(),Ue(),Se(),ze(),qt(),I(),rn(),V=s(),we(),H=`storybook/traffic-chart`,on=Me(nn,zt),sn={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},U={chartType:`bar`},cn={...Le,widgetWidth:3},ln={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:L,tags:[`autodocs`],decorators:[Ke,Oe,He],argTypes:{...Ve,withComparison:{control:`boolean`},...sn},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs (Views, Visitors, Likes, and Comments) over a comparative chart. The date range and comparison come from the dashboard controls. The bucket size is the widget's own `chartInterval` attribute, clamped to what the range allows. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is drawn too: as a same-color dashed line for `line`, or in gray in a slot beside the current period for `bar`. On the Views and Visitors tabs, `bar` draws visitors inside the views bar, as Jetpack Stats v1 does. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; at the hourly grain the second request asks for visitors, likes, and comments in daily buckets, so their cards still show the day totals (skipped for a window that does not cover whole days, such as `Last 24 hours`). Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},W={render:z,args:{withComparison:!1,...U},decorators:[A]},G={render:z,args:{withComparison:!0,...U},decorators:[A]},K={render:z,args:{withComparison:!1,chartType:`line`},decorators:[A]},q={render:z,args:{withComparison:!0,chartType:`line`},decorators:[A]},J={tags:[`widget-dashboard`],render:e=>(0,V.jsx)(Ne,{...e,widgetType:on,renderModule:H,renderComponent:L,attributes:{reportParams:E(!1,`last-24-hours`)}}),args:{...cn},argTypes:{...Re}},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[A],beforeEach:()=>(k(`stats/visits`,`loading`),()=>k(`stats/visits`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[A],beforeEach:()=>(k(`stats/visits`,`error`),()=>k(`stats/visits`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[A],beforeEach:()=>(k(`stats/visits`,`empty`),Ce(`/wp/v2/posts`,[{id:1}]),()=>{k(`stats/visits`,null),Ce(`/wp/v2/posts`,null)})},Q={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[A],beforeEach:()=>{let e=window.JetpackScriptData;return window.JetpackScriptData={...e,site:{...e?.site,admin_url:`https://example.com/blog/wp-admin/`}},k(`stats/visits`,`empty`),Be(`/wp/v2/posts`,`empty`),()=>{window.JetpackScriptData=e,k(`stats/visits`,null),Be(`/wp/v2/posts`,null)}}},$={tags:[`widget-dashboard`],render:e=>(0,V.jsx)(an,{...e}),args:{...cn,withComparison:!0,...U},argTypes:{...Re,withComparison:{control:`boolean`},...sn}},un=[`Default`,`WithComparison`,`LineChart`,`LineChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`EmptyNoPosts`,`WidgetDashboardWithWidget`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}}}))();export{W as Default,Z as Empty,Q as EmptyNoPosts,X as Error,J as Hourly,K as LineChart,q as LineChartWithComparison,Y as Loading,$ as WidgetDashboardWithWidget,G as WithComparison,un as __namedExportsOrder,ln as default};