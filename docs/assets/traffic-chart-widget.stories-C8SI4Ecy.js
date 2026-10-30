import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,r as i,t as a}from"./build-module-DQe4AOzJ.js";import{t as o}from"./jsx-runtime-CFwixLRt.js";import{Dr as s,Mu as c,bu as l,t as u,xn as d}from"./build-module-BI3_PVVO.js";import{X as f,hn as p,j as m,t as h}from"./date-fns-V6dsVcup.js";import{a as g,n as _,t as v}from"./src-DpxsllRm.js";import{At as y,B as ee,Dt as te,I as b,tt as x}from"./charts-provider-CJceu84j.js";import{_ as S,d as ne,g as C,t as w,y as re}from"./src-IVwX_Vnu.js";import{Dn as ie,En as ae,On as oe,dt as se,kn as ce,l as le,t as T,vn as E}from"./src-DvzWgCqE.js";import{t as ue}from"./widget-state-BygCceVJ.js";import{i as D,n as de,r as fe}from"./with-story-router-Bl7d_9HM.js";import{t as pe}from"./chart-empty-state-BOHTh9PM.js";import{n as me,o as he,r as ge,s as O}from"./register-report-mocks-CI2bPEM7.js";import{r as _e,t as ve}from"./metric-tabs-chart-skeleton-DlqSqxrh.js";import{a as ye,d as be,g as xe,h as Se,i as Ce,m as we,n as Te,o as Ee,p as De,r as k,u as Oe}from"./with-widget-canvas-BX79mBf6.js";import{n as ke,t as Ae}from"./force-stats-mock-state-B0U9Dr7D.js";import{n as je,r as Me,t as Ne}from"./with-site-time-zone-B0D8ga1m.js";import{n as Pe,t as Fe}from"./use-no-published-posts-CsgTfYzR.js";import{n as Ie,t as Le}from"./with-story-period-host-BDfkHJ4O.js";function Re(e,t){let n=e.from??``,i=e.to??``;return oe(e.preset,n,i).includes(`hour`)||ce(n,i)>ze?{}:t===`line`?{extra:[`day`]}:{unavailable:{intervals:[`day`],hint:r(`Switch to the line chart to see each day.`,`jetpack-premium-analytics-pkg`)}}}var ze,Be=e((()=>{T(),a(),ze=366})),Ve,He,Ue=e((()=>{Ve=`_root_sp1nf_1`,He={root:Ve}}));function We(e,t){let n=e[t];return typeof n==`number`?n:void 0}function A(e,t,n,r){let i=[],a=(e?.data??[]).map(e=>re(e.date_start,t));return(e?.data??[]).forEach((e,o)=>{let s=a[o],c=r?r[o]:s,l=n(e);if(!c||!s||l===void 0)return;let u=re(e.date_end,t),d=u?{endDate:u}:{};i.push(r?{date:c,realDate:s,...d,value:l}:{date:c,...d,value:l})}),{points:i,dates:a}}function Ge(e){let t=We(e,`views`),n=We(e,`visitors`);return t!==void 0&&n!==void 0&&n>0?t/n:void 0}function Ke(e){return Array.isArray(e.post_titles)?e.post_titles.length:void 0}function qe(e,t,n,r){if(!r)return n;let i=[];return y(e?.data??[],t?.data??[],r).forEach((e,t)=>{e!==void 0&&(i[e]=n[t])}),i}function Je(e,t){return e.filter(e=>e.value!==0||t.some(t=>t.date.getTime()===e.date.getTime()&&t.value!==0))}function Ye(e,t,n,i){return[{label:r(`Views per visitor`,`jetpack-premium-analytics-pkg`),icon:d,dataFormat:Xe,currentReport:e.views,current:A(e.views,t,Ge),comparisonReport:n?.views,valueOf:Ge,isCount:!1},{label:r(`Posts published`,`jetpack-premium-analytics-pkg`),icon:s,countLabel:Ze,currentReport:e.posts,current:A(e.posts,t,Ke),comparisonReport:n?.posts,valueOf:Ke,isCount:!0}].map(({label:e,icon:n,dataFormat:r,countLabel:a,currentReport:o,current:s,comparisonReport:c,valueOf:l,isCount:u})=>{let d=c?A(c,t,l,qe(o,c,s.dates,i)).points:[],f=u?Je(s.points,d):s.points,p=u?Je(d,s.points):d;return{label:e,icon:n,dataFormat:r,countLabel:a,data:f,previous:p.length?p:void 0}}).filter(e=>e.data.length||e.previous)}var Xe,Ze,Qe=e((()=>{w(),D(),a(),u(),Xe={type:`average`},Ze=e=>i(`%s Post published`,`%s Posts published`,e,`jetpack-premium-analytics-pkg`)}));function $e(){let e=g()?.site?.wpcom?.blog_id;if(e)try{let t=window.localStorage.getItem(`jetpack_stats_chart_type_${e}`);return t===`bar`||t===`line`?t:void 0}catch{return}}var et=e((()=>{v()}));function j(){return $e()??`bar`}var M,tt,nt,rt,N=e((()=>{a(),Ee(),Be(),et(),M=[`hour`,`day`,`week`,`month`,`year`],tt=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`),counterpartId:`views`,counterpartHidden:!0},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Comment`,`%s Comments`,e,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Like`,`%s Likes`,e,`jetpack-premium-analytics-pkg`)}],nt={...Oe((e,t)=>Re(e,t.chartType??j())),elements:be(M)},rt={attributes:[nt,{id:`chartType`,getValue:({item:e})=>e.chartType??j()}],example:{attributes:{}}}}));function it(e){let t=C(e.from),n=C(e.to);return m(t,p(t))&&m(n,f(n))}function P(e,t,n){return{...e,stat_fields:t,period:n}}function at(e,t){let n=t===`hour`,i=n&&it(e),a=(0,c.useCallback)(e=>!n||ot.has(e),[n]),o=(0,c.useMemo)(()=>P(e,n?`views`:`views,visitors`,t),[e,t,n]),s=(0,c.useMemo)(()=>n?P(e,`visitors,likes,comments`,`day`):P(e,`likes,comments,post_titles`,t),[e,t,n]),l=se(o),u=se(s,{enabled:!n||i}),d=l.primary.data,f=l.comparison.data,p=l.hasComparison,m=l.timezone,h=u.primary.data,g=u.comparison.data,_=u.hasComparison,v=u.timezone,{periodStarts:y}=l,ee=l.isError&&!d?.data?.length,b=u.isError&&!h?.data?.length,x=i&&!b,S=(0,c.useMemo)(()=>Ye({views:d,posts:n?void 0:h},m,p?{views:f,posts:_?g:void 0}:void 0,y),[d,m,f,p,h,g,_,n,y]),ne=(0,c.useMemo)(()=>tt.map(e=>{let t=e.id===`views`||e.id===`visitors`&&!n,i=e.id===`views`||e.id===`visitors`,o={...te({primary:t?d:h,comparison:t?f:g,hasComparison:t?p:_,field:e.id,label:e.label,countLabel:e.countLabel,zone:t?m:v,periodStarts:y}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,counterpartHidden:`counterpartHidden`in e?e.counterpartHidden:void 0,tooltipExtras:i&&S.length?S:void 0};if(a(e.id))return o;let s=r(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`);return x?{...o,current:[],previous:void 0,seriesUnavailable:s}:{...o,unavailable:s}}),[a,n,x,S,d,f,p,m,h,g,_,v,y]),{refetch:C}=l,{refetch:w}=u,re=(0,c.useCallback)(()=>{C(),w()},[C,w]),ie=ee||b&&!n;return{metrics:ne,isLoading:l.isLoading||u.isLoading,isFetching:l.isFetching||u.isFetching,isError:ie,refetch:re}}var ot,st=e((()=>{T(),w(),l(),a(),h(),Qe(),N(),D(),ot=new Set([`views`])}));function ct({chartType:e,interval:t}){let{reportParams:n}=ee(),{openPeriod:i}=ae(),a=ie(),o=le({...n,interval:t},M,a,Re(n,e)),s=(0,lt.useMemo)(()=>{if(!i)return;let e={from:ne(n.from),to:ne(n.to)};return t=>{let n=x(t,o,e,{timeZone:S()});n&&i(n)}},[i,o,n.from,n.to]),{metrics:c,isLoading:l,isFetching:u,isError:d,refetch:f}=at(n,o),p=r(`Traffic metric`,`jetpack-premium-analytics-pkg`),m=c.find(e=>e.key===`views`),{noPublishedPosts:h,isChecking:g}=Pe(!l&&!d&&m?.value===0&&m.current.every(e=>e.value===0||e.value===null)&&(m.previous?.every(e=>e.value===0||e.value===null)??!0));return(0,I.jsx)(`div`,{className:He.root,children:(0,I.jsx)(ue,{isLoading:l||g,isFetching:u,isError:d,error:{description:r(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:f}]},renderLoading:(0,I.jsx)(ve,{}),children:(0,I.jsx)(_e,{metrics:c,dataFormat:ut,chartType:e,groupLabel:p,tickResolution:o,onDatumClick:s,chartTitle:r(`Traffic summary`,`jetpack-premium-analytics-pkg`),empty:h?(0,I.jsx)(pe,{text:r(`You haven't published any posts yet. Get started by creating your first one.`,`jetpack-premium-analytics-pkg`),action:{label:r(`Create post`,`jetpack-premium-analytics-pkg`),href:_(`post-new.php`)}}):(0,I.jsx)(pe,{})})})})}function F({attributes:e={},setError:t}){return(0,I.jsx)(b,{attributes:e,setError:t,options:{from:`/`},children:(0,I.jsx)(ct,{chartType:e.chartType??j(),interval:e.chartInterval})})}var lt,I,ut,dt=e((()=>{v(),T(),w(),D(),a(),lt=t(n(),1),Fe(),Be(),Ue(),st(),N(),I=o(),ut={type:`number`,options:{useMultipliers:!0,decimals:0}}})),ft,pt,mt,ht,gt,_t,vt,yt,bt,xt=e((()=>{ft=`jpa/traffic-chart`,pt=`jpa/trending-up`,mt=`Traffic summary`,ht=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,gt={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},_t=`traffic`,vt=`framed`,yt=[{id:`chartInterval`},{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],bt={name:ft,icon:pt,title:mt,description:ht,help:gt,category:_t,presentation:vt,attributes:yt}}));function L({withComparison:e,chartType:t}){return(0,z.jsx)(F,{attributes:{reportParams:E(e),chartType:t}})}function R(e){return(0,z.jsx)(F,{attributes:{reportParams:E(!1,e)}})}function St({withComparison:e,chartType:t,...n}){return(0,z.jsx)(we,{...n,widgetType:V,renderModule:B,renderComponent:F,attributes:{reportParams:E(e),chartType:t}})}var z,B,V,H,U,Ct,wt,W,G,K,q,J,Y,X,Z,Q,$,Tt;e((()=>{T(),Se(),ye(),Le(),de(),Te(),Ne(),me(),ke(),dt(),N(),xt(),z=o(),ge(),B=`storybook/traffic-chart`,V=Ce(bt,rt),H={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},U={chartType:`bar`},Ct={...De,widgetWidth:3},wt={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:F,tags:[`autodocs`],decorators:[Ie,fe,Me],argTypes:{...je,withComparison:{control:`boolean`},...H},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs (Views, Visitors, Likes, and Comments) over a comparative chart. The date range and comparison come from the dashboard controls. The bucket size is the widget's own `chartInterval` attribute, clamped to what the range allows. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is drawn too: as a same-color dashed line for `line`, or in gray in a slot beside the current period for `bar`. On the Views and Visitors tabs, `bar` draws visitors inside the views bar, as Jetpack Stats v1 does. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; at the hourly grain the second request asks for visitors, likes, and comments in daily buckets, so their cards still show the day totals (skipped for a window that does not cover whole days, such as `Last 24 hours`). Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},W={render:L,args:{withComparison:!1,...U},decorators:[k]},G={render:L,args:{withComparison:!0,...U},decorators:[k]},K={render:L,args:{withComparison:!1,chartType:`line`},decorators:[k]},q={render:L,args:{withComparison:!0,chartType:`line`},decorators:[k]},J={render:e=>(0,z.jsx)(we,{...e,widgetType:V,renderModule:B,renderComponent:F,attributes:{reportParams:E(!1,`last-24-hours`)}}),args:{...Ct},argTypes:{...xe}},Y={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[k],beforeEach:()=>(O(`stats/visits`,`loading`),()=>O(`stats/visits`,null))},X={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[k],beforeEach:()=>(O(`stats/visits`,`error`),()=>O(`stats/visits`,null))},Z={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[k],beforeEach:()=>(O(`stats/visits`,`empty`),he(`/wp/v2/posts`,[{id:1}]),()=>{O(`stats/visits`,null),he(`/wp/v2/posts`,null)})},Q={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[k],beforeEach:()=>{let e=window.JetpackScriptData;return window.JetpackScriptData={...e,site:{...e?.site,admin_url:`https://example.com/blog/wp-admin/`}},O(`stats/visits`,`empty`),Ae(`/wp/v2/posts`,`empty`),()=>{window.JetpackScriptData=e,O(`stats/visits`,null),Ae(`/wp/v2/posts`,null)}}},$={render:e=>(0,z.jsx)(St,{...e}),args:{...Ct,withComparison:!0,...U},argTypes:{...xe,withComparison:{control:`boolean`},...H}},Tt=[`Default`,`WithComparison`,`LineChart`,`LineChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`EmptyNoPosts`,`WidgetDashboardWithWidget`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}}}))();export{W as Default,Z as Empty,Q as EmptyNoPosts,X as Error,J as Hourly,K as LineChart,q as LineChartWithComparison,Y as Loading,$ as WidgetDashboardWithWidget,G as WithComparison,Tt as __namedExportsOrder,wt as default};