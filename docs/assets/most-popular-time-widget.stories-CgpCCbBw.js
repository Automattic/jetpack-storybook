import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,t as r}from"./build-module-DyKOxfM8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Mn as a,n as o}from"./build-module-CDRs4YxF.js";import{Tn as s,ln as c,t as l}from"./src-CkePhtYg.js";import{$ as ee,G as u,K as d,Y as f}from"./report-metric-CPA6R3m5.js";import{Gt as p,S as m,ln as h,t as g}from"./src-Cmxy-Z5o.js";import{t as te}from"./widget-state-CJmMNZzn.js";import{C as ne,D as re,E as ie,S as _,T as ae,b as oe,t as v,w as se,x as y}from"./src-Oqkq0snT.js";var b,x,S,C,w,T,E=e((()=>{b=`_content_1gd4e_1`,x=`_root_1gd4e_9`,S=`_label_1gd4e_14`,C=`_value_1gd4e_18`,w=`_caption_1gd4e_22`,T={content:b,root:x,label:S,value:C,caption:w}}));function D({label:e,value:r,percent:i}){return(0,A.jsxs)(c,{direction:`column`,gap:`xs`,children:[(0,A.jsx)(s,{variant:`heading-md`,render:(0,A.jsx)(`h4`,{}),className:T.label,children:e}),(0,A.jsx)(s,{variant:`heading-2xl`,className:T.value,children:r}),(0,A.jsx)(s,{variant:`body-md`,className:T.caption,children:t(n(`%d%% of views`,`jetpack-premium-analytics-pkg`),i)})]})}function O(){let{data:e,isLoading:t,isFetching:r,isError:i,refetch:o}=m(),s=e,l=!s?.day||!s?.hour;return(0,A.jsx)(`div`,{className:T.content,children:(0,A.jsx)(te,{isLoading:t,isFetching:r,isError:i&&l,isEmpty:l,error:{description:n(`We couldn't load your most popular time. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:()=>void o()}]},empty:{icon:a,description:n(`Not enough data to determine your most popular time yet.`,`jetpack-premium-analytics-pkg`)},children:s?.day&&s?.hour&&(0,A.jsxs)(c,{className:T.root,direction:`column`,gap:`lg`,children:[(0,A.jsx)(D,{label:n(`Best day`,`jetpack-premium-analytics-pkg`),value:s.day,percent:s.percent??0}),(0,A.jsx)(D,{label:n(`Best hour`,`jetpack-premium-analytics-pkg`),value:s.hour,percent:s.hourPercent??0})]})})})}function k({attributes:e={}}){return(0,A.jsx)(ee,{attributes:e,children:(0,A.jsx)(O,{})})}var A,j=e((()=>{g(),v(),r(),o(),l(),E(),A=i()})),M,ce=e((()=>{o(),M={icon:a}})),N,P,F,I,L,R,z,B=e((()=>{N=`jpa/most-popular-time`,P=`Most popular time`,F=`The day of week and hour of day when your site gets the most views.`,I={content:`The day of week and hour of day when your site gets the most views.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function V(e){return h.removeQueries({queryKey:[`stats`,`insights`]}),f(K,e),()=>{f(K,null),h.removeQueries({queryKey:[`stats`,`insights`]})}}function H(){return(0,W.jsx)(k,{attributes:{reportParams:p()}})}function U(e){return(0,W.jsx)(ae,{...e,widgetType:_(z,M),renderModule:G,renderComponent:k,attributes:{reportParams:p(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),u(),ie(),ne(),oe(),j(),ce(),B(),W=i(),d(),G=`storybook/most-popular-time`,K=`stats/insights`,q={title:`Packages/Premium Analytics/Widgets/MostPopularTime`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Most popular time" widget. Shows the day of week and hour of day that draw the most views, each with its share of the total. The insights endpoint reports across the whole lifetime of the site, so there is no date range or comparison period.`}}}},J={render:H,decorators:[y]},Y={render:H,tags:[`!autodocs`],decorators:[y],beforeEach:()=>V(`loading`)},X={render:H,tags:[`!autodocs`],decorators:[y],beforeEach:()=>V(`error`)},Z={render:H,tags:[`!autodocs`],decorators:[y],beforeEach:()=>V(`empty`)},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...se},argTypes:{...re}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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