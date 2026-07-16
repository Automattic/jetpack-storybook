import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{n as i,o as a}from"./build-module-DmVuor49.js";import{R as o,t as s,u as c}from"./build-module-5SvxF-S1.js";import{Yn as l,ft as u,ut as d}from"./chart-tooltip-pLc4ZOlh.js";import{t as ee}from"./chart-empty-state-CfWlT4eF.js";import{C as f,N as p,S as m,T as h,k as g}from"./report-metric-Wwk6HqqT.js";import{t as _}from"./widget-state-DnSloKek.js";import{S as v,b as y,t as b,x as te,y as ne}from"./src-ZxlFJdHX.js";import{n as re,r as x}from"./with-widget-canvas-Dz43KNHY.js";var S,C,w,T,E,D,O=e((()=>{S=`_root_p2q2t_1`,C=`_content_p2q2t_11`,w=`_list_p2q2t_24`,T=`_item_p2q2t_32`,E=`_link_p2q2t_41`,D={root:S,content:C,list:w,item:T,link:E}}));function k(e){let t=typeof e==`number`?e:Number.parseInt(e??``,10);return Number.isInteger(t)&&t>0?t:NaN}function A({pages:e}){return(0,N.jsx)(`ul`,{className:D.list,children:e.map((e,t)=>(0,N.jsx)(`li`,{className:D.item,children:(0,N.jsx)(c,{className:D.link,href:e.link,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label})},`${t}-${e.link}`))})}function j(){let{reportParams:e}=p(),n=k(e.post_id),{data:r,isLoading:i,isFetching:s,isError:c,refetch:l}=u(n,e),d;if(!Number.isInteger(n))d=(0,N.jsx)(ee,{icon:a,text:t(`Select a video to see where it is embedded across your site.`,`jetpack-premium-analytics`)});else{let e=r?.pages??[];d=(0,N.jsx)(_,{isLoading:i,isFetching:s,isError:e.length===0&&c,isEmpty:e.length===0,error:{description:t(`We couldn't load video embeds. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:()=>void l()}]},empty:{icon:a,description:t(`This video has not been embedded on any pages yet.`,`jetpack-premium-analytics`)},children:(0,N.jsx)(A,{pages:e})})}return(0,N.jsx)(o,{className:D.root,children:(0,N.jsx)(`div`,{className:D.content,children:d})})}function M({attributes:e={}}){return(0,N.jsx)(g,{attributes:e,children:(0,N.jsx)(j,{})})}var N,P=e((()=>{d(),b(),n(),i(),s(),O(),N=r()})),F,I=e((()=>{n(),i(),F={name:`jpa/video-detail-embeds`,title:t(`Video embeds`,`jetpack-premium-analytics`),help:{content:t(`Lists every page on your site where the selected video is embedded, so you can see where it is being watched.`,`jetpack-premium-analytics`),links:[{label:t(`Learn more`,`jetpack-premium-analytics`),href:`https://jetpack.com/support/jetpack-stats/`}]},icon:a}}));function L(e,t){return{...l(e,t),post_id:W}}function R({withComparison:e}){return(0,V.jsx)(M,{attributes:{reportParams:L(e)}})}function z(e){return(0,V.jsx)(M,{attributes:{reportParams:L(!1,e)}})}function B({withComparison:e,...t}){return(0,V.jsx)(y,{...t,widgetType:F,renderModule:H,renderComponent:M,attributes:{reportParams:L(e)}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),m(),te(),re(),P(),I(),V=r(),f(),H=`storybook/video-detail-embeds`,U=`stats/video/`,W=105,G={title:`Packages/Premium Analytics/Widgets/VideoDetailEmbeds`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"Dashboard widget listing the pages where a single video is embedded, sourced from the Jetpack Stats `stats/video/%d` module via `useStatsSingleVideo`. The widget is scoped to one video through the host-composed `reportParams.post_id`; without one it prompts to select a video. The single-video module has no comparison data, so the `WithComparison` control only exercises that the widget still renders normally when comparison params are present. In Storybook the data is served by `registerReportMocks`."}}}},K={render:R,args:{withComparison:!1},decorators:[x]},q={render:R,args:{withComparison:!0},decorators:[x]},J={render:()=>(0,V.jsx)(M,{attributes:{reportParams:l(!1)}}),decorators:[x]},Y={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(h(U,`loading`),()=>h(U,null))},X={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(h(U,`error`),()=>h(U,null))},Z={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(h(U,`empty`),()=>h(U,null))},Q={render:e=>(0,V.jsx)(B,{...e}),args:{...ne,withComparison:!0},argTypes:{...v,withComparison:{control:`boolean`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderVideoDetailEmbeds,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`The widget on its own, current period only.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderVideoDetailEmbeds,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Same close-up with comparison report params. The single-video module returns
no comparison rows, so the list renders normally without fabricated deltas.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`NoVideoSelected`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as Default,Z as Empty,X as Error,Y as Loading,J as NoVideoSelected,Q as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,G as default};