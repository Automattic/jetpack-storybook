import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,r as i,t as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{C as s,Vu as c,ku as l,t as u}from"./build-module-DNhkEVJn.js";import{It as d,hn as f,t as p,z as m}from"./date-fns-I6jayRk5.js";import{C as h,D as g,m as _,v}from"./hooks-DixJOf9J.js";import{p as y,t as b}from"./src-BNPYbbO9.js";import{$t as x,N as ee,r as te,t as S}from"./src-DES8CnM5.js";import{A as C,P as ne}from"./helpers-CCY6tOQs.js";import{t as w}from"./chart-empty-state-DTyZSh40.js";import{r as re,t as ie}from"./metric-tabs-chart-skeleton-ZjJcy60L.js";import{n as ae,r as oe,s as T}from"./register-report-mocks-DyOXJnpZ.js";import{t as se}from"./widget-state-qoYlpJmH.js";import{t as E}from"./src-CHE6WCpb.js";import{a as ce,d as D,f as le,h as ue,i as de,m as fe,n as pe,p as me,r as O,u as he}from"./with-widget-canvas-C6Gfwx_G.js";import{n as ge,r as _e,t as ve}from"./with-site-time-zone-ngtW_VDw.js";var ye,k,be=t((()=>{ye=`_root_sp1nf_1`,k={root:ye}})),A,j,M,N=t((()=>{a(),u(),E(),A=[`hour`,`day`,`week`,`month`],j=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`),counterpartId:`views`,counterpartHidden:!0},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Comment`,`%s Comments`,e,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Like`,`%s Likes`,e,`jetpack-premium-analytics-pkg`)}],M={icon:s,attributes:[C()],example:{attributes:{chartType:`line`}}}}));function xe(e){let t=y(e.from),n=y(e.to);return m(t,f(t))&&m(n,d(n))}function P(e,t,n){return{...e,stat_fields:t,period:n}}function Se(e,t){let n=t===`hour`,i=n&&xe(e),a=(0,c.useCallback)(e=>!n||F.has(e),[n]),o=(0,c.useMemo)(()=>P(e,n?`views`:`views,visitors`,t),[e,t,n]),s=(0,c.useMemo)(()=>n?P(e,`visitors,likes,comments`,`day`):P(e,`likes,comments`,t),[e,t,n]),l=ee(o),u=ee(s,{enabled:!n||i}),d=l.primary.data,f=l.comparison.data,p=l.hasComparison,m=l.timezone,h=u.primary.data,g=u.comparison.data,_=u.hasComparison,v=u.timezone,y=l.isError&&!d?.data?.length,b=u.isError&&!h?.data?.length,x=i&&!b,te=(0,c.useMemo)(()=>j.map(e=>{let t=e.id===`views`||e.id===`visitors`&&!n,i={...ne({primary:t?d:h,comparison:t?f:g,hasComparison:t?p:_,field:e.id,label:e.label,countLabel:e.countLabel,zone:t?m:v}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,counterpartHidden:`counterpartHidden`in e?e.counterpartHidden:void 0};if(a(e.id))return i;let o=r(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`);return x?{...i,current:[],previous:void 0,seriesUnavailable:o}:{...i,unavailable:o}}),[a,n,x,d,f,p,m,h,g,_,v]),{refetch:S}=l,{refetch:C}=u,w=(0,c.useCallback)(()=>{S(),C()},[S,C]),re=y||b&&!n;return{metrics:te,isLoading:l.isLoading||u.isLoading,isFetching:l.isFetching||u.isFetching,isError:re,refetch:w}}var F,Ce=t((()=>{S(),b(),l(),a(),p(),N(),E(),F=new Set([`views`])}));function we({chartType:e}){let{reportParams:t}=v(),n=te(t.interval,A),{drillDown:i}=g(),a=(0,Te.useCallback)(e=>i(e,n),[i,n]),{metrics:o,isLoading:s,isFetching:c,isError:l,refetch:u}=Se(t,n),d=r(`Traffic metric`,`jetpack-premium-analytics-pkg`);return(0,L.jsx)(`div`,{className:k.root,children:(0,L.jsx)(se,{isLoading:s,isFetching:c,isError:l,isEmpty:!1,error:{description:r(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},renderLoading:(0,L.jsx)(ie,{}),children:(0,L.jsx)(re,{metrics:o,dataFormat:Ee,chartType:e,groupLabel:d,tickResolution:n,onDatumClick:a,empty:(0,L.jsx)(w,{})})})})}function I({attributes:e={},setError:t}){return(0,L.jsx)(_,{attributes:e,setError:t,options:{from:`/`},children:(0,L.jsx)(we,{chartType:e.chartType})})}var Te,L,Ee,De=t((()=>{E(),h(),a(),Te=e(n(),1),be(),Ce(),N(),L=o(),Ee={type:`number`,options:{useMultipliers:!0,decimals:0}}})),Oe,ke,Ae,je,Me,Ne,Pe,Fe=t((()=>{Oe=`jpa/traffic-chart`,ke=`Traffic summary`,Ae=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,je={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},Me=`traffic`,Ne=`framed`,Pe={name:Oe,title:ke,description:Ae,help:je,category:Me,presentation:Ne}}));function R({withComparison:e,chartType:t}){return(0,B.jsx)(I,{attributes:{reportParams:x(e),chartType:t}})}function z(e){return(0,B.jsx)(I,{attributes:{reportParams:x(!1,e)}})}function Ie({withComparison:e,chartType:t,...n}){return(0,B.jsx)(D,{...n,widgetType:H,renderModule:V,renderComponent:I,attributes:{reportParams:x(e),chartType:t}})}var B,V,H,U,W,Le,G,K,q,J,Y,X,Z,Q,$,Re;t((()=>{S(),le(),ce(),fe(),pe(),ve(),ae(),De(),N(),Fe(),B=o(),oe(),V=`storybook/traffic-chart`,H=de(Pe,M),U={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},W={chartType:`line`},Le={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:I,tags:[`autodocs`],decorators:[ue,_e],argTypes:{...ge,withComparison:{control:`boolean`},...U},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range, comparison, and bucket size come from the dashboard controls: the bucket is whatever the page's interval control resolves to, clamped to one the chart can draw. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; at the hourly grain the second request asks for visitors, likes, and comments in daily buckets, so their cards still show the day totals (skipped for a window that does not cover whole days, such as `Last 24 hours`). Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},G={render:R,args:{withComparison:!1,...W},decorators:[O]},K={render:R,args:{withComparison:!0,...W},decorators:[O]},q={render:R,args:{withComparison:!1,...W,chartType:`bar`},decorators:[O]},J={render:R,args:{withComparison:!0,...W,chartType:`bar`},decorators:[O]},Y={render:e=>(0,B.jsx)(D,{...e,widgetType:H,renderModule:V,renderComponent:I,attributes:{reportParams:x(!1,`last-24-hours`)}}),args:{...he},argTypes:{...me}},X={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[O],beforeEach:()=>(T(`stats/visits`,`loading`),()=>T(`stats/visits`,null))},Z={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[O],beforeEach:()=>(T(`stats/visits`,`error`),()=>T(`stats/visits`,null))},Q={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[O],beforeEach:()=>(T(`stats/visits`,`empty`),()=>T(`stats/visits`,null))},$={render:e=>(0,B.jsx)(Ie,{...e}),args:{...he,withComparison:!0,...W},argTypes:{...me,withComparison:{control:`boolean`},...U}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}},Re=[`Default`,`WithComparison`,`BarChart`,`BarChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as BarChart,J as BarChartWithComparison,G as Default,Q as Empty,Z as Error,Y as Hourly,X as Loading,$ as WidgetDashboardWithWidget,K as WithComparison,Re as __namedExportsOrder,Le as default};