import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,r as i,t as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Gu as s,Nu as c,Tn as l,jr as u,t as d}from"./build-module-Cm3Kd3py.js";import{C as f,It as p,hn as m,nt as h,r as g,t as _,z as v}from"./date-fns-I6jayRk5.js";import{Ja as y,Qa as b,Ya as x}from"./iframe-BHO5FkI3.js";import{g as S,m as C,p as w,t as T,u as E}from"./src-rrY7vAoW.js";import{$ as ee,An as te,n as D,t as O,vn as k}from"./src-DJLq5FfU.js";import{F as ne,_ as re,at as ie,st as ae,ut as oe,x as se}from"./charts-provider-5dhg-4G-.js";import{t as ce}from"./chart-empty-state-JUpupMWI.js";import{n as le,o as ue,r as de,s as A}from"./register-report-mocks-DGd-QrT6.js";import{t as fe}from"./widget-state-D7NW9qQa.js";import{n as pe,r as me}from"./with-story-router-Beljd9ki.js";import{r as he,t as ge}from"./metric-tabs-chart-skeleton-Byb6NBdI.js";import{t as j}from"./src-BnaNdP7Y.js";import{a as _e,d as ve,g as ye,h as be,i as xe,m as Se,n as Ce,o as we,p as Te,r as M,u as Ee}from"./with-widget-canvas-BZBBFW1C.js";import{n as De,t as Oe}from"./force-stats-mock-state-CKdkNIdW.js";import{n as ke,r as Ae,t as je}from"./with-site-time-zone-rx7NXQ-3.js";import{n as Me,t as Ne}from"./use-no-published-posts-Dukl8Lzr.js";import{n as Pe,t as Fe}from"./with-story-period-host-CPolRIpK.js";var Ie,Le,Re=t((()=>{Ie=`_root_sp1nf_1`,Le={root:Ie}}));function ze(e,t){let n=e[t];return typeof n==`number`?n:void 0}function N(e,t,n,r){let i=[],a=(e?.data??[]).map(e=>S(e.date_start,t));return(e?.data??[]).forEach((e,o)=>{let s=a[o],c=r?r[o]:s,l=n(e);if(!c||!s||l===void 0)return;let u=S(e.date_end,t),d=u?{endDate:u}:{};i.push(r?{date:c,realDate:s,...d,value:l}:{date:c,...d,value:l})}),{points:i,dates:a}}function Be(e){let t=ze(e,`views`),n=ze(e,`visitors`);return t!==void 0&&n!==void 0&&n>0?t/n:void 0}function Ve(e){return Array.isArray(e.post_titles)?e.post_titles.length:void 0}function He(e,t){return e.filter(e=>e.value!==0||t.some(t=>t.date.getTime()===e.date.getTime()&&t.value!==0))}function Ue(e,t,n){return[{label:r(`Views per visitor`,`jetpack-premium-analytics-pkg`),icon:l,dataFormat:We,current:N(e.views,t,Be),comparisonReport:n?.views,valueOf:Be,isCount:!1},{label:r(`Posts published`,`jetpack-premium-analytics-pkg`),icon:u,countLabel:Ge,current:N(e.posts,t,Ve),comparisonReport:n?.posts,valueOf:Ve,isCount:!0}].map(({label:e,icon:n,dataFormat:r,countLabel:i,current:a,comparisonReport:o,valueOf:s,isCount:c})=>{let l=o?N(o,t,s,a.dates).points:[],u=c?He(a.points,l):a.points,d=c?He(l,a.points):l;return{label:e,icon:n,dataFormat:r,countLabel:i,data:u,previous:d.length?d:void 0}}).filter(e=>e.data.length||e.previous)}var We,Ge,Ke=t((()=>{T(),a(),d(),We={type:`average`},Ge=e=>i(`%s Post published`,`%s Posts published`,e,`jetpack-premium-analytics-pkg`)}));function qe(e,t,n){if(!e.date||!e.endDate||!t.date||!t.endDate)return 0;let r=Math.max(e.date.getTime(),t.date.getTime()+n),i=Math.min(e.endDate.getTime(),t.endDate.getTime()+n);return Math.max(0,i-r)}function Je(e,t){let n=e[0]?.date,r=t[0]?.date;if(!n||!r)return 0;let i=n.getTime()-r.getTime(),a={shift:0,overlap:-1};for(let n=0;n<t.length;n++){let r=e.reduce((e,r,a)=>e+qe(r,t[a+n]??{},i),0);r>a.overlap&&(a={shift:n,overlap:r})}return a.shift}function Ye(e){let t=oe(e);return t?h(g(f(t),1),`yyyy-MM-dd`):void 0}function Xe(e){let t=Ye(e.from),n=Ye(e.to);return!!t&&t===oe(e.compare_from)||!!n&&n===oe(e.compare_to)}function Ze(e,t){return(e.data??[]).map(e=>({date:S(e.date_start,t),endDate:S(e.date_end,t)}))}function Qe(e,t,n){if(!e||!t?.data)return t;let r=Je(Ze(e,n),Ze(t,n));return r?{...t,data:t.data.slice(r)}:t}var $e=t((()=>{T(),j(),_()}));function et(){let e=b()?.site?.wpcom?.blog_id;if(e)try{let t=window.localStorage.getItem(`jetpack_stats_chart_type_${e}`);return t===`bar`||t===`line`?t:void 0}catch{return}}var tt=t((()=>{y()}));function nt(){return et()??`bar`}var rt,it,at,ot,st,P=t((()=>{a(),we(),j(),tt(),rt=[`hour`,`day`,`week`,`month`],it=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`),counterpartId:`views`,counterpartHidden:!0},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Comment`,`%s Comments`,e,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Like`,`%s Likes`,e,`jetpack-premium-analytics-pkg`)}],at={...ve,elements:Ee(rt)},ot={id:`chartType`,label:r(`Chart type`,`jetpack-premium-analytics-pkg`),type:`jpa/toggle-group`,elements:ie,relevance:`high`,getValue:({item:e})=>e.chartType??nt()},st={attributes:[at,ot],example:{attributes:{}}}}));function ct(e){let t=w(e.from),n=w(e.to);return v(t,m(t))&&v(n,p(n))}function F(e,t,n){return{...e,stat_fields:t,period:n}}function lt(e,t){let n=t===`hour`,i=n&&ct(e),a=(0,s.useCallback)(e=>!n||ut.has(e),[n]),o=(0,s.useMemo)(()=>F(e,n?`views`:`views,visitors`,t),[e,t,n]),c=(0,s.useMemo)(()=>n?F(e,`visitors,likes,comments`,`day`):F(e,`likes,comments,post_titles`,t),[e,t,n]),l=ee(o),u=ee(c,{enabled:!n||i}),d=l.primary.data,f=l.comparison.data,p=l.hasComparison,m=l.timezone,h=u.primary.data,g=u.comparison.data,_=u.hasComparison,v=u.timezone,y=t===`week`&&Xe(e),b=(0,s.useMemo)(()=>y?Qe(d,f,m):f,[y,d,f,m]),x=(0,s.useMemo)(()=>y?Qe(h,g,v):g,[y,h,g,v]),S=l.isError&&!d?.data?.length,C=u.isError&&!h?.data?.length,w=i&&!C,T=(0,s.useMemo)(()=>Ue({views:d,posts:n?void 0:h},m,p?{views:b,posts:_?x:void 0}:void 0),[d,m,b,p,h,x,_,n]),E=(0,s.useMemo)(()=>it.map(e=>{let t=e.id===`views`||e.id===`visitors`&&!n,i=e.id===`views`||e.id===`visitors`,o={...ae({primary:t?d:h,comparison:t?b:x,hasComparison:t?p:_,field:e.id,label:e.label,countLabel:e.countLabel,zone:t?m:v}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,counterpartHidden:`counterpartHidden`in e?e.counterpartHidden:void 0,tooltipExtras:i&&T.length?T:void 0};if(a(e.id))return o;let s=r(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`);return w?{...o,current:[],previous:void 0,seriesUnavailable:s}:{...o,unavailable:s}}),[a,n,w,T,d,b,p,m,h,x,_,v]),{refetch:te}=l,{refetch:D}=u,O=(0,s.useCallback)(()=>{te(),D()},[te,D]),k=S||C&&!n;return{metrics:E,isLoading:l.isLoading||u.isLoading,isFetching:l.isFetching||u.isFetching,isError:k,refetch:O}}var ut,dt=t((()=>{O(),T(),c(),a(),_(),Ke(),$e(),P(),j(),ut=new Set([`views`])}));function ft({chartType:e,interval:t}){let{reportParams:n}=se(),i=D({...n,interval:t},rt),{openPeriod:a}=te(),o=(0,pt.useMemo)(()=>{if(!a)return;let e={from:E(n.from),to:E(n.to)};return t=>{let n=ne(t,i,e,{timeZone:C()});n&&a(n)}},[a,i,n.from,n.to]),{metrics:s,isLoading:c,isFetching:l,isError:u,refetch:d}=lt(n,i),f=r(`Traffic metric`,`jetpack-premium-analytics-pkg`),p=s.find(e=>e.key===`views`),{noPublishedPosts:m,isChecking:h}=Me(!c&&!u&&p?.value===0&&p.current.every(e=>e.value===0||e.value===null)&&(p.previous?.every(e=>e.value===0||e.value===null)??!0));return(0,L.jsx)(`div`,{className:Le.root,children:(0,L.jsx)(fe,{isLoading:c||h,isFetching:l,isError:u,error:{description:r(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},renderLoading:(0,L.jsx)(ge,{}),children:(0,L.jsx)(he,{metrics:s,dataFormat:mt,chartType:e,groupLabel:f,tickResolution:i,onDatumClick:o,empty:m?(0,L.jsx)(ce,{text:r(`You haven't published any posts yet. Get started by creating your first one.`,`jetpack-premium-analytics-pkg`),action:{label:r(`Create post`,`jetpack-premium-analytics-pkg`),href:x(`post-new.php`)}}):(0,L.jsx)(ce,{})})})})}function I({attributes:e={},setError:t}){return(0,L.jsx)(re,{attributes:e,setError:t,options:{from:`/`},children:(0,L.jsx)(ft,{chartType:e.chartType??nt(),interval:e.chartInterval})})}var pt,L,mt,ht=t((()=>{y(),O(),T(),j(),a(),pt=e(n(),1),Ne(),Re(),dt(),P(),L=o(),mt={type:`number`,options:{useMultipliers:!0,decimals:0}}})),gt,_t,vt,yt,bt,xt,St,Ct,wt=t((()=>{gt=`jpa/traffic-chart`,_t=`jpa/trending-up`,vt=`Traffic summary`,yt=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,bt={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},xt=`traffic`,St=`framed`,Ct={name:gt,icon:_t,title:vt,description:yt,help:bt,category:xt,presentation:St}}));function R({withComparison:e,chartType:t}){return(0,B.jsx)(I,{attributes:{reportParams:k(e),chartType:t}})}function z(e){return(0,B.jsx)(I,{attributes:{reportParams:k(!1,e)}})}function Tt({withComparison:e,chartType:t,...n}){return(0,B.jsx)(Se,{...n,widgetType:H,renderModule:V,renderComponent:I,attributes:{reportParams:k(e),chartType:t}})}var B,V,H,Et,U,Dt,W,G,K,q,J,Y,X,Z,Q,$,Ot;t((()=>{O(),be(),_e(),Fe(),pe(),Ce(),je(),le(),De(),ht(),P(),wt(),B=o(),de(),V=`storybook/traffic-chart`,H=xe(Ct,st),Et={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},U={chartType:`line`},Dt={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:I,tags:[`autodocs`],decorators:[Pe,me,Ae],argTypes:{...ke,withComparison:{control:`boolean`},...Et},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range and comparison come from the dashboard controls. The bucket size is the widget's own `chartInterval` attribute, clamped to what the range allows. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; at the hourly grain the second request asks for visitors, likes, and comments in daily buckets, so their cards still show the day totals (skipped for a window that does not cover whole days, such as `Last 24 hours`). Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},W={render:R,args:{withComparison:!1,...U},decorators:[M]},G={render:R,args:{withComparison:!0,...U},decorators:[M]},K={render:R,args:{withComparison:!1,...U,chartType:`bar`},decorators:[M]},q={render:R,args:{withComparison:!0,...U,chartType:`bar`},decorators:[M]},J={render:e=>(0,B.jsx)(Se,{...e,widgetType:H,renderModule:V,renderComponent:I,attributes:{reportParams:k(!1,`last-24-hours`)}}),args:{...Te},argTypes:{...ye}},Y={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[M],beforeEach:()=>(A(`stats/visits`,`loading`),()=>A(`stats/visits`,null))},X={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[M],beforeEach:()=>(A(`stats/visits`,`error`),()=>A(`stats/visits`,null))},Z={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[M],beforeEach:()=>(A(`stats/visits`,`empty`),ue(`/wp/v2/posts`,[{id:1}]),()=>{A(`stats/visits`,null),ue(`/wp/v2/posts`,null)})},Q={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[M],beforeEach:()=>{let e=window.JetpackScriptData;return window.JetpackScriptData={...e,site:{...e?.site,admin_url:`https://example.com/blog/wp-admin/`}},A(`stats/visits`,`empty`),Oe(`/wp/v2/posts`,`empty`),()=>{window.JetpackScriptData=e,A(`stats/visits`,null),Oe(`/wp/v2/posts`,null)}}},$={render:e=>(0,B.jsx)(Tt,{...e}),args:{...Te,withComparison:!0,...U},argTypes:{...ye,withComparison:{control:`boolean`},...Et}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}},Ot=[`Default`,`WithComparison`,`BarChart`,`BarChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`EmptyNoPosts`,`WidgetDashboardWithWidget`]}))();export{K as BarChart,q as BarChartWithComparison,W as Default,Z as Empty,Q as EmptyNoPosts,X as Error,J as Hourly,Y as Loading,$ as WidgetDashboardWithWidget,G as WithComparison,Ot as __namedExportsOrder,Dt as default};