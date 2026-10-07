import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,r as i,t as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{C as s,Tn as c,Vu as l,kr as u,ku as d,t as f}from"./build-module-DNhkEVJn.js";import{C as p,It as m,hn as h,nt as g,r as _,t as v,z as y}from"./date-fns-I6jayRk5.js";import{Xa as b,qa as x}from"./iframe-TxLuCvGD.js";import{g as S,m as C,p as w,t as T,u as E}from"./src-ClJ6D7Xj.js";import{Fn as D,X as ee,Yn as O,r as te,t as k}from"./src-BQd05kWl.js";import{_ as ne,j as re,ot as ie,rt as ae,tt as oe,x as se}from"./charts-provider-BKpfNz6H.js";import{t as ce}from"./chart-empty-state-DIEo_U8M.js";import{n as le,r as ue}from"./with-story-router-Beljd9ki.js";import{n as de,r as fe,s as A}from"./register-report-mocks-DlFPnKLF.js";import{t as pe}from"./widget-state-Btbrx8X1.js";import{r as me,t as he}from"./metric-tabs-chart-skeleton-hENetTLj.js";import{t as j}from"./src-DOh1MeJj.js";import{a as ge,d as _e,f as ve,i as ye,n as be,p as xe,r as M,u as Se}from"./with-widget-canvas-FUXwmgRJ.js";import{n as Ce,r as we,t as Te}from"./with-site-time-zone-rx7NXQ-3.js";import{n as Ee,t as De}from"./with-story-period-host-DXez9sht.js";var Oe,ke,Ae=t((()=>{Oe=`_root_sp1nf_1`,ke={root:Oe}}));function je(e,t){let n=e[t];return typeof n==`number`?n:void 0}function N(e,t,n,r){let i=[],a=(e?.data??[]).map(e=>S(e.date_start,t));return(e?.data??[]).forEach((e,o)=>{let s=a[o],c=r?r[o]:s,l=n(e);if(!c||!s||l===void 0)return;let u=S(e.date_end,t),d=u?{endDate:u}:{};i.push(r?{date:c,realDate:s,...d,value:l}:{date:c,...d,value:l})}),{points:i,dates:a}}function Me(e){let t=je(e,`views`),n=je(e,`visitors`);return t!==void 0&&n!==void 0&&n>0?t/n:void 0}function Ne(e){return Array.isArray(e.post_titles)?e.post_titles.length:void 0}function Pe(e,t){return e.filter(e=>e.value!==0||t.some(t=>t.date.getTime()===e.date.getTime()&&t.value!==0))}function Fe(e,t,n){return[{label:r(`Views per visitor`,`jetpack-premium-analytics-pkg`),icon:c,dataFormat:Ie,current:N(e.views,t,Me),comparisonReport:n?.views,valueOf:Me,isCount:!1},{label:r(`Posts published`,`jetpack-premium-analytics-pkg`),icon:u,countLabel:Le,current:N(e.posts,t,Ne),comparisonReport:n?.posts,valueOf:Ne,isCount:!0}].map(({label:e,icon:n,dataFormat:r,countLabel:i,current:a,comparisonReport:o,valueOf:s,isCount:c})=>{let l=o?N(o,t,s,a.dates).points:[],u=c?Pe(a.points,l):a.points,d=c?Pe(l,a.points):l;return{label:e,icon:n,dataFormat:r,countLabel:i,data:u,previous:d.length?d:void 0}}).filter(e=>e.data.length||e.previous)}var Ie,Le,Re=t((()=>{T(),a(),f(),Ie={type:`average`},Le=e=>i(`%s Post published`,`%s Posts published`,e,`jetpack-premium-analytics-pkg`)}));function ze(e,t,n){if(!e.date||!e.endDate||!t.date||!t.endDate)return 0;let r=Math.max(e.date.getTime(),t.date.getTime()+n),i=Math.min(e.endDate.getTime(),t.endDate.getTime()+n);return Math.max(0,i-r)}function Be(e,t){let n=e[0]?.date,r=t[0]?.date;if(!n||!r)return 0;let i=n.getTime()-r.getTime(),a={shift:0,overlap:-1};for(let n=0;n<t.length;n++){let r=e.reduce((e,r,a)=>e+ze(r,t[a+n]??{},i),0);r>a.overlap&&(a={shift:n,overlap:r})}return a.shift}function Ve(e){let t=ie(e);return t?g(_(p(t),1),`yyyy-MM-dd`):void 0}function He(e){let t=Ve(e.from),n=Ve(e.to);return!!t&&t===ie(e.compare_from)||!!n&&n===ie(e.compare_to)}function Ue(e,t){return(e.data??[]).map(e=>({date:S(e.date_start,t),endDate:S(e.date_end,t)}))}function We(e,t,n){if(!e||!t?.data)return t;let r=Be(Ue(e,n),Ue(t,n));return r?{...t,data:t.data.slice(r)}:t}var Ge=t((()=>{T(),j(),v()}));function Ke(){let e=b()?.site?.wpcom?.blog_id;if(e)try{let t=window.localStorage.getItem(`jetpack_stats_chart_type_${e}`);return t===`bar`||t===`line`?t:void 0}catch{return}}var qe=t((()=>{x()}));function Je(){return Ke()??`bar`}var Ye,Xe,Ze,P=t((()=>{a(),f(),j(),qe(),Ye=[`hour`,`day`,`week`,`month`],Xe=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`),counterpartId:`views`,counterpartHidden:!0},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Comment`,`%s Comments`,e,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Like`,`%s Likes`,e,`jetpack-premium-analytics-pkg`)}],Ze={icon:s,attributes:[{...oe(),getValue:({item:e})=>e.chartType??Je()}],example:{attributes:{}}}}));function Qe(e){let t=w(e.from),n=w(e.to);return y(t,h(t))&&y(n,m(n))}function F(e,t,n){return{...e,stat_fields:t,period:n}}function $e(e,t){let n=t===`hour`,i=n&&Qe(e),a=(0,l.useCallback)(e=>!n||et.has(e),[n]),o=(0,l.useMemo)(()=>F(e,n?`views`:`views,visitors`,t),[e,t,n]),s=(0,l.useMemo)(()=>n?F(e,`visitors,likes,comments`,`day`):F(e,`likes,comments,post_titles`,t),[e,t,n]),c=ee(o),u=ee(s,{enabled:!n||i}),d=c.primary.data,f=c.comparison.data,p=c.hasComparison,m=c.timezone,h=u.primary.data,g=u.comparison.data,_=u.hasComparison,v=u.timezone,y=t===`week`&&He(e),b=(0,l.useMemo)(()=>y?We(d,f,m):f,[y,d,f,m]),x=(0,l.useMemo)(()=>y?We(h,g,v):g,[y,h,g,v]),S=c.isError&&!d?.data?.length,C=u.isError&&!h?.data?.length,w=i&&!C,T=(0,l.useMemo)(()=>Fe({views:d,posts:n?void 0:h},m,p?{views:b,posts:_?x:void 0}:void 0),[d,m,b,p,h,x,_,n]),E=(0,l.useMemo)(()=>Xe.map(e=>{let t=e.id===`views`||e.id===`visitors`&&!n,i=e.id===`views`||e.id===`visitors`,o={...ae({primary:t?d:h,comparison:t?b:x,hasComparison:t?p:_,field:e.id,label:e.label,countLabel:e.countLabel,zone:t?m:v}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,counterpartHidden:`counterpartHidden`in e?e.counterpartHidden:void 0,tooltipExtras:i&&T.length?T:void 0};if(a(e.id))return o;let s=r(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`);return w?{...o,current:[],previous:void 0,seriesUnavailable:s}:{...o,unavailable:s}}),[a,n,w,T,d,b,p,m,h,x,_,v]),{refetch:D}=c,{refetch:O}=u,te=(0,l.useCallback)(()=>{D(),O()},[D,O]),k=S||C&&!n;return{metrics:E,isLoading:c.isLoading||u.isLoading,isFetching:c.isFetching||u.isFetching,isError:k,refetch:te}}var et,tt=t((()=>{k(),T(),d(),a(),v(),Re(),Ge(),P(),j(),et=new Set([`views`])}));function nt({chartType:e}){let{reportParams:t}=se(),n=te(t.interval,Ye),{openPeriod:i}=O(),a=(0,rt.useMemo)(()=>{if(!i)return;let e={from:E(t.from),to:E(t.to)};return t=>{let r=re(t,n,e,{timeZone:C()});r&&i(r)}},[i,n,t.from,t.to]),{metrics:o,isLoading:s,isFetching:c,isError:l,refetch:u}=$e(t,n),d=r(`Traffic metric`,`jetpack-premium-analytics-pkg`);return(0,L.jsx)(`div`,{className:ke.root,children:(0,L.jsx)(pe,{isLoading:s,isFetching:c,isError:l,isEmpty:!1,error:{description:r(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},renderLoading:(0,L.jsx)(he,{}),children:(0,L.jsx)(me,{metrics:o,dataFormat:it,chartType:e,groupLabel:d,tickResolution:n,onDatumClick:a,empty:(0,L.jsx)(ce,{})})})})}function I({attributes:e={},setError:t}){return(0,L.jsx)(ne,{attributes:e,setError:t,options:{from:`/`},children:(0,L.jsx)(nt,{chartType:e.chartType??Je()})})}var rt,L,it,at=t((()=>{k(),T(),j(),a(),rt=e(n(),1),Ae(),tt(),P(),L=o(),it={type:`number`,options:{useMultipliers:!0,decimals:0}}})),ot,st,ct,lt,ut,dt,ft,pt=t((()=>{ot=`jpa/traffic-chart`,st=`Traffic summary`,ct=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,lt={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},ut=`traffic`,dt=`framed`,ft={name:ot,title:st,description:ct,help:lt,category:ut,presentation:dt}}));function R({withComparison:e,chartType:t}){return(0,B.jsx)(I,{attributes:{reportParams:D(e),chartType:t}})}function z(e){return(0,B.jsx)(I,{attributes:{reportParams:D(!1,e)}})}function mt({withComparison:e,chartType:t,...n}){return(0,B.jsx)(_e,{...n,widgetType:H,renderModule:V,renderComponent:I,attributes:{reportParams:D(e),chartType:t}})}var B,V,H,U,W,ht,G,K,q,J,Y,X,Z,Q,$,gt;t((()=>{k(),ve(),ge(),De(),le(),be(),Te(),de(),at(),P(),pt(),B=o(),fe(),V=`storybook/traffic-chart`,H=ye(ft,Ze),U={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},W={chartType:`line`},ht={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:I,tags:[`autodocs`],decorators:[Ee,ue,we],argTypes:{...Ce,withComparison:{control:`boolean`},...U},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range, comparison, and bucket size come from the dashboard controls: the bucket is whatever the page's interval control resolves to, clamped to one the chart can draw. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; at the hourly grain the second request asks for visitors, likes, and comments in daily buckets, so their cards still show the day totals (skipped for a window that does not cover whole days, such as `Last 24 hours`). Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},G={render:R,args:{withComparison:!1,...W},decorators:[M]},K={render:R,args:{withComparison:!0,...W},decorators:[M]},q={render:R,args:{withComparison:!1,...W,chartType:`bar`},decorators:[M]},J={render:R,args:{withComparison:!0,...W,chartType:`bar`},decorators:[M]},Y={render:e=>(0,B.jsx)(_e,{...e,widgetType:H,renderModule:V,renderComponent:I,attributes:{reportParams:D(!1,`last-24-hours`)}}),args:{...Se},argTypes:{...xe}},X={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[M],beforeEach:()=>(A(`stats/visits`,`loading`),()=>A(`stats/visits`,null))},Z={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[M],beforeEach:()=>(A(`stats/visits`,`error`),()=>A(`stats/visits`,null))},Q={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[M],beforeEach:()=>(A(`stats/visits`,`empty`),()=>A(`stats/visits`,null))},$={render:e=>(0,B.jsx)(mt,{...e}),args:{...Se,withComparison:!0,...W},argTypes:{...xe,withComparison:{control:`boolean`},...U}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}},gt=[`Default`,`WithComparison`,`BarChart`,`BarChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as BarChart,J as BarChartWithComparison,G as Default,Q as Empty,Z as Error,Y as Hourly,X as Loading,$ as WidgetDashboardWithWidget,K as WithComparison,gt as __namedExportsOrder,ht as default};