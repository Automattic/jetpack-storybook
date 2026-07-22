import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{B as ee,I as te,ct as ne,n as o,o as s}from"./build-module-DmVuor49.js";import{an as re,cr as c,yt as l}from"./chart-tooltip-sTMsgHbZ.js";import{t as ie}from"./metric-tile-grid-CkEvvgtP.js";import{M as u,N as d,U as ae,z as f}from"./report-metric-D5hry_ac.js";import{t as p}from"./widget-state-CSKYcGm6.js";import{C as m,D as h,E as g,S as _,T as oe,b as se,t as ce,w as v,x as y}from"./src-7Fe8UaL9.js";var b,x,S=e((()=>{b=`_root_12rzq_1`,x={root:b}}));function le(e){let t=typeof e==`number`?e:Number.parseInt(e??``,10);return Number.isInteger(t)&&t>0?t:NaN}function C(e,t){for(let n of e?.data??[]){let e=n.items.find(e=>Number(e.id)===t);if(e)return e}}function w(e,t){if(e)return t??null}function T(){let{reportParams:e}=ae(),n=le(e.post_id),r=Number.isInteger(n),{primary:a,comparison:o,isLoading:c,isFetching:l,isError:u,refetch:d}=re((0,i.useMemo)(()=>({...e,complete_stats:1,max:0,period:`day`,summarize:1}),[e]),{enabled:r}),f=(0,i.useMemo)(()=>C(a.data,n),[a.data,n]),m=(0,i.useMemo)(()=>C(o.data,n),[o.data,n]),h=e.comp===`1`,g=m?m.retention_rate/100:void 0,_=(0,i.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics`),icon:te,value:f?.plays??0,previousValue:w(h,m?.plays)},{key:`impressions`,label:t(`Impressions`,`jetpack-premium-analytics`),icon:s,value:f?.impressions??0,previousValue:w(h,m?.impressions)},{key:`watch-time`,label:t(`Hours watched`,`jetpack-premium-analytics`),icon:ee,value:f?.watch_time??0,previousValue:w(h,m?.watch_time),dataFormat:k},{key:`retention-rate`,label:t(`Retention rate`,`jetpack-premium-analytics`),icon:ne,value:(f?.retention_rate??0)/100,previousValue:w(h,g),dataFormat:A}],[f,m,g,h]);return(0,D.jsx)(`div`,{className:x.root,children:(0,D.jsx)(p,{isLoading:r&&c,isFetching:l,isError:r&&!f&&u,isEmpty:!r||!c&&!u&&!f,error:{description:t(`We couldn't load this video's highlights. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:()=>void d()}]},empty:{icon:s,description:t(r?`No highlights are available for this video.`:`Open a video report to see its highlights here.`,`jetpack-premium-analytics`)},children:(0,D.jsx)(ie,{tiles:_,dataFormat:O})})})}function E({attributes:e={}}){return(0,D.jsx)(f,{attributes:e,children:(0,D.jsx)(T,{})})}var D,O,k,A,j=e((()=>{l(),ce(),a(),n(),o(),S(),D=r(),O={type:`number`,options:{useMultipliers:!0,decimals:0}},k={type:`number`,options:{decimals:1}},A={type:`percentage`,options:{decimals:1,signDisplay:`never`}}})),M,N=e((()=>{o(),M={icon:s,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,V=e((()=>{P=`jpa/video-detail-highlights`,F=`Video highlights`,I=`Views, impressions, hours watched, and retention rate for the video being viewed.`,L={content:`Views, impressions, hours watched, and retention rate for the video being viewed.`},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function H({withComparison:e,hasVideoScope:t}){return{reportParams:{...c(e),...t?{post_id:K}:{}}}}function U(e){return(0,G.jsx)(E,{attributes:H(e)})}function W({withComparison:e,hasVideoScope:t,...n}){return(0,G.jsx)(oe,{...n,widgetType:_(B,M),renderModule:q,renderComponent:E,attributes:H({withComparison:e,hasVideoScope:t})})}var G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),u(),g(),m(),se(),j(),N(),V(),G=r(),d(),K=105,q=`storybook/video-detail-highlights`,J={title:`Packages/Premium Analytics/Widgets/VideoDetailHighlights`,component:E,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasVideoScope:{control:`boolean`,description:"Include the `post_id` report param the video detail page seeds from its URL."}},parameters:{docs:{description:{component:`The "Video highlights" widget: the selected video's views, impressions, hours watched, and retention rate as metric tiles — the video detail page's highlights card. It uses the complete \`stats/video-plays\` range summary and shows period-over-period deltas when comparison is enabled. If the selected video has no comparison row, the tiles keep the comparison layout without inventing a vs-zero delta. Without a video scope the widget renders a scopeless empty state.`}}}},Y={render:U,args:{withComparison:!1,hasVideoScope:!0},decorators:[y]},X={render:U,args:{withComparison:!0,hasVideoScope:!0},decorators:[y]},Z={render:U,args:{withComparison:!1,hasVideoScope:!1},decorators:[y]},Q={render:e=>(0,G.jsx)(W,{...e}),args:{...v,widgetWidth:4,widgetHeight:1,withComparison:!0,hasVideoScope:!0},argTypes:{...h,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasVideoScope:{control:`boolean`,description:"Include the `post_id` report param the video detail page seeds from its URL."}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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