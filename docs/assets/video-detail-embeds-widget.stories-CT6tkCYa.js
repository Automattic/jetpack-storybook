import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{c as i,n as a}from"./build-module-Bt8gOW8e.js";import{Ht as o,d as s,h as c,p as l,s as u}from"./hooks-CHN5wrZW.js";import{R as ee,t as d,u as te}from"./build-module-BAze1CUO.js";import{t as f}from"./chart-empty-state-dOPSZFeO.js";import{i as p,n as m,t as h}from"./register-report-mocks-BGVQ2Y9e.js";import{t as g}from"./widget-state-CAj0GftY.js";import{i as _,n as v,r as y,t as b}from"./widget-dashboard-with-widget-FacHxCFZ.js";import{t as ne}from"./src-_BA8_HWt.js";var x,S,C,w,T,E,D=e((()=>{x=`_root_1yikk_1`,S=`_content_1yikk_11`,C=`_list_1yikk_24`,w=`_item_1yikk_32`,T=`_link_1yikk_41`,E={root:x,content:S,list:C,item:w,link:T}}));function O(e){let t=typeof e==`number`?e:Number.parseInt(e??``,10);return Number.isInteger(t)&&t>0?t:NaN}function k({pages:e}){return(0,M.jsx)(`ul`,{className:E.list,children:e.map((e,t)=>(0,M.jsx)(`li`,{className:E.item,children:(0,M.jsx)(te,{className:E.link,href:e.link,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label})},`${t}-${e.link}`))})}function A(){let{reportParams:e}=s(),n=O(e.post_id),{data:r,isLoading:a,isFetching:o,isError:l,refetch:u}=c(n,e),d;if(!Number.isInteger(n))d=(0,M.jsx)(f,{icon:i,text:t(`Select a video to see where it is embedded across your site.`,`jetpack-premium-analytics`)});else{let e=r?.pages??[];d=(0,M.jsx)(g,{isLoading:a,isFetching:o,isError:l,isEmpty:e.length===0,error:{description:t(`We couldn't load video embeds. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:()=>void u()}]},empty:{icon:i,description:t(`This video has not been embedded on any pages yet.`,`jetpack-premium-analytics`)},children:(0,M.jsx)(k,{pages:e})})}return(0,M.jsx)(ee,{className:E.root,children:(0,M.jsx)(`div`,{className:E.content,children:d})})}function j({attributes:e={}}){return(0,M.jsx)(u,{attributes:e,children:(0,M.jsx)(A,{})})}var M,N=e((()=>{l(),ne(),n(),a(),d(),D(),M=r()})),P,F=e((()=>{n(),a(),P={name:`jpa/video-detail-embeds`,title:t(`Video embeds`,`jetpack-premium-analytics`),description:t(`Pages where the selected video is embedded, sourced from Jetpack Stats.`,`jetpack-premium-analytics`),help:{content:t(`Lists every page on your site where the selected video is embedded, so you can see where it is being watched.`,`jetpack-premium-analytics`),links:[{label:t(`Learn more`,`jetpack-premium-analytics`),href:`https://jetpack.com/support/jetpack-stats/`}]},icon:i}}));function I(e,t){return{...o(e,t),post_id:U}}function L({withComparison:e}){return(0,B.jsx)(j,{attributes:{reportParams:I(e)}})}function R(e){return(0,B.jsx)(j,{attributes:{reportParams:I(!1,e)}})}function z({withComparison:e,...t}){return(0,B.jsx)(v,{...t,widgetType:P,renderModule:V,renderComponent:j,attributes:{reportParams:I(e)}})}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),h(),y(),N(),F(),B=r(),m(),V=`storybook/video-detail-embeds`,H=`stats/video/`,U=105,W=e=>(0,B.jsx)(`div`,{style:{width:`380px`,height:`520px`,margin:`0 auto`,padding:`16px`,boxSizing:`border-box`,background:`#fff`,border:`1px solid #e0e0e0`,borderRadius:`8px`,overflow:`hidden`},children:(0,B.jsx)(e,{})}),G={title:`Packages/Premium Analytics/Widgets/VideoDetailEmbeds`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"Dashboard widget listing the pages where a single video is embedded, sourced from the Jetpack Stats `stats/video/%d` module via `useStatsSingleVideo`. The widget is scoped to one video through the host-composed `reportParams.post_id`; without one it prompts to select a video. The single-video module has no comparison data, so the `WithComparison` control only exercises that the widget still renders normally when comparison params are present. In Storybook the data is served by `registerReportMocks`."}}}},K={render:L,args:{withComparison:!1},decorators:[W]},q={render:L,args:{withComparison:!0},decorators:[W]},J={render:()=>(0,B.jsx)(j,{attributes:{reportParams:o(!1)}}),decorators:[W]},Y={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[W],beforeEach:()=>(p(H,`loading`),()=>p(H,null))},X={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[W],beforeEach:()=>(p(H,`error`),()=>p(H,null))},Z={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[W],beforeEach:()=>(p(H,`empty`),()=>p(H,null))},Q={render:e=>(0,B.jsx)(z,{...e}),args:{...b,withComparison:!0},argTypes:{..._,withComparison:{control:`boolean`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
  // Kept off the shared autodocs page: the mock override is keyed by path, so it
  // would otherwise force the sibling stories on that page into the same state.
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