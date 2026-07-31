import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{B as a,n as o}from"./build-module-DmVuor49.js";import{H as s,J as c,V as l,W as u}from"./report-metric-yaX04v1a.js";import{R as d,W as f,t as p}from"./build-module-CKtN81-S.js";import{Dr as m,Ht as h,ur as g,xt as _}from"./chart-tooltip-DMwJdbCr.js";import{t as ee}from"./widget-state-C11sRIqb.js";import{C as te,D as ne,E as re,S as ie,T as v,b as y,t as ae,w as oe,x as b}from"./src-eORpN2M4.js";var x,S,C,w,T,E,se=e((()=>{x=`_content_1gd4e_1`,S=`_root_1gd4e_9`,C=`_label_1gd4e_14`,w=`_value_1gd4e_18`,T=`_caption_1gd4e_22`,E={content:x,root:S,label:C,value:w,caption:T}}));function D({label:e,value:r,percent:i}){return(0,k.jsxs)(d,{direction:`column`,gap:`xs`,children:[(0,k.jsx)(f,{variant:`heading-md`,render:(0,k.jsx)(`h4`,{}),className:E.label,children:e}),(0,k.jsx)(f,{variant:`heading-2xl`,className:E.value,children:r}),(0,k.jsx)(f,{variant:`body-md`,className:E.caption,children:t(n(`%d%% of views`,`jetpack-premium-analytics-pkg`),i)})]})}function ce(){let{data:e,isLoading:t,isFetching:r,isError:i,refetch:o}=h(),s=e,c=!s?.day||!s?.hour;return(0,k.jsx)(`div`,{className:E.content,children:(0,k.jsx)(ee,{isLoading:t,isFetching:r,isError:i&&c,isEmpty:c,error:{description:n(`We couldn't load your most popular time. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:()=>void o()}]},empty:{icon:a,description:n(`Not enough data to determine your most popular time yet.`,`jetpack-premium-analytics-pkg`)},children:s?.day&&s?.hour&&(0,k.jsxs)(d,{className:E.root,direction:`column`,gap:`lg`,children:[(0,k.jsx)(D,{label:n(`Best day`,`jetpack-premium-analytics-pkg`),value:s.day,percent:s.percent??0}),(0,k.jsx)(D,{label:n(`Best hour`,`jetpack-premium-analytics-pkg`),value:s.hour,percent:s.hourPercent??0})]})})})}function O({attributes:e={}}){return(0,k.jsx)(c,{attributes:e,children:(0,k.jsx)(ce,{})})}var k,A=e((()=>{_(),ae(),r(),o(),p(),se(),k=i()})),j,M=e((()=>{o(),j={icon:a}})),N,P,F,I,L,R,z,B=e((()=>{N=`jpa/most-popular-time`,P=`Most popular time`,F=`The day of week and hour of day when your site gets the most views.`,I={content:`The day of week and hour of day when your site gets the most views.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function V(e){return m.removeQueries({queryKey:[`stats`,`insights`]}),u(K,e),()=>{u(K,null),m.removeQueries({queryKey:[`stats`,`insights`]})}}function H(){return(0,W.jsx)(O,{attributes:{reportParams:g()}})}function U(e){return(0,W.jsx)(v,{...e,widgetType:ie(z,j),renderModule:G,renderComponent:O,attributes:{reportParams:g(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),l(),re(),te(),y(),A(),M(),B(),W=i(),s(),G=`storybook/most-popular-time`,K=`stats/insights`,q={title:`Packages/Premium Analytics/Widgets/MostPopularTime`,component:O,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Most popular time" widget. Shows the day of week and hour of day that draw the most views, each with its share of the total. The insights endpoint reports across the whole lifetime of the site, so there is no date range or comparison period.`}}}},J={render:H,decorators:[b]},Y={render:H,tags:[`!autodocs`],decorators:[b],beforeEach:()=>V(`loading`)},X={render:H,tags:[`!autodocs`],decorators:[b],beforeEach:()=>V(`error`)},Z={render:H,tags:[`!autodocs`],decorators:[b],beforeEach:()=>V(`empty`)},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...oe},argTypes:{...ne}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderMostPopularTime,
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`Default state — the peak day and hour highlights.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderMostPopularTime,
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceInsightsState('loading')
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderMostPopularTime,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceInsightsState('error')
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderMostPopularTime,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceInsightsState('empty')
}`,...Z.parameters?.docs?.source},description:{story:`Resolved without peak day/hour data: the widget shows its empty state (no
icon — the widget's \`scheduled\` glyph has no neutral counterpart in the
analytics icon set).`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <MostPopularTimeDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,q as default};