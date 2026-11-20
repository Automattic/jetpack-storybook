import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,r as i,t as a}from"./build-module-BXs6jvWf.js";import{t as o}from"./jsx-runtime-CFwixLRt.js";import{j as s,t as c}from"./build-module-Dxhc9xxH.js";import{Sn as l,n as u,wr as d}from"./build-module-j0f5js0M.js";import{m as f,n as p,v as m}from"./build-module-CH9swq6y.js";import{Cn as h,Q as g,j as _,t as v}from"./date-fns-BUjRnB2M.js";import{o as y,r as ee,t as b}from"./src-BgnB_EuX.js";import{r as x,t as S}from"./build-module-t9pLPy0B.js";import{d as C,m as w,t as T}from"./src-CUJg-cBz.js";import{Fn as te,In as ne,Pn as re,pt as ie,t as E,u as ae,wn as oe,xn as D}from"./src-DgrVShoY.js";import{H as se,I as ce,It as le,Mt as ue,Nt as de,bt as fe,f as pe,z as me}from"./charts-provider-CLocvFsk.js";import{t as he}from"./widget-state-DFMNGNCy.js";import{i as O,n as ge,r as _e}from"./with-story-router-Dnw9-9Hh.js";import{t as ve}from"./chart-empty-state-CiiXJXQb.js";import{n as ye,o as be,r as xe,s as k}from"./register-report-mocks-CrVN9qSY.js";import{r as Se,t as Ce}from"./metric-tabs-chart-skeleton-BbGO03U-.js";import{n as we,r as Te,t as Ee}from"./src-BtvqzLpo.js";import{a as De,c as Oe,i as A,l as ke,o as Ae,r as je,s as Me,u as Ne}from"./with-widget-canvas-DXG0CNaW.js";import{n as Pe,t as Fe}from"./force-stats-mock-state-Brf0DcPA.js";import{n as Ie,r as Le,t as Re}from"./with-site-time-zone-Bh39N5LR.js";import{n as ze,t as Be}from"./use-no-published-posts-C88Prncf.js";import{n as Ve,t as He}from"./with-story-period-host-DGzz6vTI.js";function Ue(e,t){let n=e.from??``,i=e.to??``;return te(e.preset,n,i).includes(`hour`)||ne(n,i)>We?{}:t===`line`?{extra:[`day`]}:{unavailable:{intervals:[`day`],hint:r(`Switch to the line chart to see each day.`,`jetpack-premium-analytics-pkg`)}}}var We,Ge=e((()=>{E(),a(),We=366})),Ke,qe,Je=e((()=>{Ke=`_root_sp1nf_1`,qe={root:Ke}}));function Ye(){let e=m(e=>e(x).get(oe,j)===!0,[]),{set:t}=f(x);return[e,(0,Xe.useCallback)(n=>{n!==e&&t(oe,j,n)},[e,t])]}var Xe,j,Ze=e((()=>{O(),p(),S(),Xe=t(n(),1),j=`trafficChartPreviousPeriod`}));function Qe(e,t){let n=e[t];return typeof n==`number`?n:void 0}function M(e,t,n,r){let i=[],a=(e?.data??[]).map(e=>w(e.date_start,t));return(e?.data??[]).forEach((e,o)=>{let s=a[o],c=r?r[o]:s,l=n(e);if(!c||!s||l===void 0)return;let u=w(e.date_end,t),d=u?{endDate:u}:{};i.push(r?{date:c,realDate:s,...d,value:l}:{date:c,...d,value:l})}),{points:i,dates:a}}function $e(e){let t=Qe(e,`views`),n=Qe(e,`visitors`);return t!==void 0&&n!==void 0&&n>0?t/n:void 0}function et(e){return Array.isArray(e.post_titles)?e.post_titles.length:void 0}function tt(e,t,n,r){if(!r)return n;let i=[];return le(e?.data??[],t?.data??[],r).forEach((e,t)=>{e!==void 0&&(i[e]=n[t])}),i}function nt(e,t){return e.filter(e=>e.value!==0||t.some(t=>t.date.getTime()===e.date.getTime()&&t.value!==0))}function rt(e,t,n,i){return[{label:r(`Views per visitor`,`jetpack-premium-analytics-pkg`),icon:l,dataFormat:it,currentReport:e.views,current:M(e.views,t,$e),comparisonReport:n?.views,valueOf:$e,isCount:!1},{label:r(`Posts published`,`jetpack-premium-analytics-pkg`),icon:d,countLabel:at,currentReport:e.posts,current:M(e.posts,t,et),comparisonReport:n?.posts,valueOf:et,isCount:!0}].map(({label:e,icon:n,dataFormat:r,countLabel:a,currentReport:o,current:s,comparisonReport:c,valueOf:l,isCount:u})=>{let d=c?M(c,t,l,tt(o,c,s.dates,i)).points:[],f=u?nt(s.points,d):s.points,p=u?nt(d,s.points):d;return{label:e,icon:n,dataFormat:r,countLabel:a,data:f,previous:p.length?p:void 0}}).filter(e=>e.data.length||e.previous)}var it,at,ot=e((()=>{T(),O(),a(),u(),it={type:`average`},at=e=>i(`%s Post published`,`%s Posts published`,e,`jetpack-premium-analytics-pkg`)}));function st(){let e=y()?.site?.wpcom?.blog_id;return e?`jetpack_stats_chart_type_${e}`:void 0}function ct(){let e=st();if(e)try{let t=window.localStorage.getItem(e);return t===`bar`||t===`line`?t:void 0}catch{return}}function lt(e){let t=st();if(t)try{window.localStorage.setItem(t,e)}catch{}}var ut=e((()=>{b()}));function dt(){return ct()??`bar`}var ft,pt,mt,ht,gt=e((()=>{a(),Ee(),Ge(),ut(),ft=[`hour`,`day`,`week`,`month`,`quarter`,`year`],pt=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`),counterpartId:`views`,counterpartHidden:!0},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Comment`,`%s Comments`,e,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Like`,`%s Likes`,e,`jetpack-premium-analytics-pkg`)}],mt={...we((e,t)=>Ue(e,t.chartType??dt())),elements:Te(ft)},ht={attributes:[mt,{id:`chartType`,getValue:({item:e})=>e.chartType??dt(),setValue:({value:e})=>(lt(e),{chartType:e})}],example:{attributes:{}}}}));function _t(e){let t=C(e.from),n=C(e.to);return _(t,h(t))&&_(n,g(n))}function N(e,t,n){return{...e,stat_fields:t,period:n}}function vt(e,t){let n=t===`hour`,i=n&&_t(e),a=(0,s.useCallback)(e=>!n||yt.has(e),[n]),o=(0,s.useMemo)(()=>N(e,n?`views`:`views,visitors`,t),[e,t,n]),c=(0,s.useMemo)(()=>n?N(e,`visitors,likes,comments`,`day`):N(e,`likes,comments,post_titles`,t),[e,t,n]),l=ie(o),u=ie(c,{enabled:!n||i}),d=l.primary.data,f=l.comparison.data,p=l.hasComparison,m=l.timezone,h=u.primary.data,g=u.comparison.data,_=u.hasComparison,v=u.timezone,{periodStarts:y}=l,ee=l.isError&&!d?.data?.length,b=u.isError&&!h?.data?.length,x=i&&!b,S=(0,s.useMemo)(()=>rt({views:d,posts:n?void 0:h},m,p?{views:f,posts:_?g:void 0}:void 0,y),[d,m,f,p,h,g,_,n,y]),C=(0,s.useMemo)(()=>pt.map(e=>{let t=e.id===`views`||e.id===`visitors`&&!n,i=e.id===`views`||e.id===`visitors`,o={...de({primary:t?d:h,comparison:t?f:g,hasComparison:t?p:_,field:e.id,label:e.label,countLabel:e.countLabel,zone:t?m:v,periodStarts:y}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,counterpartHidden:`counterpartHidden`in e?e.counterpartHidden:void 0,tooltipExtras:i&&S.length?S:void 0};if(a(e.id))return o;let s=r(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`);return x?{...o,current:[],previous:void 0,seriesUnavailable:s}:{...o,unavailable:s}}),[a,n,x,S,d,f,p,m,h,g,_,v,y]),{refetch:w}=l,{refetch:T}=u,te=(0,s.useCallback)(()=>{w(),T()},[w,T]),ne=ee||b&&!n;return{metrics:C,isLoading:l.isLoading||u.isLoading,isFetching:l.isFetching||u.isFetching,isError:ne,csvIsError:l.primary.isError||!n&&u.primary.isError,csvIsPlaceholderData:l.primary.isPlaceholderData||!n&&u.primary.isPlaceholderData,timezone:m,refetch:te}}var yt,bt=e((()=>{E(),T(),c(),a(),v(),ot(),gt(),O(),yt=new Set([`views`])}));function xt({chartType:e,interval:t}){let{reportParams:n}=se(),i=re(),[a,o]=Ye(),s=ae({...n,interval:t},ft,i,Ue(n,e)),c=me(s),{metrics:l,isLoading:u,isFetching:d,isError:f,csvIsError:p,csvIsPlaceholderData:m,timezone:h,refetch:g}=vt(n,s),_=r(`Traffic metric`,`jetpack-premium-analytics-pkg`),v=l.find(e=>e.key===`views`),y=(0,St.useMemo)(()=>v?.current.some(e=>(e.value??0)>0)?ue(l,{zone:h,withTime:s===`hour`,dateLabel:r(`Date`,`jetpack-premium-analytics-pkg`)}):void 0,[l,v,h,s]);pe({csv:y&&{...y,filenamePrefix:`traffic-summary`,hasDateRange:!0,status:{isLoading:u,isFetching:d,isError:p,isPlaceholderData:m}}});let{noPublishedPosts:b,isChecking:x}=ze(!u&&!f&&v?.value===0&&v.current.every(e=>e.value===0||e.value===null)&&(v.previous?.every(e=>e.value===0||e.value===null)??!0));return(0,F.jsx)(`div`,{className:qe.root,children:(0,F.jsx)(he,{isLoading:u||x,isFetching:d,isError:f,error:{description:r(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:g}]},renderLoading:(0,F.jsx)(Ce,{}),children:(0,F.jsx)(Se,{metrics:l,dataFormat:fe,chartType:e,groupLabel:_,tickResolution:s,onDatumClick:c,previousPeriodShown:a,onPreviousPeriodShownChange:o,empty:b?(0,F.jsx)(ve,{text:r(`You haven't published any posts yet. Get started by creating your first one.`,`jetpack-premium-analytics-pkg`),action:{label:r(`Create post`,`jetpack-premium-analytics-pkg`),href:ee(`post-new.php`)}}):(0,F.jsx)(ve,{})})})})}function P({attributes:e={},setError:t}){return(0,F.jsx)(ce,{attributes:e,setError:t,options:{from:`/`},children:(0,F.jsx)(xt,{chartType:e.chartType??dt(),interval:e.chartInterval})})}var St,F,Ct=e((()=>{b(),E(),O(),a(),St=t(n(),1),Be(),Ge(),Je(),Ze(),bt(),gt(),F=o()})),wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt=e((()=>{wt=`jpa/traffic-chart`,Tt=`jpa/trending-up`,Et=`Traffic summary`,Dt=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,Ot={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},kt=`traffic`,At=`framed`,jt=[{id:`chartInterval`},{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],Mt={name:wt,icon:Tt,title:Et,description:Dt,help:Ot,category:kt,presentation:At,attributes:jt}}));function I({withComparison:e,chartType:t}){return(0,R.jsx)(P,{attributes:{reportParams:D(e),chartType:t}})}function L(e){return(0,R.jsx)(P,{attributes:{reportParams:D(!1,e)}})}function Pt({withComparison:e,chartType:t,...n}){return(0,R.jsx)(Oe,{...n,widgetType:B,renderModule:z,renderComponent:P,attributes:{reportParams:D(e),chartType:t}})}var R,z,B,V,H,U,Ft,W,G,K,q,J,Y,X,Z,Q,$,It;e((()=>{E(),ke(),Ae(),He(),ge(),je(),Re(),ye(),Pe(),Ct(),gt(),Nt(),R=o(),xe(),z=`storybook/traffic-chart`,B=De(Mt,ht),V={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},H={chartType:`bar`},U={...Me,widgetWidth:3},Ft={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:P,tags:[`autodocs`],decorators:[Ve,_e,Le],argTypes:{...Ie,withComparison:{control:`boolean`},...V},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs (Views, Visitors, Likes, and Comments) over a comparative chart. The date range and comparison come from the dashboard controls. The bucket size is the widget's own `chartInterval` attribute, clamped to what the range allows. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is drawn too: as a same-color dashed line for `line`, or in gray in a slot beside the current period for `bar`. On the Views and Visitors tabs, `bar` draws visitors inside the views bar, as Jetpack Stats v1 does. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; at the hourly grain the second request asks for visitors, likes, and comments in daily buckets, so their cards still show the day totals (skipped for a window that does not cover whole days, such as `Last 24 hours`). Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},W={render:I,args:{withComparison:!1,...H},decorators:[A]},G={render:I,args:{withComparison:!0,...H},decorators:[A]},K={render:I,args:{withComparison:!1,chartType:`line`},decorators:[A]},q={render:I,args:{withComparison:!0,chartType:`line`},decorators:[A]},J={tags:[`widget-dashboard`],render:e=>(0,R.jsx)(Oe,{...e,widgetType:B,renderModule:z,renderComponent:P,attributes:{reportParams:D(!1,`last-24-hours`)}}),args:{...U},argTypes:{...Ne}},Y={render:()=>L(`last-90-days`),tags:[`!autodocs`],decorators:[A],beforeEach:()=>(k(`stats/visits`,`loading`),()=>k(`stats/visits`,null))},X={render:()=>L(`last-7-days`),tags:[`!autodocs`],decorators:[A],beforeEach:()=>(k(`stats/visits`,`error`),()=>k(`stats/visits`,null))},Z={render:()=>L(`last-365-days`),tags:[`!autodocs`],decorators:[A],beforeEach:()=>(k(`stats/visits`,`empty`),be(`/wp/v2/posts`,[{id:1}]),()=>{k(`stats/visits`,null),be(`/wp/v2/posts`,null)})},Q={render:()=>L(`last-365-days`),tags:[`!autodocs`],decorators:[A],beforeEach:()=>{let e=window.JetpackScriptData;return window.JetpackScriptData={...e,site:{...e?.site,admin_url:`https://example.com/blog/wp-admin/`}},k(`stats/visits`,`empty`),Fe(`/wp/v2/posts`,`empty`),()=>{window.JetpackScriptData=e,k(`stats/visits`,null),Fe(`/wp/v2/posts`,null)}}},$={tags:[`widget-dashboard`],render:e=>(0,R.jsx)(Pt,{...e}),args:{...U,withComparison:!0,...H},argTypes:{...Ne,withComparison:{control:`boolean`},...V}},It=[`Default`,`WithComparison`,`LineChart`,`LineChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`EmptyNoPosts`,`WidgetDashboardWithWidget`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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