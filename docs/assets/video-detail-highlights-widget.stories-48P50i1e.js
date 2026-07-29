import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{B as i,I as a,n as o,o as s}from"./build-module-DmVuor49.js";import{Ct as c,Ot as l,fr as u}from"./chart-tooltip-CSib7BBw.js";import{t as d}from"./metric-tile-grid-D3qPlaJs.js";import{I as f,L as p,U as m,q as ee}from"./report-metric-wNKZjZ3h.js";import{t as te}from"./widget-state-BMEczYDX.js";import{C as h,D as g,E as _,S as v,T as y,b,t as x,w as ne,x as S}from"./src-DzSbZgLF.js";var C,w,T=e((()=>{C=`_root_12rzq_1`,w={root:C}}));function E(e){let t=typeof e==`number`?e:Number.parseInt(e??``,10);return Number.isInteger(t)&&t>0?t:NaN}function D(e){let t=e?.data??[];return(t.length>30?t.slice(-30):t).reduce((e,t)=>e+t.value,0)}function O(){let{reportParams:e}=ee(),n=E(e.post_id),r=Number.isInteger(n),o=l(n,void 0,{enabled:r}),c=l(n,{period:`month`,statType:`impressions`},{enabled:r}),u=l(n,{period:`month`,statType:`watch_time`},{enabled:r}),f=[o,c,u],p=f.some(e=>e.isLoading),m=f.some(e=>e.isFetching),h=f.some(e=>e.isError),g=f.some(e=>e.data?.data.length),_=[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),icon:a,value:D(o.data)},{key:`impressions`,label:t(`Impressions`,`jetpack-premium-analytics-pkg`),icon:s,value:D(c.data)},{key:`watch-time`,label:t(`Hours watched`,`jetpack-premium-analytics-pkg`),icon:i,value:D(u.data),dataFormat:M}];return(0,A.jsx)(`div`,{className:w.root,children:(0,A.jsx)(te,{isLoading:r&&p,isFetching:m,isError:r&&h,isEmpty:!r||!p&&!h&&!g,error:{description:t(`We couldn't load this video's highlights. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:()=>{Promise.all(f.map(e=>e.refetch()))}}]},empty:{icon:s,description:t(r?`No highlights are available for this video.`:`Open a video report to see its highlights here.`,`jetpack-premium-analytics-pkg`)},children:(0,A.jsx)(d,{tiles:_,dataFormat:j})})})}function k({attributes:e={}}){return(0,A.jsx)(m,{attributes:e,children:(0,A.jsx)(O,{})})}var A,j,M,N=e((()=>{c(),x(),n(),o(),T(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M={type:`number`,options:{decimals:1}}})),P,re=e((()=>{o(),P={icon:s,attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,H=e((()=>{F=`jpa/video-detail-highlights`,I=`Video highlights`,L=`Views, impressions, and hours watched over the last 30 days for the video being viewed.`,R={content:`Views, impressions, and hours watched over the last 30 days for the video being viewed.`},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function U({hasVideoScope:e}){return{reportParams:{...u(!1),...e?{post_id:q}:{}}}}function W(e){return(0,K.jsx)(k,{attributes:U(e)})}function G({hasVideoScope:e,...t}){return(0,K.jsx)(y,{...t,widgetType:v(V,P),renderModule:J,renderComponent:k,attributes:U({hasVideoScope:e})})}var K,q,J,Y,X,Z,Q,$;e((()=>{c(),f(),_(),h(),b(),N(),re(),H(),K=r(),p(),q=105,J=`storybook/video-detail-highlights`,Y={title:`Packages/Premium Analytics/Widgets/VideoDetailHighlights`,component:k,tags:[`autodocs`],argTypes:{hasVideoScope:{control:`boolean`,description:"Include the `post_id` report param the video detail page seeds from its URL."}},parameters:{docs:{description:{component:'The "Video highlights" widget: the selected video\'s trailing-30-day views, impressions, and hours watched as metric tiles. It uses the per-video `stats/video/{id}` endpoint, matching Calypso without downloading stats for every active video. Without a video scope the widget renders a scopeless empty state.'}}}},X={render:W,args:{hasVideoScope:!0},decorators:[S]},Z={render:W,args:{hasVideoScope:!1},decorators:[S]},Q={render:e=>(0,K.jsx)(G,{...e}),args:{...ne,widgetWidth:4,widgetHeight:1,hasVideoScope:!0},argTypes:{...g,hasVideoScope:{control:`boolean`,description:"Include the `post_id` report param the video detail page seeds from its URL."}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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