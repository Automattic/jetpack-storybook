import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{B as a,n as o}from"./build-module-DoJYX5DX.js";import{G as s,W as c,Z as l,q as u}from"./report-metric-c1D_qvJb.js";import{B as d,K as f,t as p}from"./src-XZOpTVCy.js";import{Dr as m,Ht as h,ur as g,xt as _}from"./chart-tooltip-zAw7regG.js";import{t as ee}from"./widget-state-BTUmQLxQ.js";import{C as te,D as ne,E as re,S as ie,T as v,b as y,t as b,w as ae,x}from"./src-C3TDM8h_.js";var S,C,w,T,E,D,oe=e((()=>{S=`_content_1gd4e_1`,C=`_root_1gd4e_9`,w=`_label_1gd4e_14`,T=`_value_1gd4e_18`,E=`_caption_1gd4e_22`,D={content:S,root:C,label:w,value:T,caption:E}}));function O({label:e,value:n,percent:i}){return(0,A.jsxs)(d,{direction:`column`,gap:`xs`,children:[(0,A.jsx)(f,{variant:`heading-md`,render:(0,A.jsx)(`h4`,{}),className:D.label,children:e}),(0,A.jsx)(f,{variant:`heading-2xl`,className:D.value,children:n}),(0,A.jsx)(f,{variant:`body-md`,className:D.caption,children:r(t(`%d%% of views`,`jetpack-premium-analytics-pkg`),i)})]})}function se(){let{data:e,isLoading:n,isFetching:r,isError:i,refetch:o}=h(),s=e,c=!s?.day||!s?.hour;return(0,A.jsx)(`div`,{className:D.content,children:(0,A.jsx)(ee,{isLoading:n,isFetching:r,isError:i&&c,isEmpty:c,error:{description:t(`We couldn't load your most popular time. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:()=>void o()}]},empty:{icon:a,description:t(`Not enough data to determine your most popular time yet.`,`jetpack-premium-analytics-pkg`)},children:s?.day&&s?.hour&&(0,A.jsxs)(d,{className:D.root,direction:`column`,gap:`lg`,children:[(0,A.jsx)(O,{label:t(`Best day`,`jetpack-premium-analytics-pkg`),value:s.day,percent:s.percent??0}),(0,A.jsx)(O,{label:t(`Best hour`,`jetpack-premium-analytics-pkg`),value:s.hour,percent:s.hourPercent??0})]})})})}function k({attributes:e={}}){return(0,A.jsx)(l,{attributes:e,children:(0,A.jsx)(se,{})})}var A,j=e((()=>{_(),b(),n(),o(),p(),oe(),A=i()})),M,ce=e((()=>{o(),M={icon:a}})),N,P,F,I,L,R,z,B=e((()=>{N=`jpa/most-popular-time`,P=`Most popular time`,F=`The day of week and hour of day when your site gets the most views.`,I={content:`The day of week and hour of day when your site gets the most views.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function V(e){return m.removeQueries({queryKey:[`stats`,`insights`]}),u(K,e),()=>{u(K,null),m.removeQueries({queryKey:[`stats`,`insights`]})}}function H(){return(0,W.jsx)(k,{attributes:{reportParams:g()}})}function U(e){return(0,W.jsx)(v,{...e,widgetType:ie(z,M),renderModule:G,renderComponent:k,attributes:{reportParams:g(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),c(),re(),te(),y(),j(),ce(),B(),W=i(),s(),G=`storybook/most-popular-time`,K=`stats/insights`,q={title:`Packages/Premium Analytics/Widgets/MostPopularTime`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Most popular time" widget. Shows the day of week and hour of day that draw the most views, each with its share of the total. The insights endpoint reports across the whole lifetime of the site, so there is no date range or comparison period.`}}}},J={render:H,decorators:[x]},Y={render:H,tags:[`!autodocs`],decorators:[x],beforeEach:()=>V(`loading`)},X={render:H,tags:[`!autodocs`],decorators:[x],beforeEach:()=>V(`error`)},Z={render:H,tags:[`!autodocs`],decorators:[x],beforeEach:()=>V(`empty`)},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...ae},argTypes:{...ne}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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