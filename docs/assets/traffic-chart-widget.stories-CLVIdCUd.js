import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,r as i,t as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Gu as s,Nu as c,Tn as l,jr as u,t as d}from"./build-module-Cm3Kd3py.js";import{C as f,It as p,hn as m,nt as h,r as g,t as _,z as v}from"./date-fns-I6jayRk5.js";import{Ja as y,Za as b}from"./iframe-DymknxiX.js";import{g as x,m as ee,p as S,t as C,u as w}from"./src-rrY7vAoW.js";import{$ as te,In as ne,n as T,t as E,wn as D}from"./src-BXGbBQuk.js";import{F as re,_ as ie,at as ae,st as oe,ut as O,x as se}from"./charts-provider-CPqqWd8T.js";import{t as ce}from"./chart-empty-state-DnetM0rf.js";import{n as le,r as ue,s as k}from"./register-report-mocks-HpcX_mM9.js";import{t as de}from"./widget-state-Ct82KwxU.js";import{n as fe,r as pe}from"./with-story-router-Beljd9ki.js";import{r as me,t as he}from"./metric-tabs-chart-skeleton-BRJLa4UA.js";import{t as A}from"./src-BO6UD8Zu.js";import{a as ge,d as _e,g as ve,h as ye,i as be,m as xe,n as Se,o as Ce,p as we,r as j,u as Te}from"./with-widget-canvas-Bkxis0Y9.js";import{n as Ee,r as De,t as Oe}from"./with-site-time-zone-rx7NXQ-3.js";import{n as ke,t as Ae}from"./with-story-period-host-CpSBuSgd.js";var je,Me,Ne=t((()=>{je=`_root_sp1nf_1`,Me={root:je}}));function Pe(e,t){let n=e[t];return typeof n==`number`?n:void 0}function M(e,t,n,r){let i=[],a=(e?.data??[]).map(e=>x(e.date_start,t));return(e?.data??[]).forEach((e,o)=>{let s=a[o],c=r?r[o]:s,l=n(e);if(!c||!s||l===void 0)return;let u=x(e.date_end,t),d=u?{endDate:u}:{};i.push(r?{date:c,realDate:s,...d,value:l}:{date:c,...d,value:l})}),{points:i,dates:a}}function Fe(e){let t=Pe(e,`views`),n=Pe(e,`visitors`);return t!==void 0&&n!==void 0&&n>0?t/n:void 0}function Ie(e){return Array.isArray(e.post_titles)?e.post_titles.length:void 0}function Le(e,t){return e.filter(e=>e.value!==0||t.some(t=>t.date.getTime()===e.date.getTime()&&t.value!==0))}function Re(e,t,n){return[{label:r(`Views per visitor`,`jetpack-premium-analytics-pkg`),icon:l,dataFormat:ze,current:M(e.views,t,Fe),comparisonReport:n?.views,valueOf:Fe,isCount:!1},{label:r(`Posts published`,`jetpack-premium-analytics-pkg`),icon:u,countLabel:Be,current:M(e.posts,t,Ie),comparisonReport:n?.posts,valueOf:Ie,isCount:!0}].map(({label:e,icon:n,dataFormat:r,countLabel:i,current:a,comparisonReport:o,valueOf:s,isCount:c})=>{let l=o?M(o,t,s,a.dates).points:[],u=c?Le(a.points,l):a.points,d=c?Le(l,a.points):l;return{label:e,icon:n,dataFormat:r,countLabel:i,data:u,previous:d.length?d:void 0}}).filter(e=>e.data.length||e.previous)}var ze,Be,Ve=t((()=>{C(),a(),d(),ze={type:`average`},Be=e=>i(`%s Post published`,`%s Posts published`,e,`jetpack-premium-analytics-pkg`)}));function He(e,t,n){if(!e.date||!e.endDate||!t.date||!t.endDate)return 0;let r=Math.max(e.date.getTime(),t.date.getTime()+n),i=Math.min(e.endDate.getTime(),t.endDate.getTime()+n);return Math.max(0,i-r)}function Ue(e,t){let n=e[0]?.date,r=t[0]?.date;if(!n||!r)return 0;let i=n.getTime()-r.getTime(),a={shift:0,overlap:-1};for(let n=0;n<t.length;n++){let r=e.reduce((e,r,a)=>e+He(r,t[a+n]??{},i),0);r>a.overlap&&(a={shift:n,overlap:r})}return a.shift}function We(e){let t=O(e);return t?h(g(f(t),1),`yyyy-MM-dd`):void 0}function Ge(e){let t=We(e.from),n=We(e.to);return!!t&&t===O(e.compare_from)||!!n&&n===O(e.compare_to)}function Ke(e,t){return(e.data??[]).map(e=>({date:x(e.date_start,t),endDate:x(e.date_end,t)}))}function qe(e,t,n){if(!e||!t?.data)return t;let r=Ue(Ke(e,n),Ke(t,n));return r?{...t,data:t.data.slice(r)}:t}var Je=t((()=>{C(),A(),_()}));function Ye(){let e=b()?.site?.wpcom?.blog_id;if(e)try{let t=window.localStorage.getItem(`jetpack_stats_chart_type_${e}`);return t===`bar`||t===`line`?t:void 0}catch{return}}var Xe=t((()=>{y()}));function Ze(){return Ye()??`bar`}var N,Qe,$e,et,tt,P=t((()=>{a(),Ce(),A(),Xe(),N=[`hour`,`day`,`week`,`month`],Qe=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`),counterpartId:`views`,counterpartHidden:!0},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Comment`,`%s Comments`,e,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Like`,`%s Likes`,e,`jetpack-premium-analytics-pkg`)}],$e={..._e,elements:Te(N)},et={id:`chartType`,label:r(`Chart type`,`jetpack-premium-analytics-pkg`),type:`jpa/toggle-group`,elements:ae,relevance:`high`,getValue:({item:e})=>e.chartType??Ze()},tt={attributes:[$e,et],example:{attributes:{}}}}));function nt(e){let t=S(e.from),n=S(e.to);return v(t,m(t))&&v(n,p(n))}function F(e,t,n){return{...e,stat_fields:t,period:n}}function rt(e,t){let n=t===`hour`,i=n&&nt(e),a=(0,s.useCallback)(e=>!n||it.has(e),[n]),o=(0,s.useMemo)(()=>F(e,n?`views`:`views,visitors`,t),[e,t,n]),c=(0,s.useMemo)(()=>n?F(e,`visitors,likes,comments`,`day`):F(e,`likes,comments,post_titles`,t),[e,t,n]),l=te(o),u=te(c,{enabled:!n||i}),d=l.primary.data,f=l.comparison.data,p=l.hasComparison,m=l.timezone,h=u.primary.data,g=u.comparison.data,_=u.hasComparison,v=u.timezone,y=t===`week`&&Ge(e),b=(0,s.useMemo)(()=>y?qe(d,f,m):f,[y,d,f,m]),x=(0,s.useMemo)(()=>y?qe(h,g,v):g,[y,h,g,v]),ee=l.isError&&!d?.data?.length,S=u.isError&&!h?.data?.length,C=i&&!S,w=(0,s.useMemo)(()=>Re({views:d,posts:n?void 0:h},m,p?{views:b,posts:_?x:void 0}:void 0),[d,m,b,p,h,x,_,n]),ne=(0,s.useMemo)(()=>Qe.map(e=>{let t=e.id===`views`||e.id===`visitors`&&!n,i=e.id===`views`||e.id===`visitors`,o={...oe({primary:t?d:h,comparison:t?b:x,hasComparison:t?p:_,field:e.id,label:e.label,countLabel:e.countLabel,zone:t?m:v}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,counterpartHidden:`counterpartHidden`in e?e.counterpartHidden:void 0,tooltipExtras:i&&w.length?w:void 0};if(a(e.id))return o;let s=r(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`);return C?{...o,current:[],previous:void 0,seriesUnavailable:s}:{...o,unavailable:s}}),[a,n,C,w,d,b,p,m,h,x,_,v]),{refetch:T}=l,{refetch:E}=u,D=(0,s.useCallback)(()=>{T(),E()},[T,E]),re=ee||S&&!n;return{metrics:ne,isLoading:l.isLoading||u.isLoading,isFetching:l.isFetching||u.isFetching,isError:re,refetch:D}}var it,at=t((()=>{E(),C(),c(),a(),_(),Ve(),Je(),P(),A(),it=new Set([`views`])}));function ot({chartType:e,interval:t}){let{reportParams:n}=se(),i=T({...n,interval:t},N),{openPeriod:a}=ne(),o=(0,st.useMemo)(()=>{if(!a)return;let e={from:w(n.from),to:w(n.to)};return t=>{let n=re(t,i,e,{timeZone:ee()});n&&a(n)}},[a,i,n.from,n.to]),{metrics:s,isLoading:c,isFetching:l,isError:u,refetch:d}=rt(n,i),f=r(`Traffic metric`,`jetpack-premium-analytics-pkg`);return(0,L.jsx)(`div`,{className:Me.root,children:(0,L.jsx)(de,{isLoading:c,isFetching:l,isError:u,error:{description:r(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},renderLoading:(0,L.jsx)(he,{}),children:(0,L.jsx)(me,{metrics:s,dataFormat:ct,chartType:e,groupLabel:f,tickResolution:i,onDatumClick:o,empty:(0,L.jsx)(ce,{})})})})}function I({attributes:e={},setError:t}){return(0,L.jsx)(ie,{attributes:e,setError:t,options:{from:`/`},children:(0,L.jsx)(ot,{chartType:e.chartType??Ze(),interval:e.chartInterval})})}var st,L,ct,lt=t((()=>{E(),C(),A(),a(),st=e(n(),1),Ne(),at(),P(),L=o(),ct={type:`number`,options:{useMultipliers:!0,decimals:0}}})),ut,dt,ft,pt,mt,ht,gt,_t,vt=t((()=>{ut=`jpa/traffic-chart`,dt=`jpa/trending-up`,ft=`Traffic summary`,pt=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,mt={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},ht=`traffic`,gt=`framed`,_t={name:ut,icon:dt,title:ft,description:pt,help:mt,category:ht,presentation:gt}}));function R({withComparison:e,chartType:t}){return(0,B.jsx)(I,{attributes:{reportParams:D(e),chartType:t}})}function z(e){return(0,B.jsx)(I,{attributes:{reportParams:D(!1,e)}})}function yt({withComparison:e,chartType:t,...n}){return(0,B.jsx)(xe,{...n,widgetType:H,renderModule:V,renderComponent:I,attributes:{reportParams:D(e),chartType:t}})}var B,V,H,U,W,bt,G,K,q,J,Y,X,Z,Q,$,xt;t((()=>{E(),ye(),ge(),Ae(),fe(),Se(),Oe(),le(),lt(),P(),vt(),B=o(),ue(),V=`storybook/traffic-chart`,H=be(_t,tt),U={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},W={chartType:`line`},bt={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:I,tags:[`autodocs`],decorators:[ke,pe,De],argTypes:{...Ee,withComparison:{control:`boolean`},...U},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range and comparison come from the dashboard controls. The bucket size is the widget's own `chartInterval` attribute, clamped to what the range allows. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; at the hourly grain the second request asks for visitors, likes, and comments in daily buckets, so their cards still show the day totals (skipped for a window that does not cover whole days, such as `Last 24 hours`). Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},G={render:R,args:{withComparison:!1,...W},decorators:[j]},K={render:R,args:{withComparison:!0,...W},decorators:[j]},q={render:R,args:{withComparison:!1,...W,chartType:`bar`},decorators:[j]},J={render:R,args:{withComparison:!0,...W,chartType:`bar`},decorators:[j]},Y={render:e=>(0,B.jsx)(xe,{...e,widgetType:H,renderModule:V,renderComponent:I,attributes:{reportParams:D(!1,`last-24-hours`)}}),args:{...we},argTypes:{...ve}},X={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[j],beforeEach:()=>(k(`stats/visits`,`loading`),()=>k(`stats/visits`,null))},Z={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[j],beforeEach:()=>(k(`stats/visits`,`error`),()=>k(`stats/visits`,null))},Q={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[j],beforeEach:()=>(k(`stats/visits`,`empty`),()=>k(`stats/visits`,null))},$={render:e=>(0,B.jsx)(yt,{...e}),args:{...we,withComparison:!0,...W},argTypes:{...ve,withComparison:{control:`boolean`},...U}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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