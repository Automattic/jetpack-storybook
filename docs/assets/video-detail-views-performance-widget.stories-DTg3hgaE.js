import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{On as o,c as s,n as c}from"./build-module-CDRs4YxF.js";import{C as l,Et as u,Ot as d,nt as f,t as ee,wn as te,wt as ne}from"./date-fns-C16LGmyW.js";import{b as p,g as m}from"./hooks-Cze9X4rY.js";import{I as h,t as g}from"./src-Cd0g8CQG.js";import{o as re,qt as ie,t as _,tn as ae,vn as oe}from"./src-DDoJHnj-.js";import{F as se,M as v,k as ce,u as le}from"./chart-tooltip-C7siT1Xc.js";import{r as ue,t as de}from"./metric-tabs-chart-skeleton-DFuRLQe-.js";import{K as fe,q as pe}from"./report-metric-LO3rXTYj.js";import{t as me}from"./widget-state-ByA5LOg0.js";import{C as he,D as ge,E as _e,S as ve,T as ye,b as be,t as y,w as xe,x as b}from"./src-AkqFNX9W.js";import{n as x,t as S}from"./preset-for-story-interval-BtXJqN44.js";var C,w,T=e((()=>{C=`_root_12k0b_1`,w={root:C}}));function E(e,t){let n=v(e),r=v(t);if(!(!n||!r))return{from:n,to:r}}function D(e,t){if(e.from>e.to)return[];let n={start:l(e.from),end:l(e.to)},r=d(n);return t===`week`?r=ne(n,{weekStartsOn:1}):t===`month`&&(r=u(n)),r.map((t,n)=>{let i=f(t,`yyyy-MM-dd`),a=r[n+1],o=a?f(te(a,-1),`yyyy-MM-dd`):e.to;return{date:i,from:i<e.from?e.from:i,to:o>e.to?e.to:o}})}function O(e,t){let n=new Map(t.map(e=>[e.date,0]));for(let r of e){let e=r.period.slice(0,10),i=t.find(t=>e>=t.from&&e<=t.to);i&&n.set(i.date,(n.get(i.date)??0)+r.value)}return t.map(e=>({date:h(e.date)??l(e.date),value:n.get(e.date)??0}))}function k(e,t,n){let r=(0,i.useMemo)(()=>E(t.from,t.to),[t.from,t.to]),{data:a,isLoading:o,isFetching:s,isError:c,error:l,refetch:u}=re(e,{from:t.from,to:t.to,period:`day`,statType:`all`},{enabled:!!r});return{current:(0,i.useMemo)(()=>{let e=r?D(r,n):[];return O(a?.data??[],e)},[a,n,r]),isLoading:o,isFetching:s,isError:c,error:l,hasData:!!a,refetch:()=>void u()}}var A=e((()=>{_(),g(),y(),a(),ee()}));function j({chartType:e}){let{reportParams:n}=p(),r=oe(n.post_id),{current:a,isLoading:o,isFetching:c,isError:l,error:u,refetch:d}=k(r,n,ce(n.interval,ae)),f=(0,i.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),value:a.reduce((e,t)=>e+t.value,0),current:a}],[a]);return(0,N.jsx)(`div`,{className:w.root,children:(0,N.jsx)(me,{isLoading:o,isFetching:c,isError:l,isEmpty:r<=0,error:se(u,{retryDescription:t(`We couldn't load this video's views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:d}),empty:{icon:s,description:t(`Open a video report to see its views here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,N.jsx)(de,{}),children:(0,N.jsx)(ue,{metrics:f,dataFormat:P,chartType:e})})})}function M({attributes:e={}}){return(0,N.jsx)(m,{attributes:e,children:(0,N.jsx)(j,{chartType:e?.chartType===`bar`?`bar`:`line`})})}var N,P,Se=e((()=>{_(),y(),a(),n(),c(),T(),A(),N=r(),P={type:`number`,options:{useMultipliers:!0,decimals:0}}})),F,Ce=e((()=>{c(),y(),F={icon:o,attributes:[le()],example:{attributes:{chartType:`line`}}}})),I,L,R,z,B,V,H,we=e((()=>{I=`jpa/video-detail-views-performance`,L=`Views performance`,R=`The view trend of the video being viewed over the selected period.`,z={content:`The view trend of the video being viewed over the selected period.`},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U({hasVideoScope:e,interval:t,chartType:n},r=!1){return{chartType:n,reportParams:{...ie(r,x(t)),interval:t,...e?{post_id:q}:{}}}}function W(e){return(0,K.jsx)(M,{attributes:U(e)})}function G({hasVideoScope:e,interval:t,chartType:n,...r}){return(0,K.jsx)(ye,{...r,widgetType:ve(H,F),renderModule:J,renderComponent:M,attributes:U({hasVideoScope:e,interval:t,chartType:n},!0)})}var K,q,J,Y,X,Z,Q,$;e((()=>{_(),fe(),_e(),he(),S(),be(),Se(),Ce(),we(),K=r(),pe(),q=105,J=`storybook/video-detail-views-performance`,Y={title:`Packages/Premium Analytics/Widgets/VideoDetailViewsPerformance`,component:M,tags:[`autodocs`],argTypes:{hasVideoScope:{control:`boolean`,description:"Include the `post_id` report param the video detail page seeds from its URL."},interval:{control:`radio`,options:[`day`,`week`,`month`],description:`The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.`},chartType:{control:`radio`,options:[`line`,`bar`],description:`The "Chart type" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Views performance\" widget: the scoped video's view trend over the dashboard date range as a line chart. The series comes from the `stats/video/{id}` `statType=all` daily history for the selected window (shared with the Video highlights widget's query), zero-filled and bucketed client-side at the page's chart interval. The video detail page has no comparison control, so comparison report params are ignored. Without a video scope the widget renders a scopeless empty state."}}}},X={render:W,args:{hasVideoScope:!0,interval:`day`,chartType:`line`},decorators:[b]},Z={render:W,args:{hasVideoScope:!1,interval:`day`,chartType:`line`},decorators:[b]},Q={render:e=>(0,K.jsx)(G,{...e}),args:{...xe,widgetWidth:2,widgetHeight:2,hasVideoScope:!0,interval:`day`},argTypes:{...ge,hasVideoScope:{control:`boolean`,description:"Include the `post_id` report param the video detail page seeds from its URL."},interval:{control:`radio`,options:[`day`,`week`,`month`],description:`The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.`}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderVideoDetailViewsPerformance,
  args: {
    hasVideoScope: true,
    interval: 'day',
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...X.parameters?.docs?.source},description:{story:`Default — the scoped video's views for the selected period: a single
"Views" line.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderVideoDetailViewsPerformance,
  args: {
    hasVideoScope: false,
    interval: 'day',
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...Z.parameters?.docs?.source},description:{story:`NoVideoScope — the widget without a \`post_id\` report param, as when added
outside a video detail page. Renders the scopeless empty state without
firing a stats request.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <VideoDetailViewsPerformanceDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    widgetWidth: 2,
    widgetHeight: 2,
    hasVideoScope: true,
    interval: 'day'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    hasVideoScope: {
      control: 'boolean',
      description: 'Include the \`post_id\` report param the video detail page seeds from its URL.'
    },
    interval: {
      control: 'radio',
      options: ['day', 'week', 'month'],
      description: 'The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`NoVideoScope`,`WidgetDashboardWithWidget`]}))();export{X as Default,Z as NoVideoScope,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Y as default};