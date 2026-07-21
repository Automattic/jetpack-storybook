import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{n as i,o as a}from"./build-module-DmVuor49.js";import{R as o,t as s,u as c}from"./build-module-CjsR65VJ.js";import{dt as l,er as u,gt as ee,yr as d}from"./chart-tooltip-DUEH-EBN.js";import{t as f}from"./chart-empty-state-BPMY18RC.js";import{H as p,M as m,P as h,R as g,j as _}from"./report-metric-DT2EZwqu.js";import{t as v}from"./widget-state-CZCJOB7L.js";import{C as y,S as b,T as te,b as ne,t as x,w as S,x as C}from"./src-_5yscEMX.js";var w,T,E,D,O,k,A=e((()=>{w=`_root_p2q2t_1`,T=`_content_p2q2t_11`,E=`_list_p2q2t_24`,D=`_item_p2q2t_32`,O=`_link_p2q2t_41`,k={root:w,content:T,list:E,item:D,link:O}}));function j({pages:e}){return(0,P.jsx)(`ul`,{className:k.list,children:e.map((e,t)=>(0,P.jsx)(`li`,{className:k.item,children:(0,P.jsx)(c,{className:k.link,href:e.link,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label})},`${t}-${e.link}`))})}function M(){let{reportParams:e}=p(),n=d(e.post_id),{data:r,isLoading:i,isFetching:s,isError:c,refetch:l}=ee(n,e),u;if(n<=0)u=(0,P.jsx)(f,{icon:a,text:t(`Select a video to see where it is embedded across your site.`,`jetpack-premium-analytics`)});else{let e=r?.pages??[];u=(0,P.jsx)(v,{isLoading:i,isFetching:s,isError:e.length===0&&c,isEmpty:e.length===0,error:{description:t(`We couldn't load video embeds. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:()=>void l()}]},empty:{icon:a,description:t(`This video has not been embedded on any pages yet.`,`jetpack-premium-analytics`)},children:(0,P.jsx)(j,{pages:e})})}return(0,P.jsx)(o,{className:k.root,children:(0,P.jsx)(`div`,{className:k.content,children:u})})}function N({attributes:e={}}){return(0,P.jsx)(g,{attributes:e,children:(0,P.jsx)(M,{})})}var P,F=e((()=>{l(),x(),n(),i(),s(),A(),P=r()})),I,L=e((()=>{n(),i(),I={name:`jpa/video-detail-embeds`,title:t(`Video embeds`,`jetpack-premium-analytics`),help:{content:t(`Lists every page on your site where the selected video is embedded, so you can see where it is being watched.`,`jetpack-premium-analytics`),links:[{label:t(`Learn more`,`jetpack-premium-analytics`),href:`https://jetpack.com/support/jetpack-stats/`}]},icon:a}}));function R(e,t=!1){return{...u(t,e),post_id:G}}function z(){return(0,H.jsx)(N,{attributes:{reportParams:R()}})}function B(e){return(0,H.jsx)(N,{attributes:{reportParams:R(e)}})}function V(e){return(0,H.jsx)(y,{...e,widgetType:I,renderModule:U,renderComponent:N,attributes:{reportParams:R(void 0,!0)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),_(),S(),ne(),F(),L(),H=r(),m(),U=`storybook/video-detail-embeds`,W=`stats/video/`,G=105,K={title:`Packages/Premium Analytics/Widgets/VideoDetailEmbeds`,component:N,tags:[`autodocs`],parameters:{docs:{description:{component:"Dashboard widget listing the pages where a single video is embedded, sourced from the Jetpack Stats `stats/video/%d` module via `useStatsSingleVideo`. The widget is scoped to one video through the host-composed `reportParams.post_id`; without one it prompts to select a video. In Storybook the data is served by `registerReportMocks`."}}}},q={render:z,decorators:[C]},J={render:()=>(0,H.jsx)(N,{attributes:{reportParams:u(!1)}}),decorators:[C]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(h(W,`loading`),()=>h(W,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(h(W,`error`),()=>h(W,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(h(W,`empty`),()=>h(W,null))},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...b},argTypes:{...te}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`NoVideoSelected`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,J as NoVideoSelected,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};