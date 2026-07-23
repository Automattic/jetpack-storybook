import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{n as i,o as a}from"./build-module-DmVuor49.js";import{R as o,t as s,u as c}from"./build-module-DNZEHly6.js";import{Dr as ee,cr as l,wt as te,yt as u}from"./chart-tooltip-C0tX-7b1.js";import{t as ne}from"./chart-empty-state-BGceJlNA.js";import{F as re,G as ie,L as d,P as ae,V as oe}from"./report-metric-BYpUD3lN.js";import{t as f}from"./widget-state-CWk5Rbsj.js";import{r as p}from"./src-C2Eh6zyX.js";import{C as se,D as ce,E as le,S as ue,T as m,b as h,t as g,w as de,x as _}from"./src-DS4Qf8WS.js";var v,y,b,x,S,C,w=e((()=>{v=`_root_p2q2t_1`,y=`_content_p2q2t_11`,b=`_list_p2q2t_24`,x=`_item_p2q2t_32`,S=`_link_p2q2t_41`,C={root:v,content:y,list:b,item:x,link:S}}));function T({pages:e}){return(0,O.jsx)(`ul`,{className:C.list,children:e.map((e,t)=>{let n=p(e.link);return(0,O.jsx)(`li`,{className:C.item,children:n?(0,O.jsx)(c,{className:C.link,href:n,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label}):(0,O.jsx)(`span`,{className:C.link,title:e.label,children:e.label})},`${t}-${e.link}`)})})}function E(){let{reportParams:e}=ie(),n=ee(e.post_id),{data:r,isLoading:i,isFetching:s,isError:c,refetch:l}=te(n),u;if(n<=0)u=(0,O.jsx)(ne,{icon:a,text:t(`Select a video to see where it is embedded across your site.`,`jetpack-premium-analytics`)});else{let e=r?.pages??[];u=(0,O.jsx)(f,{isLoading:i,isFetching:s,isError:e.length===0&&c,isEmpty:e.length===0,error:{description:t(`We couldn't load video embeds. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:()=>void l()}]},empty:{icon:a,description:t(`This video has not been embedded on any pages yet.`,`jetpack-premium-analytics`)},children:(0,O.jsx)(T,{pages:e})})}return(0,O.jsx)(o,{className:C.root,children:(0,O.jsx)(`div`,{className:C.content,children:u})})}function D({attributes:e={}}){return(0,O.jsx)(oe,{attributes:e,children:(0,O.jsx)(E,{})})}var O,fe=e((()=>{u(),g(),n(),i(),s(),w(),O=r()})),k,A=e((()=>{i(),k={icon:a}})),j,M,N,P,F,I,L,R=e((()=>{j=`jpa/video-detail-embeds`,M=`Video embeds`,N=`Pages where the selected video is embedded, sourced from Jetpack Stats.`,P={content:`Lists every page on your site where the selected video is embedded, so you can see where it is being watched.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},F=`stats`,I=`framed`,L={name:j,title:M,description:N,help:P,category:F,presentation:I}}));function z(e,t=!1){return{...l(t,e),post_id:G}}function B(){return(0,H.jsx)(D,{attributes:{reportParams:z()}})}function V(e){return(0,H.jsx)(D,{attributes:{reportParams:z(e)}})}function pe(e){return(0,H.jsx)(m,{...e,widgetType:ue(L,k),renderModule:U,renderComponent:D,attributes:{reportParams:z(void 0,!0)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),ae(),le(),se(),h(),fe(),A(),R(),H=r(),re(),U=`storybook/video-detail-embeds`,W=`stats/video/`,G=105,K={title:`Packages/Premium Analytics/Widgets/VideoDetailEmbeds`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:"Dashboard widget listing the pages where a single video is embedded, sourced from the Jetpack Stats `stats/video/%d` module via `useStatsSingleVideo`. The widget is scoped to one video through the host-composed `reportParams.post_id`; without one it prompts to select a video. In Storybook the data is served by `registerReportMocks`."}}}},q={render:B,decorators:[_]},J={render:()=>(0,H.jsx)(D,{attributes:{reportParams:l(!1)}}),decorators:[_]},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(d(W,`loading`),()=>d(W,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(d(W,`error`),()=>d(W,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(d(W,`empty`),()=>d(W,null))},Q={render:e=>(0,H.jsx)(pe,{...e}),args:{...de},argTypes:{...ce}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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