import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,r as i,t as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{C as s,Vu as c,ku as l,t as u}from"./build-module-DNhkEVJn.js";import{It as d,hn as f,t as p,z as m}from"./date-fns-I6jayRk5.js";import{Xa as h,qa as g}from"./iframe-C6sdA25M.js";import{g as _,m as v,p as y,t as b,u as x}from"./src-ClJ6D7Xj.js";import{J as ee,Ln as S,fn as C,r as w,t as T}from"./src-ByGJk8Gp.js";import{Ct as te,Z as ne,_ as re,x as ie,yt as ae}from"./charts-provider-CJog4E7r.js";import{t as oe}from"./chart-empty-state-BwKrpimF.js";import{n as se,r as ce}from"./with-story-router-Beljd9ki.js";import{n as le,r as ue,s as E}from"./register-report-mocks-AxM45C0w.js";import{t as de}from"./widget-state-DdDpx9ou.js";import{r as fe,t as pe}from"./metric-tabs-chart-skeleton-CaALC1Up.js";import{t as D}from"./src-CaWYvifl.js";import{a as me,d as he,f as ge,i as _e,n as ve,p as ye,r as O,u as be}from"./with-widget-canvas-CcJbLZqo.js";import{n as xe,r as Se,t as Ce}from"./with-site-time-zone-rx7NXQ-3.js";import{n as we,t as Te}from"./with-story-period-host-B_e7M-09.js";var k,A,Ee=t((()=>{k=`_root_sp1nf_1`,A={root:k}}));function De(e,t){let n=e[t];return typeof n==`number`?n:void 0}function j(e,t,n,r){let i=[],a=(e?.data??[]).map(e=>_(e.date_start,t));return(e?.data??[]).forEach((e,t)=>{let o=a[t],s=r?r[t]:o,c=n(e);!s||!o||c===void 0||i.push(r?{date:s,realDate:o,value:c}:{date:s,value:c})}),{points:i,dates:a}}function Oe(e){let t=De(e,`views`),n=De(e,`visitors`);return t!==void 0&&n!==void 0&&n>0?t/n:void 0}function ke(e){return(Array.isArray(e.post_titles)?e.post_titles.length:0)||void 0}function Ae(e,t,n){return[{label:r(`Views per visitor`,`jetpack-premium-analytics-pkg`),dataFormat:je,current:j(e.views,t,Oe),comparisonReport:n?.views,valueOf:Oe},{label:r(`Posts published`,`jetpack-premium-analytics-pkg`),countLabel:Me,current:j(e.posts,t,ke),comparisonReport:n?.posts,valueOf:ke}].filter(e=>e.current.points.length).map(({label:e,dataFormat:n,countLabel:r,current:i,comparisonReport:a,valueOf:o})=>{let s=a?j(a,t,o,i.dates).points:[];return{label:e,dataFormat:n,countLabel:r,data:i.points,previous:s.length?s:void 0}})}var je,Me,Ne=t((()=>{b(),a(),je={type:`average`},Me=e=>i(`%s Post published`,`%s Posts published`,e,`jetpack-premium-analytics-pkg`)}));function Pe(){let e=h()?.site?.wpcom?.blog_id;if(e)try{let t=window.localStorage.getItem(`jetpack_stats_chart_type_${e}`);return t===`bar`||t===`line`?t:void 0}catch{return}}var Fe=t((()=>{g()}));function Ie(){return Pe()??`bar`}var Le,Re,ze,M=t((()=>{a(),u(),D(),Fe(),Le=[`hour`,`day`,`week`,`month`],Re=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`),counterpartId:`views`,counterpartHidden:!0},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Comment`,`%s Comments`,e,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Like`,`%s Likes`,e,`jetpack-premium-analytics-pkg`)}],ze={icon:s,attributes:[{...ae(),getValue:({item:e})=>e.chartType??Ie()}],example:{attributes:{}}}}));function Be(e){let t=y(e.from),n=y(e.to);return m(t,f(t))&&m(n,d(n))}function N(e,t,n){return{...e,stat_fields:t,period:n}}function Ve(e,t){let n=t===`hour`,i=n&&Be(e),a=(0,c.useCallback)(e=>!n||He.has(e),[n]),o=(0,c.useMemo)(()=>N(e,n?`views`:`views,visitors`,t),[e,t,n]),s=(0,c.useMemo)(()=>n?N(e,`visitors,likes,comments`,`day`):N(e,`likes,comments,post_titles`,t),[e,t,n]),l=ee(o),u=ee(s,{enabled:!n||i}),d=l.primary.data,f=l.comparison.data,p=l.hasComparison,m=l.timezone,h=u.primary.data,g=u.comparison.data,_=u.hasComparison,v=u.timezone,y=l.isError&&!d?.data?.length,b=u.isError&&!h?.data?.length,x=i&&!b,S=(0,c.useMemo)(()=>Ae({views:d,posts:n?void 0:h},m,p?{views:f,posts:_?g:void 0}:void 0),[d,m,f,p,h,g,_,n]),C=(0,c.useMemo)(()=>Re.map(e=>{let t=e.id===`views`||e.id===`visitors`&&!n,i=e.id===`views`||e.id===`visitors`,o={...te({primary:t?d:h,comparison:t?f:g,hasComparison:t?p:_,field:e.id,label:e.label,countLabel:e.countLabel,zone:t?m:v}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,counterpartHidden:`counterpartHidden`in e?e.counterpartHidden:void 0,tooltipExtras:i&&S.length?S:void 0};if(a(e.id))return o;let s=r(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`);return x?{...o,current:[],previous:void 0,seriesUnavailable:s}:{...o,unavailable:s}}),[a,n,x,S,d,f,p,m,h,g,_,v]),{refetch:w}=l,{refetch:T}=u,ne=(0,c.useCallback)(()=>{w(),T()},[w,T]),re=y||b&&!n;return{metrics:C,isLoading:l.isLoading||u.isLoading,isFetching:l.isFetching||u.isFetching,isError:re,refetch:ne}}var He,Ue=t((()=>{T(),b(),l(),a(),p(),Ne(),M(),D(),He=new Set([`views`])}));function We({chartType:e}){let{reportParams:t}=ie(),n=w(t.interval,Le),{openPeriod:i}=S(),a=(0,Ge.useMemo)(()=>{if(!i)return;let e={from:x(t.from),to:x(t.to)};return t=>{let r=ne(t,n,e,{timeZone:v()});r&&i(r)}},[i,n,t.from,t.to]),{metrics:o,isLoading:s,isFetching:c,isError:l,refetch:u}=Ve(t,n),d=r(`Traffic metric`,`jetpack-premium-analytics-pkg`);return(0,F.jsx)(`div`,{className:A.root,children:(0,F.jsx)(de,{isLoading:s,isFetching:c,isError:l,isEmpty:!1,error:{description:r(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},renderLoading:(0,F.jsx)(pe,{}),children:(0,F.jsx)(fe,{metrics:o,dataFormat:Ke,chartType:e,groupLabel:d,tickResolution:n,onDatumClick:a,empty:(0,F.jsx)(oe,{})})})})}function P({attributes:e={},setError:t}){return(0,F.jsx)(re,{attributes:e,setError:t,options:{from:`/`},children:(0,F.jsx)(We,{chartType:e.chartType??Ie()})})}var Ge,F,Ke,qe=t((()=>{T(),b(),D(),a(),Ge=e(n(),1),Ee(),Ue(),M(),F=o(),Ke={type:`number`,options:{useMultipliers:!0,decimals:0}}})),Je,Ye,Xe,Ze,Qe,$e,et,tt=t((()=>{Je=`jpa/traffic-chart`,Ye=`Traffic summary`,Xe=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,Ze={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},Qe=`traffic`,$e=`framed`,et={name:Je,title:Ye,description:Xe,help:Ze,category:Qe,presentation:$e}}));function I({withComparison:e,chartType:t}){return(0,R.jsx)(P,{attributes:{reportParams:C(e),chartType:t}})}function L(e){return(0,R.jsx)(P,{attributes:{reportParams:C(!1,e)}})}function nt({withComparison:e,chartType:t,...n}){return(0,R.jsx)(he,{...n,widgetType:B,renderModule:z,renderComponent:P,attributes:{reportParams:C(e),chartType:t}})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{T(),ge(),me(),Te(),se(),ve(),Ce(),le(),qe(),M(),tt(),R=o(),ue(),z=`storybook/traffic-chart`,B=_e(et,ze),V={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},H={chartType:`line`},U={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:P,tags:[`autodocs`],decorators:[we,ce,Se],argTypes:{...xe,withComparison:{control:`boolean`},...V},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range, comparison, and bucket size come from the dashboard controls: the bucket is whatever the page's interval control resolves to, clamped to one the chart can draw. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; at the hourly grain the second request asks for visitors, likes, and comments in daily buckets, so their cards still show the day totals (skipped for a window that does not cover whole days, such as `Last 24 hours`). Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},W={render:I,args:{withComparison:!1,...H},decorators:[O]},G={render:I,args:{withComparison:!0,...H},decorators:[O]},K={render:I,args:{withComparison:!1,...H,chartType:`bar`},decorators:[O]},q={render:I,args:{withComparison:!0,...H,chartType:`bar`},decorators:[O]},J={render:e=>(0,R.jsx)(he,{...e,widgetType:B,renderModule:z,renderComponent:P,attributes:{reportParams:C(!1,`last-24-hours`)}}),args:{...be},argTypes:{...ye}},Y={render:()=>L(`last-90-days`),tags:[`!autodocs`],decorators:[O],beforeEach:()=>(E(`stats/visits`,`loading`),()=>E(`stats/visits`,null))},X={render:()=>L(`last-7-days`),tags:[`!autodocs`],decorators:[O],beforeEach:()=>(E(`stats/visits`,`error`),()=>E(`stats/visits`,null))},Z={render:()=>L(`last-365-days`),tags:[`!autodocs`],decorators:[O],beforeEach:()=>(E(`stats/visits`,`empty`),()=>E(`stats/visits`,null))},Q={render:e=>(0,R.jsx)(nt,{...e}),args:{...be,withComparison:!0,...H},argTypes:{...ye,withComparison:{control:`boolean`},...V}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`BarChart`,`BarChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as BarChart,q as BarChartWithComparison,W as Default,Z as Empty,X as Error,J as Hourly,Y as Loading,Q as WidgetDashboardWithWidget,G as WithComparison,$ as __namedExportsOrder,U as default};