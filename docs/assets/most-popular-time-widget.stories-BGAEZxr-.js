import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-DQ5lAs4a.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Mn as a,n as o}from"./build-module-C6Ow06jV.js";import{R as s,W as c,t as l}from"./build-module-JNPAD9ni.js";import{Ot as u,Yn as d,ar as f,ut as p}from"./chart-tooltip-DRCwCXz_.js";import{C as m,S as h,T as g,k as _}from"./report-metric-QZWiJDnZ.js";import{t as v}from"./widget-state-DkK2_WfK.js";import{S as y,b,t as x,x as S,y as C}from"./src-B32xYLGr.js";import{n as w,r as T}from"./with-widget-canvas-Dz43KNHY.js";var E,D,O,k,A,j,M=e((()=>{E=`_content_1gd4e_1`,D=`_root_1gd4e_9`,O=`_label_1gd4e_14`,k=`_value_1gd4e_18`,A=`_caption_1gd4e_22`,j={content:E,root:D,label:O,value:k,caption:A}}));function N({label:e,value:n,percent:i}){return(0,I.jsxs)(s,{direction:`column`,gap:`xs`,children:[(0,I.jsx)(c,{variant:`heading-md`,render:(0,I.jsx)(`h4`,{}),className:j.label,children:e}),(0,I.jsx)(c,{variant:`heading-2xl`,className:j.value,children:n}),(0,I.jsx)(c,{variant:`body-md`,className:j.caption,children:r(t(`%d%% of views`,`jetpack-premium-analytics`),i)})]})}function P(){let{data:e,isLoading:n,isFetching:r,isError:i,refetch:o}=u(),c=e,l=!c?.day||!c?.hour;return(0,I.jsx)(`div`,{className:j.content,children:(0,I.jsx)(v,{isLoading:n,isFetching:r,isError:i&&l,isEmpty:l,error:{description:t(`We couldn't load your most popular time. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:()=>void o()}]},empty:{icon:a,description:t(`Not enough data to determine your most popular time yet.`,`jetpack-premium-analytics`)},children:c?.day&&c?.hour&&(0,I.jsxs)(s,{className:j.root,direction:`column`,gap:`lg`,children:[(0,I.jsx)(N,{label:t(`Best day`,`jetpack-premium-analytics`),value:c.day,percent:c.percent??0}),(0,I.jsx)(N,{label:t(`Best hour`,`jetpack-premium-analytics`),value:c.hour,percent:c.hourPercent??0})]})})})}function F({attributes:e={}}){return(0,I.jsx)(_,{attributes:e,children:(0,I.jsx)(P,{})})}var I,L=e((()=>{p(),x(),n(),o(),l(),M(),I=i()})),R,z=e((()=>{n(),o(),R={name:`jpa/most-popular-time`,title:t(`Most popular time`,`jetpack-premium-analytics`),help:{content:t(`The day of week and hour of day when your site gets the most views.`,`jetpack-premium-analytics`)},icon:a}}));function B(e){return f.removeQueries({queryKey:[`stats`,`insights`]}),g(G,e),()=>{g(G,null),f.removeQueries({queryKey:[`stats`,`insights`]})}}function V({withComparison:e}){return(0,U.jsx)(F,{attributes:{reportParams:d(e)}})}function H({withComparison:e,...t}){return(0,U.jsx)(b,{...t,widgetType:{name:R.name,title:R.title,icon:R.icon,presentation:`framed`},renderModule:W,renderComponent:F,attributes:{reportParams:d(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),h(),S(),w(),L(),z(),U=i(),m(),W=`storybook/most-popular-time`,G=`stats/insights`,K={title:`Packages/Premium Analytics/Widgets/MostPopularTime`,component:F,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Most popular time" widget. Shows the day of week and hour of day that draw the most views, each with its share of the total. The insights endpoint reports across the whole lifetime of the site, so there is no date range or comparison period.`}}}},q={render:V,args:{withComparison:!1},decorators:[T]},J={render:V,args:{withComparison:!0},decorators:[T],parameters:{docs:{description:{story:`The insights endpoint has no comparison period, so this renders identically to Default even when comparison report params are supplied.`}}}},Y={render:()=>V({withComparison:!1}),tags:[`!autodocs`],decorators:[T],beforeEach:()=>B(`loading`)},X={render:()=>V({withComparison:!1}),tags:[`!autodocs`],decorators:[T],beforeEach:()=>B(`error`)},Z={render:()=>V({withComparison:!1}),tags:[`!autodocs`],decorators:[T],beforeEach:()=>B(`empty`)},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...C,withComparison:!0},argTypes:{...y,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderMostPopularTime,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Default state — the peak day and hour highlights.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderMostPopularTime,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      description: {
        story: 'The insights endpoint has no comparison period, so this renders identically to Default even when comparison report params are supplied.'
      }
    }
  }
}`,...J.parameters?.docs?.source},description:{story:`Comparison state — comparison report params are supplied, but the insights
endpoint has no comparison data, so this renders identically to Default.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderMostPopularTime({
    withComparison: false
  }),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceInsightsState('loading')
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderMostPopularTime({
    withComparison: false
  }),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceInsightsState('error')
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderMostPopularTime({
    withComparison: false
  }),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceInsightsState('empty')
}`,...Z.parameters?.docs?.source},description:{story:`Resolved without peak day/hour data: the widget shows its empty state (no
icon — the widget's \`scheduled\` glyph has no neutral counterpart in the
analytics icon set).`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <MostPopularTimeDashboardStory {...args} />,
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};