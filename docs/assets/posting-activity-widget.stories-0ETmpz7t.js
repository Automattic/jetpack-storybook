import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DQ5lAs4a.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{hl as o,n as s}from"./build-module-Bt8gOW8e.js";import{$t as c,R as l,t as u,x as d}from"./date-fns-BnBPtwu2.js";import{n as f,t as p}from"./build-module-DxZ7gYd4.js";import{a as m,n as h}from"./heatmap-chart-D5_rtGUw.js";import{t as ee,y as g}from"./src-CT5b53ej.js";import{Kn as _,Nt as te,ut as v}from"./chart-tooltip-ClIvRUzH.js";import{E as ne,S as y}from"./report-metric-C9QRZwAo.js";import{n as b,t as x}from"./register-report-mocks-CEOd2Lr0.js";import{t as S}from"./widget-state-CkRqQWXE.js";import{S as C,b as w,t as T,x as E,y as D}from"./src-DeeVzTNc.js";var O,k,A,j,M=t((()=>{O=`_root_1x7au_1`,k=`_content_1x7au_9`,A=`_heatmap_1x7au_24`,j={root:O,content:k,heatmap:A}}));function N(){let{reportParams:e}=ne(),{data:t,isLoading:n,isFetching:i,isError:a,refetch:o}=te(e),{data:s,rowLabels:c}=(0,F.useMemo)(()=>m(Object.entries(t??{}).map(([e,t])=>({dateString:e,value:t}))),[t]),l=s.length>0;return(0,I.jsx)(`div`,{className:j.content,children:(0,I.jsx)(S,{isLoading:n,isFetching:i,isError:a&&!l,isEmpty:!l,error:{description:r(`We couldn't load posting activity. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:()=>void o()}]},empty:{icon:g,description:r(`No posts published in this period.`,`jetpack-premium-analytics`)},children:(0,I.jsx)(h,{data:s,rowLabels:c,compact:!0,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,className:j.heatmap,children:(0,I.jsx)(h.Legend,{lessLabel:r(`Fewer Posts`,`jetpack-premium-analytics`),moreLabel:r(`More Posts`,`jetpack-premium-analytics`)})})})})}function P({attributes:e={}}){return(0,I.jsx)(y,{attributes:e,children:(0,I.jsx)(`div`,{className:j.root,children:(0,I.jsx)(N,{})})})}var F,I,L=t((()=>{v(),ee(),T(),i(),F=e(n(),1),M(),I=a()})),R,z=t((()=>{i(),s(),R={name:`jpa/posting-activity`,title:r(`Posting activity`,`jetpack-premium-analytics`),help:{content:r(`How often you publish — a calendar heatmap of posts per day.`,`jetpack-premium-analytics`)},icon:o}}));function B(){let e=c(new Date),t={},n=1337,r=()=>(n=n*16807%2147483647,n/2147483647);for(let n=0;n<G;n++){let i=d(e,n);if(r()<.55)continue;let a=1+Math.floor(r()*5);t[String(l(i))]=a}return{data:t}}function V({withComparison:e}){return(0,U.jsx)(P,{attributes:{reportParams:_(e)}})}function H({withComparison:e,...t}){return(0,U.jsx)(w,{...t,widgetType:R,renderModule:q,renderComponent:P,attributes:{reportParams:_(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{v(),f(),u(),x(),E(),L(),z(),U=a(),b(),W=`/jetpack-premium-analytics/v1/proxy/v1.1/stats/streak`,G=365,K=async(e,t)=>{if(!(e.path??e.url??``).startsWith(W))return t(e);let n=B();return e.parse===!1?new Response(JSON.stringify(n),{status:200,headers:{"Content-Type":`application/json`}}):n},p.use(K),q=`storybook/posting-activity`,J=e=>(0,U.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,U.jsx)(e,{})}),Y={title:`Packages/Premium Analytics/Widgets/PostingActivity`,component:P,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:'The "Posting activity" widget. Renders a calendar (contribution-style) heatmap of the number of posts published per day for the dashboard date range. The `stats/streak` endpoint has no comparison period, so the WithComparison story renders identically to Default — no deltas are shown.'}}}},X={render:V,args:{withComparison:!1},decorators:[J]},Z={render:V,args:{withComparison:!0},decorators:[J]},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...D,withComparison:!0},argTypes:{...C,withComparison:{control:`boolean`}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderPostingActivity,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...X.parameters?.docs?.source},description:{story:`Default populated state — a year of posting activity for the current period.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderPostingActivity,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...Z.parameters?.docs?.source},description:{story:`Comparison state — the date range picker's comparison params are present, but
\`stats/streak\` has no comparison data, so the heatmap renders normally without
fabricated deltas.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <PostingActivityDashboardStory {...args} />,
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{X as Default,Q as WidgetDashboardWithWidget,Z as WithComparison,$ as __namedExportsOrder,Y as default};