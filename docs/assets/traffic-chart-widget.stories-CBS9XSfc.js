import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,r as i,t as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{C as s,Tn as c,Vu as l,kr as u,ku as d,t as f}from"./build-module-DNhkEVJn.js";import{C as p,It as m,hn as h,nt as g,r as _,t as v,z as y}from"./date-fns-I6jayRk5.js";import{Xa as b,qa as x}from"./iframe-DJb0BAcC.js";import{g as S,m as C,p as w,t as T,u as E}from"./src-rrY7vAoW.js";import{$ as ee,Mn as D,Wn as O,n as te,t as k}from"./src-BgWlHMCI.js";import{N as ne,_ as re,at as ie,ct as A,rt as ae,x as oe}from"./charts-provider-Bzd5eOcT.js";import{t as se}from"./chart-empty-state-_fjV-QCq.js";import{n as ce,r as le,s as j}from"./register-report-mocks-CkTH9CtF.js";import{t as ue}from"./widget-state-BFsyoDQs.js";import{n as de,r as fe}from"./with-story-router-Beljd9ki.js";import{r as pe,t as me}from"./metric-tabs-chart-skeleton-B_x0EnFw.js";import{t as M}from"./src-Chmz-Zxr.js";import{a as he,d as ge,g as _e,h as ve,i as ye,m as be,n as xe,o as Se,p as Ce,r as N,u as we}from"./with-widget-canvas-Pu1XHS6L.js";import{n as Te,r as Ee,t as De}from"./with-site-time-zone-rx7NXQ-3.js";import{n as Oe,t as ke}from"./with-story-period-host-DyO9H36-.js";var Ae,je,Me=t((()=>{Ae=`_root_sp1nf_1`,je={root:Ae}}));function Ne(e,t){let n=e[t];return typeof n==`number`?n:void 0}function P(e,t,n,r){let i=[],a=(e?.data??[]).map(e=>S(e.date_start,t));return(e?.data??[]).forEach((e,o)=>{let s=a[o],c=r?r[o]:s,l=n(e);if(!c||!s||l===void 0)return;let u=S(e.date_end,t),d=u?{endDate:u}:{};i.push(r?{date:c,realDate:s,...d,value:l}:{date:c,...d,value:l})}),{points:i,dates:a}}function Pe(e){let t=Ne(e,`views`),n=Ne(e,`visitors`);return t!==void 0&&n!==void 0&&n>0?t/n:void 0}function Fe(e){return Array.isArray(e.post_titles)?e.post_titles.length:void 0}function Ie(e,t){return e.filter(e=>e.value!==0||t.some(t=>t.date.getTime()===e.date.getTime()&&t.value!==0))}function Le(e,t,n){return[{label:r(`Views per visitor`,`jetpack-premium-analytics-pkg`),icon:c,dataFormat:Re,current:P(e.views,t,Pe),comparisonReport:n?.views,valueOf:Pe,isCount:!1},{label:r(`Posts published`,`jetpack-premium-analytics-pkg`),icon:u,countLabel:ze,current:P(e.posts,t,Fe),comparisonReport:n?.posts,valueOf:Fe,isCount:!0}].map(({label:e,icon:n,dataFormat:r,countLabel:i,current:a,comparisonReport:o,valueOf:s,isCount:c})=>{let l=o?P(o,t,s,a.dates).points:[],u=c?Ie(a.points,l):a.points,d=c?Ie(l,a.points):l;return{label:e,icon:n,dataFormat:r,countLabel:i,data:u,previous:d.length?d:void 0}}).filter(e=>e.data.length||e.previous)}var Re,ze,Be=t((()=>{T(),a(),f(),Re={type:`average`},ze=e=>i(`%s Post published`,`%s Posts published`,e,`jetpack-premium-analytics-pkg`)}));function Ve(e,t,n){if(!e.date||!e.endDate||!t.date||!t.endDate)return 0;let r=Math.max(e.date.getTime(),t.date.getTime()+n),i=Math.min(e.endDate.getTime(),t.endDate.getTime()+n);return Math.max(0,i-r)}function He(e,t){let n=e[0]?.date,r=t[0]?.date;if(!n||!r)return 0;let i=n.getTime()-r.getTime(),a={shift:0,overlap:-1};for(let n=0;n<t.length;n++){let r=e.reduce((e,r,a)=>e+Ve(r,t[a+n]??{},i),0);r>a.overlap&&(a={shift:n,overlap:r})}return a.shift}function Ue(e){let t=A(e);return t?g(_(p(t),1),`yyyy-MM-dd`):void 0}function We(e){let t=Ue(e.from),n=Ue(e.to);return!!t&&t===A(e.compare_from)||!!n&&n===A(e.compare_to)}function Ge(e,t){return(e.data??[]).map(e=>({date:S(e.date_start,t),endDate:S(e.date_end,t)}))}function Ke(e,t,n){if(!e||!t?.data)return t;let r=He(Ge(e,n),Ge(t,n));return r?{...t,data:t.data.slice(r)}:t}var qe=t((()=>{T(),M(),v()}));function Je(){let e=b()?.site?.wpcom?.blog_id;if(e)try{let t=window.localStorage.getItem(`jetpack_stats_chart_type_${e}`);return t===`bar`||t===`line`?t:void 0}catch{return}}var Ye=t((()=>{x()}));function Xe(){return Je()??`bar`}var F,Ze,Qe,$e,et,I=t((()=>{a(),f(),Se(),M(),Ye(),F=[`hour`,`day`,`week`,`month`],Ze=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`),counterpartId:`views`,counterpartHidden:!0},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Comment`,`%s Comments`,e,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Like`,`%s Likes`,e,`jetpack-premium-analytics-pkg`)}],Qe={...ge,elements:we(F)},$e={...ae(),getValue:({item:e})=>e.chartType??Xe()},et={icon:s,attributes:[Qe,$e],example:{attributes:{}}}}));function tt(e){let t=w(e.from),n=w(e.to);return y(t,h(t))&&y(n,m(n))}function L(e,t,n){return{...e,stat_fields:t,period:n}}function nt(e,t){let n=t===`hour`,i=n&&tt(e),a=(0,l.useCallback)(e=>!n||rt.has(e),[n]),o=(0,l.useMemo)(()=>L(e,n?`views`:`views,visitors`,t),[e,t,n]),s=(0,l.useMemo)(()=>n?L(e,`visitors,likes,comments`,`day`):L(e,`likes,comments,post_titles`,t),[e,t,n]),c=ee(o),u=ee(s,{enabled:!n||i}),d=c.primary.data,f=c.comparison.data,p=c.hasComparison,m=c.timezone,h=u.primary.data,g=u.comparison.data,_=u.hasComparison,v=u.timezone,y=t===`week`&&We(e),b=(0,l.useMemo)(()=>y?Ke(d,f,m):f,[y,d,f,m]),x=(0,l.useMemo)(()=>y?Ke(h,g,v):g,[y,h,g,v]),S=c.isError&&!d?.data?.length,C=u.isError&&!h?.data?.length,w=i&&!C,T=(0,l.useMemo)(()=>Le({views:d,posts:n?void 0:h},m,p?{views:b,posts:_?x:void 0}:void 0),[d,m,b,p,h,x,_,n]),E=(0,l.useMemo)(()=>Ze.map(e=>{let t=e.id===`views`||e.id===`visitors`&&!n,i=e.id===`views`||e.id===`visitors`,o={...ie({primary:t?d:h,comparison:t?b:x,hasComparison:t?p:_,field:e.id,label:e.label,countLabel:e.countLabel,zone:t?m:v}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,counterpartHidden:`counterpartHidden`in e?e.counterpartHidden:void 0,tooltipExtras:i&&T.length?T:void 0};if(a(e.id))return o;let s=r(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`);return w?{...o,current:[],previous:void 0,seriesUnavailable:s}:{...o,unavailable:s}}),[a,n,w,T,d,b,p,m,h,x,_,v]),{refetch:D}=c,{refetch:O}=u,te=(0,l.useCallback)(()=>{D(),O()},[D,O]),k=S||C&&!n;return{metrics:E,isLoading:c.isLoading||u.isLoading,isFetching:c.isFetching||u.isFetching,isError:k,refetch:te}}var rt,it=t((()=>{k(),T(),d(),a(),v(),Be(),qe(),I(),M(),rt=new Set([`views`])}));function at({chartType:e,interval:t}){let{reportParams:n}=oe(),i=te({...n,interval:t},F),{openPeriod:a}=O(),o=(0,ot.useMemo)(()=>{if(!a)return;let e={from:E(n.from),to:E(n.to)};return t=>{let n=ne(t,i,e,{timeZone:C()});n&&a(n)}},[a,i,n.from,n.to]),{metrics:s,isLoading:c,isFetching:l,isError:u,refetch:d}=nt(n,i),f=r(`Traffic metric`,`jetpack-premium-analytics-pkg`);return(0,z.jsx)(`div`,{className:je.root,children:(0,z.jsx)(ue,{isLoading:c,isFetching:l,isError:u,error:{description:r(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},renderLoading:(0,z.jsx)(me,{}),children:(0,z.jsx)(pe,{metrics:s,dataFormat:st,chartType:e,groupLabel:f,tickResolution:i,onDatumClick:o,empty:(0,z.jsx)(se,{})})})})}function R({attributes:e={},setError:t}){return(0,z.jsx)(re,{attributes:e,setError:t,options:{from:`/`},children:(0,z.jsx)(at,{chartType:e.chartType??Xe(),interval:e.chartInterval})})}var ot,z,st,ct=t((()=>{k(),T(),M(),a(),ot=e(n(),1),Me(),it(),I(),z=o(),st={type:`number`,options:{useMultipliers:!0,decimals:0}}})),lt,ut,dt,ft,pt,mt,ht,gt=t((()=>{lt=`jpa/traffic-chart`,ut=`Traffic summary`,dt=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,ft={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},pt=`traffic`,mt=`framed`,ht={name:lt,title:ut,description:dt,help:ft,category:pt,presentation:mt}}));function B({withComparison:e,chartType:t}){return(0,H.jsx)(R,{attributes:{reportParams:D(e),chartType:t}})}function V(e){return(0,H.jsx)(R,{attributes:{reportParams:D(!1,e)}})}function _t({withComparison:e,chartType:t,...n}){return(0,H.jsx)(be,{...n,widgetType:yt,renderModule:vt,renderComponent:R,attributes:{reportParams:D(e),chartType:t}})}var H,vt,yt,U,W,bt,G,K,q,J,Y,X,Z,Q,$,xt;t((()=>{k(),ve(),he(),ke(),de(),xe(),De(),ce(),ct(),I(),gt(),H=o(),le(),vt=`storybook/traffic-chart`,yt=ye(ht,et),U={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},W={chartType:`line`},bt={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:R,tags:[`autodocs`],decorators:[Oe,fe,Ee],argTypes:{...Te,withComparison:{control:`boolean`},...U},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range and comparison come from the dashboard controls. The bucket size is the widget's own `chartInterval` attribute, clamped to what the range allows. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; at the hourly grain the second request asks for visitors, likes, and comments in daily buckets, so their cards still show the day totals (skipped for a window that does not cover whole days, such as `Last 24 hours`). Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},G={render:B,args:{withComparison:!1,...W},decorators:[N]},K={render:B,args:{withComparison:!0,...W},decorators:[N]},q={render:B,args:{withComparison:!1,...W,chartType:`bar`},decorators:[N]},J={render:B,args:{withComparison:!0,...W,chartType:`bar`},decorators:[N]},Y={render:e=>(0,H.jsx)(be,{...e,widgetType:yt,renderModule:vt,renderComponent:R,attributes:{reportParams:D(!1,`last-24-hours`)}}),args:{...Ce},argTypes:{..._e}},X={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[N],beforeEach:()=>(j(`stats/visits`,`loading`),()=>j(`stats/visits`,null))},Z={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[N],beforeEach:()=>(j(`stats/visits`,`error`),()=>j(`stats/visits`,null))},Q={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[N],beforeEach:()=>(j(`stats/visits`,`empty`),()=>j(`stats/visits`,null))},$={render:e=>(0,H.jsx)(_t,{...e}),args:{...Ce,withComparison:!0,...W},argTypes:{..._e,withComparison:{control:`boolean`},...U}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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