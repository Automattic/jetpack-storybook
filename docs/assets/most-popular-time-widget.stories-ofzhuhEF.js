import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{B as a,n as o}from"./build-module-DmVuor49.js";import{R as s,W as c,t as l}from"./build-module-B07GZ8y5.js";import{Ct as u,Wt as d,fr as f,kr as p}from"./chart-tooltip-D1h4g3rx.js";import{I as m,L as h,U as ee,z as g}from"./report-metric-DrUls6Lq.js";import{t as te}from"./widget-state-DSBBpEYr.js";import{C as ne,D as re,E as ie,S as _,T as v,b as y,t as ae,w as oe,x as b}from"./src-B7pwfil2.js";var x,S,C,w,T,E,se=e((()=>{x=`_content_1gd4e_1`,S=`_root_1gd4e_9`,C=`_label_1gd4e_14`,w=`_value_1gd4e_18`,T=`_caption_1gd4e_22`,E={content:x,root:S,label:C,value:w,caption:T}}));function D({label:e,value:r,percent:i}){return(0,A.jsxs)(s,{direction:`column`,gap:`xs`,children:[(0,A.jsx)(c,{variant:`heading-md`,render:(0,A.jsx)(`h4`,{}),className:E.label,children:e}),(0,A.jsx)(c,{variant:`heading-2xl`,className:E.value,children:r}),(0,A.jsx)(c,{variant:`body-md`,className:E.caption,children:t(n(`%d%% of views`,`jetpack-premium-analytics-pkg`),i)})]})}function O(){let{data:e,isLoading:t,isFetching:r,isError:i,refetch:o}=d(),c=e,l=!c?.day||!c?.hour;return(0,A.jsx)(`div`,{className:E.content,children:(0,A.jsx)(te,{isLoading:t,isFetching:r,isError:i&&l,isEmpty:l,error:{description:n(`We couldn't load your most popular time. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:()=>void o()}]},empty:{icon:a,description:n(`Not enough data to determine your most popular time yet.`,`jetpack-premium-analytics-pkg`)},children:c?.day&&c?.hour&&(0,A.jsxs)(s,{className:E.root,direction:`column`,gap:`lg`,children:[(0,A.jsx)(D,{label:n(`Best day`,`jetpack-premium-analytics-pkg`),value:c.day,percent:c.percent??0}),(0,A.jsx)(D,{label:n(`Best hour`,`jetpack-premium-analytics-pkg`),value:c.hour,percent:c.hourPercent??0})]})})})}function k({attributes:e={}}){return(0,A.jsx)(ee,{attributes:e,children:(0,A.jsx)(O,{})})}var A,j=e((()=>{u(),ae(),r(),o(),l(),se(),A=i()})),M,ce=e((()=>{o(),M={icon:a}})),N,P,F,I,L,R,z,B=e((()=>{N=`jpa/most-popular-time`,P=`Most popular time`,F=`The day of week and hour of day when your site gets the most views.`,I={content:`The day of week and hour of day when your site gets the most views.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function V(e){return p.removeQueries({queryKey:[`stats`,`insights`]}),g(K,e),()=>{g(K,null),p.removeQueries({queryKey:[`stats`,`insights`]})}}function H(){return(0,W.jsx)(k,{attributes:{reportParams:f()}})}function U(e){return(0,W.jsx)(v,{...e,widgetType:_(z,M),renderModule:G,renderComponent:k,attributes:{reportParams:f(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),m(),ie(),ne(),y(),j(),ce(),B(),W=i(),h(),G=`storybook/most-popular-time`,K=`stats/insights`,q={title:`Packages/Premium Analytics/Widgets/MostPopularTime`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Most popular time" widget. Shows the day of week and hour of day that draw the most views, each with its share of the total. The insights endpoint reports across the whole lifetime of the site, so there is no date range or comparison period.`}}}},J={render:H,decorators:[b]},Y={render:H,tags:[`!autodocs`],decorators:[b],beforeEach:()=>V(`loading`)},X={render:H,tags:[`!autodocs`],decorators:[b],beforeEach:()=>V(`error`)},Z={render:H,tags:[`!autodocs`],decorators:[b],beforeEach:()=>V(`empty`)},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...oe},argTypes:{...re}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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