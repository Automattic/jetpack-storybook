import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,r as i,t as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{C as s,Vu as c,ku as l,t as u}from"./build-module-DNhkEVJn.js";import{C as d,It as f,hn as p,nt as m,r as h,t as g,z as _}from"./date-fns-I6jayRk5.js";import{Xa as v,qa as y}from"./iframe-BuV-jjvH.js";import{g as b,m as x,p as S,t as C,u as w}from"./src-ClJ6D7Xj.js";import{Fn as T,X as ee,Yn as te,r as E,t as D}from"./src-DR9dL7kA.js";import{R as ne,_ as re,ct as ie,pt as O,ut as ae,x as oe}from"./charts-provider-B0OMKaQT.js";import{t as se}from"./chart-empty-state-BO-bRDiB.js";import{n as ce,r as le}from"./with-story-router-Beljd9ki.js";import{n as ue,r as de,s as k}from"./register-report-mocks-CbKWtmtz.js";import{t as fe}from"./widget-state-CGyT03-4.js";import{r as pe,t as me}from"./metric-tabs-chart-skeleton-CQDCzN9M.js";import{t as A}from"./src-D_4589Ri.js";import{a as he,d as ge,f as _e,i as ve,n as ye,p as be,r as j,u as xe}from"./with-widget-canvas-4hA6Akwg.js";import{n as Se,r as Ce,t as we}from"./with-site-time-zone-rx7NXQ-3.js";import{n as Te,t as Ee}from"./with-story-period-host-BlBvpC2n.js";var De,Oe,ke=t((()=>{De=`_root_sp1nf_1`,Oe={root:De}}));function Ae(e,t){let n=e[t];return typeof n==`number`?n:void 0}function M(e,t,n,r){let i=[],a=(e?.data??[]).map(e=>b(e.date_start,t));return(e?.data??[]).forEach((e,o)=>{let s=a[o],c=r?r[o]:s,l=n(e);if(!c||!s||l===void 0)return;let u=b(e.date_end,t),d=u?{endDate:u}:{};i.push(r?{date:c,realDate:s,...d,value:l}:{date:c,...d,value:l})}),{points:i,dates:a}}function je(e){let t=Ae(e,`views`),n=Ae(e,`visitors`);return t!==void 0&&n!==void 0&&n>0?t/n:void 0}function Me(e){return(Array.isArray(e.post_titles)?e.post_titles.length:0)||void 0}function Ne(e,t,n){return[{label:r(`Views per visitor`,`jetpack-premium-analytics-pkg`),dataFormat:Pe,current:M(e.views,t,je),comparisonReport:n?.views,valueOf:je},{label:r(`Posts published`,`jetpack-premium-analytics-pkg`),countLabel:Fe,current:M(e.posts,t,Me),comparisonReport:n?.posts,valueOf:Me}].filter(e=>e.current.points.length).map(({label:e,dataFormat:n,countLabel:r,current:i,comparisonReport:a,valueOf:o})=>{let s=a?M(a,t,o,i.dates).points:[];return{label:e,dataFormat:n,countLabel:r,data:i.points,previous:s.length?s:void 0}})}var Pe,Fe,Ie=t((()=>{C(),a(),Pe={type:`average`},Fe=e=>i(`%s Post published`,`%s Posts published`,e,`jetpack-premium-analytics-pkg`)}));function Le(e,t,n){if(!e.date||!e.endDate||!t.date||!t.endDate)return 0;let r=Math.max(e.date.getTime(),t.date.getTime()+n),i=Math.min(e.endDate.getTime(),t.endDate.getTime()+n);return Math.max(0,i-r)}function Re(e,t){let n=e[0]?.date,r=t[0]?.date;if(!n||!r)return 0;let i=n.getTime()-r.getTime(),a={shift:0,overlap:-1};for(let n=0;n<t.length;n++){let r=e.reduce((e,r,a)=>e+Le(r,t[a+n]??{},i),0);r>a.overlap&&(a={shift:n,overlap:r})}return a.shift}function ze(e){let t=O(e);return t?m(h(d(t),1),`yyyy-MM-dd`):void 0}function Be(e){let t=ze(e.from),n=ze(e.to);return!!t&&t===O(e.compare_from)||!!n&&n===O(e.compare_to)}function Ve(e,t){return(e.data??[]).map(e=>({date:b(e.date_start,t),endDate:b(e.date_end,t)}))}function He(e,t,n){if(!e||!t?.data)return t;let r=Re(Ve(e,n),Ve(t,n));return r?{...t,data:t.data.slice(r)}:t}var Ue=t((()=>{C(),A(),g()}));function We(){let e=v()?.site?.wpcom?.blog_id;if(e)try{let t=window.localStorage.getItem(`jetpack_stats_chart_type_${e}`);return t===`bar`||t===`line`?t:void 0}catch{return}}var Ge=t((()=>{y()}));function Ke(){return We()??`bar`}var N,qe,Je,P=t((()=>{a(),u(),A(),Ge(),N=[`hour`,`day`,`week`,`month`],qe=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`),counterpartId:`views`,counterpartHidden:!0},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Comment`,`%s Comments`,e,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Like`,`%s Likes`,e,`jetpack-premium-analytics-pkg`)}],Je={icon:s,attributes:[{...ie(),getValue:({item:e})=>e.chartType??Ke()}],example:{attributes:{}}}}));function Ye(e){let t=S(e.from),n=S(e.to);return _(t,p(t))&&_(n,f(n))}function F(e,t,n){return{...e,stat_fields:t,period:n}}function Xe(e,t){let n=t===`hour`,i=n&&Ye(e),a=(0,c.useCallback)(e=>!n||Ze.has(e),[n]),o=(0,c.useMemo)(()=>F(e,n?`views`:`views,visitors`,t),[e,t,n]),s=(0,c.useMemo)(()=>n?F(e,`visitors,likes,comments`,`day`):F(e,`likes,comments,post_titles`,t),[e,t,n]),l=ee(o),u=ee(s,{enabled:!n||i}),d=l.primary.data,f=l.comparison.data,p=l.hasComparison,m=l.timezone,h=u.primary.data,g=u.comparison.data,_=u.hasComparison,v=u.timezone,y=t===`week`&&Be(e),b=(0,c.useMemo)(()=>y?He(d,f,m):f,[y,d,f,m]),x=(0,c.useMemo)(()=>y?He(h,g,v):g,[y,h,g,v]),S=l.isError&&!d?.data?.length,C=u.isError&&!h?.data?.length,w=i&&!C,T=(0,c.useMemo)(()=>Ne({views:d,posts:n?void 0:h},m,p?{views:b,posts:_?x:void 0}:void 0),[d,m,b,p,h,x,_,n]),te=(0,c.useMemo)(()=>qe.map(e=>{let t=e.id===`views`||e.id===`visitors`&&!n,i=e.id===`views`||e.id===`visitors`,o={...ae({primary:t?d:h,comparison:t?b:x,hasComparison:t?p:_,field:e.id,label:e.label,countLabel:e.countLabel,zone:t?m:v}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,counterpartHidden:`counterpartHidden`in e?e.counterpartHidden:void 0,tooltipExtras:i&&T.length?T:void 0};if(a(e.id))return o;let s=r(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`);return w?{...o,current:[],previous:void 0,seriesUnavailable:s}:{...o,unavailable:s}}),[a,n,w,T,d,b,p,m,h,x,_,v]),{refetch:E}=l,{refetch:D}=u,ne=(0,c.useCallback)(()=>{E(),D()},[E,D]),re=S||C&&!n;return{metrics:te,isLoading:l.isLoading||u.isLoading,isFetching:l.isFetching||u.isFetching,isError:re,refetch:ne}}var Ze,Qe=t((()=>{D(),C(),l(),a(),g(),Ie(),Ue(),P(),A(),Ze=new Set([`views`])}));function $e({chartType:e}){let{reportParams:t}=oe(),n=E(t.interval,N),{openPeriod:i}=te(),a=(0,et.useMemo)(()=>{if(!i)return;let e={from:w(t.from),to:w(t.to)};return t=>{let r=ne(t,n,e,{timeZone:x()});r&&i(r)}},[i,n,t.from,t.to]),{metrics:o,isLoading:s,isFetching:c,isError:l,refetch:u}=Xe(t,n),d=r(`Traffic metric`,`jetpack-premium-analytics-pkg`);return(0,L.jsx)(`div`,{className:Oe.root,children:(0,L.jsx)(fe,{isLoading:s,isFetching:c,isError:l,isEmpty:!1,error:{description:r(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},renderLoading:(0,L.jsx)(me,{}),children:(0,L.jsx)(pe,{metrics:o,dataFormat:tt,chartType:e,groupLabel:d,tickResolution:n,onDatumClick:a,empty:(0,L.jsx)(se,{})})})})}function I({attributes:e={},setError:t}){return(0,L.jsx)(re,{attributes:e,setError:t,options:{from:`/`},children:(0,L.jsx)($e,{chartType:e.chartType??Ke()})})}var et,L,tt,nt=t((()=>{D(),C(),A(),a(),et=e(n(),1),ke(),Qe(),P(),L=o(),tt={type:`number`,options:{useMultipliers:!0,decimals:0}}})),rt,it,at,ot,st,ct,lt,ut=t((()=>{rt=`jpa/traffic-chart`,it=`Traffic summary`,at=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,ot={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},st=`traffic`,ct=`framed`,lt={name:rt,title:it,description:at,help:ot,category:st,presentation:ct}}));function R({withComparison:e,chartType:t}){return(0,B.jsx)(I,{attributes:{reportParams:T(e),chartType:t}})}function z(e){return(0,B.jsx)(I,{attributes:{reportParams:T(!1,e)}})}function dt({withComparison:e,chartType:t,...n}){return(0,B.jsx)(ge,{...n,widgetType:H,renderModule:V,renderComponent:I,attributes:{reportParams:T(e),chartType:t}})}var B,V,H,U,W,ft,G,K,q,J,Y,X,Z,Q,$,pt;t((()=>{D(),_e(),he(),Ee(),ce(),ye(),we(),ue(),nt(),P(),ut(),B=o(),de(),V=`storybook/traffic-chart`,H=ve(lt,Je),U={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},W={chartType:`line`},ft={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:I,tags:[`autodocs`],decorators:[Te,le,Ce],argTypes:{...Se,withComparison:{control:`boolean`},...U},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range, comparison, and bucket size come from the dashboard controls: the bucket is whatever the page's interval control resolves to, clamped to one the chart can draw. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; at the hourly grain the second request asks for visitors, likes, and comments in daily buckets, so their cards still show the day totals (skipped for a window that does not cover whole days, such as `Last 24 hours`). Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},G={render:R,args:{withComparison:!1,...W},decorators:[j]},K={render:R,args:{withComparison:!0,...W},decorators:[j]},q={render:R,args:{withComparison:!1,...W,chartType:`bar`},decorators:[j]},J={render:R,args:{withComparison:!0,...W,chartType:`bar`},decorators:[j]},Y={render:e=>(0,B.jsx)(ge,{...e,widgetType:H,renderModule:V,renderComponent:I,attributes:{reportParams:T(!1,`last-24-hours`)}}),args:{...xe},argTypes:{...be}},X={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[j],beforeEach:()=>(k(`stats/visits`,`loading`),()=>k(`stats/visits`,null))},Z={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[j],beforeEach:()=>(k(`stats/visits`,`error`),()=>k(`stats/visits`,null))},Q={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[j],beforeEach:()=>(k(`stats/visits`,`empty`),()=>k(`stats/visits`,null))},$={render:e=>(0,B.jsx)(dt,{...e}),args:{...xe,withComparison:!0,...W},argTypes:{...be,withComparison:{control:`boolean`},...U}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: false,
    ...DEFAULT_CHART_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`The widget on its own, current period only.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: true,
    ...DEFAULT_CHART_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`Same close-up with the period-over-period delta and previous-period overlay.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: false,
    ...DEFAULT_CHART_ARGS,
    chartType: 'bar'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:"The same widget drawn as bars — the `chartType` attribute set to `bar`.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: true,
    ...DEFAULT_CHART_ARGS,
    chartType: 'bar'
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`Bars with comparison on: the previous period renders as the translucent
shadow bar behind each current-period bar.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => <WidgetDashboardWithWidgetStory {...args} widgetType={storyWidgetType} renderModule={TRAFFIC_CHART_RENDER_MODULE} renderComponent={TrafficChartRender as ComponentType<WidgetRenderProps<unknown>>} attributes={{
    reportParams: getDefaultQueryParams(false, 'last-24-hours')
  }} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Y.parameters?.docs?.source},description:{story:"An hourly range (`Last 24 hours`), where the page's interval control resolves\nto `hour`. `stats/visits` fills Views alone at that grain, so the other three\ntabs show a placeholder and, when selected, the reason — rather than a `0`\nthey cannot back up. The likes and comments request is skipped entirely.\n\nMounted through the dashboard harness rather than the close-up canvas: hour\nticks are the point of the story, and the canvas is too narrow to draw an\naxis at all.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderTrafficChartOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'loading');
    return () => setReportMockState('stats/visits', null);
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderTrafficChartOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'error');
    return () => setReportMockState('stats/visits', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the queries — still mocked as failing while this story is active).`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => renderTrafficChartOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'empty');
    return () => setReportMockState('stats/visits', null);
  }
}`,...Q.parameters?.docs?.source},description:{story:`Resolved with no points: the tabs stay at zero and the plot shows the
no-results message in place of a flat line.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}},pt=[`Default`,`WithComparison`,`BarChart`,`BarChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as BarChart,J as BarChartWithComparison,G as Default,Q as Empty,Z as Error,Y as Hourly,X as Loading,$ as WidgetDashboardWithWidget,K as WithComparison,pt as __namedExportsOrder,ft as default};