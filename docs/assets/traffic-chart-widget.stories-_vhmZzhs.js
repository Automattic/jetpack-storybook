import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,r as i,t as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{C as s,Vu as c,ku as l,t as u}from"./build-module-DNhkEVJn.js";import{It as d,hn as f,t as p,z as m}from"./date-fns-I6jayRk5.js";import{Ct as ee,Z as h,_ as g,x as _,yt as v}from"./charts-provider-DuQP203y.js";import{Xa as te,qa as y}from"./iframe-pPhYuv85.js";import{g as b,m as x,p as S,t as C,u as w}from"./src-ClJ6D7Xj.js";import{J as ne,Ln as re,fn as T,r as ie,t as E}from"./src-CcUA51-R.js";import{t as ae}from"./chart-empty-state-D3qWGzsK.js";import{n as oe,r as se}from"./with-story-router-BhZO32Cv.js";import{n as ce,r as le,s as D}from"./register-report-mocks-VFQrToIu.js";import{t as ue}from"./widget-state-B4HdF2_r.js";import{r as de,t as fe}from"./metric-tabs-chart-skeleton-Dy21TH1d.js";import{t as O}from"./src-CmVb_4es.js";import{a as pe,d as me,f as he,i as ge,n as _e,p as ve,r as k,u as ye}from"./with-widget-canvas-i-i6aXct.js";import{n as be,r as xe,t as Se}from"./with-site-time-zone-rx7NXQ-3.js";import{n as Ce,t as we}from"./with-story-period-host-tM0BUD1s.js";var Te,Ee,De=t((()=>{Te=`_root_sp1nf_1`,Ee={root:Te}}));function Oe(e,t){let n=e[t];return typeof n==`number`?n:void 0}function A(e,t,n,r){let i=[],a=(e?.data??[]).map(e=>b(e.date_start,t));return(e?.data??[]).forEach((e,t)=>{let o=a[t],s=r?r[t]:o,c=n(e);!s||!o||c===void 0||i.push(r?{date:s,realDate:o,value:c}:{date:s,value:c})}),{points:i,dates:a}}function ke(e){let t=Oe(e,`views`),n=Oe(e,`visitors`);return t!==void 0&&n!==void 0&&n>0?t/n:void 0}function Ae(e){return(Array.isArray(e.post_titles)?e.post_titles.length:0)||void 0}function je(e,t,n){return[{label:r(`Views per visitor`,`jetpack-premium-analytics-pkg`),dataFormat:Me,current:A(e.views,t,ke),comparisonReport:n?.views,valueOf:ke},{label:r(`Posts published`,`jetpack-premium-analytics-pkg`),countLabel:j,current:A(e.posts,t,Ae),comparisonReport:n?.posts,valueOf:Ae}].filter(e=>e.current.points.length).map(({label:e,dataFormat:n,countLabel:r,current:i,comparisonReport:a,valueOf:o})=>{let s=a?A(a,t,o,i.dates).points:[];return{label:e,dataFormat:n,countLabel:r,data:i.points,previous:s.length?s:void 0}})}var Me,j,Ne=t((()=>{C(),a(),Me={type:`average`},j=e=>i(`%s Post published`,`%s Posts published`,e,`jetpack-premium-analytics-pkg`)}));function Pe(){let e=te()?.site?.wpcom?.blog_id;if(e)try{let t=window.localStorage.getItem(`jetpack_stats_chart_type_${e}`);return t===`bar`||t===`line`?t:void 0}catch{return}}var Fe=t((()=>{y()}));function M(){return Pe()??`bar`}var N,Ie,Le,P=t((()=>{a(),u(),O(),Fe(),N=[`hour`,`day`,`week`,`month`],Ie=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`),counterpartId:`views`,counterpartHidden:!0},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Comment`,`%s Comments`,e,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Like`,`%s Likes`,e,`jetpack-premium-analytics-pkg`)}],Le={icon:s,attributes:[{...v(),getValue:({item:e})=>e.chartType??M()}],example:{attributes:{}}}}));function Re(e){let t=S(e.from),n=S(e.to);return m(t,f(t))&&m(n,d(n))}function F(e,t,n){return{...e,stat_fields:t,period:n}}function ze(e,t){let n=t===`hour`,i=n&&Re(e),a=(0,c.useCallback)(e=>!n||Be.has(e),[n]),o=(0,c.useMemo)(()=>F(e,n?`views`:`views,visitors`,t),[e,t,n]),s=(0,c.useMemo)(()=>n?F(e,`visitors,likes,comments`,`day`):F(e,`likes,comments,post_titles`,t),[e,t,n]),l=ne(o),u=ne(s,{enabled:!n||i}),d=l.primary.data,f=l.comparison.data,p=l.hasComparison,m=l.timezone,h=u.primary.data,g=u.comparison.data,_=u.hasComparison,v=u.timezone,te=l.isError&&!d?.data?.length,y=u.isError&&!h?.data?.length,b=i&&!y,x=(0,c.useMemo)(()=>je({views:d,posts:n?void 0:h},m,p?{views:f,posts:_?g:void 0}:void 0),[d,m,f,p,h,g,_,n]),S=(0,c.useMemo)(()=>Ie.map(e=>{let t=e.id===`views`||e.id===`visitors`&&!n,i=e.id===`views`||e.id===`visitors`,o={...ee({primary:t?d:h,comparison:t?f:g,hasComparison:t?p:_,field:e.id,label:e.label,countLabel:e.countLabel,zone:t?m:v}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,counterpartHidden:`counterpartHidden`in e?e.counterpartHidden:void 0,tooltipExtras:i&&x.length?x:void 0};if(a(e.id))return o;let s=r(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`);return b?{...o,current:[],previous:void 0,seriesUnavailable:s}:{...o,unavailable:s}}),[a,n,b,x,d,f,p,m,h,g,_,v]),{refetch:C}=l,{refetch:w}=u,re=(0,c.useCallback)(()=>{C(),w()},[C,w]),T=te||y&&!n;return{metrics:S,isLoading:l.isLoading||u.isLoading,isFetching:l.isFetching||u.isFetching,isError:T,refetch:re}}var Be,Ve=t((()=>{E(),C(),l(),a(),p(),Ne(),P(),O(),Be=new Set([`views`])}));function He({chartType:e}){let{reportParams:t}=_(),n=ie(t.interval,N),{openPeriod:i}=re(),a=(0,Ue.useMemo)(()=>{if(!i)return;let e={from:w(t.from),to:w(t.to)};return t=>{let r=h(t,n,e,{timeZone:x()});r&&i(r)}},[i,n,t.from,t.to]),{metrics:o,isLoading:s,isFetching:c,isError:l,refetch:u}=ze(t,n),d=r(`Traffic metric`,`jetpack-premium-analytics-pkg`);return(0,L.jsx)(`div`,{className:Ee.root,children:(0,L.jsx)(ue,{isLoading:s,isFetching:c,isError:l,isEmpty:!1,error:{description:r(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},renderLoading:(0,L.jsx)(fe,{}),children:(0,L.jsx)(de,{metrics:o,dataFormat:We,chartType:e,groupLabel:d,tickResolution:n,onDatumClick:a,empty:(0,L.jsx)(ae,{})})})})}function I({attributes:e={},setError:t}){return(0,L.jsx)(g,{attributes:e,setError:t,options:{from:`/`},children:(0,L.jsx)(He,{chartType:e.chartType??M()})})}var Ue,L,We,Ge=t((()=>{E(),C(),O(),a(),Ue=e(n(),1),De(),Ve(),P(),L=o(),We={type:`number`,options:{useMultipliers:!0,decimals:0}}})),Ke,qe,Je,Ye,Xe,Ze,Qe,$e=t((()=>{Ke=`jpa/traffic-chart`,qe=`Traffic summary`,Je=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,Ye={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},Xe=`traffic`,Ze=`framed`,Qe={name:Ke,title:qe,description:Je,help:Ye,category:Xe,presentation:Ze}}));function R({withComparison:e,chartType:t}){return(0,B.jsx)(I,{attributes:{reportParams:T(e),chartType:t}})}function z(e){return(0,B.jsx)(I,{attributes:{reportParams:T(!1,e)}})}function et({withComparison:e,chartType:t,...n}){return(0,B.jsx)(me,{...n,widgetType:H,renderModule:V,renderComponent:I,attributes:{reportParams:T(e),chartType:t}})}var B,V,H,U,W,tt,G,K,q,J,Y,X,Z,Q,$,nt;t((()=>{E(),he(),pe(),we(),oe(),_e(),Se(),ce(),Ge(),P(),$e(),B=o(),le(),V=`storybook/traffic-chart`,H=ge(Qe,Le),U={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},W={chartType:`line`},tt={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:I,tags:[`autodocs`],decorators:[Ce,se,xe],argTypes:{...be,withComparison:{control:`boolean`},...U},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range, comparison, and bucket size come from the dashboard controls: the bucket is whatever the page's interval control resolves to, clamped to one the chart can draw. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; at the hourly grain the second request asks for visitors, likes, and comments in daily buckets, so their cards still show the day totals (skipped for a window that does not cover whole days, such as `Last 24 hours`). Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},G={render:R,args:{withComparison:!1,...W},decorators:[k]},K={render:R,args:{withComparison:!0,...W},decorators:[k]},q={render:R,args:{withComparison:!1,...W,chartType:`bar`},decorators:[k]},J={render:R,args:{withComparison:!0,...W,chartType:`bar`},decorators:[k]},Y={render:e=>(0,B.jsx)(me,{...e,widgetType:H,renderModule:V,renderComponent:I,attributes:{reportParams:T(!1,`last-24-hours`)}}),args:{...ye},argTypes:{...ve}},X={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[k],beforeEach:()=>(D(`stats/visits`,`loading`),()=>D(`stats/visits`,null))},Z={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[k],beforeEach:()=>(D(`stats/visits`,`error`),()=>D(`stats/visits`,null))},Q={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[k],beforeEach:()=>(D(`stats/visits`,`empty`),()=>D(`stats/visits`,null))},$={render:e=>(0,B.jsx)(et,{...e}),args:{...ye,withComparison:!0,...W},argTypes:{...ve,withComparison:{control:`boolean`},...U}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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