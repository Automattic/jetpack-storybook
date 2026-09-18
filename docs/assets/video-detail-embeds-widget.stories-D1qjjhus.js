import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{s as i,t as a,yi as o}from"./build-module-2iv4IIRq.js";import{At as s,vt as ee}from"./build-module-BX6MUpOQ2.js";import{m as c,v as te}from"./hooks-R2vG3VtO.js";import{t as l}from"./src-BmPGF8uA.js";import{Mn as u,g as ne,r as d,tn as f}from"./date-period-dropdown-F9vVdtHd.js";import{a as re}from"./src-QYIjSOSM.js";import{t as ie}from"./chart-empty-state-msyl2ZfU.js";import{c as p,i as ae,r as oe}from"./register-report-mocks-CibV1Ekv.js";import{t as se}from"./widget-state-DlUZqYT7.js";import{t as ce}from"./src-C3CtBIUh.js";import{a as m,c as h,i as le,l as g,n as _,o as v,r as y,s as ue}from"./with-widget-canvas-6fes-xqk.js";var b,x,S,C,w,T,E=e((()=>{b=`_root_o9l91_1`,x=`_content_o9l91_11`,S=`_list_o9l91_23`,C=`_item_o9l91_31`,w=`_link_o9l91_40`,T={root:b,content:x,list:S,item:C,link:w}}));function D({pages:e}){return(0,k.jsx)(`ul`,{className:T.list,children:e.map((e,t)=>{let n=re(e.link);return(0,k.jsx)(`li`,{className:T.item,children:n?(0,k.jsx)(s,{className:T.link,href:n,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label}):(0,k.jsx)(`span`,{className:T.link,title:e.label,children:e.label})},`${t}-${e.link}`)})})}function de(){let{reportParams:e}=te(),n=u(e.post_id),{data:r,isLoading:a,isFetching:o,isError:s,refetch:c}=ne(n),l;if(n<=0)l=(0,k.jsx)(ie,{icon:i,text:t(`Select a video to see where it is embedded across your site.`,`jetpack-premium-analytics-pkg`)});else{let e=r?.pages??[];l=(0,k.jsx)(se,{isLoading:a,isFetching:o,isError:e.length===0&&s,isEmpty:e.length===0,error:{description:t(`We couldn't load video embeds. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:()=>void c()}]},empty:{icon:i,description:t(`This video has not been embedded on any pages yet.`,`jetpack-premium-analytics-pkg`)},children:(0,k.jsx)(D,{pages:e})})}return(0,k.jsx)(ee,{className:T.root,children:(0,k.jsx)(`div`,{className:T.content,children:l})})}function O({attributes:e={}}){return(0,k.jsx)(c,{attributes:e,children:(0,k.jsx)(de,{})})}var k,A=e((()=>{d(),ce(),n(),a(),l(),E(),k=r()})),j,fe=e((()=>{a(),j={icon:o}})),M,N,P,F,I,L,R,z=e((()=>{M=`jpa/video-detail-embeds`,N=`Used on posts & pages`,P=`Pages where the selected video is embedded, sourced from Jetpack Stats.`,F={content:`Lists every page on your site where the selected video is embedded, so you can see where it is being watched.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},I=`stats`,L=`framed`,R={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function B(e,t=!1){return{...f(t,e),post_id:G}}function pe(){return(0,H.jsx)(O,{attributes:{reportParams:B()}})}function V(e){return(0,H.jsx)(O,{attributes:{reportParams:B(e)}})}function me(e){return(0,H.jsx)(ue,{...e,widgetType:le(R,j),renderModule:U,renderComponent:O,attributes:{reportParams:B(void 0,!0)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),oe(),h(),m(),_(),A(),fe(),z(),H=r(),ae(),U=`storybook/video-detail-embeds`,W=`stats/video/`,G=105,K={title:`Packages/Premium Analytics/Widgets/VideoDetailEmbeds`,component:O,tags:[`autodocs`],parameters:{docs:{description:{component:"Dashboard widget listing the pages where a single video is embedded, sourced from the Jetpack Stats `stats/video/%d` module via `useStatsSingleVideo`. The widget is scoped to one video through the host-composed `reportParams.post_id`; without one it prompts to select a video. In Storybook the data is served by `registerReportMocks`."}}}},q={render:pe,decorators:[y]},J={render:()=>(0,H.jsx)(O,{attributes:{reportParams:f(!1)}}),decorators:[y]},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(p(W,`loading`),()=>p(W,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(p(W,`error`),()=>p(W,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(p(W,`empty`),()=>p(W,null))},Q={render:e=>(0,H.jsx)(me,{...e}),args:{...v},argTypes:{...g}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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