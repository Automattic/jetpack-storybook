import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-BXPCp--5.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{It as ee}from"./build-module-YF-BmBv-.js";import{t as i}from"./src-C3Vp9O8E.js";import{cn as a,j as o,on as s,t as c}from"./src-DFk-Fyb5.js";import{m as l,v as u}from"./charts-provider-0yDbOrDX.js";import{a as d}from"./src-BjY6okQR.js";import{t as f}from"./chart-empty-state-BghheH4n.js";import{n as te,r as ne,s as p}from"./register-report-mocks-DdRDxPiH.js";import{t as re}from"./widget-state-cvHHzXOC.js";import{t as ie}from"./external-link-BDyLcVD6.js";import{t as ae}from"./src-Cbos-WdU.js";import{a as oe,g as se,h as m,i as h,m as g,n as _,p as v,r as y}from"./with-widget-canvas-CL39fyyg.js";var b,x,S,C,w,T,ce=e((()=>{b=`_root_o9l91_1`,x=`_content_o9l91_11`,S=`_list_o9l91_23`,C=`_item_o9l91_31`,w=`_link_o9l91_40`,T={root:b,content:x,list:S,item:C,link:w}}));function le({pages:e}){return(0,D.jsx)(`ul`,{className:T.list,children:e.map((e,t)=>{let n=d(e.link);return(0,D.jsx)(`li`,{className:T.item,children:n?(0,D.jsx)(ie,{className:T.link,href:n,title:e.label,children:e.label}):(0,D.jsx)(`span`,{className:T.link,title:e.label,children:e.label})},`${t}-${e.link}`)})})}function ue(){let{reportParams:e}=u(),n=s(e.post_id),{data:r,isLoading:i,isFetching:a,isError:c,refetch:l}=o(n),d;if(n<=0)d=(0,D.jsx)(f,{text:t(`Select a video to see where it is embedded across your site.`,`jetpack-premium-analytics-pkg`)});else{let e=r?.pages??[];d=(0,D.jsx)(re,{isLoading:i,isFetching:a,isError:e.length===0&&c,isEmpty:e.length===0,error:{description:t(`We couldn't load video embeds. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:()=>void l()}]},empty:{description:t(`This video has not been embedded on any pages yet.`,`jetpack-premium-analytics-pkg`)},children:(0,D.jsx)(le,{pages:e})})}return(0,D.jsx)(ee,{className:T.root,children:(0,D.jsx)(`div`,{className:T.content,children:d})})}function E({attributes:e={}}){return(0,D.jsx)(l,{attributes:e,children:(0,D.jsx)(ue,{})})}var D,O=e((()=>{c(),ae(),n(),i(),ce(),D=r()})),k,de=e((()=>{k={}})),A,j,M,N,P,F,I,L,R=e((()=>{A=`jpa/video-detail-embeds`,j=`jpa/pages`,M=`Used on posts & pages`,N=`Pages where the selected video is embedded, sourced from Jetpack Stats.`,P={content:`Lists every page on your site where the selected video is embedded, so you can see where it is being watched.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},F=`stats`,I=`framed`,L={name:A,icon:j,title:M,description:N,help:P,category:F,presentation:I}}));function z(e,t=!1){return{...a(t,e),post_id:G}}function B(){return(0,H.jsx)(E,{attributes:{reportParams:z()}})}function V(e){return(0,H.jsx)(E,{attributes:{reportParams:z(e)}})}function fe(e){return(0,H.jsx)(g,{...e,widgetType:h(L,k),renderModule:U,renderComponent:E,attributes:{reportParams:z(void 0,!0)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),te(),m(),oe(),_(),O(),de(),R(),H=r(),ne(),U=`storybook/video-detail-embeds`,W=`stats/video/`,G=105,K={title:`Packages/Premium Analytics/Widgets/VideoDetailEmbeds`,component:E,tags:[`autodocs`],parameters:{docs:{description:{component:"Dashboard widget listing the pages where a single video is embedded, sourced from the Jetpack Stats `stats/video/%d` module via `useStatsSingleVideo`. The widget is scoped to one video through the host-composed `reportParams.post_id`; without one it prompts to select a video. In Storybook the data is served by `registerReportMocks`."}}}},q={render:B,decorators:[y]},J={render:()=>(0,H.jsx)(E,{attributes:{reportParams:a(!1)}}),decorators:[y]},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(p(W,`loading`),()=>p(W,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(p(W,`error`),()=>p(W,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(p(W,`empty`),()=>p(W,null))},Q={render:e=>(0,H.jsx)(fe,{...e}),args:{...v},argTypes:{...se}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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