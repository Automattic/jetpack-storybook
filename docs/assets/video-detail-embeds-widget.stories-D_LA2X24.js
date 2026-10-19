import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-BXPCp--5.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{an as i}from"./build-module-CA4PQnEk.js";import{t as a}from"./src-0xGXRKyf.js";import{P as ee,dn as o,ln as s,t as c}from"./src-D7-VhuOI.js";import{m as l,v as te}from"./charts-provider-BWv7gyHZ.js";import{a as u}from"./src-Ckr40JER.js";import{t as ne}from"./chart-empty-state-BTJ2hMl-.js";import{n as re,r as ie,s as d}from"./register-report-mocks-Db5-HplF.js";import{t as ae}from"./widget-state-CalSvwWb.js";import{t as oe}from"./external-link-m1upTKBS.js";import{t as f}from"./src-BXeDK0Ye.js";import{a as se,g as ce,h as p,i as m,m as h,n as g,p as le,r as _}from"./with-widget-canvas-DZcPnQ3S.js";var v,y,b,x,S,C,w=e((()=>{v=`_root_o9l91_1`,y=`_content_o9l91_11`,b=`_list_o9l91_23`,x=`_item_o9l91_31`,S=`_link_o9l91_40`,C={root:v,content:y,list:b,item:x,link:S}}));function T({pages:e}){return(0,O.jsx)(`ul`,{className:C.list,children:e.map((e,t)=>{let n=u(e.link);return(0,O.jsx)(`li`,{className:C.item,children:n?(0,O.jsx)(oe,{className:C.link,href:n,title:e.label,children:e.label}):(0,O.jsx)(`span`,{className:C.link,title:e.label,children:e.label})},`${t}-${e.link}`)})})}function E(){let{reportParams:e}=te(),n=s(e.post_id),{data:r,isLoading:a,isFetching:o,isError:c,refetch:l}=ee(n),u;if(n<=0)u=(0,O.jsx)(ne,{text:t(`Select a video to see where it is embedded across your site.`,`jetpack-premium-analytics-pkg`)});else{let e=r?.pages??[];u=(0,O.jsx)(ae,{isLoading:a,isFetching:o,isError:e.length===0&&c,isEmpty:e.length===0,error:{description:t(`We couldn't load video embeds. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:()=>void l()}]},empty:{description:t(`This video has not been embedded on any pages yet.`,`jetpack-premium-analytics-pkg`)},children:(0,O.jsx)(T,{pages:e})})}return(0,O.jsx)(i,{className:C.root,children:(0,O.jsx)(`div`,{className:C.content,children:u})})}function D({attributes:e={}}){return(0,O.jsx)(l,{attributes:e,children:(0,O.jsx)(E,{})})}var O,ue=e((()=>{c(),f(),n(),a(),w(),O=r()})),k,de=e((()=>{k={}})),A,j,M,N,P,F,I,L,R=e((()=>{A=`jpa/video-detail-embeds`,j=`jpa/pages`,M=`Used on posts & pages`,N=`Pages where the selected video is embedded, sourced from Jetpack Stats.`,P={content:`Lists every page on your site where the selected video is embedded, so you can see where it is being watched.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},F=`stats`,I=`framed`,L={name:A,icon:j,title:M,description:N,help:P,category:F,presentation:I}}));function z(e,t=!1){return{...o(t,e),post_id:G}}function B(){return(0,H.jsx)(D,{attributes:{reportParams:z()}})}function V(e){return(0,H.jsx)(D,{attributes:{reportParams:z(e)}})}function fe(e){return(0,H.jsx)(h,{...e,widgetType:m(L,k),renderModule:U,renderComponent:D,attributes:{reportParams:z(void 0,!0)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),re(),p(),se(),g(),ue(),de(),R(),H=r(),ie(),U=`storybook/video-detail-embeds`,W=`stats/video/`,G=105,K={title:`Packages/Premium Analytics/Widgets/VideoDetailEmbeds`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:"Dashboard widget listing the pages where a single video is embedded, sourced from the Jetpack Stats `stats/video/%d` module via `useStatsSingleVideo`. The widget is scoped to one video through the host-composed `reportParams.post_id`; without one it prompts to select a video. In Storybook the data is served by `registerReportMocks`."}}}},q={render:B,decorators:[_]},J={render:()=>(0,H.jsx)(D,{attributes:{reportParams:o(!1)}}),decorators:[_]},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(d(W,`loading`),()=>d(W,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(d(W,`error`),()=>d(W,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(d(W,`empty`),()=>d(W,null))},Q={render:e=>(0,H.jsx)(fe,{...e}),args:{...le},argTypes:{...ce}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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