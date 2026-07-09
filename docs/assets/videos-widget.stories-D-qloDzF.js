import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DQ5lAs4a.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{c as o,n as s}from"./build-module-_6UNQmiR.js";import{Dt as c,M as l,a as u,d,p as f,s as p}from"./hooks-B-Yl5ZSO.js";import{N as m,a as h,c as g,et as _,i as v,o as y}from"./chart-tooltip-23FVAeHX.js";import{t as b}from"./leaderboard-chart-CoeRInH1.js";import{n as x}from"./widget-loading-overlay-D21I_rx2.js";import{n as S,t as C}from"./register-report-mocks-Dpi3lzNi.js";import{i as w,n as T,r as E,t as D}from"./widget-dashboard-with-widget-qTTFaW62.js";import{t as O}from"./src-CXc1BBq1.js";function k(e,t){let n=g(e);if(n.length===0)return[];let r=new Map(g(t).map(e=>[h(e),e.plays])),i=Math.max(...n.map(e=>Math.max(e.plays,r.get(h(e))??0)),1);return n.map(e=>{let t=h(e),n=e.plays,a=r.get(t)??0;return{id:t,label:y(e),currentValue:n,previousValue:a,currentShare:n/i*100,previousShare:a/i*100,delta:m(n,a)}})}var A=t((()=>{O()})),j,M=t((()=>{i(),s(),j={name:`jpa/videos`,title:r(`Videos`,`jetpack-premium-analytics`),icon:o,attributes:[{id:`max`,label:r(`Maximum videos`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:7}}}}));function N({data:e=[],isLoading:t=!1,isRefetching:n=!1,withComparison:i=!1,legendLabels:a}){return t?(0,L.jsx)(x,{}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(b,{data:e,withComparison:i,legendLabels:a,dataFormat:{type:`number`,options:{useMultipliers:!1,decimals:0}},emptyStateIcon:o,emptyStateText:r(`Learn which videos your visitors watch most to understand what keeps them engaged.`,`jetpack-premium-analytics`)}),n&&(0,L.jsx)(x,{})]})}function P({max:e}){let{reportParams:t}=d(),{primary:n,comparison:r,hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:c,error:f,refetch:p}=l((0,I.useMemo)(()=>({...t,max:e}),[t,e])),m=(a||n.isPending)&&!s,h=o&&s,g=n.data,v=r.data,y=(0,I.useMemo)(()=>k(g,v),[g,v]),b=(0,I.useMemo)(()=>_(t),[t]);return u(c,f,p)?null:(0,L.jsx)(N,{data:y,isLoading:m,isRefetching:h,withComparison:i,legendLabels:b})}function F({attributes:e={},setError:t}){return(0,L.jsx)(p,{attributes:e,setError:t,children:(0,L.jsx)(P,{max:v(e.max,7)})})}var I,L,R=t((()=>{f(),O(),i(),s(),I=e(n(),1),A(),M(),L=a()}));function z({withComparison:e}){return(0,V.jsx)(F,{attributes:{max:7,reportParams:c(e)}})}function B({withComparison:e,...t}){return(0,V.jsx)(T,{...t,widgetType:j,renderModule:H,renderComponent:F,attributes:{max:7,reportParams:c(e)}})}var V,H,U,W,G,K,q,J;t((()=>{f(),C(),E(),R(),M(),V=a(),S(),H=`storybook/videos`,U=e=>(0,V.jsx)(`div`,{style:{width:`100%`,height:`360px`},children:(0,V.jsx)(e,{})}),W={title:`Packages/Premium Analytics/Widgets/Videos`,component:F,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"Dashboard widget showing the site's most played videos as a leaderboard, sourced from the Jetpack Stats `video-plays` module via `useStatsVideoPlays`, with optional period-over-period comparison. In Storybook the data is served by `registerReportMocks`."}}}},G={render:z,args:{withComparison:!1},decorators:[U]},K={render:z,args:{withComparison:!0},decorators:[U]},q={render:e=>(0,V.jsx)(B,{...e}),args:{...D,withComparison:!0},argTypes:{...w,withComparison:{control:`boolean`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderVideos,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`The widget on its own, current period only.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderVideos,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`Same close-up with each video's period-over-period delta (green for gains,
red for losses) driven by the mocked comparison window.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{G as Default,q as WidgetDashboardWithWidget,K as WithComparison,J as __namedExportsOrder,W as default};