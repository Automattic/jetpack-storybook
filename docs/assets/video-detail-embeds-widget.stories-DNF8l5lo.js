import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{s as i,t as a,yi as o}from"./build-module-CR6EsQjA.js";import{$ as s,pn as ee,t as c}from"./src-DUEinqsR.js";import{b as te,g as l}from"./hooks-C-9DWjqw.js";import{Zt as u,p as ne,t as d,wn as re}from"./src-DTa4fq93.js";import{r as ie}from"./src-CfE4fsU62.js";import{t as ae}from"./chart-empty-state-tu28rLlt.js";import{G as oe,K as se,Y as f}from"./report-metric-YubYAHak.js";import{t as ce}from"./widget-state-BOWBw9b3.js";import{C as le,D as p,E as ue,S as de,T as m,b as h,t as g,w as _,x as v}from"./src-CnNC-ZLw.js";var y,b,x,S,C,w,T=e((()=>{y=`_root_o9l91_1`,b=`_content_o9l91_11`,x=`_list_o9l91_23`,S=`_item_o9l91_31`,C=`_link_o9l91_40`,w={root:y,content:b,list:x,item:S,link:C}}));function E({pages:e}){return(0,k.jsx)(`ul`,{className:w.list,children:e.map((e,t)=>{let n=ie(e.link);return(0,k.jsx)(`li`,{className:w.item,children:n?(0,k.jsx)(s,{className:w.link,href:n,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label}):(0,k.jsx)(`span`,{className:w.link,title:e.label,children:e.label})},`${t}-${e.link}`)})})}function D(){let{reportParams:e}=te(),n=re(e.post_id),{data:r,isLoading:a,isFetching:o,isError:s,refetch:c}=ne(n),l;if(n<=0)l=(0,k.jsx)(ae,{icon:i,text:t(`Select a video to see where it is embedded across your site.`,`jetpack-premium-analytics-pkg`)});else{let e=r?.pages??[];l=(0,k.jsx)(ce,{isLoading:a,isFetching:o,isError:e.length===0&&s,isEmpty:e.length===0,error:{description:t(`We couldn't load video embeds. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:()=>void c()}]},empty:{icon:i,description:t(`This video has not been embedded on any pages yet.`,`jetpack-premium-analytics-pkg`)},children:(0,k.jsx)(E,{pages:e})})}return(0,k.jsx)(ee,{className:w.root,children:(0,k.jsx)(`div`,{className:w.content,children:l})})}function O({attributes:e={}}){return(0,k.jsx)(l,{attributes:e,children:(0,k.jsx)(D,{})})}var k,A=e((()=>{d(),g(),n(),a(),c(),T(),k=r()})),j,fe=e((()=>{a(),j={icon:o}})),M,N,P,F,I,L,R,z=e((()=>{M=`jpa/video-detail-embeds`,N=`Used on posts & pages`,P=`Pages where the selected video is embedded, sourced from Jetpack Stats.`,F={content:`Lists every page on your site where the selected video is embedded, so you can see where it is being watched.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},I=`stats`,L=`framed`,R={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function B(e,t=!1){return{...u(t,e),post_id:G}}function pe(){return(0,H.jsx)(O,{attributes:{reportParams:B()}})}function V(e){return(0,H.jsx)(O,{attributes:{reportParams:B(e)}})}function me(e){return(0,H.jsx)(m,{...e,widgetType:de(R,j),renderModule:U,renderComponent:O,attributes:{reportParams:B(void 0,!0)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),oe(),ue(),le(),h(),A(),fe(),z(),H=r(),se(),U=`storybook/video-detail-embeds`,W=`stats/video/`,G=105,K={title:`Packages/Premium Analytics/Widgets/VideoDetailEmbeds`,component:O,tags:[`autodocs`],parameters:{docs:{description:{component:"Dashboard widget listing the pages where a single video is embedded, sourced from the Jetpack Stats `stats/video/%d` module via `useStatsSingleVideo`. The widget is scoped to one video through the host-composed `reportParams.post_id`; without one it prompts to select a video. In Storybook the data is served by `registerReportMocks`."}}}},q={render:pe,decorators:[v]},J={render:()=>(0,H.jsx)(O,{attributes:{reportParams:u(!1)}}),decorators:[v]},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(f(W,`loading`),()=>f(W,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(f(W,`error`),()=>f(W,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(f(W,`empty`),()=>f(W,null))},Q={render:e=>(0,H.jsx)(me,{...e}),args:{..._},argTypes:{...p}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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