import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as ee,t as i}from"./build-module-CbwHEf9N.js";import{Mn as te,On as a,c as o,n as s,w as c}from"./build-module-CDRs4YxF.js";import{$ as l,K as u,q as d,rt as ne}from"./report-metric-BJgGpKoK.js";import{At as f,Nr as p,Tt as m,hr as h,p as g}from"./chart-tooltip-CQp-WaAi.js";import{t as _}from"./metric-tile-grid-C5vAPGAK.js";import{C as v,D as re,E as ie,S as ae,T as y,b,t as x,w as S,x as C}from"./src-F3XMhKNo.js";import{t as w}from"./widget-state-CXD8Hl_N.js";var T,E,D=e((()=>{T=`_root_owpvf_1`,E={root:T}}));function oe(){let{reportParams:e}=ne(),n=p(e.post_id),r=n>0,{data:i,isLoading:s,isFetching:l,isError:u,error:d,refetch:m}=f(n,(0,ee.useMemo)(()=>({from:e.from,to:e.to,period:`day`,statType:`all`}),[e.from,e.to]),{enabled:r}),h=i?.total,v=[{key:`impressions`,label:t(`Impressions`,`jetpack-premium-analytics-pkg`),icon:a,value:h?.impressions??null},{key:`watch-time`,label:t(`Hours watched`,`jetpack-premium-analytics-pkg`),icon:te,value:h?.watch_time??null,dataFormat:j},{key:`retention-rate`,label:t(`Retention rate`,`jetpack-premium-analytics-pkg`),icon:c,value:h?.retention_rate===void 0?null:h.retention_rate/100,dataFormat:M}];return(0,k.jsx)(`div`,{className:E.root,children:(0,k.jsx)(w,{isLoading:r&&s,isFetching:l,isError:r&&u,isEmpty:!r||!s&&!u&&!h,error:g(d,{retryDescription:t(`We couldn't load this video's highlights. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:m}),empty:{icon:o,description:t(r?`No highlights are available for this video.`:`Open a video report to see its highlights here.`,`jetpack-premium-analytics-pkg`)},children:(0,k.jsx)(_,{tiles:v,dataFormat:A})})})}function O({attributes:e={}}){return(0,k.jsx)(l,{attributes:e,children:(0,k.jsx)(oe,{})})}var k,A,j,M,se=e((()=>{m(),x(),i(),n(),s(),D(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j={type:`number`,options:{decimals:1}},M={type:`percentage`,options:{decimals:1,signDisplay:`never`}}})),N,P=e((()=>{s(),N={icon:o,attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,H=e((()=>{F=`jpa/video-detail-highlights`,I=`Video highlights`,L=`Impressions, hours watched, and retention rate for the video being viewed over the selected period.`,R={content:`Impressions, hours watched, and retention rate for the video being viewed over the selected period.`},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function U({hasVideoScope:e}){return{reportParams:{...h(!1),...e?{post_id:q}:{}}}}function W(e){return(0,K.jsx)(O,{attributes:U(e)})}function G({hasVideoScope:e,...t}){return(0,K.jsx)(y,{...t,widgetType:ae(V,N),renderModule:J,renderComponent:O,attributes:U({hasVideoScope:e})})}var K,q,J,Y,X,Z,Q,$;e((()=>{m(),u(),ie(),v(),b(),se(),P(),H(),K=r(),d(),q=105,J=`storybook/video-detail-highlights`,Y={title:`Packages/Premium Analytics/Widgets/VideoDetailHighlights`,component:O,tags:[`autodocs`],argTypes:{hasVideoScope:{control:`boolean`,description:"Include the `post_id` report param the video detail page seeds from its URL."}},parameters:{docs:{description:{component:"The \"Video highlights\" widget: the selected video's impressions, hours watched, and retention rate over the selected period as metric tiles. One `stats/video/{id}` `statType=all` request returns every metric plus canonical window totals — including the play-weighted retention rate — and is shared with the Views performance widget's chart query. Without a video scope the widget renders a scopeless empty state."}}}},X={render:W,args:{hasVideoScope:!0},decorators:[C]},Z={render:W,args:{hasVideoScope:!1},decorators:[C]},Q={render:e=>(0,K.jsx)(G,{...e}),args:{...S,widgetWidth:4,widgetHeight:1,hasVideoScope:!0},argTypes:{...re,hasVideoScope:{control:`boolean`,description:"Include the `post_id` report param the video detail page seeds from its URL."}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderVideoDetailHighlights,
  args: {
    hasVideoScope: true
  },
  decorators: [withWidgetCanvas]
}`,...X.parameters?.docs?.source},description:{story:`Default — the selected video's highlight metrics.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderVideoDetailHighlights,
  args: {
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
    hasVideoScope: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    hasVideoScope: {
      control: 'boolean',
      description: 'Include the \`post_id\` report param the video detail page seeds from its URL.'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`NoVideoScope`,`WidgetDashboardWithWidget`]}))();export{X as Default,Z as NoVideoScope,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Y as default};