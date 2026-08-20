import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{On as o,c as s,n as c}from"./build-module-CDRs4YxF.js";import{C as l,Et as u,St as d,bn as f,et as p,t as m,wt as ee}from"./date-fns-Bm9dQUxr.js";import{$ as te,G as ne,K as re,rt as ie}from"./report-metric-BUoHKDb0.js";import{I as h,t as ae}from"./src-BNSVSo09.js";import{Gt as oe,o as g,pn as se,t as _}from"./src-DndNfqv8.js";import{a as ce,o as v,v as y,x as b}from"./chart-tooltip-hTPvqu7H.js";import{r as le,t as ue}from"./metric-tabs-chart-skeleton-BCmpdbDQ.js";import{t as de}from"./widget-state-4iGVY-lb.js";import{C as fe,D as pe,E as me,S as he,T as ge,b as _e,t as x,w as ve,x as S}from"./src-D55L5dnN.js";var C,w,T=e((()=>{C=`_root_12k0b_1`,w={root:C}}));function E(e,t){let n=y(e),r=y(t);if(!(!n||!r))return{from:n,to:r}}function D(e,t){if(e.from>e.to)return[];let n={start:l(e.from),end:l(e.to)},r=u(n);return t===`week`?r=d(n,{weekStartsOn:1}):t===`month`&&(r=ee(n)),r.map((t,n)=>{let i=p(t,`yyyy-MM-dd`),a=r[n+1],o=a?p(f(a,-1),`yyyy-MM-dd`):e.to;return{date:i,from:i<e.from?e.from:i,to:o>e.to?e.to:o}})}function O(e,t){let n=new Map(t.map(e=>[e.date,0]));for(let r of e){let e=r.period.slice(0,10),i=t.find(t=>e>=t.from&&e<=t.to);i&&n.set(i.date,(n.get(i.date)??0)+r.value)}return t.map(e=>({date:h(e.date)??l(e.date),value:n.get(e.date)??0}))}function k(e,t,n){let r=(0,i.useMemo)(()=>E(t.from,t.to),[t.from,t.to]),{data:a,isLoading:o,isFetching:s,isError:c,error:l,refetch:u}=g(e,{from:t.from,to:t.to,period:`day`,statType:`all`},{enabled:!!r});return{current:(0,i.useMemo)(()=>{let e=r?D(r,n):[];return O(a?.data??[],e)},[a,n,r]),isLoading:o,isFetching:s,isError:c,error:l,hasData:!!a,refetch:()=>void u()}}var A=e((()=>{_(),ae(),x(),a(),m()}));function j({granularity:e,chartType:n}){let{reportParams:r}=ie(),a=se(r.post_id),{current:o,isLoading:c,isFetching:l,isError:u,error:d,refetch:f}=k(a,r,e),p=(0,i.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),value:o.reduce((e,t)=>e+t.value,0),current:o}],[o]);return(0,N.jsx)(`div`,{className:w.root,children:(0,N.jsx)(de,{isLoading:c,isFetching:l,isError:u,isEmpty:a<=0,error:b(d,{retryDescription:t(`We couldn't load this video's views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:f}),empty:{icon:s,description:t(`Open a video report to see its views here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,N.jsx)(ue,{}),children:(0,N.jsx)(le,{metrics:p,dataFormat:P,chartType:n})})})}function M({attributes:e={}}){let t=e?.granularity;return(0,N.jsx)(te,{attributes:e,children:(0,N.jsx)(j,{granularity:t===`week`||t===`month`?t:`day`,chartType:e?.chartType===`bar`?`bar`:`line`})})}var N,P,F=e((()=>{_(),x(),a(),n(),c(),T(),A(),N=r(),P={type:`number`,options:{useMultipliers:!0,decimals:0}}})),I,ye=e((()=>{c(),x(),I={icon:o,attributes:[v([`day`,`week`,`month`]),ce()],example:{attributes:{granularity:`day`,chartType:`line`}}}})),L,R,z,B,V,H,U,be=e((()=>{L=`jpa/video-detail-views-performance`,R=`Views performance`,z=`The view trend of the video being viewed over the selected period.`,B={content:`The view trend of the video being viewed over the selected period.`},V=`stats`,H=`framed`,U={name:L,title:R,description:z,help:B,category:V,presentation:H}}));function W({hasVideoScope:e,granularity:t,chartType:n},r=!1){return{granularity:t,chartType:n,reportParams:{...oe(r),...e?{post_id:q}:{}}}}function G(e){return(0,K.jsx)(M,{attributes:W(e)})}function xe({hasVideoScope:e,granularity:t,chartType:n,...r}){return(0,K.jsx)(ge,{...r,widgetType:he(U,I),renderModule:J,renderComponent:M,attributes:W({hasVideoScope:e,granularity:t,chartType:n},!0)})}var K,q,J,Y,X,Z,Q,$;e((()=>{_(),ne(),me(),fe(),_e(),F(),ye(),be(),K=r(),re(),q=105,J=`storybook/video-detail-views-performance`,Y={title:`Packages/Premium Analytics/Widgets/VideoDetailViewsPerformance`,component:M,tags:[`autodocs`],argTypes:{hasVideoScope:{control:`boolean`,description:"Include the `post_id` report param the video detail page seeds from its URL."},granularity:{control:`radio`,options:[`day`,`week`,`month`],description:`The "Group by" toolbar attribute rendered by the widget host.`},chartType:{control:`radio`,options:[`line`,`bar`],description:`The "Chart type" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:'The "Views performance" widget: the scoped video\'s view trend over the dashboard date range as a line chart. The series comes from the `stats/video/{id}` `statType=all` daily history for the selected window (shared with the Video highlights widget\'s query), zero-filled and bucketed client-side per the host-rendered "Group by" control. The video detail page has no comparison control, so comparison report params are ignored. Without a video scope the widget renders a scopeless empty state.'}}}},X={render:G,args:{hasVideoScope:!0,granularity:`day`,chartType:`line`},decorators:[S]},Z={render:G,args:{hasVideoScope:!1,granularity:`day`,chartType:`line`},decorators:[S]},Q={render:e=>(0,K.jsx)(xe,{...e}),args:{...ve,widgetWidth:2,widgetHeight:2,hasVideoScope:!0,granularity:`day`},argTypes:{...pe,hasVideoScope:{control:`boolean`,description:"Include the `post_id` report param the video detail page seeds from its URL."},granularity:{control:`radio`,options:[`day`,`week`,`month`],description:`The "Group by" toolbar attribute rendered by the widget host.`}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderVideoDetailViewsPerformance,
  args: {
    hasVideoScope: true,
    granularity: 'day',
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...X.parameters?.docs?.source},description:{story:`Default — the scoped video's views for the selected period: a single
"Views" line.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderVideoDetailViewsPerformance,
  args: {
    hasVideoScope: false,
    granularity: 'day',
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
    granularity: 'day'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    hasVideoScope: {
      control: 'boolean',
      description: 'Include the \`post_id\` report param the video detail page seeds from its URL.'
    },
    granularity: {
      control: 'radio',
      options: ['day', 'week', 'month'],
      description: 'The "Group by" toolbar attribute rendered by the widget host.'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`NoVideoScope`,`WidgetDashboardWithWidget`]}))();export{X as Default,Z as NoVideoScope,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Y as default};