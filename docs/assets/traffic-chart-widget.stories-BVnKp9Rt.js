import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,r as i,t as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{C as s,Tn as c,Vu as l,kr as u,ku as d,t as f}from"./build-module-DNhkEVJn.js";import{C as p,It as m,hn as h,nt as g,r as _,t as v,z as y}from"./date-fns-I6jayRk5.js";import{Xa as b,qa as x}from"./iframe-BxBXuk2x.js";import{g as S,m as C,p as w,t as T,u as E}from"./src-CrSiwkkp.js";import{Nn as D,X as ee,n as O,qn as te,t as k}from"./src-cg23TX0w.js";import{_ as ne,j as re,ot as ie,rt as ae,tt as oe,x as se}from"./charts-provider-Dmi1E6gT.js";import{t as ce}from"./chart-empty-state-CpRE65B5.js";import{n as le,r as ue}from"./with-story-router-Beljd9ki.js";import{n as de,r as fe,s as A}from"./register-report-mocks-C_bLsbSu.js";import{t as pe}from"./widget-state-bLXubtix.js";import{r as me,t as he}from"./metric-tabs-chart-skeleton-DHZ6ZgMz.js";import{t as j}from"./src-BuQpZJ_K.js";import{a as ge,d as _e,g as ve,h as ye,i as be,m as xe,n as Se,o as Ce,p as we,r as M,u as Te}from"./with-widget-canvas-BDH4MB3_.js";import{n as Ee,r as De,t as Oe}from"./with-site-time-zone-rx7NXQ-3.js";import{n as ke,t as Ae}from"./with-story-period-host-B6N5EOQ9.js";var je,Me,Ne=t((()=>{je=`_root_sp1nf_1`,Me={root:je}}));function Pe(e,t){let n=e[t];return typeof n==`number`?n:void 0}function N(e,t,n,r){let i=[],a=(e?.data??[]).map(e=>S(e.date_start,t));return(e?.data??[]).forEach((e,o)=>{let s=a[o],c=r?r[o]:s,l=n(e);if(!c||!s||l===void 0)return;let u=S(e.date_end,t),d=u?{endDate:u}:{};i.push(r?{date:c,realDate:s,...d,value:l}:{date:c,...d,value:l})}),{points:i,dates:a}}function Fe(e){let t=Pe(e,`views`),n=Pe(e,`visitors`);return t!==void 0&&n!==void 0&&n>0?t/n:void 0}function Ie(e){return Array.isArray(e.post_titles)?e.post_titles.length:void 0}function Le(e,t){return e.filter(e=>e.value!==0||t.some(t=>t.date.getTime()===e.date.getTime()&&t.value!==0))}function Re(e,t,n){return[{label:r(`Views per visitor`,`jetpack-premium-analytics-pkg`),icon:c,dataFormat:ze,current:N(e.views,t,Fe),comparisonReport:n?.views,valueOf:Fe,isCount:!1},{label:r(`Posts published`,`jetpack-premium-analytics-pkg`),icon:u,countLabel:Be,current:N(e.posts,t,Ie),comparisonReport:n?.posts,valueOf:Ie,isCount:!0}].map(({label:e,icon:n,dataFormat:r,countLabel:i,current:a,comparisonReport:o,valueOf:s,isCount:c})=>{let l=o?N(o,t,s,a.dates).points:[],u=c?Le(a.points,l):a.points,d=c?Le(l,a.points):l;return{label:e,icon:n,dataFormat:r,countLabel:i,data:u,previous:d.length?d:void 0}}).filter(e=>e.data.length||e.previous)}var ze,Be,Ve=t((()=>{T(),a(),f(),ze={type:`average`},Be=e=>i(`%s Post published`,`%s Posts published`,e,`jetpack-premium-analytics-pkg`)}));function He(e,t,n){if(!e.date||!e.endDate||!t.date||!t.endDate)return 0;let r=Math.max(e.date.getTime(),t.date.getTime()+n),i=Math.min(e.endDate.getTime(),t.endDate.getTime()+n);return Math.max(0,i-r)}function Ue(e,t){let n=e[0]?.date,r=t[0]?.date;if(!n||!r)return 0;let i=n.getTime()-r.getTime(),a={shift:0,overlap:-1};for(let n=0;n<t.length;n++){let r=e.reduce((e,r,a)=>e+He(r,t[a+n]??{},i),0);r>a.overlap&&(a={shift:n,overlap:r})}return a.shift}function We(e){let t=ie(e);return t?g(_(p(t),1),`yyyy-MM-dd`):void 0}function Ge(e){let t=We(e.from),n=We(e.to);return!!t&&t===ie(e.compare_from)||!!n&&n===ie(e.compare_to)}function Ke(e,t){return(e.data??[]).map(e=>({date:S(e.date_start,t),endDate:S(e.date_end,t)}))}function qe(e,t,n){if(!e||!t?.data)return t;let r=Ue(Ke(e,n),Ke(t,n));return r?{...t,data:t.data.slice(r)}:t}var Je=t((()=>{T(),j(),v()}));function Ye(){let e=b()?.site?.wpcom?.blog_id;if(e)try{let t=window.localStorage.getItem(`jetpack_stats_chart_type_${e}`);return t===`bar`||t===`line`?t:void 0}catch{return}}var Xe=t((()=>{x()}));function Ze(){return Ye()??`bar`}var P,Qe,$e,et,tt,F=t((()=>{a(),f(),Ce(),j(),Xe(),P=[`hour`,`day`,`week`,`month`],Qe=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`),counterpartId:`views`,counterpartHidden:!0},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Comment`,`%s Comments`,e,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Like`,`%s Likes`,e,`jetpack-premium-analytics-pkg`)}],$e={..._e,elements:Te(P)},et={...oe(),getValue:({item:e})=>e.chartType??Ze()},tt={icon:s,attributes:[$e,et],example:{attributes:{}}}}));function nt(e){let t=w(e.from),n=w(e.to);return y(t,h(t))&&y(n,m(n))}function I(e,t,n){return{...e,stat_fields:t,period:n}}function rt(e,t){let n=t===`hour`,i=n&&nt(e),a=(0,l.useCallback)(e=>!n||it.has(e),[n]),o=(0,l.useMemo)(()=>I(e,n?`views`:`views,visitors`,t),[e,t,n]),s=(0,l.useMemo)(()=>n?I(e,`visitors,likes,comments`,`day`):I(e,`likes,comments,post_titles`,t),[e,t,n]),c=ee(o),u=ee(s,{enabled:!n||i}),d=c.primary.data,f=c.comparison.data,p=c.hasComparison,m=c.timezone,h=u.primary.data,g=u.comparison.data,_=u.hasComparison,v=u.timezone,y=t===`week`&&Ge(e),b=(0,l.useMemo)(()=>y?qe(d,f,m):f,[y,d,f,m]),x=(0,l.useMemo)(()=>y?qe(h,g,v):g,[y,h,g,v]),S=c.isError&&!d?.data?.length,C=u.isError&&!h?.data?.length,w=i&&!C,T=(0,l.useMemo)(()=>Re({views:d,posts:n?void 0:h},m,p?{views:b,posts:_?x:void 0}:void 0),[d,m,b,p,h,x,_,n]),E=(0,l.useMemo)(()=>Qe.map(e=>{let t=e.id===`views`||e.id===`visitors`&&!n,i=e.id===`views`||e.id===`visitors`,o={...ae({primary:t?d:h,comparison:t?b:x,hasComparison:t?p:_,field:e.id,label:e.label,countLabel:e.countLabel,zone:t?m:v}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,counterpartHidden:`counterpartHidden`in e?e.counterpartHidden:void 0,tooltipExtras:i&&T.length?T:void 0};if(a(e.id))return o;let s=r(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`);return w?{...o,current:[],previous:void 0,seriesUnavailable:s}:{...o,unavailable:s}}),[a,n,w,T,d,b,p,m,h,x,_,v]),{refetch:D}=c,{refetch:O}=u,te=(0,l.useCallback)(()=>{D(),O()},[D,O]),k=S||C&&!n;return{metrics:E,isLoading:c.isLoading||u.isLoading,isFetching:c.isFetching||u.isFetching,isError:k,refetch:te}}var it,at=t((()=>{k(),T(),d(),a(),v(),Ve(),Je(),F(),j(),it=new Set([`views`])}));function ot({chartType:e,interval:t}){let{reportParams:n}=se(),i=O({...n,interval:t},P),{openPeriod:a}=te(),o=(0,st.useMemo)(()=>{if(!a)return;let e={from:E(n.from),to:E(n.to)};return t=>{let n=re(t,i,e,{timeZone:C()});n&&a(n)}},[a,i,n.from,n.to]),{metrics:s,isLoading:c,isFetching:l,isError:u,refetch:d}=rt(n,i),f=r(`Traffic metric`,`jetpack-premium-analytics-pkg`);return(0,R.jsx)(`div`,{className:Me.root,children:(0,R.jsx)(pe,{isLoading:c,isFetching:l,isError:u,isEmpty:!1,error:{description:r(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},renderLoading:(0,R.jsx)(he,{}),children:(0,R.jsx)(me,{metrics:s,dataFormat:ct,chartType:e,groupLabel:f,tickResolution:i,onDatumClick:o,empty:(0,R.jsx)(ce,{})})})})}function L({attributes:e={},setError:t}){return(0,R.jsx)(ne,{attributes:e,setError:t,options:{from:`/`},children:(0,R.jsx)(ot,{chartType:e.chartType??Ze(),interval:e.chartInterval})})}var st,R,ct,lt=t((()=>{k(),T(),j(),a(),st=e(n(),1),Ne(),at(),F(),R=o(),ct={type:`number`,options:{useMultipliers:!0,decimals:0}}})),ut,dt,ft,pt,mt,ht,gt,_t=t((()=>{ut=`jpa/traffic-chart`,dt=`Traffic summary`,ft=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,pt={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},mt=`traffic`,ht=`framed`,gt={name:ut,title:dt,description:ft,help:pt,category:mt,presentation:ht}}));function z({withComparison:e,chartType:t}){return(0,V.jsx)(L,{attributes:{reportParams:D(e),chartType:t}})}function B(e){return(0,V.jsx)(L,{attributes:{reportParams:D(!1,e)}})}function vt({withComparison:e,chartType:t,...n}){return(0,V.jsx)(xe,{...n,widgetType:yt,renderModule:H,renderComponent:L,attributes:{reportParams:D(e),chartType:t}})}var V,H,yt,U,W,bt,G,K,q,J,Y,X,Z,Q,$,xt;t((()=>{k(),ye(),ge(),Ae(),le(),Se(),Oe(),de(),lt(),F(),_t(),V=o(),fe(),H=`storybook/traffic-chart`,yt=be(gt,tt),U={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},W={chartType:`line`},bt={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:L,tags:[`autodocs`],decorators:[ke,ue,De],argTypes:{...Ee,withComparison:{control:`boolean`},...U},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range and comparison come from the dashboard controls. The bucket size is the widget's own `chartInterval` attribute, clamped to what the range allows. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; at the hourly grain the second request asks for visitors, likes, and comments in daily buckets, so their cards still show the day totals (skipped for a window that does not cover whole days, such as `Last 24 hours`). Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},G={render:z,args:{withComparison:!1,...W},decorators:[M]},K={render:z,args:{withComparison:!0,...W},decorators:[M]},q={render:z,args:{withComparison:!1,...W,chartType:`bar`},decorators:[M]},J={render:z,args:{withComparison:!0,...W,chartType:`bar`},decorators:[M]},Y={render:e=>(0,V.jsx)(xe,{...e,widgetType:yt,renderModule:H,renderComponent:L,attributes:{reportParams:D(!1,`last-24-hours`)}}),args:{...we},argTypes:{...ve}},X={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[M],beforeEach:()=>(A(`stats/visits`,`loading`),()=>A(`stats/visits`,null))},Z={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[M],beforeEach:()=>(A(`stats/visits`,`error`),()=>A(`stats/visits`,null))},Q={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[M],beforeEach:()=>(A(`stats/visits`,`empty`),()=>A(`stats/visits`,null))},$={render:e=>(0,V.jsx)(vt,{...e}),args:{...we,withComparison:!0,...W},argTypes:{...ve,withComparison:{control:`boolean`},...U}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`An hourly range (\`Last 24 hours\`), where the chart draws hourly buckets.
\`stats/visits\` fills Views alone at that grain, so the other three tabs show
a placeholder and, when selected, the reason — rather than a \`0\` they cannot
back up. The likes and comments request is skipped entirely.

Mounted through the dashboard harness rather than the close-up canvas: hour
ticks are the point of the story, and the canvas is too narrow to draw an
axis at all.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}},xt=[`Default`,`WithComparison`,`BarChart`,`BarChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as BarChart,J as BarChartWithComparison,G as Default,Q as Empty,Z as Error,Y as Hourly,X as Loading,$ as WidgetDashboardWithWidget,K as WithComparison,xt as __namedExportsOrder,bt as default};