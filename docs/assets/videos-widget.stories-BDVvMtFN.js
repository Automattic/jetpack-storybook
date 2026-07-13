import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DQ5lAs4a.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{c as o,n as s}from"./build-module-_6UNQmiR.js";import{Dt as c,M as l,a as u,d,p as f,s as p}from"./hooks-nDwlSKNp.js";import{F as m,a as h,i as g,nt as _,o as v}from"./chart-tooltip-CjVpj9Ob.js";import{t as y}from"./leaderboard-chart-Cy6wyqUG.js";import{n as b}from"./widget-loading-overlay-D21I_rx2.js";import{n as x,t as S}from"./register-report-mocks-DmDWQd85.js";import{i as C,n as w,r as T,t as E}from"./widget-dashboard-with-widget-BvRC0isd.js";import{t as D}from"./src-OrS5Ww1p.js";function O(e=[]){if(e.length===0)return{data:[],hasComparison:!1};let t=e.map(e=>({id:h(e),label:v(e),currentValue:e.plays,previousValue:e.previousPlays})),n=t.some(e=>e.previousValue!==void 0),r=Math.max(...t.map(e=>Math.max(e.currentValue,e.previousValue??0)),1);return{data:t.map(e=>({...e,currentShare:e.currentValue/r*100,previousShare:e.previousValue===void 0?void 0:e.previousValue/r*100,delta:e.previousValue===void 0?void 0:m(e.currentValue,e.previousValue)})),hasComparison:n}}var k=t((()=>{D()})),A,j=t((()=>{i(),s(),A={name:`jpa/videos`,title:r(`Videos`,`jetpack-premium-analytics`),icon:o,attributes:[{id:`max`,label:r(`Maximum videos`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:7}}}}));function M({data:e=[],isLoading:t=!1,isRefetching:n=!1,withComparison:i=!1,legendLabels:a}){return t?(0,I.jsx)(b,{}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(y,{data:e,withComparison:i,legendLabels:a,dataFormat:{type:`number`,options:{useMultipliers:!1,decimals:0}},emptyStateIcon:o,emptyStateText:r(`Learn which videos your visitors watch most to understand what keeps them engaged.`,`jetpack-premium-analytics`)}),n&&(0,I.jsx)(b,{})]})}function N({max:e}){let{reportParams:t}=d(),{primary:n,comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:c,error:f,refetch:p}=l((0,F.useMemo)(()=>({...t,max:e}),[t,e]),{maxRows:e}),m=(a||n.isPending)&&!s,h=o&&s,{data:g}=(0,F.useMemo)(()=>O(r?.rows??[]),[r]),v=i,y=(0,F.useMemo)(()=>_(t),[t]);return u(c,f,p)?null:(0,I.jsx)(M,{data:g,isLoading:m,isRefetching:h,withComparison:v,legendLabels:y})}function P({attributes:e={},setError:t}){return(0,I.jsx)(p,{attributes:e,setError:t,children:(0,I.jsx)(N,{max:g(e.max,7)})})}var F,I,L=t((()=>{f(),D(),i(),s(),F=e(n(),1),k(),j(),I=a()}));function R({withComparison:e}){return(0,B.jsx)(P,{attributes:{max:7,reportParams:c(e)}})}function z({withComparison:e,...t}){return(0,B.jsx)(w,{...t,widgetType:A,renderModule:V,renderComponent:P,attributes:{max:7,reportParams:c(e)}})}var B,V,H,U,W,G,K,q;t((()=>{f(),S(),T(),L(),j(),B=a(),x(),V=`storybook/videos`,H=e=>(0,B.jsx)(`div`,{style:{width:`100%`,height:`360px`},children:(0,B.jsx)(e,{})}),U={title:`Packages/Premium Analytics/Widgets/Videos`,component:P,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"Dashboard widget showing the site's most played videos as a leaderboard, sourced from the Jetpack Stats `video-plays` module via `useStatsVideoPlays`, with optional period-over-period comparison. In Storybook the data is served by `registerReportMocks`."}}}},W={render:R,args:{withComparison:!1},decorators:[H]},G={render:R,args:{withComparison:!0},decorators:[H]},K={render:e=>(0,B.jsx)(z,{...e}),args:{...E,withComparison:!0},argTypes:{...C,withComparison:{control:`boolean`}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: renderVideos,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...W.parameters?.docs?.source},description:{story:`The widget on its own, current period only.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderVideos,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`Same close-up with each video's period-over-period delta (green for gains,
red for losses) driven by the mocked comparison window.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{W as Default,K as WidgetDashboardWithWidget,G as WithComparison,q as __namedExportsOrder,U as default};