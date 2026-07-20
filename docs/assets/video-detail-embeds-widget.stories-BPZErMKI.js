import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{n as i,o as a}from"./build-module-DmVuor49.js";import{R as o,t as s,u as c}from"./build-module-CGOM1VGu.js";import{dt as l,er as u,gt as ee}from"./chart-tooltip-2oFiw6P7.js";import{t as d}from"./chart-empty-state-BevMb9sP.js";import{H as f,M as p,P as m,R as h,j as g}from"./report-metric-DjUmE-hC.js";import{t as _}from"./widget-state-5V0DcZeV.js";import{C as v,S as y,T as b,b as te,t as ne,w as x,x as S}from"./src-tFanuavE.js";var C,w,T,E,D,O,k=e((()=>{C=`_root_p2q2t_1`,w=`_content_p2q2t_11`,T=`_list_p2q2t_24`,E=`_item_p2q2t_32`,D=`_link_p2q2t_41`,O={root:C,content:w,list:T,item:E,link:D}}));function A(e){let t=typeof e==`number`?e:Number.parseInt(e??``,10);return Number.isInteger(t)&&t>0?t:NaN}function j({pages:e}){return(0,P.jsx)(`ul`,{className:O.list,children:e.map((e,t)=>(0,P.jsx)(`li`,{className:O.item,children:(0,P.jsx)(c,{className:O.link,href:e.link,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label})},`${t}-${e.link}`))})}function M(){let{reportParams:e}=f(),n=A(e.post_id),{data:r,isLoading:i,isFetching:s,isError:c,refetch:l}=ee(n,e),u;if(!Number.isInteger(n))u=(0,P.jsx)(d,{icon:a,text:t(`Select a video to see where it is embedded across your site.`,`jetpack-premium-analytics`)});else{let e=r?.pages??[];u=(0,P.jsx)(_,{isLoading:i,isFetching:s,isError:e.length===0&&c,isEmpty:e.length===0,error:{description:t(`We couldn't load video embeds. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:()=>void l()}]},empty:{icon:a,description:t(`This video has not been embedded on any pages yet.`,`jetpack-premium-analytics`)},children:(0,P.jsx)(j,{pages:e})})}return(0,P.jsx)(o,{className:O.root,children:(0,P.jsx)(`div`,{className:O.content,children:u})})}function N({attributes:e={}}){return(0,P.jsx)(h,{attributes:e,children:(0,P.jsx)(M,{})})}var P,F=e((()=>{l(),ne(),n(),i(),s(),k(),P=r()})),I,L=e((()=>{n(),i(),I={name:`jpa/video-detail-embeds`,title:t(`Video embeds`,`jetpack-premium-analytics`),help:{content:t(`Lists every page on your site where the selected video is embedded, so you can see where it is being watched.`,`jetpack-premium-analytics`),links:[{label:t(`Learn more`,`jetpack-premium-analytics`),href:`https://jetpack.com/support/jetpack-stats/`}]},icon:a}}));function R(e,t=!1){return{...u(t,e),post_id:G}}function z(){return(0,H.jsx)(N,{attributes:{reportParams:R()}})}function B(e){return(0,H.jsx)(N,{attributes:{reportParams:R(e)}})}function V(e){return(0,H.jsx)(v,{...e,widgetType:I,renderModule:U,renderComponent:N,attributes:{reportParams:R(void 0,!0)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),g(),x(),te(),F(),L(),H=r(),p(),U=`storybook/video-detail-embeds`,W=`stats/video/`,G=105,K={title:`Packages/Premium Analytics/Widgets/VideoDetailEmbeds`,component:N,tags:[`autodocs`],parameters:{docs:{description:{component:"Dashboard widget listing the pages where a single video is embedded, sourced from the Jetpack Stats `stats/video/%d` module via `useStatsSingleVideo`. The widget is scoped to one video through the host-composed `reportParams.post_id`; without one it prompts to select a video. In Storybook the data is served by `registerReportMocks`."}}}},q={render:z,decorators:[S]},J={render:()=>(0,H.jsx)(N,{attributes:{reportParams:u(!1)}}),decorators:[S]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(m(W,`loading`),()=>m(W,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(m(W,`error`),()=>m(W,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(m(W,`empty`),()=>m(W,null))},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...y},argTypes:{...b}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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