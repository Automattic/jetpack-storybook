import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,r as i,t as a}from"./build-module-BXs6jvWf.js";import{t as o}from"./jsx-runtime-CFwixLRt.js";import{j as s,t as c}from"./build-module-Dxhc9xxH.js";import{Sn as l,n as u,wr as d}from"./build-module-j0f5js0M.js";import{m as f,n as p,v as m}from"./build-module-CH9swq6y.js";import{Cn as h,Q as g,j as _,t as v}from"./date-fns-BUjRnB2M.js";import{o as y,r as ee,t as b}from"./src-BgnB_EuX.js";import{r as x,t as S}from"./build-module-t9pLPy0B.js";import{In as C,St as te,Xn as w,Yn as T,Zn as ne,f as re,t as E,zn as ie}from"./src-BVv1R588.js";import{_ as ae,m as oe,t as se}from"./src-CFLkDNMV.js";import{Bt as ce,It as le,Lt as ue,R as de,V as fe,W as pe,m as me,wt as he}from"./charts-provider-DVBrFPaa.js";import{t as ge}from"./widget-state-CqPm5upe.js";import{i as D,n as _e,r as ve}from"./with-story-router-Buc1zMFG.js";import{t as ye}from"./chart-empty-state-a7XVUn1s.js";import{n as be,o as xe,r as Se,s as O}from"./register-report-mocks-Dzl9RUVR.js";import{r as Ce,t as we}from"./metric-tabs-chart-skeleton-s6MNywiJ.js";import{n as Te,r as Ee,t as De}from"./src--0pcun32.js";import{a as Oe,c as ke,i as k,l as Ae,o as je,r as Me,s as Ne,u as Pe}from"./with-widget-canvas-BqMy9p20.js";import{n as Fe,t as Ie}from"./force-stats-mock-state-DltsELiR.js";import{n as Le,r as Re,t as ze}from"./with-site-time-zone-Bh39N5LR.js";import{n as Be,t as Ve}from"./use-no-published-posts-CAYdUnjR.js";import{n as He,t as Ue}from"./with-story-period-host-Dj-ArWj9.js";function We(e,t){let n=e.from??``,i=e.to??``;return w(e.preset,n,i).includes(`hour`)||ne(n,i)>Ge?{}:t===`line`?{extra:[`day`]}:{unavailable:{intervals:[`day`],hint:r(`Switch to the line chart to see each day.`,`jetpack-premium-analytics-pkg`)}}}var Ge,Ke=e((()=>{E(),a(),Ge=366})),qe,Je,Ye=e((()=>{qe=`_root_sp1nf_1`,Je={root:qe}}));function Xe(){let e=m(e=>e(x).get(ie,A)===!0,[]),{set:t}=f(x);return[e,(0,Ze.useCallback)(n=>{n!==e&&t(ie,A,n)},[e,t])]}var Ze,A,Qe=e((()=>{D(),p(),S(),Ze=t(n(),1),A=`trafficChartPreviousPeriod`}));function $e(e,t){let n=e[t];return typeof n==`number`?n:void 0}function j(e,t,n,r){let i=[],a=(e?.data??[]).map(e=>ae(e.date_start,t));return(e?.data??[]).forEach((e,o)=>{let s=a[o],c=r?r[o]:s,l=n(e);if(!c||!s||l===void 0)return;let u=ae(e.date_end,t),d=u?{endDate:u}:{};i.push(r?{date:c,realDate:s,...d,value:l}:{date:c,...d,value:l})}),{points:i,dates:a}}function et(e){let t=$e(e,`views`),n=$e(e,`visitors`);return t!==void 0&&n!==void 0&&n>0?t/n:void 0}function tt(e){return Array.isArray(e.post_titles)?e.post_titles.length:void 0}function nt(e,t,n,r){if(!r)return n;let i=[];return ce(e?.data??[],t?.data??[],r).forEach((e,t)=>{e!==void 0&&(i[e]=n[t])}),i}function rt(e,t){return e.filter(e=>e.value!==0||t.some(t=>t.date.getTime()===e.date.getTime()&&t.value!==0))}function it(e,t,n,i){return[{label:r(`Views per visitor`,`jetpack-premium-analytics-pkg`),icon:l,dataFormat:at,currentReport:e.views,current:j(e.views,t,et),comparisonReport:n?.views,valueOf:et,isCount:!1},{label:r(`Posts published`,`jetpack-premium-analytics-pkg`),icon:d,countLabel:ot,currentReport:e.posts,current:j(e.posts,t,tt),comparisonReport:n?.posts,valueOf:tt,isCount:!0}].map(({label:e,icon:n,dataFormat:r,countLabel:a,currentReport:o,current:s,comparisonReport:c,valueOf:l,isCount:u})=>{let d=c?j(c,t,l,nt(o,c,s.dates,i)).points:[],f=u?rt(s.points,d):s.points,p=u?rt(d,s.points):d;return{label:e,icon:n,dataFormat:r,countLabel:a,data:f,previous:p.length?p:void 0}}).filter(e=>e.data.length||e.previous)}var at,ot,st=e((()=>{se(),D(),a(),u(),at={type:`average`},ot=e=>i(`%s Post published`,`%s Posts published`,e,`jetpack-premium-analytics-pkg`)}));function ct(){let e=y()?.site?.wpcom?.blog_id;return e?`jetpack_stats_chart_type_${e}`:void 0}function lt(){let e=ct();if(e)try{let t=window.localStorage.getItem(e);return t===`bar`||t===`line`?t:void 0}catch{return}}function ut(e){let t=ct();if(t)try{window.localStorage.setItem(t,e)}catch{}}var dt=e((()=>{b()}));function M(){return lt()??`bar`}var N,ft,pt,mt,P=e((()=>{a(),De(),Ke(),dt(),N=[`hour`,`day`,`week`,`month`,`quarter`,`year`],ft=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`),counterpartId:`views`,counterpartHidden:!0},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Comment`,`%s Comments`,e,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Like`,`%s Likes`,e,`jetpack-premium-analytics-pkg`)}],pt={...Te((e,t)=>We(e,t.chartType??M())),elements:Ee(N)},mt={attributes:[pt,{id:`chartType`,getValue:({item:e})=>e.chartType??M(),setValue:({value:e})=>(ut(e),{chartType:e})}],example:{attributes:{}}}}));function ht(e){let t=oe(e.from),n=oe(e.to);return _(t,h(t))&&_(n,g(n))}function F(e,t,n){return{...e,stat_fields:t,period:n}}function gt(e,t){let n=t===`hour`,i=n&&ht(e),a=(0,s.useCallback)(e=>!n||_t.has(e),[n]),o=(0,s.useMemo)(()=>F(e,n?`views`:`views,visitors`,t),[e,t,n]),c=(0,s.useMemo)(()=>n?F(e,`visitors,likes,comments`,`day`):F(e,`likes,comments,post_titles`,t),[e,t,n]),l=te(o),u=te(c,{enabled:!n||i}),d=l.primary.data,f=l.comparison.data,p=l.hasComparison,m=l.timezone,h=u.primary.data,g=u.comparison.data,_=u.hasComparison,v=u.timezone,{periodStarts:y}=l,ee=l.isError&&!d?.data?.length,b=u.isError&&!h?.data?.length,x=i&&!b,S=(0,s.useMemo)(()=>it({views:d,posts:n?void 0:h},m,p?{views:f,posts:_?g:void 0}:void 0,y),[d,m,f,p,h,g,_,n,y]),C=(0,s.useMemo)(()=>ft.map(e=>{let t=e.id===`views`||e.id===`visitors`&&!n,i=e.id===`views`||e.id===`visitors`,o={...ue({primary:t?d:h,comparison:t?f:g,hasComparison:t?p:_,field:e.id,label:e.label,countLabel:e.countLabel,zone:t?m:v,periodStarts:y}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,counterpartHidden:`counterpartHidden`in e?e.counterpartHidden:void 0,tooltipExtras:i&&S.length?S:void 0};if(a(e.id))return o;let s=r(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`);return x?{...o,current:[],previous:void 0,seriesUnavailable:s}:{...o,unavailable:s}}),[a,n,x,S,d,f,p,m,h,g,_,v,y]),{refetch:w}=l,{refetch:T}=u,ne=(0,s.useCallback)(()=>{w(),T()},[w,T]),re=ee||b&&!n;return{metrics:C,isLoading:l.isLoading||u.isLoading,isFetching:l.isFetching||u.isFetching,isError:re,csvIsError:l.primary.isError||!n&&u.primary.isError,csvIsPlaceholderData:l.primary.isPlaceholderData||!n&&u.primary.isPlaceholderData,timezone:m,refetch:ne}}var _t,vt=e((()=>{E(),se(),c(),a(),v(),st(),P(),D(),_t=new Set([`views`])}));function yt({chartType:e,interval:t}){let{reportParams:n}=pe(),i=T(),[a,o]=Xe(),s=re({...n,interval:t},N,i,We(n,e)),c=fe(s),{metrics:l,isLoading:u,isFetching:d,isError:f,csvIsError:p,csvIsPlaceholderData:m,timezone:h,refetch:g}=gt(n,s),_=r(`Traffic metric`,`jetpack-premium-analytics-pkg`),v=l.find(e=>e.key===`views`),y=(0,bt.useMemo)(()=>v?.current.some(e=>(e.value??0)>0)?le(l,{zone:h,withTime:s===`hour`,dateLabel:r(`Date`,`jetpack-premium-analytics-pkg`)}):void 0,[l,v,h,s]);me({csv:y&&{...y,filenamePrefix:`traffic-summary`,hasDateRange:!0,status:{isLoading:u,isError:p,isPlaceholderData:m}}});let{noPublishedPosts:b,isChecking:x}=Be(!u&&!f&&v?.value===0&&v.current.every(e=>e.value===0||e.value===null)&&(v.previous?.every(e=>e.value===0||e.value===null)??!0));return(0,L.jsx)(`div`,{className:Je.root,children:(0,L.jsx)(ge,{isLoading:u||x,isFetching:d,isError:f,error:{description:r(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:g}]},renderLoading:(0,L.jsx)(we,{}),children:(0,L.jsx)(Ce,{metrics:l,dataFormat:he,chartType:e,groupLabel:_,tickResolution:s,onDatumClick:c,previousPeriodShown:a,onPreviousPeriodShownChange:o,empty:b?(0,L.jsx)(ye,{text:r(`You haven't published any posts yet. Get started by creating your first one.`,`jetpack-premium-analytics-pkg`),action:{label:r(`Create post`,`jetpack-premium-analytics-pkg`),href:ee(`post-new.php`)}}):(0,L.jsx)(ye,{})})})})}function I({attributes:e={},setError:t}){return(0,L.jsx)(de,{attributes:e,setError:t,options:{from:`/`},children:(0,L.jsx)(yt,{chartType:e.chartType??M(),interval:e.chartInterval})})}var bt,L,xt=e((()=>{b(),E(),D(),a(),bt=t(n(),1),Ve(),Ke(),Ye(),Qe(),vt(),P(),L=o()})),St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt=e((()=>{St=`jpa/traffic-chart`,Ct=`jpa/trending-up`,wt=`Traffic summary`,Tt=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,Et={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},Dt=`traffic`,Ot=`framed`,kt=[{id:`chartInterval`},{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],At={name:St,icon:Ct,title:wt,description:Tt,help:Et,category:Dt,presentation:Ot,attributes:kt}}));function R({withComparison:e,chartType:t}){return(0,B.jsx)(I,{attributes:{reportParams:C(e),chartType:t}})}function z(e){return(0,B.jsx)(I,{attributes:{reportParams:C(!1,e)}})}function Mt({withComparison:e,chartType:t,...n}){return(0,B.jsx)(ke,{...n,widgetType:H,renderModule:V,renderComponent:I,attributes:{reportParams:C(e),chartType:t}})}var B,V,H,Nt,U,Pt,Ft,W,G,K,q,J,Y,X,Z,Q,$,It;e((()=>{E(),Ae(),je(),Ue(),_e(),Me(),ze(),be(),Fe(),xt(),P(),jt(),B=o(),Se(),V=`storybook/traffic-chart`,H=Oe(At,mt),Nt={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},U={chartType:`bar`},Pt={...Ne,widgetWidth:3},Ft={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:I,tags:[`autodocs`],decorators:[He,ve,Re],argTypes:{...Le,withComparison:{control:`boolean`},...Nt},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs (Views, Visitors, Likes, and Comments) over a comparative chart. The date range and comparison come from the dashboard controls. The bucket size is the widget's own `chartInterval` attribute, clamped to what the range allows. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is drawn too: as a same-color dashed line for `line`, or in gray in a slot beside the current period for `bar`. On the Views and Visitors tabs, `bar` draws visitors inside the views bar, as Jetpack Stats v1 does. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; at the hourly grain the second request asks for visitors, likes, and comments in daily buckets, so their cards still show the day totals (skipped for a window that does not cover whole days, such as `Last 24 hours`). Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},W={render:R,args:{withComparison:!1,...U},decorators:[k]},G={render:R,args:{withComparison:!0,...U},decorators:[k]},K={render:R,args:{withComparison:!1,chartType:`line`},decorators:[k]},q={render:R,args:{withComparison:!0,chartType:`line`},decorators:[k]},J={tags:[`widget-dashboard`],render:e=>(0,B.jsx)(ke,{...e,widgetType:H,renderModule:V,renderComponent:I,attributes:{reportParams:C(!1,`last-24-hours`)}}),args:{...Pt},argTypes:{...Pe}},Y={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[k],beforeEach:()=>(O(`stats/visits`,`loading`),()=>O(`stats/visits`,null))},X={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[k],beforeEach:()=>(O(`stats/visits`,`error`),()=>O(`stats/visits`,null))},Z={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[k],beforeEach:()=>(O(`stats/visits`,`empty`),xe(`/wp/v2/posts`,[{id:1}]),()=>{O(`stats/visits`,null),xe(`/wp/v2/posts`,null)})},Q={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[k],beforeEach:()=>{let e=window.JetpackScriptData;return window.JetpackScriptData={...e,site:{...e?.site,admin_url:`https://example.com/blog/wp-admin/`}},O(`stats/visits`,`empty`),Ie(`/wp/v2/posts`,`empty`),()=>{window.JetpackScriptData=e,O(`stats/visits`,null),Ie(`/wp/v2/posts`,null)}}},$={tags:[`widget-dashboard`],render:e=>(0,B.jsx)(Mt,{...e}),args:{...Pt,withComparison:!0,...U},argTypes:{...Pe,withComparison:{control:`boolean`},...Nt}},It=[`Default`,`WithComparison`,`LineChart`,`LineChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`EmptyNoPosts`,`WidgetDashboardWithWidget`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:`Same close-up with comparison on: the previous period takes a gray slot beside the current one,
and on the Views and Visitors tabs visitors sits inside the views bar.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:"The same widget drawn as lines — the `chartType` attribute set to `line`.",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: true,
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Lines with comparison on: the previous period is a dashed line in the same color.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  tags: ['widget-dashboard'],
  render: args => <WidgetDashboardWithWidgetStory {...args} widgetType={storyWidgetType} renderModule={TRAFFIC_CHART_RENDER_MODULE} renderComponent={TrafficChartRender as ComponentType<WidgetRenderProps<unknown>>} attributes={{
    reportParams: getDefaultQueryParams(false, 'last-24-hours')
  }} />,
  args: {
    ...DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...J.parameters?.docs?.source},description:{story:`An hourly range (\`Last 24 hours\`), where the chart draws hourly buckets.
\`stats/visits\` fills Views alone at that grain, so the other three tabs show
a placeholder and, when selected, the reason — rather than a \`0\` they cannot
back up. The likes and comments request is skipped entirely.

Mounted through the dashboard harness rather than the close-up canvas: hour
ticks are the point of the story, and the canvas is too narrow to draw an
axis at all.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
    setReportMockResponse('/wp/v2/posts', [{
      id: 1
    }]);
    return () => {
      setReportMockState('stats/visits', null);
      setReportMockResponse('/wp/v2/posts', null);
    };
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no points: the tabs stay at zero and the plot shows the
no-results message in place of a flat line.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => renderTrafficChartOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    const scriptData = window.JetpackScriptData;
    window.JetpackScriptData = {
      ...scriptData,
      site: {
        ...scriptData?.site,
        admin_url: 'https://example.com/blog/wp-admin/'
      }
    } as typeof window.JetpackScriptData;
    setReportMockState('stats/visits', 'empty');
    forceStatsMockState('/wp/v2/posts', 'empty');
    return () => {
      window.JetpackScriptData = scriptData;
      setReportMockState('stats/visits', null);
      forceStatsMockState('/wp/v2/posts', null);
    };
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['widget-dashboard'],
  render: args => <TrafficChartDashboardStory {...args} />,
  args: {
    ...DASHBOARD_STORY_ARGS,
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
}`,...$.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}}}))();export{W as Default,Z as Empty,Q as EmptyNoPosts,X as Error,J as Hourly,K as LineChart,q as LineChartWithComparison,Y as Loading,$ as WidgetDashboardWithWidget,G as WithComparison,It as __namedExportsOrder,Ft as default};