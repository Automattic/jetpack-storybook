import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,r as i,t as a}from"./build-module-BXPCp--5.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Gu as s,Nu as c,Tn as l,jr as u,t as d}from"./build-module-CDZL_1rk.js";import{Pt as f,X as p,hn as m,j as h,r as g,t as _,y as v}from"./date-fns-CHwAqcMr.js";import{Ja as y,Qa as b,Ya as x}from"./iframe-29lrqMh1.js";import{_ as S,d as C,h as ee,m as w,t as T}from"./src-BGYQLfcD.js";import{Cn as E,a as D,dn as O,it as te,t as k}from"./src-oj7RdtoC.js";import{M as ne,it as re,m as ie,nt as ae,st as oe,v as se}from"./charts-provider-DfUtsFwS.js";import{t as ce}from"./chart-empty-state-B8aQSzTc.js";import{n as le,o as ue,r as de,s as A}from"./register-report-mocks-oDpHvqBF.js";import{t as fe}from"./widget-state-X0a9ZPTO.js";import{n as pe,r as me}from"./with-story-router-B8AmDh4M.js";import{r as he,t as ge}from"./metric-tabs-chart-skeleton-BkisO--2.js";import{t as j}from"./src-BRqxrcjz.js";import{a as _e,d as ve,g as ye,h as be,i as xe,m as Se,n as Ce,o as we,p as Te,r as M,u as Ee}from"./with-widget-canvas-CmFFcHvo.js";import{n as De,t as Oe}from"./force-stats-mock-state-r-HGuZBi.js";import{n as ke,r as Ae,t as je}from"./with-site-time-zone-Cv62QLkb.js";import{n as Me,t as Ne}from"./use-no-published-posts-DvdcF3lx.js";import{n as Pe,t as Fe}from"./with-story-period-host-DIjjoZYs.js";var Ie,Le,Re=t((()=>{Ie=`_root_sp1nf_1`,Le={root:Ie}}));function ze(e,t){let n=e[t];return typeof n==`number`?n:void 0}function N(e,t,n,r){let i=[],a=(e?.data??[]).map(e=>S(e.date_start,t));return(e?.data??[]).forEach((e,o)=>{let s=a[o],c=r?r[o]:s,l=n(e);if(!c||!s||l===void 0)return;let u=S(e.date_end,t),d=u?{endDate:u}:{};i.push(r?{date:c,realDate:s,...d,value:l}:{date:c,...d,value:l})}),{points:i,dates:a}}function Be(e){let t=ze(e,`views`),n=ze(e,`visitors`);return t!==void 0&&n!==void 0&&n>0?t/n:void 0}function Ve(e){return Array.isArray(e.post_titles)?e.post_titles.length:void 0}function He(e,t){return e.filter(e=>e.value!==0||t.some(t=>t.date.getTime()===e.date.getTime()&&t.value!==0))}function Ue(e,t,n){return[{label:r(`Views per visitor`,`jetpack-premium-analytics-pkg`),icon:l,dataFormat:We,current:N(e.views,t,Be),comparisonReport:n?.views,valueOf:Be,isCount:!1},{label:r(`Posts published`,`jetpack-premium-analytics-pkg`),icon:u,countLabel:Ge,current:N(e.posts,t,Ve),comparisonReport:n?.posts,valueOf:Ve,isCount:!0}].map(({label:e,icon:n,dataFormat:r,countLabel:i,current:a,comparisonReport:o,valueOf:s,isCount:c})=>{let l=o?N(o,t,s,a.dates).points:[],u=c?He(a.points,l):a.points,d=c?He(l,a.points):l;return{label:e,icon:n,dataFormat:r,countLabel:i,data:u,previous:d.length?d:void 0}}).filter(e=>e.data.length||e.previous)}var We,Ge,Ke=t((()=>{T(),a(),d(),We={type:`average`},Ge=e=>i(`%s Post published`,`%s Posts published`,e,`jetpack-premium-analytics-pkg`)}));function qe(e,t,n){if(!e.date||!e.endDate||!t.date||!t.endDate)return 0;let r=Math.max(e.date.getTime(),t.date.getTime()+n),i=Math.min(e.endDate.getTime(),t.endDate.getTime()+n);return Math.max(0,i-r)}function Je(e,t){let n=e[0]?.date,r=t[0]?.date;if(!n||!r)return 0;let i=n.getTime()-r.getTime(),a={shift:0,overlap:-1};for(let n=0;n<t.length;n++){let r=e.reduce((e,r,a)=>e+qe(r,t[a+n]??{},i),0);r>a.overlap&&(a={shift:n,overlap:r})}return a.shift}function Ye(e){let t=oe(e);return t?f(g(v(t),1),`yyyy-MM-dd`):void 0}function Xe(e){let t=Ye(e.from),n=Ye(e.to);return!!t&&t===oe(e.compare_from)||!!n&&n===oe(e.compare_to)}function Ze(e,t){return(e.data??[]).map(e=>({date:S(e.date_start,t),endDate:S(e.date_end,t)}))}function Qe(e,t,n){if(!e||!t?.data)return t;let r=Je(Ze(e,n),Ze(t,n));return r?{...t,data:t.data.slice(r)}:t}var $e=t((()=>{T(),j(),_()}));function et(){let e=b()?.site?.wpcom?.blog_id;if(e)try{let t=window.localStorage.getItem(`jetpack_stats_chart_type_${e}`);return t===`bar`||t===`line`?t:void 0}catch{return}}var tt=t((()=>{y()}));function nt(){return et()??`bar`}var P,rt,it,at,ot,F=t((()=>{a(),we(),j(),tt(),P=[`hour`,`day`,`week`,`month`],rt=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`),counterpartId:`views`,counterpartHidden:!0},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Comment`,`%s Comments`,e,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Like`,`%s Likes`,e,`jetpack-premium-analytics-pkg`)}],it={...ve,elements:Ee(P)},at={id:`chartType`,label:r(`Chart type`,`jetpack-premium-analytics-pkg`),type:`jpa/toggle-group`,elements:ae,relevance:`high`,getValue:({item:e})=>e.chartType??nt()},ot={attributes:[it,at],example:{attributes:{}}}}));function st(e){let t=w(e.from),n=w(e.to);return h(t,m(t))&&h(n,p(n))}function I(e,t,n){return{...e,stat_fields:t,period:n}}function ct(e,t){let n=t===`hour`,i=n&&st(e),a=(0,s.useCallback)(e=>!n||lt.has(e),[n]),o=(0,s.useMemo)(()=>I(e,n?`views`:`views,visitors`,t),[e,t,n]),c=(0,s.useMemo)(()=>n?I(e,`visitors,likes,comments`,`day`):I(e,`likes,comments,post_titles`,t),[e,t,n]),l=te(o),u=te(c,{enabled:!n||i}),d=l.primary.data,f=l.comparison.data,p=l.hasComparison,m=l.timezone,h=u.primary.data,g=u.comparison.data,_=u.hasComparison,v=u.timezone,y=t===`week`&&Xe(e),b=(0,s.useMemo)(()=>y?Qe(d,f,m):f,[y,d,f,m]),x=(0,s.useMemo)(()=>y?Qe(h,g,v):g,[y,h,g,v]),S=l.isError&&!d?.data?.length,C=u.isError&&!h?.data?.length,ee=i&&!C,w=(0,s.useMemo)(()=>Ue({views:d,posts:n?void 0:h},m,p?{views:b,posts:_?x:void 0}:void 0),[d,m,b,p,h,x,_,n]),T=(0,s.useMemo)(()=>rt.map(e=>{let t=e.id===`views`||e.id===`visitors`&&!n,i=e.id===`views`||e.id===`visitors`,o={...re({primary:t?d:h,comparison:t?b:x,hasComparison:t?p:_,field:e.id,label:e.label,countLabel:e.countLabel,zone:t?m:v}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,counterpartHidden:`counterpartHidden`in e?e.counterpartHidden:void 0,tooltipExtras:i&&w.length?w:void 0};if(a(e.id))return o;let s=r(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`);return ee?{...o,current:[],previous:void 0,seriesUnavailable:s}:{...o,unavailable:s}}),[a,n,ee,w,d,b,p,m,h,x,_,v]),{refetch:E}=l,{refetch:D}=u,O=(0,s.useCallback)(()=>{E(),D()},[E,D]),k=S||C&&!n;return{metrics:T,isLoading:l.isLoading||u.isLoading,isFetching:l.isFetching||u.isFetching,isError:k,refetch:O}}var lt,ut=t((()=>{k(),T(),c(),a(),_(),Ke(),$e(),F(),j(),lt=new Set([`views`])}));function dt({chartType:e,interval:t}){let{reportParams:n}=se(),i=D({...n,interval:t},P),{openPeriod:a}=E(),o=(0,ft.useMemo)(()=>{if(!a)return;let e={from:C(n.from),to:C(n.to)};return t=>{let n=ne(t,i,e,{timeZone:ee()});n&&a(n)}},[a,i,n.from,n.to]),{metrics:s,isLoading:c,isFetching:l,isError:u,refetch:d}=ct(n,i),f=r(`Traffic metric`,`jetpack-premium-analytics-pkg`),p=s.find(e=>e.key===`views`),{noPublishedPosts:m,isChecking:h}=Me(!c&&!u&&p?.value===0&&p.current.every(e=>e.value===0||e.value===null)&&(p.previous?.every(e=>e.value===0||e.value===null)??!0));return(0,R.jsx)(`div`,{className:Le.root,children:(0,R.jsx)(fe,{isLoading:c||h,isFetching:l,isError:u,error:{description:r(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},renderLoading:(0,R.jsx)(ge,{}),children:(0,R.jsx)(he,{metrics:s,dataFormat:pt,chartType:e,groupLabel:f,tickResolution:i,onDatumClick:o,empty:m?(0,R.jsx)(ce,{text:r(`You haven't published any posts yet. Get started by creating your first one.`,`jetpack-premium-analytics-pkg`),action:{label:r(`Create post`,`jetpack-premium-analytics-pkg`),href:x(`post-new.php`)}}):(0,R.jsx)(ce,{})})})})}function L({attributes:e={},setError:t}){return(0,R.jsx)(ie,{attributes:e,setError:t,options:{from:`/`},children:(0,R.jsx)(dt,{chartType:e.chartType??nt(),interval:e.chartInterval})})}var ft,R,pt,mt=t((()=>{y(),k(),T(),j(),a(),ft=e(n(),1),Ne(),Re(),ut(),F(),R=o(),pt={type:`number`,options:{useMultipliers:!0,decimals:0}}})),ht,gt,_t,vt,yt,bt,xt,St,Ct=t((()=>{ht=`jpa/traffic-chart`,gt=`jpa/trending-up`,_t=`Traffic summary`,vt=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,yt={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},bt=`traffic`,xt=`framed`,St={name:ht,icon:gt,title:_t,description:vt,help:yt,category:bt,presentation:xt}}));function z({withComparison:e,chartType:t}){return(0,V.jsx)(L,{attributes:{reportParams:O(e),chartType:t}})}function B(e){return(0,V.jsx)(L,{attributes:{reportParams:O(!1,e)}})}function wt({withComparison:e,chartType:t,...n}){return(0,V.jsx)(Se,{...n,widgetType:Tt,renderModule:H,renderComponent:L,attributes:{reportParams:O(e),chartType:t}})}var V,H,Tt,Et,U,Dt,W,G,K,q,J,Y,X,Z,Q,$,Ot;t((()=>{k(),be(),_e(),Fe(),pe(),Ce(),je(),le(),De(),mt(),F(),Ct(),V=o(),de(),H=`storybook/traffic-chart`,Tt=xe(St,ot),Et={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},U={chartType:`line`},Dt={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:L,tags:[`autodocs`],decorators:[Pe,me,Ae],argTypes:{...ke,withComparison:{control:`boolean`},...Et},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range and comparison come from the dashboard controls. The bucket size is the widget's own `chartInterval` attribute, clamped to what the range allows. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; at the hourly grain the second request asks for visitors, likes, and comments in daily buckets, so their cards still show the day totals (skipped for a window that does not cover whole days, such as `Last 24 hours`). Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},W={render:z,args:{withComparison:!1,...U},decorators:[M]},G={render:z,args:{withComparison:!0,...U},decorators:[M]},K={render:z,args:{withComparison:!1,...U,chartType:`bar`},decorators:[M]},q={render:z,args:{withComparison:!0,...U,chartType:`bar`},decorators:[M]},J={render:e=>(0,V.jsx)(Se,{...e,widgetType:Tt,renderModule:H,renderComponent:L,attributes:{reportParams:O(!1,`last-24-hours`)}}),args:{...Te},argTypes:{...ye}},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[M],beforeEach:()=>(A(`stats/visits`,`loading`),()=>A(`stats/visits`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[M],beforeEach:()=>(A(`stats/visits`,`error`),()=>A(`stats/visits`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[M],beforeEach:()=>(A(`stats/visits`,`empty`),ue(`/wp/v2/posts`,[{id:1}]),()=>{A(`stats/visits`,null),ue(`/wp/v2/posts`,null)})},Q={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[M],beforeEach:()=>{let e=window.JetpackScriptData;return window.JetpackScriptData={...e,site:{...e?.site,admin_url:`https://example.com/blog/wp-admin/`}},A(`stats/visits`,`empty`),Oe(`/wp/v2/posts`,`empty`),()=>{window.JetpackScriptData=e,A(`stats/visits`,null),Oe(`/wp/v2/posts`,null)}}},$={render:e=>(0,V.jsx)(wt,{...e}),args:{...Te,withComparison:!0,...U},argTypes:{...ye,withComparison:{control:`boolean`},...Et}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:`Same close-up with the period-over-period delta and previous-period overlay.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: false,
    ...DEFAULT_CHART_ARGS,
    chartType: 'bar'
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:"The same widget drawn as bars — the `chartType` attribute set to `bar`.",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: true,
    ...DEFAULT_CHART_ARGS,
    chartType: 'bar'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Bars with comparison on: the previous period renders as the translucent
shadow bar behind each current-period bar.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => <WidgetDashboardWithWidgetStory {...args} widgetType={storyWidgetType} renderModule={TRAFFIC_CHART_RENDER_MODULE} renderComponent={TrafficChartRender as ComponentType<WidgetRenderProps<unknown>>} attributes={{
    reportParams: getDefaultQueryParams(false, 'last-24-hours')
  }} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
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
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
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
}`,...$.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}},Ot=[`Default`,`WithComparison`,`BarChart`,`BarChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`EmptyNoPosts`,`WidgetDashboardWithWidget`]}))();export{K as BarChart,q as BarChartWithComparison,W as Default,Z as Empty,Q as EmptyNoPosts,X as Error,J as Hourly,Y as Loading,$ as WidgetDashboardWithWidget,G as WithComparison,Ot as __namedExportsOrder,Dt as default};