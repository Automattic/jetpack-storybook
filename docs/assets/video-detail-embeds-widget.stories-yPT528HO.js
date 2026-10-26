import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-DQe4AOzJ.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{F as i,z as a}from"./charts-provider-Cm41emdA.js";import{an as o}from"./build-module-BN2Djb9A.js";import{t as s}from"./src-D0voDTwL.js";import{R as ee,hn as c,pn as te,t as l}from"./src-BEwaewMJ.js";import{a as u}from"./src-o0hzT09z.js";import{t as d}from"./widget-state-CS7GPGGN.js";import{i as f}from"./with-story-router-BS6M8x7-.js";import{t as p}from"./chart-empty-state-8GwWs1vJ.js";import{n as ne,r as m,s as h}from"./register-report-mocks-D47Rougd.js";import{t as re}from"./external-link-Bc-qQi63.js";import{a as ie,g as ae,h as oe,i as se,m as g,n as ce,p as le,r as _}from"./with-widget-canvas-C60JKn8M.js";var v,y,b,x,S,C,w=e((()=>{v=`_root_o9l91_1`,y=`_content_o9l91_11`,b=`_list_o9l91_23`,x=`_item_o9l91_31`,S=`_link_o9l91_40`,C={root:v,content:y,list:b,item:x,link:S}}));function T({pages:e}){return(0,O.jsx)(`ul`,{className:C.list,children:e.map((e,t)=>{let n=u(e.link);return(0,O.jsx)(`li`,{className:C.item,children:n?(0,O.jsx)(re,{className:C.link,href:n,title:e.label,children:e.label}):(0,O.jsx)(`span`,{className:C.link,title:e.label,children:e.label})},`${t}-${e.link}`)})})}function E(){let{reportParams:e}=a(),n=te(e.post_id),{data:r,isLoading:i,isFetching:s,isError:c,refetch:l}=ee(n),u;if(n<=0)u=(0,O.jsx)(p,{text:t(`Select a video to see where it is embedded across your site.`,`jetpack-premium-analytics-pkg`)});else{let e=r?.pages??[];u=(0,O.jsx)(d,{isLoading:i,isFetching:s,isError:e.length===0&&c,isEmpty:e.length===0,error:{description:t(`We couldn't load video embeds. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:()=>void l()}]},empty:{description:t(`This video has not been embedded on any pages yet.`,`jetpack-premium-analytics-pkg`)},children:(0,O.jsx)(T,{pages:e})})}return(0,O.jsx)(o,{className:C.root,children:(0,O.jsx)(`div`,{className:C.content,children:u})})}function D({attributes:e={}}){return(0,O.jsx)(i,{attributes:e,children:(0,O.jsx)(E,{})})}var O,ue=e((()=>{l(),f(),n(),s(),w(),O=r()})),k,A,j,M,N,P,F,I,L=e((()=>{k=`jpa/video-detail-embeds`,A=`jpa/pages`,j=`Used on posts & pages`,M=`Pages where the selected video is embedded, sourced from Jetpack Stats.`,N={content:`Lists every page on your site where the selected video is embedded, so you can see where it is being watched.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},P=`stats`,F=`framed`,I={name:k,icon:A,title:j,description:M,help:N,category:P,presentation:F}}));function R(e,t=!1){return{...c(t,e),post_id:G}}function z(){return(0,H.jsx)(D,{attributes:{reportParams:R()}})}function B(e){return(0,H.jsx)(D,{attributes:{reportParams:R(e)}})}function V(e){return(0,H.jsx)(g,{...e,widgetType:se(I),renderModule:U,renderComponent:D,attributes:{reportParams:R(void 0,!0)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),ne(),oe(),ie(),ce(),ue(),L(),H=r(),m(),U=`storybook/video-detail-embeds`,W=`stats/video/`,G=105,K={title:`Packages/Premium Analytics/Widgets/VideoDetailEmbeds`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:"Dashboard widget listing the pages where a single video is embedded, sourced from the Jetpack Stats `stats/video/%d` module via `useStatsSingleVideo`. The widget is scoped to one video through the host-composed `reportParams.post_id`; without one it prompts to select a video. In Storybook the data is served by `registerReportMocks`."}}}},q={render:z,decorators:[_]},J={render:()=>(0,H.jsx)(D,{attributes:{reportParams:c(!1)}}),decorators:[_]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(h(W,`loading`),()=>h(W,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(h(W,`error`),()=>h(W,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(h(W,`empty`),()=>h(W,null))},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...le},argTypes:{...ae}},$=[`Default`,`NoVideoSelected`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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