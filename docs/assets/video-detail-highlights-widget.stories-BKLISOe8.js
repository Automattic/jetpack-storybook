import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{Mn as o,On as ee,c as s,n as c,w as te}from"./build-module-CDRs4YxF.js";import{$ as l,G as u,K as d,rt as ne}from"./report-metric-CCPQYdqJ.js";import{Cr as f,Nt as p,Rt as m,Ur as h,x as re}from"./chart-tooltip-C9h8NqvM.js";import{t as ie}from"./metric-tile-grid-C8epSnLQ.js";import{t as ae}from"./widget-state-BAxIUmcO.js";import{C as g,D as _,E as v,S as y,T as b,b as x,t as S,w as C,x as w}from"./src-DYZyFkxc.js";var T,E,oe=e((()=>{T=`_root_owpvf_1`,E={root:T}}));function se(){let{reportParams:e}=ne(),n=h(e.post_id),r=n>0,{data:a,isLoading:c,isFetching:l,isError:u,error:d,refetch:f}=m(n,(0,i.useMemo)(()=>({from:e.from,to:e.to,period:`day`,statType:`all`}),[e.from,e.to]),{enabled:r}),p=a?.total,g=[{key:`impressions`,label:t(`Impressions`,`jetpack-premium-analytics-pkg`),icon:ee,value:p?.impressions??null},{key:`watch-time`,label:t(`Hours watched`,`jetpack-premium-analytics-pkg`),icon:o,value:p?.watch_time??null,dataFormat:A},{key:`retention-rate`,label:t(`Retention rate`,`jetpack-premium-analytics-pkg`),icon:te,value:p?.retention_rate===void 0?null:p.retention_rate/100,dataFormat:j}];return(0,O.jsx)(`div`,{className:E.root,children:(0,O.jsx)(ae,{isLoading:r&&c,isFetching:l,isError:r&&u,isEmpty:!r||!c&&!u&&!p,error:re(d,{retryDescription:t(`We couldn't load this video's highlights. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:f}),empty:{icon:s,description:t(r?`No highlights are available for this video.`:`Open a video report to see its highlights here.`,`jetpack-premium-analytics-pkg`)},children:(0,O.jsx)(ie,{tiles:g,dataFormat:k})})})}function D({attributes:e={}}){return(0,O.jsx)(l,{attributes:e,children:(0,O.jsx)(se,{})})}var O,k,A,j,M=e((()=>{p(),S(),a(),n(),c(),oe(),O=r(),k={type:`number`,options:{useMultipliers:!0,decimals:0}},A={type:`number`,options:{decimals:1}},j={type:`percentage`,options:{decimals:1,signDisplay:`never`}}})),N,P=e((()=>{c(),N={icon:s,attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,H=e((()=>{F=`jpa/video-detail-highlights`,I=`Video highlights`,L=`Impressions, hours watched, and retention rate for the video being viewed over the selected period.`,R={content:`Impressions, hours watched, and retention rate for the video being viewed over the selected period.`},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function U({hasVideoScope:e}){return{reportParams:{...f(!1),...e?{post_id:q}:{}}}}function W(e){return(0,K.jsx)(D,{attributes:U(e)})}function G({hasVideoScope:e,...t}){return(0,K.jsx)(b,{...t,widgetType:y(V,N),renderModule:J,renderComponent:D,attributes:U({hasVideoScope:e})})}var K,q,J,Y,X,Z,Q,$;e((()=>{p(),u(),v(),g(),x(),M(),P(),H(),K=r(),d(),q=105,J=`storybook/video-detail-highlights`,Y={title:`Packages/Premium Analytics/Widgets/VideoDetailHighlights`,component:D,tags:[`autodocs`],argTypes:{hasVideoScope:{control:`boolean`,description:"Include the `post_id` report param the video detail page seeds from its URL."}},parameters:{docs:{description:{component:"The \"Video highlights\" widget: the selected video's impressions, hours watched, and retention rate over the selected period as metric tiles. One `stats/video/{id}` `statType=all` request returns every metric plus canonical window totals — including the play-weighted retention rate — and is shared with the Views performance widget's chart query. Without a video scope the widget renders a scopeless empty state."}}}},X={render:W,args:{hasVideoScope:!0},decorators:[w]},Z={render:W,args:{hasVideoScope:!1},decorators:[w]},Q={render:e=>(0,K.jsx)(G,{...e}),args:{...C,widgetWidth:4,widgetHeight:1,hasVideoScope:!0},argTypes:{..._,hasVideoScope:{control:`boolean`,description:"Include the `post_id` report param the video detail page seeds from its URL."}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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