import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{n as i,o as a}from"./build-module-DoJYX5DX.js";import{G as o,W as s,Z as c,q as l,tt as ee}from"./report-metric-WG7ZNOz1.js";import{R as te,t as ne,u as re}from"./build-module-9_QNfiDl.js";import{Et as ie,kr as ae,ur as u,xt as d}from"./chart-tooltip-DL-4iUUY.js";import{t as oe}from"./chart-empty-state-CZBdg99p.js";import{r as f}from"./src-Ch0DBJJY.js";import{t as p}from"./widget-state-CrbkVDzl.js";import{C as se,D as ce,E as m,S as le,T as ue,b as h,t as g,w as _,x as v}from"./src-CqSb8IKj.js";var y,b,x,S,C,w,T=e((()=>{y=`_root_p2q2t_1`,b=`_content_p2q2t_11`,x=`_list_p2q2t_24`,S=`_item_p2q2t_32`,C=`_link_p2q2t_41`,w={root:y,content:b,list:x,item:S,link:C}}));function E({pages:e}){return(0,k.jsx)(`ul`,{className:w.list,children:e.map((e,t)=>{let n=f(e.link);return(0,k.jsx)(`li`,{className:w.item,children:n?(0,k.jsx)(re,{className:w.link,href:n,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label}):(0,k.jsx)(`span`,{className:w.link,title:e.label,children:e.label})},`${t}-${e.link}`)})})}function D(){let{reportParams:e}=ee(),n=ae(e.post_id),{data:r,isLoading:i,isFetching:o,isError:s,refetch:c}=ie(n),l;if(n<=0)l=(0,k.jsx)(oe,{icon:a,text:t(`Select a video to see where it is embedded across your site.`,`jetpack-premium-analytics-pkg`)});else{let e=r?.pages??[];l=(0,k.jsx)(p,{isLoading:i,isFetching:o,isError:e.length===0&&s,isEmpty:e.length===0,error:{description:t(`We couldn't load video embeds. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:()=>void c()}]},empty:{icon:a,description:t(`This video has not been embedded on any pages yet.`,`jetpack-premium-analytics-pkg`)},children:(0,k.jsx)(E,{pages:e})})}return(0,k.jsx)(te,{className:w.root,children:(0,k.jsx)(`div`,{className:w.content,children:l})})}function O({attributes:e={}}){return(0,k.jsx)(c,{attributes:e,children:(0,k.jsx)(D,{})})}var k,de=e((()=>{d(),g(),n(),i(),ne(),T(),k=r()})),A,fe=e((()=>{i(),A={icon:a}})),j,M,N,P,F,I,L,R=e((()=>{j=`jpa/video-detail-embeds`,M=`Video embeds`,N=`Pages where the selected video is embedded, sourced from Jetpack Stats.`,P={content:`Lists every page on your site where the selected video is embedded, so you can see where it is being watched.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},F=`stats`,I=`framed`,L={name:j,title:M,description:N,help:P,category:F,presentation:I}}));function z(e,t=!1){return{...u(t,e),post_id:G}}function B(){return(0,H.jsx)(O,{attributes:{reportParams:z()}})}function V(e){return(0,H.jsx)(O,{attributes:{reportParams:z(e)}})}function pe(e){return(0,H.jsx)(ue,{...e,widgetType:le(L,A),renderModule:U,renderComponent:O,attributes:{reportParams:z(void 0,!0)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),s(),m(),se(),h(),de(),fe(),R(),H=r(),o(),U=`storybook/video-detail-embeds`,W=`stats/video/`,G=105,K={title:`Packages/Premium Analytics/Widgets/VideoDetailEmbeds`,component:O,tags:[`autodocs`],parameters:{docs:{description:{component:"Dashboard widget listing the pages where a single video is embedded, sourced from the Jetpack Stats `stats/video/%d` module via `useStatsSingleVideo`. The widget is scoped to one video through the host-composed `reportParams.post_id`; without one it prompts to select a video. In Storybook the data is served by `registerReportMocks`."}}}},q={render:B,decorators:[v]},J={render:()=>(0,H.jsx)(O,{attributes:{reportParams:u(!1)}}),decorators:[v]},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(l(W,`loading`),()=>l(W,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(l(W,`error`),()=>l(W,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(l(W,`empty`),()=>l(W,null))},Q={render:e=>(0,H.jsx)(pe,{...e}),args:{..._},argTypes:{...ce}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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