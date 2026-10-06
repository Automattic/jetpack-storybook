import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,r as i,t as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{C as s,Vu as c,ku as l,t as u}from"./build-module-DNhkEVJn.js";import{It as d,hn as f,t as p,z as m}from"./date-fns-I6jayRk5.js";import{m as h,v as g}from"./hooks-H2YJR3XP.js";import{Xa as _,qa as v}from"./iframe-D7FztoCz.js";import{g as ee,m as y,p as b,t as x,u as S}from"./src-ClJ6D7Xj.js";import{J as te,Ln as C,fn as w,r as ne,t as T}from"./src-BcWXjvol.js";import{L as re,N as ie,d as ae}from"./helpers-DbUsf4uI.js";import{t as oe}from"./chart-empty-state-DOJAbjF1.js";import{n as se,r as ce}from"./with-story-router-BwyQ0vy2.js";import{n as le,r as ue,s as E}from"./register-report-mocks-e7cVqHDo.js";import{t as de}from"./widget-state-CXzmrrd7.js";import{r as fe,t as pe}from"./metric-tabs-chart-skeleton-CZ-qd7kP.js";import{t as D}from"./src-CyrW0w-t.js";import{a as me,d as he,f as ge,i as _e,n as ve,p as ye,r as O,u as be}from"./with-widget-canvas-oSVceFUR.js";import{n as xe,r as Se,t as Ce}from"./with-site-time-zone-rx7NXQ-3.js";import{n as we,t as Te}from"./with-story-period-host-CNnd3hYJ.js";var Ee,De,Oe=t((()=>{Ee=`_root_sp1nf_1`,De={root:Ee}}));function ke(e,t){let n=e[t];return typeof n==`number`?n:void 0}function k(e,t,n,r){let i=[],a=(e?.data??[]).map(e=>ee(e.date_start,t));return(e?.data??[]).forEach((e,t)=>{let o=a[t],s=r?r[t]:o,c=n(e);!s||!o||c===void 0||i.push(r?{date:s,realDate:o,value:c}:{date:s,value:c})}),{points:i,dates:a}}function Ae(e){let t=ke(e,`views`),n=ke(e,`visitors`);return t!==void 0&&n!==void 0&&n>0?t/n:void 0}function je(e){return(Array.isArray(e.post_titles)?e.post_titles.length:0)||void 0}function Me(e,t,n){return[{label:r(`Views per visitor`,`jetpack-premium-analytics-pkg`),dataFormat:A,current:k(e.views,t,Ae),comparisonReport:n?.views,valueOf:Ae},{label:r(`Posts published`,`jetpack-premium-analytics-pkg`),countLabel:j,current:k(e.posts,t,je),comparisonReport:n?.posts,valueOf:je}].filter(e=>e.current.points.length).map(({label:e,dataFormat:n,countLabel:r,current:i,comparisonReport:a,valueOf:o})=>{let s=a?k(a,t,o,i.dates).points:[];return{label:e,dataFormat:n,countLabel:r,data:i.points,previous:s.length?s:void 0}})}var A,j,Ne=t((()=>{x(),a(),A={type:`average`},j=e=>i(`%s Post published`,`%s Posts published`,e,`jetpack-premium-analytics-pkg`)}));function Pe(){let e=_()?.site?.wpcom?.blog_id;if(e)try{let t=window.localStorage.getItem(`jetpack_stats_chart_type_${e}`);return t===`bar`||t===`line`?t:void 0}catch{return}}var Fe=t((()=>{v()}));function M(){return Pe()??`bar`}var Ie,Le,Re,N=t((()=>{a(),u(),D(),Fe(),Ie=[`hour`,`day`,`week`,`month`],Le=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`),counterpartId:`views`,counterpartHidden:!0},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Comment`,`%s Comments`,e,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Like`,`%s Likes`,e,`jetpack-premium-analytics-pkg`)}],Re={icon:s,attributes:[{...ie(),getValue:({item:e})=>e.chartType??M()}],example:{attributes:{}}}}));function ze(e){let t=b(e.from),n=b(e.to);return m(t,f(t))&&m(n,d(n))}function P(e,t,n){return{...e,stat_fields:t,period:n}}function Be(e,t){let n=t===`hour`,i=n&&ze(e),a=(0,c.useCallback)(e=>!n||F.has(e),[n]),o=(0,c.useMemo)(()=>P(e,n?`views`:`views,visitors`,t),[e,t,n]),s=(0,c.useMemo)(()=>n?P(e,`visitors,likes,comments`,`day`):P(e,`likes,comments,post_titles`,t),[e,t,n]),l=te(o),u=te(s,{enabled:!n||i}),d=l.primary.data,f=l.comparison.data,p=l.hasComparison,m=l.timezone,h=u.primary.data,g=u.comparison.data,_=u.hasComparison,v=u.timezone,ee=l.isError&&!d?.data?.length,y=u.isError&&!h?.data?.length,b=i&&!y,x=(0,c.useMemo)(()=>Me({views:d,posts:n?void 0:h},m,p?{views:f,posts:_?g:void 0}:void 0),[d,m,f,p,h,g,_,n]),S=(0,c.useMemo)(()=>Le.map(e=>{let t=e.id===`views`||e.id===`visitors`&&!n,i=e.id===`views`||e.id===`visitors`,o={...re({primary:t?d:h,comparison:t?f:g,hasComparison:t?p:_,field:e.id,label:e.label,countLabel:e.countLabel,zone:t?m:v}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,counterpartHidden:`counterpartHidden`in e?e.counterpartHidden:void 0,tooltipExtras:i&&x.length?x:void 0};if(a(e.id))return o;let s=r(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`);return b?{...o,current:[],previous:void 0,seriesUnavailable:s}:{...o,unavailable:s}}),[a,n,b,x,d,f,p,m,h,g,_,v]),{refetch:C}=l,{refetch:w}=u,ne=(0,c.useCallback)(()=>{C(),w()},[C,w]),T=ee||y&&!n;return{metrics:S,isLoading:l.isLoading||u.isLoading,isFetching:l.isFetching||u.isFetching,isError:T,refetch:ne}}var F,Ve=t((()=>{T(),x(),l(),a(),p(),Ne(),N(),D(),F=new Set([`views`])}));function He({chartType:e}){let{reportParams:t}=g(),n=ne(t.interval,Ie),{openPeriod:i}=C(),a=(0,Ue.useMemo)(()=>{if(!i)return;let e={from:S(t.from),to:S(t.to)};return t=>{let r=ae(t,n,e,{timeZone:y()});r&&i(r)}},[i,n,t.from,t.to]),{metrics:o,isLoading:s,isFetching:c,isError:l,refetch:u}=Be(t,n),d=r(`Traffic metric`,`jetpack-premium-analytics-pkg`);return(0,L.jsx)(`div`,{className:De.root,children:(0,L.jsx)(de,{isLoading:s,isFetching:c,isError:l,isEmpty:!1,error:{description:r(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},renderLoading:(0,L.jsx)(pe,{}),children:(0,L.jsx)(fe,{metrics:o,dataFormat:We,chartType:e,groupLabel:d,tickResolution:n,onDatumClick:a,empty:(0,L.jsx)(oe,{})})})})}function I({attributes:e={},setError:t}){return(0,L.jsx)(h,{attributes:e,setError:t,options:{from:`/`},children:(0,L.jsx)(He,{chartType:e.chartType??M()})})}var Ue,L,We,Ge=t((()=>{T(),x(),D(),a(),Ue=e(n(),1),Oe(),Ve(),N(),L=o(),We={type:`number`,options:{useMultipliers:!0,decimals:0}}})),Ke,qe,Je,Ye,Xe,Ze,Qe,$e=t((()=>{Ke=`jpa/traffic-chart`,qe=`Traffic summary`,Je=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,Ye={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},Xe=`traffic`,Ze=`framed`,Qe={name:Ke,title:qe,description:Je,help:Ye,category:Xe,presentation:Ze}}));function R({withComparison:e,chartType:t}){return(0,B.jsx)(I,{attributes:{reportParams:w(e),chartType:t}})}function z(e){return(0,B.jsx)(I,{attributes:{reportParams:w(!1,e)}})}function et({withComparison:e,chartType:t,...n}){return(0,B.jsx)(he,{...n,widgetType:H,renderModule:V,renderComponent:I,attributes:{reportParams:w(e),chartType:t}})}var B,V,H,U,W,tt,G,K,q,J,Y,X,Z,Q,$,nt;t((()=>{T(),ge(),me(),Te(),se(),ve(),Ce(),le(),Ge(),N(),$e(),B=o(),ue(),V=`storybook/traffic-chart`,H=_e(Qe,Re),U={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},W={chartType:`line`},tt={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:I,tags:[`autodocs`],decorators:[we,ce,Se],argTypes:{...xe,withComparison:{control:`boolean`},...U},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range, comparison, and bucket size come from the dashboard controls: the bucket is whatever the page's interval control resolves to, clamped to one the chart can draw. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; at the hourly grain the second request asks for visitors, likes, and comments in daily buckets, so their cards still show the day totals (skipped for a window that does not cover whole days, such as `Last 24 hours`). Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},G={render:R,args:{withComparison:!1,...W},decorators:[O]},K={render:R,args:{withComparison:!0,...W},decorators:[O]},q={render:R,args:{withComparison:!1,...W,chartType:`bar`},decorators:[O]},J={render:R,args:{withComparison:!0,...W,chartType:`bar`},decorators:[O]},Y={render:e=>(0,B.jsx)(he,{...e,widgetType:H,renderModule:V,renderComponent:I,attributes:{reportParams:w(!1,`last-24-hours`)}}),args:{...be},argTypes:{...ye}},X={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[O],beforeEach:()=>(E(`stats/visits`,`loading`),()=>E(`stats/visits`,null))},Z={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[O],beforeEach:()=>(E(`stats/visits`,`error`),()=>E(`stats/visits`,null))},Q={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[O],beforeEach:()=>(E(`stats/visits`,`empty`),()=>E(`stats/visits`,null))},$={render:e=>(0,B.jsx)(et,{...e}),args:{...be,withComparison:!0,...W},argTypes:{...ye,withComparison:{control:`boolean`},...U}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}},nt=[`Default`,`WithComparison`,`BarChart`,`BarChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as BarChart,J as BarChartWithComparison,G as Default,Q as Empty,Z as Error,Y as Hourly,X as Loading,$ as WidgetDashboardWithWidget,K as WithComparison,nt as __namedExportsOrder,tt as default};