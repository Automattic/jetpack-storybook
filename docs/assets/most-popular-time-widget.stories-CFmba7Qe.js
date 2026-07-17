import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{B as a,n as o}from"./build-module-DmVuor49.js";import{R as s,W as c,t as l}from"./build-module-Co71Jhbm.js";import{$n as u,jt as d,mr as f,ut as p}from"./chart-tooltip-C4NUtjXe.js";import{D as m,T as h,j as g,w as _}from"./report-metric-DerWADBf.js";import{t as v}from"./widget-state-B76seV2w.js";import{C as y,S as b,T as x,b as S,t as C,w,x as T}from"./src-0WK5HJj0.js";var E,D,O,k,A,j,M=e((()=>{E=`_content_1gd4e_1`,D=`_root_1gd4e_9`,O=`_label_1gd4e_14`,k=`_value_1gd4e_18`,A=`_caption_1gd4e_22`,j={content:E,root:D,label:O,value:k,caption:A}}));function N({label:e,value:r,percent:i}){return(0,I.jsxs)(s,{direction:`column`,gap:`xs`,children:[(0,I.jsx)(c,{variant:`heading-md`,render:(0,I.jsx)(`h4`,{}),className:j.label,children:e}),(0,I.jsx)(c,{variant:`heading-2xl`,className:j.value,children:r}),(0,I.jsx)(c,{variant:`body-md`,className:j.caption,children:t(n(`%d%% of views`,`jetpack-premium-analytics`),i)})]})}function P(){let{data:e,isLoading:t,isFetching:r,isError:i,refetch:o}=d(),c=e,l=!c?.day||!c?.hour;return(0,I.jsx)(`div`,{className:j.content,children:(0,I.jsx)(v,{isLoading:t,isFetching:r,isError:i&&l,isEmpty:l,error:{description:n(`We couldn't load your most popular time. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:()=>void o()}]},empty:{icon:a,description:n(`Not enough data to determine your most popular time yet.`,`jetpack-premium-analytics`)},children:c?.day&&c?.hour&&(0,I.jsxs)(s,{className:j.root,direction:`column`,gap:`lg`,children:[(0,I.jsx)(N,{label:n(`Best day`,`jetpack-premium-analytics`),value:c.day,percent:c.percent??0}),(0,I.jsx)(N,{label:n(`Best hour`,`jetpack-premium-analytics`),value:c.hour,percent:c.hourPercent??0})]})})})}function F({attributes:e={}}){return(0,I.jsx)(g,{attributes:e,children:(0,I.jsx)(P,{})})}var I,L=e((()=>{p(),C(),r(),o(),l(),M(),I=i()})),R,z=e((()=>{r(),o(),R={name:`jpa/most-popular-time`,title:n(`Most popular time`,`jetpack-premium-analytics`),help:{content:n(`The day of week and hour of day when your site gets the most views.`,`jetpack-premium-analytics`)},icon:a}}));function B(e){return f.removeQueries({queryKey:[`stats`,`insights`]}),m(G,e),()=>{m(G,null),f.removeQueries({queryKey:[`stats`,`insights`]})}}function V(){return(0,U.jsx)(F,{attributes:{reportParams:u()}})}function H(e){return(0,U.jsx)(y,{...e,widgetType:{name:R.name,title:R.title,icon:R.icon,presentation:`framed`},renderModule:W,renderComponent:F,attributes:{reportParams:u(!0)}})}var U,W,G,K,q,J,Y,X,Z,Q;e((()=>{p(),_(),w(),S(),L(),z(),U=i(),h(),W=`storybook/most-popular-time`,G=`stats/insights`,K={title:`Packages/Premium Analytics/Widgets/MostPopularTime`,component:F,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Most popular time" widget. Shows the day of week and hour of day that draw the most views, each with its share of the total. The insights endpoint reports across the whole lifetime of the site, so there is no date range or comparison period.`}}}},q={render:V,decorators:[T]},J={render:V,tags:[`!autodocs`],decorators:[T],beforeEach:()=>B(`loading`)},Y={render:V,tags:[`!autodocs`],decorators:[T],beforeEach:()=>B(`error`)},X={render:V,tags:[`!autodocs`],decorators:[T],beforeEach:()=>B(`empty`)},Z={render:e=>(0,U.jsx)(H,{...e}),args:{...b},argTypes:{...x}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderMostPopularTime,
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Default state — the peak day and hour highlights.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderMostPopularTime,
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceInsightsState('loading')
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderMostPopularTime,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceInsightsState('error')
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderMostPopularTime,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceInsightsState('empty')
}`,...X.parameters?.docs?.source},description:{story:`Resolved without peak day/hour data: the widget shows its empty state (no
icon — the widget's \`scheduled\` glyph has no neutral counterpart in the
analytics icon set).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <MostPopularTimeDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,X as Empty,Y as Error,J as Loading,Z as WidgetDashboardWithWidget,Q as __namedExportsOrder,K as default};