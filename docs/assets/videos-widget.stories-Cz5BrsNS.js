import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DQ5lAs4a.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{c as o,n as s}from"./build-module-C3k6FW0l.js";import{A as c,Ct as l,a as u,d,f,s as p}from"./hooks-CELVii9l.js";import{D as m,J as h}from"./chart-tooltip-DM1zgRPv.js";import{t as g}from"./leaderboard-chart-D9Q4zRKP.js";import{i as _}from"./metric-tabs-chart-DI3ZuG_8.js";import{n as v,t as y}from"./register-report-mocks-PKBd8V8f.js";import{i as b,n as x,r as S,t as C}from"./widget-dashboard-with-widget-Bmc6G9hH.js";import{t as w}from"./src-DBek56bO.js";function T(e){return typeof e.label==`string`&&e.label?e.label:r(`Untitled video`,`jetpack-premium-analytics`)}function E(e){return e.id==null?e.link||T(e):String(e.id)}function D(e){return e?.data.flatMap(e=>e.items)??[]}function O(e,t){let n=D(e);if(n.length===0)return[];let r=new Map(D(t).map(e=>[E(e),e.plays])),i=Math.max(...n.map(e=>Math.max(e.plays,r.get(E(e))??0)),1);return n.map(e=>{let t=E(e),n=e.plays,a=r.get(t)??0;return{id:t,label:T(e),currentValue:n,previousValue:a,currentShare:n/i*100,previousShare:a/i*100,delta:m(n,a)}})}var k=t((()=>{w(),i()}));function A({data:e=[],isLoading:t=!1,isRefetching:n=!1,withComparison:i=!1,legendLabels:a}){return t?(0,P.jsx)(_,{}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(g,{data:e,withComparison:i,legendLabels:a,dataFormat:{type:`number`,options:{useMultipliers:!1,decimals:0}},emptyStateIcon:o,emptyStateText:r(`Learn which videos your visitors watch most to understand what keeps them engaged.`,`jetpack-premium-analytics`)}),n&&(0,P.jsx)(_,{})]})}function j({max:e}){let{reportParams:t}=d(),{primary:n,comparison:r,hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:l,error:f,refetch:p}=c((0,N.useMemo)(()=>({...t,max:e}),[t,e])),m=(a||n.isPending)&&!s,g=o&&s,_=n.data,v=r.data,y=(0,N.useMemo)(()=>O(_,v),[_,v]),b=(0,N.useMemo)(()=>h(t),[t]);return u(l,f,p)?null:(0,P.jsx)(A,{data:y,isLoading:m,isRefetching:g,withComparison:i,legendLabels:b})}function M({attributes:e={},setError:t}){return(0,P.jsx)(p,{attributes:e,setError:t,children:(0,P.jsx)(j,{max:I(e.max,F)})})}var N,P,F,I,L=t((()=>{f(),w(),i(),s(),N=e(n(),1),k(),P=a(),F=7,I=(e,t)=>{let n=typeof e==`number`?e:Number.parseInt(e??``,10);return Number.isFinite(n)&&n>=0?n:t}})),R,z=t((()=>{i(),s(),R={name:`jpa/videos`,title:r(`Videos`,`jetpack-premium-analytics`),icon:o,attributes:[{id:`max`,label:r(`Maximum videos`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:7}}}}));function B({withComparison:e}){return(0,H.jsx)(M,{attributes:{max:W,reportParams:l(e)}})}function V({withComparison:e,...t}){return(0,H.jsx)(x,{...t,widgetType:R,renderModule:U,renderComponent:M,attributes:{max:W,reportParams:l(e)}})}var H,U,W,G,K,q,J,Y,X;t((()=>{f(),y(),S(),L(),z(),H=a(),v(),U=`storybook/videos`,W=7,G=e=>(0,H.jsx)(`div`,{style:{width:`100%`,height:`360px`},children:(0,H.jsx)(e,{})}),K={title:`Packages/Premium Analytics/Widgets/Videos`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"Dashboard widget showing the site's most played videos as a leaderboard, sourced from the Jetpack Stats `video-plays` module via `useStatsVideoPlays`, with optional period-over-period comparison. In Storybook the data is served by `registerReportMocks`."}}}},q={render:B,args:{withComparison:!1},decorators:[G]},J={render:B,args:{withComparison:!0},decorators:[G]},Y={render:e=>(0,H.jsx)(V,{...e}),args:{...C,withComparison:!0},argTypes:{...b,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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