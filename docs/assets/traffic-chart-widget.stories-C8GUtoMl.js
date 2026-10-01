import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,r as i,t as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{C as s,Vu as c,ku as l,t as u}from"./build-module-DNhkEVJn.js";import{It as d,hn as f,t as p,z as m}from"./date-fns-I6jayRk5.js";import{C as h,D as g,m as _,v}from"./hooks-DmSxTkvR.js";import{Qa as ee,Ya as y}from"./iframe-BsELnrVi.js";import{p as b,t as te}from"./src-ClJ6D7Xj.js";import{I as ne,nn as x,r as S,t as C}from"./src-rY3OM8p9.js";import{A as re,P as ie}from"./helpers-CThlcEEw.js";import{t as ae}from"./chart-empty-state-Bo0Z5VN4.js";import{n as oe,r as se}from"./with-story-router-d_31B45i.js";import{n as ce,r as le,s as w}from"./register-report-mocks-DT1y2r46.js";import{t as ue}from"./widget-state-B4khR5iQ.js";import{r as de,t as fe}from"./metric-tabs-chart-skeleton-B7fBDOey.js";import{t as T}from"./src-DYzM8wxj.js";import{a as pe,d as me,f as he,i as ge,n as _e,p as ve,r as E,u as ye}from"./with-widget-canvas-DTf_mrE7.js";import{n as be,r as xe,t as Se}from"./with-site-time-zone-rx7NXQ-3.js";var D,O,Ce=t((()=>{D=`_root_sp1nf_1`,O={root:D}}));function we(){let e=ee()?.site?.wpcom?.blog_id;if(e)try{let t=window.localStorage.getItem(`jetpack_stats_chart_type_${e}`);return t===`bar`||t===`line`?t:void 0}catch{return}}var Te=t((()=>{y()}));function k(){return we()??`bar`}var A,j,Ee,M=t((()=>{a(),u(),T(),Te(),A=[`hour`,`day`,`week`,`month`],j=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`),counterpartId:`views`,counterpartHidden:!0},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Comment`,`%s Comments`,e,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Like`,`%s Likes`,e,`jetpack-premium-analytics-pkg`)}],Ee={icon:s,attributes:[{...re(),getValue:({item:e})=>e.chartType??k()}],example:{attributes:{}}}}));function De(e){let t=b(e.from),n=b(e.to);return m(t,f(t))&&m(n,d(n))}function N(e,t,n){return{...e,stat_fields:t,period:n}}function Oe(e,t){let n=t===`hour`,i=n&&De(e),a=(0,c.useCallback)(e=>!n||ke.has(e),[n]),o=(0,c.useMemo)(()=>N(e,n?`views`:`views,visitors`,t),[e,t,n]),s=(0,c.useMemo)(()=>n?N(e,`visitors,likes,comments`,`day`):N(e,`likes,comments`,t),[e,t,n]),l=ne(o),u=ne(s,{enabled:!n||i}),d=l.primary.data,f=l.comparison.data,p=l.hasComparison,m=l.timezone,h=u.primary.data,g=u.comparison.data,_=u.hasComparison,v=u.timezone,ee=l.isError&&!d?.data?.length,y=u.isError&&!h?.data?.length,b=i&&!y,te=(0,c.useMemo)(()=>j.map(e=>{let t=e.id===`views`||e.id===`visitors`&&!n,i={...ie({primary:t?d:h,comparison:t?f:g,hasComparison:t?p:_,field:e.id,label:e.label,countLabel:e.countLabel,zone:t?m:v}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,counterpartHidden:`counterpartHidden`in e?e.counterpartHidden:void 0};if(a(e.id))return i;let o=r(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`);return b?{...i,current:[],previous:void 0,seriesUnavailable:o}:{...i,unavailable:o}}),[a,n,b,d,f,p,m,h,g,_,v]),{refetch:x}=l,{refetch:S}=u,C=(0,c.useCallback)(()=>{x(),S()},[x,S]),re=ee||y&&!n;return{metrics:te,isLoading:l.isLoading||u.isLoading,isFetching:l.isFetching||u.isFetching,isError:re,refetch:C}}var ke,Ae=t((()=>{C(),te(),l(),a(),p(),M(),T(),ke=new Set([`views`])}));function je({chartType:e}){let{reportParams:t}=v(),n=S(t.interval,A),{drillDown:i}=g(),a=(0,Me.useCallback)(e=>i(e,n),[i,n]),{metrics:o,isLoading:s,isFetching:c,isError:l,refetch:u}=Oe(t,n),d=r(`Traffic metric`,`jetpack-premium-analytics-pkg`);return(0,F.jsx)(`div`,{className:O.root,children:(0,F.jsx)(ue,{isLoading:s,isFetching:c,isError:l,isEmpty:!1,error:{description:r(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},renderLoading:(0,F.jsx)(fe,{}),children:(0,F.jsx)(de,{metrics:o,dataFormat:Ne,chartType:e,groupLabel:d,tickResolution:n,onDatumClick:a,empty:(0,F.jsx)(ae,{})})})})}function P({attributes:e={},setError:t}){return(0,F.jsx)(_,{attributes:e,setError:t,options:{from:`/`},children:(0,F.jsx)(je,{chartType:e.chartType??k()})})}var Me,F,Ne,Pe=t((()=>{T(),h(),a(),Me=e(n(),1),Ce(),Ae(),M(),F=o(),Ne={type:`number`,options:{useMultipliers:!0,decimals:0}}})),I,Fe,Ie,Le,Re,ze,Be,Ve=t((()=>{I=`jpa/traffic-chart`,Fe=`Traffic summary`,Ie=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,Le={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},Re=`traffic`,ze=`framed`,Be={name:I,title:Fe,description:Ie,help:Le,category:Re,presentation:ze}}));function L({withComparison:e,chartType:t}){return(0,z.jsx)(P,{attributes:{reportParams:x(e),chartType:t}})}function R(e){return(0,z.jsx)(P,{attributes:{reportParams:x(!1,e)}})}function He({withComparison:e,chartType:t,...n}){return(0,z.jsx)(me,{...n,widgetType:V,renderModule:B,renderComponent:P,attributes:{reportParams:x(e),chartType:t}})}var z,B,V,H,U,Ue,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{C(),he(),pe(),oe(),_e(),Se(),ce(),Pe(),M(),Ve(),z=o(),le(),B=`storybook/traffic-chart`,V=ge(Be,Ee),H={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},U={chartType:`line`},Ue={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:P,tags:[`autodocs`],decorators:[se,xe],argTypes:{...be,withComparison:{control:`boolean`},...H},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range, comparison, and bucket size come from the dashboard controls: the bucket is whatever the page's interval control resolves to, clamped to one the chart can draw. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; at the hourly grain the second request asks for visitors, likes, and comments in daily buckets, so their cards still show the day totals (skipped for a window that does not cover whole days, such as `Last 24 hours`). Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},W={render:L,args:{withComparison:!1,...U},decorators:[E]},G={render:L,args:{withComparison:!0,...U},decorators:[E]},K={render:L,args:{withComparison:!1,...U,chartType:`bar`},decorators:[E]},q={render:L,args:{withComparison:!0,...U,chartType:`bar`},decorators:[E]},J={render:e=>(0,z.jsx)(me,{...e,widgetType:V,renderModule:B,renderComponent:P,attributes:{reportParams:x(!1,`last-24-hours`)}}),args:{...ye},argTypes:{...ve}},Y={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>(w(`stats/visits`,`loading`),()=>w(`stats/visits`,null))},X={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>(w(`stats/visits`,`error`),()=>w(`stats/visits`,null))},Z={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>(w(`stats/visits`,`empty`),()=>w(`stats/visits`,null))},Q={render:e=>(0,z.jsx)(He,{...e}),args:{...ye,withComparison:!0,...U},argTypes:{...ve,withComparison:{control:`boolean`},...H}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:"An hourly range (`Last 24 hours`), where the page's interval control resolves\nto `hour`. `stats/visits` fills Views alone at that grain, so the other three\ntabs show a placeholder and, when selected, the reason — rather than a `0`\nthey cannot back up. The likes and comments request is skipped entirely.\n\nMounted through the dashboard harness rather than the close-up canvas: hour\nticks are the point of the story, and the canvas is too narrow to draw an\naxis at all.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
    return () => setReportMockState('stats/visits', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no points: the tabs stay at zero and the plot shows the
no-results message in place of a flat line.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`BarChart`,`BarChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as BarChart,q as BarChartWithComparison,W as Default,Z as Empty,X as Error,J as Hourly,Y as Loading,Q as WidgetDashboardWithWidget,G as WithComparison,$ as __namedExportsOrder,Ue as default};