import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{B as a,n as o}from"./build-module-DmVuor49.js";import{R as s,W as c,t as l}from"./build-module-PW2jnQeX.js";import{Bt as ee,Tr as u,cr as d,yt as f}from"./chart-tooltip-CN-zierK.js";import{F as p,L as m,P as te,V as ne}from"./report-metric-D7MbdAaA.js";import{t as re}from"./widget-state-cFvrqNOS.js";import{C as ie,D as ae,E as oe,S as h,T as g,b as _,t as se,w as v,x as y}from"./src-D_GQJy_9.js";var b,x,S,C,w,T,ce=e((()=>{b=`_content_1gd4e_1`,x=`_root_1gd4e_9`,S=`_label_1gd4e_14`,C=`_value_1gd4e_18`,w=`_caption_1gd4e_22`,T={content:b,root:x,label:S,value:C,caption:w}}));function E({label:e,value:r,percent:i}){return(0,k.jsxs)(s,{direction:`column`,gap:`xs`,children:[(0,k.jsx)(c,{variant:`heading-md`,render:(0,k.jsx)(`h4`,{}),className:T.label,children:e}),(0,k.jsx)(c,{variant:`heading-2xl`,className:T.value,children:r}),(0,k.jsx)(c,{variant:`body-md`,className:T.caption,children:t(n(`%d%% of views`,`jetpack-premium-analytics`),i)})]})}function D(){let{data:e,isLoading:t,isFetching:r,isError:i,refetch:o}=ee(),c=e,l=!c?.day||!c?.hour;return(0,k.jsx)(`div`,{className:T.content,children:(0,k.jsx)(re,{isLoading:t,isFetching:r,isError:i&&l,isEmpty:l,error:{description:n(`We couldn't load your most popular time. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:()=>void o()}]},empty:{icon:a,description:n(`Not enough data to determine your most popular time yet.`,`jetpack-premium-analytics`)},children:c?.day&&c?.hour&&(0,k.jsxs)(s,{className:T.root,direction:`column`,gap:`lg`,children:[(0,k.jsx)(E,{label:n(`Best day`,`jetpack-premium-analytics`),value:c.day,percent:c.percent??0}),(0,k.jsx)(E,{label:n(`Best hour`,`jetpack-premium-analytics`),value:c.hour,percent:c.hourPercent??0})]})})})}function O({attributes:e={}}){return(0,k.jsx)(ne,{attributes:e,children:(0,k.jsx)(D,{})})}var k,A=e((()=>{f(),se(),r(),o(),l(),ce(),k=i()})),j,M=e((()=>{o(),j={icon:a}})),N,P,F,I,L,R,z,B=e((()=>{N=`jpa/most-popular-time`,P=`Most popular time`,F=`The day of week and hour of day when your site gets the most views.`,I={content:`The day of week and hour of day when your site gets the most views.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function V(e){return u.removeQueries({queryKey:[`stats`,`insights`]}),m(K,e),()=>{m(K,null),u.removeQueries({queryKey:[`stats`,`insights`]})}}function H(){return(0,W.jsx)(O,{attributes:{reportParams:d()}})}function U(e){return(0,W.jsx)(g,{...e,widgetType:h(z,j),renderModule:G,renderComponent:O,attributes:{reportParams:d(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),te(),oe(),ie(),_(),A(),M(),B(),W=i(),p(),G=`storybook/most-popular-time`,K=`stats/insights`,q={title:`Packages/Premium Analytics/Widgets/MostPopularTime`,component:O,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Most popular time" widget. Shows the day of week and hour of day that draw the most views, each with its share of the total. The insights endpoint reports across the whole lifetime of the site, so there is no date range or comparison period.`}}}},J={render:H,decorators:[y]},Y={render:H,tags:[`!autodocs`],decorators:[y],beforeEach:()=>V(`loading`)},X={render:H,tags:[`!autodocs`],decorators:[y],beforeEach:()=>V(`error`)},Z={render:H,tags:[`!autodocs`],decorators:[y],beforeEach:()=>V(`empty`)},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...v},argTypes:{...ae}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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