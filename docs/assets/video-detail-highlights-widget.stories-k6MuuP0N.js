import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{Mn as ee,On as o,c as s,n as c,w as te}from"./build-module-CDRs4YxF.js";import{b as l,g as u}from"./hooks-csw1yzhh.js";import{gn as ne,o as re,qt as d,t as f}from"./src-DPAsbAPk.js";import{T as p}from"./chart-tooltip-tvDs7kYz.js";import{r as m,t as ie}from"./metric-tile-grid-skeleton-DJfxTBuh.js";import{K as h,q as g}from"./report-metric-4nQdJxyx.js";import{t as _}from"./widget-state-C3zpjw_k.js";import{C as v,D as ae,E as oe,S as y,T as b,b as x,t as S,w as C,x as w}from"./src-DnQmivfN.js";var T,E,D=e((()=>{T=`_root_owpvf_1`,E={root:T}}));function se(){let{reportParams:e}=l(),n=ne(e.post_id),r=n>0,{data:a,isLoading:c,isFetching:u,isError:d,error:f,refetch:h}=re(n,(0,i.useMemo)(()=>({from:e.from,to:e.to,period:`day`,statType:`all`}),[e.from,e.to]),{enabled:r}),g=a?.total,v=[{key:`impressions`,label:t(`Impressions`,`jetpack-premium-analytics-pkg`),icon:o,value:g?.impressions??null},{key:`watch-time`,label:t(`Hours watched`,`jetpack-premium-analytics-pkg`),icon:ee,value:g?.watch_time??null,dataFormat:j},{key:`retention-rate`,label:t(`Retention rate`,`jetpack-premium-analytics-pkg`),icon:te,value:g?.retention_rate===void 0?null:g.retention_rate/100,dataFormat:M}];return(0,k.jsx)(`div`,{className:E.root,children:(0,k.jsx)(_,{isLoading:r&&c,isFetching:u,isError:r&&d,isEmpty:!r||!c&&!d&&!g,error:p(f,{retryDescription:t(`We couldn't load this video's highlights. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:h}),empty:{icon:s,description:t(r?`No highlights are available for this video.`:`Open a video report to see its highlights here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(ie,{tiles:v.length}),children:(0,k.jsx)(m,{tiles:v,dataFormat:A})})})}function O({attributes:e={}}){return(0,k.jsx)(u,{attributes:e,children:(0,k.jsx)(se,{})})}var k,A,j,M,N=e((()=>{f(),S(),a(),n(),c(),D(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j={type:`number`,options:{decimals:1}},M={type:`percentage`,options:{decimals:1,signDisplay:`never`}}})),P,F=e((()=>{c(),P={icon:s,attributes:[],example:{attributes:{}}}})),I,L,R,z,B,V,H,U=e((()=>{I=`jpa/video-detail-highlights`,L=`Video highlights`,R=`Impressions, hours watched, and retention rate for the video being viewed over the selected period.`,z={content:`Impressions, hours watched, and retention rate for the video being viewed over the selected period.`},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function W({hasVideoScope:e}){return{reportParams:{...d(!1),...e?{post_id:q}:{}}}}function G(e){return(0,K.jsx)(O,{attributes:W(e)})}function ce({hasVideoScope:e,...t}){return(0,K.jsx)(b,{...t,widgetType:y(H,P),renderModule:J,renderComponent:O,attributes:W({hasVideoScope:e})})}var K,q,J,Y,X,Z,Q,$;e((()=>{f(),h(),oe(),v(),x(),N(),F(),U(),K=r(),g(),q=105,J=`storybook/video-detail-highlights`,Y={title:`Packages/Premium Analytics/Widgets/VideoDetailHighlights`,component:O,tags:[`autodocs`],argTypes:{hasVideoScope:{control:`boolean`,description:"Include the `post_id` report param the video detail page seeds from its URL."}},parameters:{docs:{description:{component:"The \"Video highlights\" widget: the selected video's impressions, hours watched, and retention rate over the selected period as metric tiles. One `stats/video/{id}` `statType=all` request returns every metric plus canonical window totals — including the play-weighted retention rate — and is shared with the Views performance widget's chart query. Without a video scope the widget renders a scopeless empty state."}}}},X={render:G,args:{hasVideoScope:!0},decorators:[w]},Z={render:G,args:{hasVideoScope:!1},decorators:[w]},Q={render:e=>(0,K.jsx)(ce,{...e}),args:{...C,widgetWidth:4,widgetHeight:1,hasVideoScope:!0},argTypes:{...ae,hasVideoScope:{control:`boolean`,description:"Include the `post_id` report param the video detail page seeds from its URL."}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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