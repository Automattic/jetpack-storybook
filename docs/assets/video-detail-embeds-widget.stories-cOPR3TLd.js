import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-DQe4AOzJ.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{an as i}from"./build-module-DhwsekaI.js";import{t as a}from"./src-FMtXFCwi.js";import{I as o,dn as s,pn as c,t as l}from"./src-5g9sGwvT.js";import{m as u,v as d}from"./charts-provider-Dz_9KfQe.js";import{Q as f,X as p,Y as ee,Z as te,ct as ne,lt as re,ot as ie,st as ae,t as oe}from"./src-CwWcdYh9.js";import{a as se}from"./src-BHkmuvTS.js";import{t as m}from"./widget-state-CgiqWOxt.js";import{t as h}from"./chart-empty-state-ORRwfYPp.js";import{a as g,o as _,u as v}from"./widget-state-B6SJsJzX.js";import{t as y}from"./external-link-DleiKsQt.js";var b,x,S,C,w,T,ce=e((()=>{b=`_root_o9l91_1`,x=`_content_o9l91_11`,S=`_list_o9l91_23`,C=`_item_o9l91_31`,w=`_link_o9l91_40`,T={root:b,content:x,list:S,item:C,link:w}}));function le({pages:e}){return(0,D.jsx)(`ul`,{className:T.list,children:e.map((e,t)=>{let n=se(e.link);return(0,D.jsx)(`li`,{className:T.item,children:n?(0,D.jsx)(y,{className:T.link,href:n,title:e.label,children:e.label}):(0,D.jsx)(`span`,{className:T.link,title:e.label,children:e.label})},`${t}-${e.link}`)})})}function ue(){let{reportParams:e}=d(),n=s(e.post_id),{data:r,isLoading:a,isFetching:c,isError:l,refetch:u}=o(n),f;if(n<=0)f=(0,D.jsx)(h,{text:t(`Select a video to see where it is embedded across your site.`,`jetpack-premium-analytics-pkg`)});else{let e=r?.pages??[];f=(0,D.jsx)(m,{isLoading:a,isFetching:c,isError:e.length===0&&l,isEmpty:e.length===0,error:{description:t(`We couldn't load video embeds. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:()=>void u()}]},empty:{description:t(`This video has not been embedded on any pages yet.`,`jetpack-premium-analytics-pkg`)},children:(0,D.jsx)(le,{pages:e})})}return(0,D.jsx)(i,{className:T.root,children:(0,D.jsx)(`div`,{className:T.content,children:f})})}function E({attributes:e={}}){return(0,D.jsx)(u,{attributes:e,children:(0,D.jsx)(ue,{})})}var D,O=e((()=>{l(),oe(),n(),a(),ce(),D=r()})),k,A,j,M,N,P,F,I,L=e((()=>{k=`jpa/video-detail-embeds`,A=`jpa/pages`,j=`Used on posts & pages`,M=`Pages where the selected video is embedded, sourced from Jetpack Stats.`,N={content:`Lists every page on your site where the selected video is embedded, so you can see where it is being watched.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},P=`stats`,F=`framed`,I={name:k,icon:A,title:j,description:M,help:N,category:P,presentation:F}}));function R(e,t=!1){return{...c(t,e),post_id:G}}function z(){return(0,H.jsx)(E,{attributes:{reportParams:R()}})}function B(e){return(0,H.jsx)(E,{attributes:{reportParams:R(e)}})}function V(e){return(0,H.jsx)(ae,{...e,widgetType:te(I),renderModule:U,renderComponent:E,attributes:{reportParams:R(void 0,!0)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),g(),ne(),f(),ee(),O(),L(),H=r(),_(),U=`storybook/video-detail-embeds`,W=`stats/video/`,G=105,K={title:`Packages/Premium Analytics/Widgets/VideoDetailEmbeds`,component:E,tags:[`autodocs`],parameters:{docs:{description:{component:"Dashboard widget listing the pages where a single video is embedded, sourced from the Jetpack Stats `stats/video/%d` module via `useStatsSingleVideo`. The widget is scoped to one video through the host-composed `reportParams.post_id`; without one it prompts to select a video. In Storybook the data is served by `registerReportMocks`."}}}},q={render:z,decorators:[p]},J={render:()=>(0,H.jsx)(E,{attributes:{reportParams:c(!1)}}),decorators:[p]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[p],beforeEach:()=>(v(W,`loading`),()=>v(W,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[p],beforeEach:()=>(v(W,`error`),()=>v(W,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[p],beforeEach:()=>(v(W,`empty`),()=>v(W,null))},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...ie},argTypes:{...re}},$=[`Default`,`NoVideoSelected`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderVideoDetailEmbeds,
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`The widget on its own, current period only.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <VideoDetailEmbedsRender attributes={{
    reportParams: getDefaultQueryParams(false)
  }} />,
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:"No video scoped through `reportParams.post_id`: the query stays disabled and\nthe widget prompts to select a video instead of fetching.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderVideoDetailEmbedsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(SINGLE_VIDEO_PATH_FRAGMENT, 'loading');
    return () => setReportMockState(SINGLE_VIDEO_PATH_FRAGMENT, null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderVideoDetailEmbedsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(SINGLE_VIDEO_PATH_FRAGMENT, 'error');
    return () => setReportMockState(SINGLE_VIDEO_PATH_FRAGMENT, null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderVideoDetailEmbedsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(SINGLE_VIDEO_PATH_FRAGMENT, 'empty');
    return () => setReportMockState(SINGLE_VIDEO_PATH_FRAGMENT, null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state ("This video has not
been embedded on any pages yet.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <VideoDetailEmbedsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source}}}}))();export{q as Default,Z as Empty,X as Error,Y as Loading,J as NoVideoSelected,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};