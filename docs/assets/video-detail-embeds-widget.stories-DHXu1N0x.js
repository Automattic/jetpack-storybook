import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-BXs6jvWf.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{Kn as i}from"./build-module-vwO17YW3.js";import{t as a}from"./src-ploW-8yJ.js";import{K as o,jn as s,kn as ee,t as c}from"./src-DtAepqU0.js";import{H as te,I as l,f as ne}from"./charts-provider-DkedSwrU.js";import{a as u}from"./src-CK8Su_1j.js";import{t as re}from"./widget-state-BDhu7m0a.js";import{i as d}from"./with-story-router-CzDy6ojP.js";import{t as ie}from"./chart-empty-state-CVyyD1Qj.js";import{n as ae,r as f,s as p}from"./register-report-mocks-lvHardrX.js";import{t as oe}from"./external-link-muoardCX.js";import{a as m,c as h,i as g,l as _,o as se,r as ce,s as le,u as ue}from"./with-widget-canvas-CRasz-j_.js";var v,y,b,x,S,C,w=e((()=>{v=`_root_3xqdu_1`,y=`_content_3xqdu_11`,b=`_list_3xqdu_23`,x=`_item_3xqdu_31`,S=`_link_3xqdu_40`,C={root:v,content:y,list:b,item:x,link:S}}));function T({pages:e}){return(0,D.jsx)(`ul`,{className:C.list,children:e.map((e,t)=>{let n=u(e.link);return(0,D.jsx)(`li`,{className:C.item,children:n?(0,D.jsx)(oe,{className:C.link,href:n,title:e.label,children:e.label}):(0,D.jsx)(`span`,{className:C.link,title:e.label,children:e.label})},`${t}-${e.link}`)})})}function de(){let{reportParams:e}=te(),n=ee(e.post_id),{data:r,isLoading:a,isFetching:s,isError:c,isPlaceholderData:l,refetch:u}=o(n);ne({csv:{rows:r?.pages??[],columns:O,filenamePrefix:`video-${n}-embeds`,hasDateRange:!1,status:{isLoading:a,isFetching:s,isError:c,isPlaceholderData:l}}});let d;if(n<=0)d=(0,D.jsx)(ie,{text:t(`Select a video to see where it is embedded across your site.`,`jetpack-premium-analytics-pkg`)});else{let e=r?.pages??[];d=(0,D.jsx)(re,{isLoading:a,isFetching:s,isError:e.length===0&&c,isEmpty:e.length===0,error:{description:t(`We couldn't load video embeds. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:()=>void u()}]},empty:{description:t(`This video has not been embedded on any pages yet.`,`jetpack-premium-analytics-pkg`)},children:(0,D.jsx)(T,{pages:e})})}return(0,D.jsx)(i,{className:C.root,children:(0,D.jsx)(`div`,{className:C.content,children:d})})}function E({attributes:e={}}){return(0,D.jsx)(l,{attributes:e,children:(0,D.jsx)(de,{})})}var D,O,k=e((()=>{c(),d(),n(),a(),w(),D=r(),O=[{label:t(`URL`,`jetpack-premium-analytics-pkg`),getValue:e=>e.link}]})),A,j,M,N,P,F,I,L,R=e((()=>{A=`jpa/video-detail-embeds`,j=`jpa/pages`,M=`Used on posts & pages`,N=`Pages where the selected video is embedded, sourced from Jetpack Stats.`,P={content:`Lists every page on your site where the selected video is embedded, so you can see where it is being watched.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},F=`stats`,I=`framed`,L={name:A,icon:j,title:M,description:N,help:P,category:F,presentation:I}}));function z(e,t=!1){return{...s(t,e),post_id:G}}function B(){return(0,H.jsx)(E,{attributes:{reportParams:z()}})}function V(e){return(0,H.jsx)(E,{attributes:{reportParams:z(e)}})}function fe(e){return(0,H.jsx)(h,{...e,widgetType:m(L),renderModule:U,renderComponent:E,attributes:{reportParams:z(void 0,!0)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),ae(),_(),se(),ce(),k(),R(),H=r(),f(),U=`storybook/video-detail-embeds`,W=`stats/video/`,G=105,K={title:`Packages/Premium Analytics/Widgets/VideoDetailEmbeds`,component:E,tags:[`autodocs`],parameters:{docs:{description:{component:"Dashboard widget listing the pages where a single video is embedded, sourced from the Jetpack Stats `stats/video/%d` module via `useStatsSingleVideo`. The widget is scoped to one video through the host-composed `reportParams.post_id`; without one it prompts to select a video. In Storybook the data is served by `registerReportMocks`."}}}},q={render:B,decorators:[g]},J={render:()=>(0,H.jsx)(E,{attributes:{reportParams:s(!1)}}),decorators:[g]},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(p(W,`loading`),()=>p(W,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(p(W,`error`),()=>p(W,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(p(W,`empty`),()=>p(W,null))},Q={tags:[`widget-dashboard`],render:e=>(0,H.jsx)(fe,{...e}),args:{...le},argTypes:{...ue}},$=[`Default`,`NoVideoSelected`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
  tags: ['widget-dashboard'],
  render: args => <VideoDetailEmbedsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source}}}}))();export{q as Default,Z as Empty,X as Error,Y as Loading,J as NoVideoSelected,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};