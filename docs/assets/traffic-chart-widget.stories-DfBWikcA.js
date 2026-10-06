import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,r as i,t as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{C as s,Vu as c,ku as l,t as u}from"./build-module-DNhkEVJn.js";import{It as d,hn as f,t as p,z as m}from"./date-fns-I6jayRk5.js";import{C as h,D as g,m as _,v}from"./hooks-5wip9VuW.js";import{Xa as ee,qa as y}from"./iframe-CdN6VjYT.js";import{g as b,p as x,t as S}from"./src-ClJ6D7Xj.js";import{J as C,fn as w,r as T,t as E}from"./src-DI0_gduA.js";import{I as te,M as ne}from"./helpers-BlA3Bwqi.js";import{t as re}from"./chart-empty-state-Dmnz74AP.js";import{n as ie,r as ae}from"./with-story-router-CyEgvQss.js";import{n as oe,r as se,s as D}from"./register-report-mocks-D06bR136.js";import{t as ce}from"./widget-state-Dq3iI-IP.js";import{r as le,t as ue}from"./metric-tabs-chart-skeleton-BLvgnra9.js";import{t as O}from"./src-BpJjIEVr.js";import{a as de,d as k,f as fe,i as pe,n as me,p as he,r as A,u as ge}from"./with-widget-canvas-WgdYIo0x.js";import{n as _e,r as ve,t as ye}from"./with-site-time-zone-rx7NXQ-3.js";var be,j,xe=t((()=>{be=`_root_sp1nf_1`,j={root:be}}));function M(e,t){let n=e[t];return typeof n==`number`?n:void 0}function N(e,t,n,r){let i=[],a=(e?.data??[]).map(e=>b(e.date_start,t));return(e?.data??[]).forEach((e,t)=>{let o=a[t],s=r?r[t]:o,c=n(e);!s||!o||c===void 0||i.push(r?{date:s,realDate:o,value:c}:{date:s,value:c})}),{points:i,dates:a}}function Se(e){let t=M(e,`views`),n=M(e,`visitors`);return t!==void 0&&n!==void 0&&n>0?t/n:void 0}function Ce(e){return(Array.isArray(e.post_titles)?e.post_titles.length:0)||void 0}function we(e,t,n){return[{label:r(`Views per visitor`,`jetpack-premium-analytics-pkg`),dataFormat:Te,current:N(e.views,t,Se),comparisonReport:n?.views,valueOf:Se},{label:r(`Posts published`,`jetpack-premium-analytics-pkg`),countLabel:Ee,current:N(e.posts,t,Ce),comparisonReport:n?.posts,valueOf:Ce}].filter(e=>e.current.points.length).map(({label:e,dataFormat:n,countLabel:r,current:i,comparisonReport:a,valueOf:o})=>{let s=a?N(a,t,o,i.dates).points:[];return{label:e,dataFormat:n,countLabel:r,data:i.points,previous:s.length?s:void 0}})}var Te,Ee,De=t((()=>{S(),a(),Te={type:`average`},Ee=e=>i(`%s Post published`,`%s Posts published`,e,`jetpack-premium-analytics-pkg`)}));function Oe(){let e=ee()?.site?.wpcom?.blog_id;if(e)try{let t=window.localStorage.getItem(`jetpack_stats_chart_type_${e}`);return t===`bar`||t===`line`?t:void 0}catch{return}}var ke=t((()=>{y()}));function Ae(){return Oe()??`bar`}var je,Me,Ne,P=t((()=>{a(),u(),O(),ke(),je=[`hour`,`day`,`week`,`month`],Me=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`),counterpartId:`views`,counterpartHidden:!0},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Comment`,`%s Comments`,e,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Like`,`%s Likes`,e,`jetpack-premium-analytics-pkg`)}],Ne={icon:s,attributes:[{...ne(),getValue:({item:e})=>e.chartType??Ae()}],example:{attributes:{}}}}));function Pe(e){let t=x(e.from),n=x(e.to);return m(t,f(t))&&m(n,d(n))}function F(e,t,n){return{...e,stat_fields:t,period:n}}function Fe(e,t){let n=t===`hour`,i=n&&Pe(e),a=(0,c.useCallback)(e=>!n||Ie.has(e),[n]),o=(0,c.useMemo)(()=>F(e,n?`views`:`views,visitors`,t),[e,t,n]),s=(0,c.useMemo)(()=>n?F(e,`visitors,likes,comments`,`day`):F(e,`likes,comments,post_titles`,t),[e,t,n]),l=C(o),u=C(s,{enabled:!n||i}),d=l.primary.data,f=l.comparison.data,p=l.hasComparison,m=l.timezone,h=u.primary.data,g=u.comparison.data,_=u.hasComparison,v=u.timezone,ee=l.isError&&!d?.data?.length,y=u.isError&&!h?.data?.length,b=i&&!y,x=(0,c.useMemo)(()=>we({views:d,posts:n?void 0:h},m,p?{views:f,posts:_?g:void 0}:void 0),[d,m,f,p,h,g,_,n]),S=(0,c.useMemo)(()=>Me.map(e=>{let t=e.id===`views`||e.id===`visitors`&&!n,i=e.id===`views`||e.id===`visitors`,o={...te({primary:t?d:h,comparison:t?f:g,hasComparison:t?p:_,field:e.id,label:e.label,countLabel:e.countLabel,zone:t?m:v}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,counterpartHidden:`counterpartHidden`in e?e.counterpartHidden:void 0,tooltipExtras:i&&x.length?x:void 0};if(a(e.id))return o;let s=r(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`);return b?{...o,current:[],previous:void 0,seriesUnavailable:s}:{...o,unavailable:s}}),[a,n,b,x,d,f,p,m,h,g,_,v]),{refetch:w}=l,{refetch:T}=u,E=(0,c.useCallback)(()=>{w(),T()},[w,T]),ne=ee||y&&!n;return{metrics:S,isLoading:l.isLoading||u.isLoading,isFetching:l.isFetching||u.isFetching,isError:ne,refetch:E}}var Ie,Le=t((()=>{E(),S(),l(),a(),p(),De(),P(),O(),Ie=new Set([`views`])}));function Re({chartType:e}){let{reportParams:t}=v(),n=T(t.interval,je),{drillDown:i}=g(),a=(0,ze.useCallback)(e=>i(e,n),[i,n]),{metrics:o,isLoading:s,isFetching:c,isError:l,refetch:u}=Fe(t,n),d=r(`Traffic metric`,`jetpack-premium-analytics-pkg`);return(0,L.jsx)(`div`,{className:j.root,children:(0,L.jsx)(ce,{isLoading:s,isFetching:c,isError:l,isEmpty:!1,error:{description:r(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},renderLoading:(0,L.jsx)(ue,{}),children:(0,L.jsx)(le,{metrics:o,dataFormat:Be,chartType:e,groupLabel:d,tickResolution:n,onDatumClick:a,empty:(0,L.jsx)(re,{})})})})}function I({attributes:e={},setError:t}){return(0,L.jsx)(_,{attributes:e,setError:t,options:{from:`/`},children:(0,L.jsx)(Re,{chartType:e.chartType??Ae()})})}var ze,L,Be,Ve=t((()=>{O(),h(),a(),ze=e(n(),1),xe(),Le(),P(),L=o(),Be={type:`number`,options:{useMultipliers:!0,decimals:0}}})),He,Ue,We,Ge,Ke,qe,Je,Ye=t((()=>{He=`jpa/traffic-chart`,Ue=`Traffic summary`,We=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,Ge={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},Ke=`traffic`,qe=`framed`,Je={name:He,title:Ue,description:We,help:Ge,category:Ke,presentation:qe}}));function R({withComparison:e,chartType:t}){return(0,B.jsx)(I,{attributes:{reportParams:w(e),chartType:t}})}function z(e){return(0,B.jsx)(I,{attributes:{reportParams:w(!1,e)}})}function Xe({withComparison:e,chartType:t,...n}){return(0,B.jsx)(k,{...n,widgetType:H,renderModule:V,renderComponent:I,attributes:{reportParams:w(e),chartType:t}})}var B,V,H,U,W,Ze,G,K,q,J,Y,X,Z,Q,$,Qe;t((()=>{E(),fe(),de(),ie(),me(),ye(),oe(),Ve(),P(),Ye(),B=o(),se(),V=`storybook/traffic-chart`,H=pe(Je,Ne),U={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},W={chartType:`line`},Ze={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:I,tags:[`autodocs`],decorators:[ae,ve],argTypes:{..._e,withComparison:{control:`boolean`},...U},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range, comparison, and bucket size come from the dashboard controls: the bucket is whatever the page's interval control resolves to, clamped to one the chart can draw. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; at the hourly grain the second request asks for visitors, likes, and comments in daily buckets, so their cards still show the day totals (skipped for a window that does not cover whole days, such as `Last 24 hours`). Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},G={render:R,args:{withComparison:!1,...W},decorators:[A]},K={render:R,args:{withComparison:!0,...W},decorators:[A]},q={render:R,args:{withComparison:!1,...W,chartType:`bar`},decorators:[A]},J={render:R,args:{withComparison:!0,...W,chartType:`bar`},decorators:[A]},Y={render:e=>(0,B.jsx)(k,{...e,widgetType:H,renderModule:V,renderComponent:I,attributes:{reportParams:w(!1,`last-24-hours`)}}),args:{...ge},argTypes:{...he}},X={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[A],beforeEach:()=>(D(`stats/visits`,`loading`),()=>D(`stats/visits`,null))},Z={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[A],beforeEach:()=>(D(`stats/visits`,`error`),()=>D(`stats/visits`,null))},Q={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[A],beforeEach:()=>(D(`stats/visits`,`empty`),()=>D(`stats/visits`,null))},$={render:e=>(0,B.jsx)(Xe,{...e}),args:{...ge,withComparison:!0,...W},argTypes:{...he,withComparison:{control:`boolean`},...U}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}},Qe=[`Default`,`WithComparison`,`BarChart`,`BarChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as BarChart,J as BarChartWithComparison,G as Default,Q as Empty,Z as Error,Y as Hourly,X as Loading,$ as WidgetDashboardWithWidget,K as WithComparison,Qe as __namedExportsOrder,Ze as default};