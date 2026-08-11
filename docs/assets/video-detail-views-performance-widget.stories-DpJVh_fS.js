import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{On as o,c as s,n as c}from"./build-module-CDRs4YxF.js";import{C as l,Et as u,St as d,bn as f,et as p,t as m,wt as ee}from"./date-fns-Bm9dQUxr.js";import{$ as te,K as ne,q as re,rt as ie}from"./report-metric-Bbb7oElL.js";import{P as h,t as ae}from"./src-DhTT1cTw.js";import{a as oe}from"./hooks-DI34DigU.js";import{At as se,Nr as ce,Tt as g,hr as le,p as ue,u as _}from"./chart-tooltip-ZJcVPR8D.js";import{t as v}from"./comparative-line-chart-LNJuSwTN.js";import{t as y}from"./widget-state-BBKHOgtr.js";import{C as b,D as de,E as fe,S as pe,T as me,b as he,t as x,w as ge,x as S}from"./src-C478nBfU.js";import{n as _e,t as ve}from"./src-BmyvlLMo.js";var C,w,T,E=e((()=>{C=`_root_1uy8d_3`,w=`_chart_1uy8d_12`,T={root:C,chart:w}}));function D(e,t){let n=_(e),r=_(t);if(!(!n||!r))return{from:n,to:r}}function O(e,t){if(e.from>e.to)return[];let n={start:l(e.from),end:l(e.to)},r=u(n);return t===`week`?r=d(n,{weekStartsOn:1}):t===`month`&&(r=ee(n)),r.map((t,n)=>{let i=p(t,`yyyy-MM-dd`),a=r[n+1],o=a?p(f(a,-1),`yyyy-MM-dd`):e.to;return{date:i,from:i<e.from?e.from:i,to:o>e.to?e.to:o}})}function k(e,t){let n=new Map(t.map(e=>[e.date,0]));for(let r of e){let e=r.period.slice(0,10),i=t.find(t=>e>=t.from&&e<=t.to);i&&n.set(i.date,(n.get(i.date)??0)+r.value)}return t.map(e=>({date:h(e.date)??l(e.date),value:n.get(e.date)??0}))}function A(e,t,n){let r=(0,i.useMemo)(()=>D(t.from,t.to),[t.from,t.to]),{data:a,isLoading:o,isFetching:s,isError:c,error:l,refetch:u}=se(e,{from:t.from,to:t.to,period:`day`,statType:`all`},{enabled:!!r});return{current:(0,i.useMemo)(()=>{let e=r?O(r,n):[];return k(a?.data??[],e)},[a,n,r]),isLoading:o,isFetching:s,isError:c,error:l,hasData:!!a,refetch:()=>void u()}}var j=e((()=>{g(),ae(),x(),a(),m()}));function M({granularity:e}){let{reportParams:n}=ie(),r=ce(n.post_id),{current:a,isLoading:o,isFetching:c,isError:l,error:u,hasData:d,refetch:f}=A(r,n,e),p=(0,i.useMemo)(()=>a.length?[{label:t(`Views`,`jetpack-premium-analytics-pkg`),group:`views`,data:a}]:[],[a]),m=oe(p);return(0,P.jsx)(`div`,{className:T.root,children:(0,P.jsx)(y,{isLoading:o&&!d,isFetching:c,isError:l,isEmpty:r<=0,error:ue(u,{retryDescription:t(`We couldn't load this video's views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:f}),empty:{icon:s,description:t(`Open a video report to see its views here.`,`jetpack-premium-analytics-pkg`)},children:(0,P.jsx)(v,{className:T.chart,series:p,styles:m,dataFormat:F})})})}function N({attributes:e={}}){let t=e?.granularity;return(0,P.jsx)(te,{attributes:e,children:(0,P.jsx)(M,{granularity:t===`week`||t===`month`?t:`day`})})}var P,F,ye=e((()=>{g(),x(),a(),n(),c(),E(),j(),P=r(),F={type:`number`,options:{useMultipliers:!0,decimals:0}}})),I,be=e((()=>{n(),c(),ve(),I={icon:o,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:_e,elements:[{label:t(`By days`,`jetpack-premium-analytics-pkg`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics-pkg`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics-pkg`),value:`month`}],relevance:`high`}],example:{attributes:{granularity:`day`}}}})),L,R,z,B,V,H,U,xe=e((()=>{L=`jpa/video-detail-views-performance`,R=`Views performance`,z=`The view trend of the video being viewed over the selected period.`,B={content:`The view trend of the video being viewed over the selected period.`},V=`stats`,H=`framed`,U={name:L,title:R,description:z,help:B,category:V,presentation:H}}));function W({hasVideoScope:e,granularity:t},n=!1){return{granularity:t,reportParams:{...le(n),...e?{post_id:q}:{}}}}function G(e){return(0,K.jsx)(N,{attributes:W(e)})}function Se({hasVideoScope:e,granularity:t,...n}){return(0,K.jsx)(me,{...n,widgetType:pe(U,I),renderModule:J,renderComponent:N,attributes:W({hasVideoScope:e,granularity:t},!0)})}var K,q,J,Y,X,Z,Q,$;e((()=>{g(),ne(),fe(),b(),he(),ye(),be(),xe(),K=r(),re(),q=105,J=`storybook/video-detail-views-performance`,Y={title:`Packages/Premium Analytics/Widgets/VideoDetailViewsPerformance`,component:N,tags:[`autodocs`],argTypes:{hasVideoScope:{control:`boolean`,description:"Include the `post_id` report param the video detail page seeds from its URL."},granularity:{control:`radio`,options:[`day`,`week`,`month`],description:`The "Group by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:'The "Views performance" widget: the scoped video\'s view trend over the dashboard date range as a line chart. The series comes from the `stats/video/{id}` `statType=all` daily history for the selected window (shared with the Video highlights widget\'s query), zero-filled and bucketed client-side per the host-rendered "Group by" control. The video detail page has no comparison control, so comparison report params are ignored. Without a video scope the widget renders a scopeless empty state.'}}}},X={render:G,args:{hasVideoScope:!0,granularity:`day`},decorators:[S]},Z={render:G,args:{hasVideoScope:!1,granularity:`day`},decorators:[S]},Q={render:e=>(0,K.jsx)(Se,{...e}),args:{...ge,widgetWidth:2,widgetHeight:2,hasVideoScope:!0,granularity:`day`},argTypes:{...de,hasVideoScope:{control:`boolean`,description:"Include the `post_id` report param the video detail page seeds from its URL."},granularity:{control:`radio`,options:[`day`,`week`,`month`],description:`The "Group by" toolbar attribute rendered by the widget host.`}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderVideoDetailViewsPerformance,
  args: {
    hasVideoScope: true,
    granularity: 'day'
  },
  decorators: [withWidgetCanvas]
}`,...X.parameters?.docs?.source},description:{story:`Default — the scoped video's views for the selected period: a single
"Views" line.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderVideoDetailViewsPerformance,
  args: {
    hasVideoScope: false,
    granularity: 'day'
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