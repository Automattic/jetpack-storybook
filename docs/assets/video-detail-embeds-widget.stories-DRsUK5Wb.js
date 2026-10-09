import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{s as i,t as a}from"./build-module-Cm3Kd3py.js";import{At as ee}from"./build-module-D2aEjqke.js";import{t as o}from"./src-eClfXXpQ.js";import{Sn as s,j as te,t as c,wn as l}from"./src-BXGbBQuk.js";import{_ as u,x as d}from"./charts-provider-CPqqWd8T.js";import{a as ne}from"./src-CO_V8Snc.js";import{t as re}from"./chart-empty-state-DnetM0rf.js";import{n as ie,r as ae,s as f}from"./register-report-mocks-HpcX_mM9.js";import{t as oe}from"./widget-state-Ct82KwxU.js";import{t as se}from"./external-link-BGoVf9eD.js";import{t as ce}from"./src-BO6UD8Zu.js";import{a as le,g as ue,h as p,i as m,m as de,n as h,p as g,r as _}from"./with-widget-canvas-Bkxis0Y9.js";var v,y,b,x,S,C,w=e((()=>{v=`_root_o9l91_1`,y=`_content_o9l91_11`,b=`_list_o9l91_23`,x=`_item_o9l91_31`,S=`_link_o9l91_40`,C={root:v,content:y,list:b,item:x,link:S}}));function T({pages:e}){return(0,O.jsx)(`ul`,{className:C.list,children:e.map((e,t)=>{let n=ne(e.link);return(0,O.jsx)(`li`,{className:C.item,children:n?(0,O.jsx)(se,{className:C.link,href:n,title:e.label,children:e.label}):(0,O.jsx)(`span`,{className:C.link,title:e.label,children:e.label})},`${t}-${e.link}`)})})}function E(){let{reportParams:e}=d(),n=s(e.post_id),{data:r,isLoading:a,isFetching:o,isError:c,refetch:l}=te(n),u;if(n<=0)u=(0,O.jsx)(re,{icon:i,text:t(`Select a video to see where it is embedded across your site.`,`jetpack-premium-analytics-pkg`)});else{let e=r?.pages??[];u=(0,O.jsx)(oe,{isLoading:a,isFetching:o,isError:e.length===0&&c,isEmpty:e.length===0,error:{description:t(`We couldn't load video embeds. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:()=>void l()}]},empty:{icon:i,description:t(`This video has not been embedded on any pages yet.`,`jetpack-premium-analytics-pkg`)},children:(0,O.jsx)(T,{pages:e})})}return(0,O.jsx)(ee,{className:C.root,children:(0,O.jsx)(`div`,{className:C.content,children:u})})}function D({attributes:e={}}){return(0,O.jsx)(u,{attributes:e,children:(0,O.jsx)(E,{})})}var O,fe=e((()=>{c(),ce(),n(),a(),o(),w(),O=r()})),k,A=e((()=>{k={}})),j,M,N,P,F,I,L,R,z=e((()=>{j=`jpa/video-detail-embeds`,M=`jpa/pages`,N=`Used on posts & pages`,P=`Pages where the selected video is embedded, sourced from Jetpack Stats.`,F={content:`Lists every page on your site where the selected video is embedded, so you can see where it is being watched.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},I=`stats`,L=`framed`,R={name:j,icon:M,title:N,description:P,help:F,category:I,presentation:L}}));function B(e,t=!1){return{...l(t,e),post_id:G}}function pe(){return(0,H.jsx)(D,{attributes:{reportParams:B()}})}function V(e){return(0,H.jsx)(D,{attributes:{reportParams:B(e)}})}function me(e){return(0,H.jsx)(de,{...e,widgetType:m(R,k),renderModule:U,renderComponent:D,attributes:{reportParams:B(void 0,!0)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),ie(),p(),le(),h(),fe(),A(),z(),H=r(),ae(),U=`storybook/video-detail-embeds`,W=`stats/video/`,G=105,K={title:`Packages/Premium Analytics/Widgets/VideoDetailEmbeds`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:"Dashboard widget listing the pages where a single video is embedded, sourced from the Jetpack Stats `stats/video/%d` module via `useStatsSingleVideo`. The widget is scoped to one video through the host-composed `reportParams.post_id`; without one it prompts to select a video. In Storybook the data is served by `registerReportMocks`."}}}},q={render:pe,decorators:[_]},J={render:()=>(0,H.jsx)(D,{attributes:{reportParams:l(!1)}}),decorators:[_]},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(f(W,`loading`),()=>f(W,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(f(W,`error`),()=>f(W,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(f(W,`empty`),()=>f(W,null))},Q={render:e=>(0,H.jsx)(me,{...e}),args:{...g},argTypes:{...ue}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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