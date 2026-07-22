import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{B as o,I as s,ct as c,n as l,o as u}from"./build-module-DmVuor49.js";import{Zt as d,dt as f,er as p}from"./chart-tooltip-Dp0VEc09.js";import{t as m}from"./metric-tile-grid-DpavyxQI.js";import{M as h,N as g,U as _,z as v}from"./report-metric-4C1kNKUT.js";import{t as y}from"./widget-state-CGtL2PSn.js";import{C as b,S as x,T as S,b as C,t as w,w as T,x as E}from"./src-B0pFHV8V.js";var D,O,k=e((()=>{D=`_root_12rzq_1`,O={root:D}}));function A(e){let t=typeof e==`number`?e:Number.parseInt(e??``,10);return Number.isInteger(t)&&t>0?t:NaN}function j(e,t){for(let n of e?.data??[]){let e=n.items.find(e=>Number(e.id)===t);if(e)return e}}function M(e,t){if(e)return t??null}function N(){let{reportParams:e}=_(),n=A(e.post_id),r=Number.isInteger(n),{primary:a,comparison:l,isLoading:f,isFetching:p,isError:h,refetch:g}=d((0,i.useMemo)(()=>({...e,complete_stats:1,max:0,period:`day`,summarize:1}),[e]),{enabled:r}),v=(0,i.useMemo)(()=>j(a.data,n),[a.data,n]),b=(0,i.useMemo)(()=>j(l.data,n),[l.data,n]),x=e.comp===`1`,S=b?b.retention_rate/100:void 0,C=(0,i.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics`),icon:s,value:v?.plays??0,previousValue:M(x,b?.plays)},{key:`impressions`,label:t(`Impressions`,`jetpack-premium-analytics`),icon:u,value:v?.impressions??0,previousValue:M(x,b?.impressions)},{key:`watch-time`,label:t(`Hours watched`,`jetpack-premium-analytics`),icon:o,value:v?.watch_time??0,previousValue:M(x,b?.watch_time),dataFormat:L},{key:`retention-rate`,label:t(`Retention rate`,`jetpack-premium-analytics`),icon:c,value:(v?.retention_rate??0)/100,previousValue:M(x,S),dataFormat:R}],[v,b,S,x]);return(0,F.jsx)(`div`,{className:O.root,children:(0,F.jsx)(y,{isLoading:r&&f,isFetching:p,isError:r&&!v&&h,isEmpty:!r||!f&&!h&&!v,error:{description:t(`We couldn't load this video's highlights. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:()=>void g()}]},empty:{icon:u,description:t(r?`No highlights are available for this video.`:`Open a video report to see its highlights here.`,`jetpack-premium-analytics`)},children:(0,F.jsx)(m,{tiles:C,dataFormat:I})})})}function P({attributes:e={}}){return(0,F.jsx)(v,{attributes:e,children:(0,F.jsx)(N,{})})}var F,I,L,R,z=e((()=>{f(),w(),a(),n(),l(),k(),F=r(),I={type:`number`,options:{useMultipliers:!0,decimals:0}},L={type:`number`,options:{decimals:1}},R={type:`percentage`,options:{decimals:1,signDisplay:`never`}}})),B,V=e((()=>{n(),l(),B={name:`jpa/video-detail-highlights`,title:t(`Video highlights`,`jetpack-premium-analytics`),help:{content:t(`Views, impressions, hours watched, and retention rate for the video being viewed.`,`jetpack-premium-analytics`)},icon:u,attributes:[],example:{attributes:{}}}}));function H({withComparison:e,hasVideoScope:t}){return{reportParams:{...p(e),...t?{post_id:K}:{}}}}function U(e){return(0,G.jsx)(P,{attributes:H(e)})}function W({withComparison:e,hasVideoScope:t,...n}){return(0,G.jsx)(b,{...n,widgetType:{...B,presentation:`framed`},renderModule:q,renderComponent:P,attributes:H({withComparison:e,hasVideoScope:t})})}var G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),h(),T(),C(),z(),V(),G=r(),g(),K=105,q=`storybook/video-detail-highlights`,J={title:`Packages/Premium Analytics/Widgets/VideoDetailHighlights`,component:P,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasVideoScope:{control:`boolean`,description:"Include the `post_id` report param the video detail page seeds from its URL."}},parameters:{docs:{description:{component:`The "Video highlights" widget: the selected video's views, impressions, hours watched, and retention rate as metric tiles — the video detail page's highlights card. It uses the complete \`stats/video-plays\` range summary and shows period-over-period deltas when comparison is enabled. If the selected video has no comparison row, the tiles keep the comparison layout without inventing a vs-zero delta. Without a video scope the widget renders a scopeless empty state.`}}}},Y={render:U,args:{withComparison:!1,hasVideoScope:!0},decorators:[E]},X={render:U,args:{withComparison:!0,hasVideoScope:!0},decorators:[E]},Z={render:U,args:{withComparison:!1,hasVideoScope:!1},decorators:[E]},Q={render:e=>(0,G.jsx)(W,{...e}),args:{...x,widgetWidth:4,widgetHeight:1,withComparison:!0,hasVideoScope:!0},argTypes:{...S,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasVideoScope:{control:`boolean`,description:"Include the `post_id` report param the video detail page seeds from its URL."}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderVideoDetailHighlights,
  args: {
    withComparison: false,
    hasVideoScope: true
  },
  decorators: [withWidgetCanvas]
}`,...Y.parameters?.docs?.source},description:{story:`Default — the selected video's highlights for the primary period only; the
tiles show no deltas.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderVideoDetailHighlights,
  args: {
    withComparison: true,
    hasVideoScope: true
  },
  decorators: [withWidgetCanvas]
}`,...X.parameters?.docs?.source},description:{story:`WithComparison — the previous-period comparison from the date range picker;
each tile carries a delta computed from the selected video's comparison row.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderVideoDetailHighlights,
  args: {
    withComparison: false,
    hasVideoScope: false
  },
  decorators: [withWidgetCanvas]
}`,...Z.parameters?.docs?.source},description:{story:`NoVideoScope — the widget without a \`post_id\` report param, as when no video
is selected. Renders the scopeless empty state without firing a stats
request.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <VideoDetailHighlightsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    widgetWidth: 4,
    widgetHeight: 1,
    withComparison: true,
    hasVideoScope: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean',
      description: 'Include previous-period comparison report params.'
    },
    hasVideoScope: {
      control: 'boolean',
      description: 'Include the \`post_id\` report param the video detail page seeds from its URL.'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`NoVideoScope`,`WidgetDashboardWithWidget`]}))();export{Y as Default,Z as NoVideoScope,Q as WidgetDashboardWithWidget,X as WithComparison,$ as __namedExportsOrder,J as default};