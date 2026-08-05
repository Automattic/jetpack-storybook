import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{B as i,I as ee,n as a,o}from"./build-module-DoJYX5DX.js";import{G as s,W as c,Z as l,tt as u}from"./report-metric-BSNNRPgL.js";import{Et as d,ur as f,xt as p}from"./chart-tooltip-BRZ2PClR.js";import{t as te}from"./metric-tile-grid-BV3hRjXi.js";import{C as m,D as h,E as g,S as _,T as v,b as y,t as b,w as x,x as S}from"./src-BE9SVcov.js";import{t as ne}from"./widget-state-CFIUT-OU.js";var C,w,T=e((()=>{C=`_root_12rzq_1`,w={root:C}}));function E(e){let t=typeof e==`number`?e:Number.parseInt(e??``,10);return Number.isInteger(t)&&t>0?t:NaN}function D(e){let t=e?.data??[];return(t.length>30?t.slice(-30):t).reduce((e,t)=>e+t.value,0)}function O(){let{reportParams:e}=u(),n=E(e.post_id),r=Number.isInteger(n),a=d(n,void 0,{enabled:r}),s=d(n,{period:`month`,statType:`impressions`},{enabled:r}),c=d(n,{period:`month`,statType:`watch_time`},{enabled:r}),l=[a,s,c],f=l.some(e=>e.isLoading),p=l.some(e=>e.isFetching),m=l.some(e=>e.isError),h=l.some(e=>e.data?.data.length),g=[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),icon:ee,value:D(a.data)},{key:`impressions`,label:t(`Impressions`,`jetpack-premium-analytics-pkg`),icon:o,value:D(s.data)},{key:`watch-time`,label:t(`Hours watched`,`jetpack-premium-analytics-pkg`),icon:i,value:D(c.data),dataFormat:M}];return(0,A.jsx)(`div`,{className:w.root,children:(0,A.jsx)(ne,{isLoading:r&&f,isFetching:p,isError:r&&m,isEmpty:!r||!f&&!m&&!h,error:{description:t(`We couldn't load this video's highlights. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:()=>{Promise.all(l.map(e=>e.refetch()))}}]},empty:{icon:o,description:t(r?`No highlights are available for this video.`:`Open a video report to see its highlights here.`,`jetpack-premium-analytics-pkg`)},children:(0,A.jsx)(te,{tiles:g,dataFormat:j})})})}function k({attributes:e={}}){return(0,A.jsx)(l,{attributes:e,children:(0,A.jsx)(O,{})})}var A,j,M,N=e((()=>{p(),b(),n(),a(),T(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M={type:`number`,options:{decimals:1}}})),P,re=e((()=>{a(),P={icon:o,attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,H=e((()=>{F=`jpa/video-detail-highlights`,I=`Video highlights`,L=`Views, impressions, and hours watched over the last 30 days for the video being viewed.`,R={content:`Views, impressions, and hours watched over the last 30 days for the video being viewed.`},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function U({hasVideoScope:e}){return{reportParams:{...f(!1),...e?{post_id:q}:{}}}}function W(e){return(0,K.jsx)(k,{attributes:U(e)})}function G({hasVideoScope:e,...t}){return(0,K.jsx)(v,{...t,widgetType:_(V,P),renderModule:J,renderComponent:k,attributes:U({hasVideoScope:e})})}var K,q,J,Y,X,Z,Q,$;e((()=>{p(),c(),g(),m(),y(),N(),re(),H(),K=r(),s(),q=105,J=`storybook/video-detail-highlights`,Y={title:`Packages/Premium Analytics/Widgets/VideoDetailHighlights`,component:k,tags:[`autodocs`],argTypes:{hasVideoScope:{control:`boolean`,description:"Include the `post_id` report param the video detail page seeds from its URL."}},parameters:{docs:{description:{component:'The "Video highlights" widget: the selected video\'s trailing-30-day views, impressions, and hours watched as metric tiles. It uses the per-video `stats/video/{id}` endpoint, matching Calypso without downloading stats for every active video. Without a video scope the widget renders a scopeless empty state.'}}}},X={render:W,args:{hasVideoScope:!0},decorators:[S]},Z={render:W,args:{hasVideoScope:!1},decorators:[S]},Q={render:e=>(0,K.jsx)(G,{...e}),args:{...x,widgetWidth:4,widgetHeight:1,hasVideoScope:!0},argTypes:{...h,hasVideoScope:{control:`boolean`,description:"Include the `post_id` report param the video detail page seeds from its URL."}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderVideoDetailHighlights,
  args: {
    hasVideoScope: true
  },
  decorators: [withWidgetCanvas]
}`,...X.parameters?.docs?.source},description:{story:`Default — the selected video's trailing-30-day highlights.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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