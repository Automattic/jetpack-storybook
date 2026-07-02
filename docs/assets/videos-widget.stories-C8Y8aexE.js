import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{n as o,o as s}from"./build-module-h3iDQ_Ze.js";import{S as c,Z as l,a as u,l as d,r as f,u as p}from"./hooks-bR6JIJ2S.js";import{I as m,p as h}from"./chart-tooltip-D5n-q6u6.js";import{t as g}from"./leaderboard-chart-Des4mbMj.js";import{i as _}from"./metric-tabs-chart-tmwN9W-6.js";import{n as v,t as y}from"./register-report-mocks-DykSNbFS.js";import{t as b}from"./src-Cy6O7OTg.js";import{i as x,n as S,r as C,t as w}from"./widget-dashboard-with-widget-0jQWwfw4.js";function T(e){return typeof e.label==`string`&&e.label?e.label:r(`Untitled video`,`jetpack-premium-analytics`)}function E(e){return e.id==null?e.link||T(e):String(e.id)}function D(e){return e?.data.flatMap(e=>e.items)??[]}function O(e,t){let n=D(e);if(n.length===0)return[];let r=new Map(D(t).map(e=>[E(e),e.plays])),i=Math.max(...n.map(e=>Math.max(e.plays,r.get(E(e))??0)),1);return n.map(e=>{let t=E(e),n=e.plays,a=r.get(t)??0;return{id:t,label:T(e),currentValue:n,previousValue:a,currentShare:n/i*100,previousShare:a/i*100,delta:h(n,a)}})}var k=t((()=>{b(),i()}));function A({data:e=[],isLoading:t=!1,isRefetching:n=!1,withComparison:i=!1,legendLabels:a}){return t?(0,P.jsx)(_,{}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(g,{data:e,withComparison:i,legendLabels:a,dataFormat:{type:`number`,options:{useMultipliers:!1,decimals:0}},emptyStateIcon:s,emptyStateText:r(`Learn which videos your visitors watch most to understand what keeps them engaged.`,`jetpack-premium-analytics`)}),n&&(0,P.jsx)(_,{})]})}function j({max:e}){let{reportParams:t}=d(),{primary:n,comparison:r,hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:l,error:u,refetch:p}=c((0,N.useMemo)(()=>({...t,max:e}),[t,e])),h=(a||n.isPending)&&!s,g=o&&s,_=n.data,v=r.data,y=(0,N.useMemo)(()=>O(_,v),[_,v]),b=(0,N.useMemo)(()=>m(t),[t]);return f(l,u,p)?null:(0,P.jsx)(A,{data:y,isLoading:h,isRefetching:g,withComparison:i,legendLabels:b})}function M({attributes:e={},setError:t}){return(0,P.jsx)(u,{attributes:e,setError:t,children:(0,P.jsx)(j,{max:I(e.max,F)})})}var N,P,F,I,L=t((()=>{p(),b(),i(),o(),N=e(n(),1),k(),P=a(),F=7,I=(e,t)=>{let n=typeof e==`number`?e:Number.parseInt(e??``,10);return Number.isFinite(n)&&n>=0?n:t}})),R,z=t((()=>{i(),o(),R={name:`jpa/videos`,title:r(`Videos`,`jetpack-premium-analytics`),icon:s,attributes:[{id:`max`,label:r(`Maximum videos`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:7}}}}));function B({withComparison:e}){return(0,H.jsx)(M,{attributes:{max:W,reportParams:l(e)}})}function V({withComparison:e,...t}){return(0,H.jsx)(S,{...t,widgetType:R,renderModule:U,renderComponent:M,attributes:{max:W,reportParams:l(e)}})}var H,U,W,G,K,q,J,Y,X;t((()=>{p(),y(),C(),L(),z(),H=a(),v(),U=`storybook/videos`,W=7,G=e=>(0,H.jsx)(`div`,{style:{width:`100%`,height:`360px`},children:(0,H.jsx)(e,{})}),K={title:`Packages/Premium Analytics/Widgets/Videos`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"Dashboard widget showing the site's most played videos as a leaderboard, sourced from the Jetpack Stats `video-plays` module via `useStatsVideoPlays`, with optional period-over-period comparison. In Storybook the data is served by `registerReportMocks`."}}}},q={render:B,args:{withComparison:!1},decorators:[G]},J={render:B,args:{withComparison:!0},decorators:[G]},Y={render:e=>(0,H.jsx)(V,{...e}),args:{...w,withComparison:!0},argTypes:{...x,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderVideos,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`The widget on its own, current period only.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderVideos,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`Same close-up with each video's period-over-period delta (green for gains,
red for losses) driven by the mocked comparison window.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => <VideosDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean'
    }
  }
}`,...Y.parameters?.docs?.source}}},X=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{q as Default,Y as WidgetDashboardWithWidget,J as WithComparison,X as __namedExportsOrder,K as default};