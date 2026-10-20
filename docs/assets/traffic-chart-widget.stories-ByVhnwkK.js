import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,r as i,t as a}from"./build-module-BXPCp--5.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Gu as s,Nu as c,Tn as l,jr as u,t as d}from"./build-module-CDZL_1rk.js";import{Pt as f,X as p,hn as m,j as h,r as g,t as _,y as v}from"./date-fns-CHwAqcMr.js";import{$a as y,Xa as b,Ya as x}from"./iframe-DM3MwpYa.js";import{_ as S,d as C,h as ee,m as w,t as T}from"./src-BGYQLfcD.js";import{Sn as te,ot as ne,pn as E,s as re,t as D,xn as ie}from"./src-oBqoEV9n.js";import{F as ae,ct as oe,m as se,pt as O,ut as ce,v as le}from"./charts-provider-DIMYBOsS.js";import{t as ue}from"./chart-empty-state-BLE85H-8.js";import{n as de,o as fe,r as pe,s as k}from"./register-report-mocks-B5NW5Ctv.js";import{t as me}from"./widget-state-1xFE4TA5.js";import{n as he,r as ge}from"./with-story-router-B8AmDh4M.js";import{r as _e,t as ve}from"./metric-tabs-chart-skeleton-Dzjmgxf3.js";import{t as A}from"./src-D4uzv82S.js";import{a as ye,d as be,g as xe,h as Se,i as Ce,m as we,n as Te,o as Ee,p as De,r as j,u as Oe}from"./with-widget-canvas-CALdA6ku.js";import{n as ke,t as Ae}from"./force-stats-mock-state-kMQn68jv.js";import{n as je,r as Me,t as Ne}from"./with-site-time-zone-Cv62QLkb.js";import{n as Pe,t as Fe}from"./use-no-published-posts-BkVFBZIU.js";import{n as Ie,t as Le}from"./with-story-period-host-D4KHpjMM.js";var Re,ze,Be=t((()=>{Re=`_root_sp1nf_1`,ze={root:Re}}));function Ve(e,t){let n=e[t];return typeof n==`number`?n:void 0}function M(e,t,n,r){let i=[],a=(e?.data??[]).map(e=>S(e.date_start,t));return(e?.data??[]).forEach((e,o)=>{let s=a[o],c=r?r[o]:s,l=n(e);if(!c||!s||l===void 0)return;let u=S(e.date_end,t),d=u?{endDate:u}:{};i.push(r?{date:c,realDate:s,...d,value:l}:{date:c,...d,value:l})}),{points:i,dates:a}}function He(e){let t=Ve(e,`views`),n=Ve(e,`visitors`);return t!==void 0&&n!==void 0&&n>0?t/n:void 0}function Ue(e){return Array.isArray(e.post_titles)?e.post_titles.length:void 0}function We(e,t){return e.filter(e=>e.value!==0||t.some(t=>t.date.getTime()===e.date.getTime()&&t.value!==0))}function Ge(e,t,n){return[{label:r(`Views per visitor`,`jetpack-premium-analytics-pkg`),icon:l,dataFormat:Ke,current:M(e.views,t,He),comparisonReport:n?.views,valueOf:He,isCount:!1},{label:r(`Posts published`,`jetpack-premium-analytics-pkg`),icon:u,countLabel:qe,current:M(e.posts,t,Ue),comparisonReport:n?.posts,valueOf:Ue,isCount:!0}].map(({label:e,icon:n,dataFormat:r,countLabel:i,current:a,comparisonReport:o,valueOf:s,isCount:c})=>{let l=o?M(o,t,s,a.dates).points:[],u=c?We(a.points,l):a.points,d=c?We(l,a.points):l;return{label:e,icon:n,dataFormat:r,countLabel:i,data:u,previous:d.length?d:void 0}}).filter(e=>e.data.length||e.previous)}var Ke,qe,Je=t((()=>{T(),a(),d(),Ke={type:`average`},qe=e=>i(`%s Post published`,`%s Posts published`,e,`jetpack-premium-analytics-pkg`)}));function Ye(e,t,n){if(!e.date||!e.endDate||!t.date||!t.endDate)return 0;let r=Math.max(e.date.getTime(),t.date.getTime()+n),i=Math.min(e.endDate.getTime(),t.endDate.getTime()+n);return Math.max(0,i-r)}function Xe(e,t){let n=e[0]?.date,r=t[0]?.date;if(!n||!r)return 0;let i=n.getTime()-r.getTime(),a={shift:0,overlap:-1};for(let n=0;n<t.length;n++){let r=e.reduce((e,r,a)=>e+Ye(r,t[a+n]??{},i),0);r>a.overlap&&(a={shift:n,overlap:r})}return a.shift}function Ze(e){let t=O(e);return t?f(g(v(t),1),`yyyy-MM-dd`):void 0}function Qe(e){let t=Ze(e.from),n=Ze(e.to);return!!t&&t===O(e.compare_from)||!!n&&n===O(e.compare_to)}function $e(e,t){return(e.data??[]).map(e=>({date:S(e.date_start,t),endDate:S(e.date_end,t)}))}function et(e,t,n){if(!e||!t?.data)return t;let r=Xe($e(e,n),$e(t,n));return r?{...t,data:t.data.slice(r)}:t}var tt=t((()=>{T(),A(),_()}));function nt(){let e=y()?.site?.wpcom?.blog_id;if(e)try{let t=window.localStorage.getItem(`jetpack_stats_chart_type_${e}`);return t===`bar`||t===`line`?t:void 0}catch{return}}var rt=t((()=>{x()}));function it(){return nt()??`bar`}var N,at,ot,st,ct,P=t((()=>{a(),Ee(),A(),rt(),N=[`hour`,`day`,`week`,`month`],at=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`),counterpartId:`views`,counterpartHidden:!0},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Comment`,`%s Comments`,e,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Like`,`%s Likes`,e,`jetpack-premium-analytics-pkg`)}],ot={...be,elements:Oe(N)},st={id:`chartType`,label:r(`Chart type`,`jetpack-premium-analytics-pkg`),type:`jpa/toggle-group`,elements:oe,relevance:`high`,getValue:({item:e})=>e.chartType??it()},ct={attributes:[ot,st],example:{attributes:{}}}}));function lt(e){let t=w(e.from),n=w(e.to);return h(t,m(t))&&h(n,p(n))}function F(e,t,n){return{...e,stat_fields:t,period:n}}function ut(e,t){let n=t===`hour`,i=n&&lt(e),a=(0,s.useCallback)(e=>!n||dt.has(e),[n]),o=(0,s.useMemo)(()=>F(e,n?`views`:`views,visitors`,t),[e,t,n]),c=(0,s.useMemo)(()=>n?F(e,`visitors,likes,comments`,`day`):F(e,`likes,comments,post_titles`,t),[e,t,n]),l=ne(o),u=ne(c,{enabled:!n||i}),d=l.primary.data,f=l.comparison.data,p=l.hasComparison,m=l.timezone,h=u.primary.data,g=u.comparison.data,_=u.hasComparison,v=u.timezone,y=t===`week`&&Qe(e),b=(0,s.useMemo)(()=>y?et(d,f,m):f,[y,d,f,m]),x=(0,s.useMemo)(()=>y?et(h,g,v):g,[y,h,g,v]),S=l.isError&&!d?.data?.length,C=u.isError&&!h?.data?.length,ee=i&&!C,w=(0,s.useMemo)(()=>Ge({views:d,posts:n?void 0:h},m,p?{views:b,posts:_?x:void 0}:void 0),[d,m,b,p,h,x,_,n]),T=(0,s.useMemo)(()=>at.map(e=>{let t=e.id===`views`||e.id===`visitors`&&!n,i=e.id===`views`||e.id===`visitors`,o={...ce({primary:t?d:h,comparison:t?b:x,hasComparison:t?p:_,field:e.id,label:e.label,countLabel:e.countLabel,zone:t?m:v}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,counterpartHidden:`counterpartHidden`in e?e.counterpartHidden:void 0,tooltipExtras:i&&w.length?w:void 0};if(a(e.id))return o;let s=r(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`);return ee?{...o,current:[],previous:void 0,seriesUnavailable:s}:{...o,unavailable:s}}),[a,n,ee,w,d,b,p,m,h,x,_,v]),{refetch:te}=l,{refetch:E}=u,re=(0,s.useCallback)(()=>{te(),E()},[te,E]),D=S||C&&!n;return{metrics:T,isLoading:l.isLoading||u.isLoading,isFetching:l.isFetching||u.isFetching,isError:D,refetch:re}}var dt,ft=t((()=>{D(),T(),c(),a(),_(),Je(),tt(),P(),A(),dt=new Set([`views`])}));function pt({chartType:e,interval:t}){let{reportParams:n}=le(),{openPeriod:i}=ie(),a=te(),o=re({...n,interval:t},N,a),s=(0,mt.useMemo)(()=>{if(!i)return;let e={from:C(n.from),to:C(n.to)};return t=>{let n=ae(t,o,e,{timeZone:ee()});n&&i(n)}},[i,o,n.from,n.to]),{metrics:c,isLoading:l,isFetching:u,isError:d,refetch:f}=ut(n,o),p=r(`Traffic metric`,`jetpack-premium-analytics-pkg`),m=c.find(e=>e.key===`views`),{noPublishedPosts:h,isChecking:g}=Pe(!l&&!d&&m?.value===0&&m.current.every(e=>e.value===0||e.value===null)&&(m.previous?.every(e=>e.value===0||e.value===null)??!0));return(0,L.jsx)(`div`,{className:ze.root,children:(0,L.jsx)(me,{isLoading:l||g,isFetching:u,isError:d,error:{description:r(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:f}]},renderLoading:(0,L.jsx)(ve,{}),children:(0,L.jsx)(_e,{metrics:c,dataFormat:ht,chartType:e,groupLabel:p,tickResolution:o,onDatumClick:s,chartTitle:r(`Traffic summary`,`jetpack-premium-analytics-pkg`),empty:h?(0,L.jsx)(ue,{text:r(`You haven't published any posts yet. Get started by creating your first one.`,`jetpack-premium-analytics-pkg`),action:{label:r(`Create post`,`jetpack-premium-analytics-pkg`),href:b(`post-new.php`)}}):(0,L.jsx)(ue,{})})})})}function I({attributes:e={},setError:t}){return(0,L.jsx)(se,{attributes:e,setError:t,options:{from:`/`},children:(0,L.jsx)(pt,{chartType:e.chartType??it(),interval:e.chartInterval})})}var mt,L,ht,gt=t((()=>{x(),D(),T(),A(),a(),mt=e(n(),1),Fe(),Be(),ft(),P(),L=o(),ht={type:`number`,options:{useMultipliers:!0,decimals:0}}})),_t,vt,yt,bt,xt,St,Ct,wt,Tt=t((()=>{_t=`jpa/traffic-chart`,vt=`jpa/trending-up`,yt=`Traffic summary`,bt=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,xt={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},St=`traffic`,Ct=`framed`,wt={name:_t,icon:vt,title:yt,description:bt,help:xt,category:St,presentation:Ct}}));function R({withComparison:e,chartType:t}){return(0,B.jsx)(I,{attributes:{reportParams:E(e),chartType:t}})}function z(e){return(0,B.jsx)(I,{attributes:{reportParams:E(!1,e)}})}function Et({withComparison:e,chartType:t,...n}){return(0,B.jsx)(we,{...n,widgetType:H,renderModule:V,renderComponent:I,attributes:{reportParams:E(e),chartType:t}})}var B,V,H,Dt,U,Ot,W,G,K,q,J,Y,X,Z,Q,$,kt;t((()=>{D(),Se(),ye(),Le(),he(),Te(),Ne(),de(),ke(),gt(),P(),Tt(),B=o(),pe(),V=`storybook/traffic-chart`,H=Ce(wt,ct),Dt={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},U={chartType:`line`},Ot={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:I,tags:[`autodocs`],decorators:[Ie,ge,Me],argTypes:{...je,withComparison:{control:`boolean`},...Dt},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range and comparison come from the dashboard controls. The bucket size is the widget's own `chartInterval` attribute, clamped to what the range allows. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; at the hourly grain the second request asks for visitors, likes, and comments in daily buckets, so their cards still show the day totals (skipped for a window that does not cover whole days, such as `Last 24 hours`). Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},W={render:R,args:{withComparison:!1,...U},decorators:[j]},G={render:R,args:{withComparison:!0,...U},decorators:[j]},K={render:R,args:{withComparison:!1,...U,chartType:`bar`},decorators:[j]},q={render:R,args:{withComparison:!0,...U,chartType:`bar`},decorators:[j]},J={render:e=>(0,B.jsx)(we,{...e,widgetType:H,renderModule:V,renderComponent:I,attributes:{reportParams:E(!1,`last-24-hours`)}}),args:{...De},argTypes:{...xe}},Y={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[j],beforeEach:()=>(k(`stats/visits`,`loading`),()=>k(`stats/visits`,null))},X={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[j],beforeEach:()=>(k(`stats/visits`,`error`),()=>k(`stats/visits`,null))},Z={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[j],beforeEach:()=>(k(`stats/visits`,`empty`),fe(`/wp/v2/posts`,[{id:1}]),()=>{k(`stats/visits`,null),fe(`/wp/v2/posts`,null)})},Q={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[j],beforeEach:()=>{let e=window.JetpackScriptData;return window.JetpackScriptData={...e,site:{...e?.site,admin_url:`https://example.com/blog/wp-admin/`}},k(`stats/visits`,`empty`),Ae(`/wp/v2/posts`,`empty`),()=>{window.JetpackScriptData=e,k(`stats/visits`,null),Ae(`/wp/v2/posts`,null)}}},$={render:e=>(0,B.jsx)(Et,{...e}),args:{...De,withComparison:!0,...U},argTypes:{...xe,withComparison:{control:`boolean`},...Dt}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}},kt=[`Default`,`WithComparison`,`BarChart`,`BarChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`EmptyNoPosts`,`WidgetDashboardWithWidget`]}))();export{K as BarChart,q as BarChartWithComparison,W as Default,Z as Empty,Q as EmptyNoPosts,X as Error,J as Hourly,Y as Loading,$ as WidgetDashboardWithWidget,G as WithComparison,kt as __namedExportsOrder,Ot as default};