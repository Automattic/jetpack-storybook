import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as ee,t as i}from"./build-module-CbwHEf9N.js";import{Mn as a,On as o,c as s,n as c,w as l}from"./build-module-CDRs4YxF.js";import{$ as u,G as d,K as f,rt as te}from"./report-metric-C_3XGBsp.js";import{Gt as p,o as m,pn as h,t as g}from"./src-C1ZZgwjo.js";import{x as ne}from"./chart-tooltip-DrvQsAuP.js";import{r as re,t as ie}from"./metric-tile-grid-skeleton-B7SRmOw6.js";import{t as ae}from"./widget-state-deUAaMeK.js";import{C as _,D as v,E as y,S as b,T as x,b as S,t as C,w,x as T}from"./src-BAd7jy91.js";var E,D,oe=e((()=>{E=`_root_owpvf_1`,D={root:E}}));function se(){let{reportParams:e}=te(),n=h(e.post_id),r=n>0,{data:i,isLoading:c,isFetching:u,isError:d,error:f,refetch:p}=m(n,(0,ee.useMemo)(()=>({from:e.from,to:e.to,period:`day`,statType:`all`}),[e.from,e.to]),{enabled:r}),g=i?.total,_=[{key:`impressions`,label:t(`Impressions`,`jetpack-premium-analytics-pkg`),icon:o,value:g?.impressions??null},{key:`watch-time`,label:t(`Hours watched`,`jetpack-premium-analytics-pkg`),icon:a,value:g?.watch_time??null,dataFormat:j},{key:`retention-rate`,label:t(`Retention rate`,`jetpack-premium-analytics-pkg`),icon:l,value:g?.retention_rate===void 0?null:g.retention_rate/100,dataFormat:M}];return(0,k.jsx)(`div`,{className:D.root,children:(0,k.jsx)(ae,{isLoading:r&&c,isFetching:u,isError:r&&d,isEmpty:!r||!c&&!d&&!g,error:ne(f,{retryDescription:t(`We couldn't load this video's highlights. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:p}),empty:{icon:s,description:t(r?`No highlights are available for this video.`:`Open a video report to see its highlights here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(ie,{tiles:_.length}),children:(0,k.jsx)(re,{tiles:_,dataFormat:A})})})}function O({attributes:e={}}){return(0,k.jsx)(u,{attributes:e,children:(0,k.jsx)(se,{})})}var k,A,j,M,N=e((()=>{g(),C(),i(),n(),c(),oe(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j={type:`number`,options:{decimals:1}},M={type:`percentage`,options:{decimals:1,signDisplay:`never`}}})),P,F=e((()=>{c(),P={icon:s,attributes:[],example:{attributes:{}}}})),I,L,R,z,B,V,H,U=e((()=>{I=`jpa/video-detail-highlights`,L=`Video highlights`,R=`Impressions, hours watched, and retention rate for the video being viewed over the selected period.`,z={content:`Impressions, hours watched, and retention rate for the video being viewed over the selected period.`},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function W({hasVideoScope:e}){return{reportParams:{...p(!1),...e?{post_id:q}:{}}}}function G(e){return(0,K.jsx)(O,{attributes:W(e)})}function ce({hasVideoScope:e,...t}){return(0,K.jsx)(x,{...t,widgetType:b(H,P),renderModule:J,renderComponent:O,attributes:W({hasVideoScope:e})})}var K,q,J,Y,X,Z,Q,$;e((()=>{g(),d(),y(),_(),S(),N(),F(),U(),K=r(),f(),q=105,J=`storybook/video-detail-highlights`,Y={title:`Packages/Premium Analytics/Widgets/VideoDetailHighlights`,component:O,tags:[`autodocs`],argTypes:{hasVideoScope:{control:`boolean`,description:"Include the `post_id` report param the video detail page seeds from its URL."}},parameters:{docs:{description:{component:"The \"Video highlights\" widget: the selected video's impressions, hours watched, and retention rate over the selected period as metric tiles. One `stats/video/{id}` `statType=all` request returns every metric plus canonical window totals — including the play-weighted retention rate — and is shared with the Views performance widget's chart query. Without a video scope the widget renders a scopeless empty state."}}}},X={render:G,args:{hasVideoScope:!0},decorators:[T]},Z={render:G,args:{hasVideoScope:!1},decorators:[T]},Q={render:e=>(0,K.jsx)(ce,{...e}),args:{...w,widgetWidth:4,widgetHeight:1,hasVideoScope:!0},argTypes:{...v,hasVideoScope:{control:`boolean`,description:"Include the `post_id` report param the video detail page seeds from its URL."}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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