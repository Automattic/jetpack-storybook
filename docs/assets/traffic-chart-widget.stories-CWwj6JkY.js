import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,r as i,t as a}from"./build-module-DQe4AOzJ.js";import{t as o}from"./jsx-runtime-CFwixLRt.js";import{Dr as s,Mu as c,bu as l,t as u,xn as d}from"./build-module-BI3_PVVO.js";import{Pt as f,X as p,hn as m,j as h,r as g,t as _,y as v}from"./date-fns-V6dsVcup.js";import{a as y,n as b,t as x}from"./src-DpxsllRm.js";import{_ as S,d as C,h as ee,m as w,t as T}from"./src-DFqe9oto.js";import{Cn as te,En as E,Tn as ne,ct as re,hn as D,l as ie,t as O,wn as ae}from"./src-BEwaewMJ.js";import{Dt as oe,F as se,Q as ce,wt as le,z as ue}from"./charts-provider-BgxsEvl0.js";import{t as de}from"./widget-state-BwHOn80-.js";import{t as fe}from"./chart-empty-state-DxefYGI3.js";import{a as pe,l as me,o as he,u as k}from"./widget-state-BjN9cSfn.js";import{n as ge,r as _e}from"./with-story-router-DjfOWuXu.js";import{r as ve,t as ye}from"./metric-tabs-chart-skeleton-w8fwCc8G.js";import{A as be,H as xe,M as Se,N as Ce,P as we,R as Te,U as Ee,V as De,W as Oe,j as A,t as j,z as ke}from"./src-DMQdrIso.js";import{n as Ae,t as je}from"./force-stats-mock-state-BeeB_aDt.js";import{n as Me,r as Ne,t as Pe}from"./with-site-time-zone-B0D8ga1m.js";import{n as Fe,t as Ie}from"./use-no-published-posts-DFz_lR_x.js";import{n as Le,t as Re}from"./with-story-period-host-C7I4AQby.js";function ze(e,t){let n=e.from??``,i=e.to??``;return ne(e.preset,n,i).includes(`hour`)||E(n,i)>Be?{}:t===`line`?{extra:[`day`]}:{unavailable:{intervals:[`day`],hint:r(`Switch to the line chart to see each day.`,`jetpack-premium-analytics-pkg`)}}}var Be,Ve=e((()=>{O(),a(),Be=366})),He,Ue,We=e((()=>{He=`_root_sp1nf_1`,Ue={root:He}}));function Ge(e,t){let n=e[t];return typeof n==`number`?n:void 0}function M(e,t,n,r){let i=[],a=(e?.data??[]).map(e=>S(e.date_start,t));return(e?.data??[]).forEach((e,o)=>{let s=a[o],c=r?r[o]:s,l=n(e);if(!c||!s||l===void 0)return;let u=S(e.date_end,t),d=u?{endDate:u}:{};i.push(r?{date:c,realDate:s,...d,value:l}:{date:c,...d,value:l})}),{points:i,dates:a}}function Ke(e){let t=Ge(e,`views`),n=Ge(e,`visitors`);return t!==void 0&&n!==void 0&&n>0?t/n:void 0}function qe(e){return Array.isArray(e.post_titles)?e.post_titles.length:void 0}function Je(e,t){return e.filter(e=>e.value!==0||t.some(t=>t.date.getTime()===e.date.getTime()&&t.value!==0))}function Ye(e,t,n){return[{label:r(`Views per visitor`,`jetpack-premium-analytics-pkg`),icon:d,dataFormat:Xe,current:M(e.views,t,Ke),comparisonReport:n?.views,valueOf:Ke,isCount:!1},{label:r(`Posts published`,`jetpack-premium-analytics-pkg`),icon:s,countLabel:Ze,current:M(e.posts,t,qe),comparisonReport:n?.posts,valueOf:qe,isCount:!0}].map(({label:e,icon:n,dataFormat:r,countLabel:i,current:a,comparisonReport:o,valueOf:s,isCount:c})=>{let l=o?M(o,t,s,a.dates).points:[],u=c?Je(a.points,l):a.points,d=c?Je(l,a.points):l;return{label:e,icon:n,dataFormat:r,countLabel:i,data:u,previous:d.length?d:void 0}}).filter(e=>e.data.length||e.previous)}var Xe,Ze,Qe=e((()=>{T(),a(),u(),Xe={type:`average`},Ze=e=>i(`%s Post published`,`%s Posts published`,e,`jetpack-premium-analytics-pkg`)}));function $e(e,t,n){if(!e.date||!e.endDate||!t.date||!t.endDate)return 0;let r=Math.max(e.date.getTime(),t.date.getTime()+n),i=Math.min(e.endDate.getTime(),t.endDate.getTime()+n);return Math.max(0,i-r)}function et(e,t){let n=e[0]?.date,r=t[0]?.date;if(!n||!r)return 0;let i=n.getTime()-r.getTime(),a={shift:0,overlap:-1};for(let n=0;n<t.length;n++){let r=e.reduce((e,r,a)=>e+$e(r,t[a+n]??{},i),0);r>a.overlap&&(a={shift:n,overlap:r})}return a.shift}function tt(e){let t=oe(e);return t?f(g(v(t),1),`yyyy-MM-dd`):void 0}function nt(e){let t=tt(e.from),n=tt(e.to);return!!t&&t===oe(e.compare_from)||!!n&&n===oe(e.compare_to)}function rt(e,t){return(e.data??[]).map(e=>({date:S(e.date_start,t),endDate:S(e.date_end,t)}))}function it(e,t,n){if(!e||!t?.data)return t;let r=et(rt(e,n),rt(t,n));return r?{...t,data:t.data.slice(r)}:t}var at=e((()=>{T(),j(),_()}));function ot(){let e=y()?.site?.wpcom?.blog_id;if(e)try{let t=window.localStorage.getItem(`jetpack_stats_chart_type_${e}`);return t===`bar`||t===`line`?t:void 0}catch{return}}var st=e((()=>{x()}));function N(){return ot()??`bar`}var P,ct,lt,ut,F=e((()=>{a(),we(),Ve(),st(),P=[`hour`,`day`,`week`,`month`],ct=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`),counterpartId:`views`,counterpartHidden:!0},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Comment`,`%s Comments`,e,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Like`,`%s Likes`,e,`jetpack-premium-analytics-pkg`)}],lt={...Te((e,t)=>ze(e,t.chartType??N())),elements:ke(P)},ut={attributes:[lt,{id:`chartType`,getValue:({item:e})=>e.chartType??N()}],example:{attributes:{}}}}));function dt(e){let t=w(e.from),n=w(e.to);return h(t,m(t))&&h(n,p(n))}function I(e,t,n){return{...e,stat_fields:t,period:n}}function ft(e,t){let n=t===`hour`,i=n&&dt(e),a=(0,c.useCallback)(e=>!n||pt.has(e),[n]),o=(0,c.useMemo)(()=>I(e,n?`views`:`views,visitors`,t),[e,t,n]),s=(0,c.useMemo)(()=>n?I(e,`visitors,likes,comments`,`day`):I(e,`likes,comments,post_titles`,t),[e,t,n]),l=re(o),u=re(s,{enabled:!n||i}),d=l.primary.data,f=l.comparison.data,p=l.hasComparison,m=l.timezone,h=u.primary.data,g=u.comparison.data,_=u.hasComparison,v=u.timezone,y=t===`week`&&nt(e),b=(0,c.useMemo)(()=>y?it(d,f,m):f,[y,d,f,m]),x=(0,c.useMemo)(()=>y?it(h,g,v):g,[y,h,g,v]),S=l.isError&&!d?.data?.length,C=u.isError&&!h?.data?.length,ee=i&&!C,w=(0,c.useMemo)(()=>Ye({views:d,posts:n?void 0:h},m,p?{views:b,posts:_?x:void 0}:void 0),[d,m,b,p,h,x,_,n]),T=(0,c.useMemo)(()=>ct.map(e=>{let t=e.id===`views`||e.id===`visitors`&&!n,i=e.id===`views`||e.id===`visitors`,o={...le({primary:t?d:h,comparison:t?b:x,hasComparison:t?p:_,field:e.id,label:e.label,countLabel:e.countLabel,zone:t?m:v}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,counterpartHidden:`counterpartHidden`in e?e.counterpartHidden:void 0,tooltipExtras:i&&w.length?w:void 0};if(a(e.id))return o;let s=r(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`);return ee?{...o,current:[],previous:void 0,seriesUnavailable:s}:{...o,unavailable:s}}),[a,n,ee,w,d,b,p,m,h,x,_,v]),{refetch:te}=l,{refetch:E}=u,ne=(0,c.useCallback)(()=>{te(),E()},[te,E]),D=S||C&&!n;return{metrics:T,isLoading:l.isLoading||u.isLoading,isFetching:l.isFetching||u.isFetching,isError:D,refetch:ne}}var pt,mt=e((()=>{O(),T(),l(),a(),_(),Qe(),at(),F(),j(),pt=new Set([`views`])}));function ht({chartType:e,interval:t}){let{reportParams:n}=ue(),{openPeriod:i}=te(),a=ae(),o=ie({...n,interval:t},P,a,ze(n,e)),s=(0,gt.useMemo)(()=>{if(!i)return;let e={from:C(n.from),to:C(n.to)};return t=>{let n=ce(t,o,e,{timeZone:ee()});n&&i(n)}},[i,o,n.from,n.to]),{metrics:c,isLoading:l,isFetching:u,isError:d,refetch:f}=ft(n,o),p=r(`Traffic metric`,`jetpack-premium-analytics-pkg`),m=c.find(e=>e.key===`views`),{noPublishedPosts:h,isChecking:g}=Fe(!l&&!d&&m?.value===0&&m.current.every(e=>e.value===0||e.value===null)&&(m.previous?.every(e=>e.value===0||e.value===null)??!0));return(0,R.jsx)(`div`,{className:Ue.root,children:(0,R.jsx)(de,{isLoading:l||g,isFetching:u,isError:d,error:{description:r(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:f}]},renderLoading:(0,R.jsx)(ye,{}),children:(0,R.jsx)(ve,{metrics:c,dataFormat:_t,chartType:e,groupLabel:p,tickResolution:o,onDatumClick:s,chartTitle:r(`Traffic summary`,`jetpack-premium-analytics-pkg`),empty:h?(0,R.jsx)(fe,{text:r(`You haven't published any posts yet. Get started by creating your first one.`,`jetpack-premium-analytics-pkg`),action:{label:r(`Create post`,`jetpack-premium-analytics-pkg`),href:b(`post-new.php`)}}):(0,R.jsx)(fe,{})})})})}function L({attributes:e={},setError:t}){return(0,R.jsx)(se,{attributes:e,setError:t,options:{from:`/`},children:(0,R.jsx)(ht,{chartType:e.chartType??N(),interval:e.chartInterval})})}var gt,R,_t,vt=e((()=>{x(),O(),T(),j(),a(),gt=t(n(),1),Ie(),Ve(),We(),mt(),F(),R=o(),_t={type:`number`,options:{useMultipliers:!0,decimals:0}}})),yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot=e((()=>{yt=`jpa/traffic-chart`,bt=`jpa/trending-up`,xt=`Traffic summary`,St=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,Ct={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},wt=`traffic`,Tt=`framed`,Et=[{id:`chartInterval`},{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],Dt={name:yt,icon:bt,title:xt,description:St,help:Ct,category:wt,presentation:Tt,attributes:Et}}));function z({withComparison:e,chartType:t}){return(0,V.jsx)(L,{attributes:{reportParams:D(e),chartType:t}})}function B(e){return(0,V.jsx)(L,{attributes:{reportParams:D(!1,e)}})}function kt({withComparison:e,chartType:t,...n}){return(0,V.jsx)(xe,{...n,widgetType:H,renderModule:At,renderComponent:L,attributes:{reportParams:D(e),chartType:t}})}var V,At,H,jt,U,Mt,Nt,W,G,K,q,J,Y,X,Z,Q,$,Pt;e((()=>{O(),Ee(),Ce(),Re(),ge(),be(),Pe(),pe(),Ae(),vt(),F(),Ot(),V=o(),he(),At=`storybook/traffic-chart`,H=Se(Dt,ut),jt={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},U={chartType:`bar`},Mt={...De,widgetWidth:3},Nt={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:L,tags:[`autodocs`],decorators:[Le,_e,Ne],argTypes:{...Me,withComparison:{control:`boolean`},...jt},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs (Views, Visitors, Likes, and Comments) over a comparative chart. The date range and comparison come from the dashboard controls. The bucket size is the widget's own `chartInterval` attribute, clamped to what the range allows. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is drawn too: as a same-color dashed line for `line`, or in gray in a slot beside the current period for `bar`. On the Views and Visitors tabs, `bar` draws visitors inside the views bar, as Jetpack Stats v1 does. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; at the hourly grain the second request asks for visitors, likes, and comments in daily buckets, so their cards still show the day totals (skipped for a window that does not cover whole days, such as `Last 24 hours`). Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},W={render:z,args:{withComparison:!1,...U},decorators:[A]},G={render:z,args:{withComparison:!0,...U},decorators:[A]},K={render:z,args:{withComparison:!1,chartType:`line`},decorators:[A]},q={render:z,args:{withComparison:!0,chartType:`line`},decorators:[A]},J={render:e=>(0,V.jsx)(xe,{...e,widgetType:H,renderModule:At,renderComponent:L,attributes:{reportParams:D(!1,`last-24-hours`)}}),args:{...Mt},argTypes:{...Oe}},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[A],beforeEach:()=>(k(`stats/visits`,`loading`),()=>k(`stats/visits`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[A],beforeEach:()=>(k(`stats/visits`,`error`),()=>k(`stats/visits`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[A],beforeEach:()=>(k(`stats/visits`,`empty`),me(`/wp/v2/posts`,[{id:1}]),()=>{k(`stats/visits`,null),me(`/wp/v2/posts`,null)})},Q={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[A],beforeEach:()=>{let e=window.JetpackScriptData;return window.JetpackScriptData={...e,site:{...e?.site,admin_url:`https://example.com/blog/wp-admin/`}},k(`stats/visits`,`empty`),je(`/wp/v2/posts`,`empty`),()=>{window.JetpackScriptData=e,k(`stats/visits`,null),je(`/wp/v2/posts`,null)}}},$={render:e=>(0,V.jsx)(kt,{...e}),args:{...Mt,withComparison:!0,...U},argTypes:{...Oe,withComparison:{control:`boolean`},...jt}},Pt=[`Default`,`WithComparison`,`LineChart`,`LineChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`EmptyNoPosts`,`WidgetDashboardWithWidget`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}}}))();export{W as Default,Z as Empty,Q as EmptyNoPosts,X as Error,J as Hourly,K as LineChart,q as LineChartWithComparison,Y as Loading,$ as WidgetDashboardWithWidget,G as WithComparison,Pt as __namedExportsOrder,Nt as default};