import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-BXs6jvWf.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{Zr as i}from"./build-module-BEvijrel.js";import{t as a}from"./src-w6NNbNEd.js";import{Cn as o,V as s,t as c,xn as ee}from"./src-Bm9MmJNJ.js";import{H as l,I as u}from"./charts-provider-iKLRcVDw.js";import{a as d}from"./src-DThvqK9z.js";import{t as f}from"./widget-state-BC9EBmmc.js";import{i as te}from"./with-story-router-B_cck7yz.js";import{t as ne}from"./chart-empty-state-ChyRG922.js";import{n as re,r as ie,s as p}from"./register-report-mocks-D3lWkH8m.js";import{t as ae}from"./external-link-QO6gXPGw.js";import{a as oe,c as se,i as m,l as h,o as g,r as _,s as v,u as y}from"./with-widget-canvas-BhyYVwV4.js";var b,x,S,C,w,T,ce=e((()=>{b=`_root_vnvau_1`,x=`_content_vnvau_11`,S=`_list_vnvau_23`,C=`_item_vnvau_31`,w=`_link_vnvau_40`,T={root:b,content:x,list:S,item:C,link:w}}));function le({pages:e}){return(0,D.jsx)(`ul`,{className:T.list,children:e.map((e,t)=>{let n=d(e.link);return(0,D.jsx)(`li`,{className:T.item,children:n?(0,D.jsx)(ae,{className:T.link,href:n,title:e.label,children:e.label}):(0,D.jsx)(`span`,{className:T.link,title:e.label,children:e.label})},`${t}-${e.link}`)})})}function ue(){let{reportParams:e}=l(),n=ee(e.post_id),{data:r,isLoading:a,isFetching:o,isError:c,refetch:u}=s(n),d;if(n<=0)d=(0,D.jsx)(ne,{text:t(`Select a video to see where it is embedded across your site.`,`jetpack-premium-analytics-pkg`)});else{let e=r?.pages??[];d=(0,D.jsx)(f,{isLoading:a,isFetching:o,isError:e.length===0&&c,isEmpty:e.length===0,error:{description:t(`We couldn't load video embeds. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:()=>void u()}]},empty:{description:t(`This video has not been embedded on any pages yet.`,`jetpack-premium-analytics-pkg`)},children:(0,D.jsx)(le,{pages:e})})}return(0,D.jsx)(i,{className:T.root,children:(0,D.jsx)(`div`,{className:T.content,children:d})})}function E({attributes:e={}}){return(0,D.jsx)(u,{attributes:e,children:(0,D.jsx)(ue,{})})}var D,O=e((()=>{c(),te(),n(),a(),ce(),D=r()})),k,A,j,M,N,P,F,I,L=e((()=>{k=`jpa/video-detail-embeds`,A=`jpa/pages`,j=`Used on posts & pages`,M=`Pages where the selected video is embedded, sourced from Jetpack Stats.`,N={content:`Lists every page on your site where the selected video is embedded, so you can see where it is being watched.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},P=`stats`,F=`framed`,I={name:k,icon:A,title:j,description:M,help:N,category:P,presentation:F}}));function R(e,t=!1){return{...o(t,e),post_id:G}}function z(){return(0,H.jsx)(E,{attributes:{reportParams:R()}})}function B(e){return(0,H.jsx)(E,{attributes:{reportParams:R(e)}})}function V(e){return(0,H.jsx)(se,{...e,widgetType:oe(I),renderModule:U,renderComponent:E,attributes:{reportParams:R(void 0,!0)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),re(),h(),g(),_(),O(),L(),H=r(),ie(),U=`storybook/video-detail-embeds`,W=`stats/video/`,G=105,K={title:`Packages/Premium Analytics/Widgets/VideoDetailEmbeds`,component:E,tags:[`autodocs`],parameters:{docs:{description:{component:"Dashboard widget listing the pages where a single video is embedded, sourced from the Jetpack Stats `stats/video/%d` module via `useStatsSingleVideo`. The widget is scoped to one video through the host-composed `reportParams.post_id`; without one it prompts to select a video. In Storybook the data is served by `registerReportMocks`."}}}},q={render:z,decorators:[m]},J={render:()=>(0,H.jsx)(E,{attributes:{reportParams:o(!1)}}),decorators:[m]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[m],beforeEach:()=>(p(W,`loading`),()=>p(W,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[m],beforeEach:()=>(p(W,`error`),()=>p(W,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[m],beforeEach:()=>(p(W,`empty`),()=>p(W,null))},Q={tags:[`widget-dashboard`],render:e=>(0,H.jsx)(V,{...e}),args:{...v},argTypes:{...y}},$=[`Default`,`NoVideoSelected`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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