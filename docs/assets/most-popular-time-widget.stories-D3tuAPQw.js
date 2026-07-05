import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,n as o}from"./build-module-DwipKI4I.js";import{b as s,f as c,ht as l,s as u}from"./hooks-uoTe4i83.js";import{A as d,S as f,t as p}from"./build-module-CVU51eV9.js";import{i as m}from"./metric-tabs-chart-Bv4rE-T-.js";import{n as h,t as g}from"./register-report-mocks-C4tVYwcY.js";import{i as _,n as v,r as y,t as b}from"./widget-dashboard-with-widget-CZI5VkIi.js";import{t as x}from"./src-YCrBNjYG.js";var S,C,w,T,E,D,O=e((()=>{S=`_root_f2gvy_1`,C=`_label_f2gvy_6`,w=`_value_f2gvy_10`,T=`_caption_f2gvy_14`,E=`_placeholder_f2gvy_18`,D={root:S,label:C,value:w,caption:T,placeholder:E}}));function k({label:e,value:r,percent:i}){return(0,M.jsxs)(f,{direction:`column`,gap:`xs`,children:[(0,M.jsx)(d,{variant:`heading-md`,render:(0,M.jsx)(`h4`,{}),className:D.label,children:e}),(0,M.jsx)(d,{variant:`heading-2xl`,className:D.value,children:r}),(0,M.jsx)(d,{variant:`body-md`,className:D.caption,children:t(n(`%d%% of views`,`jetpack-premium-analytics`),i)})]})}function A(){let{data:e,isLoading:t,isError:r}=s(),i=e;return r?(0,M.jsx)(d,{className:D.placeholder,children:n(`Unable to load insights.`,`jetpack-premium-analytics`)}):t&&!i?.hour?(0,M.jsx)(m,{}):!i?.day||!i?.hour?(0,M.jsx)(d,{className:D.placeholder,children:n(`Not enough data to determine your most popular time yet.`,`jetpack-premium-analytics`)}):(0,M.jsxs)(f,{className:D.root,direction:`column`,gap:`lg`,children:[(0,M.jsx)(k,{label:n(`Best day`,`jetpack-premium-analytics`),value:i.day,percent:i.percent??0}),(0,M.jsx)(k,{label:n(`Best hour`,`jetpack-premium-analytics`),value:i.hour,percent:i.hourPercent??0})]})}function j({attributes:e={}}){return(0,M.jsx)(u,{attributes:e,children:(0,M.jsx)(A,{})})}var M,N=e((()=>{c(),x(),r(),p(),O(),M=i()})),P,F=e((()=>{r(),o(),P={name:`jpa/most-popular-time`,title:n(`Most popular time`,`jetpack-premium-analytics`),icon:a}}));function I({withComparison:e}){return(0,R.jsx)(j,{attributes:{reportParams:l(e)}})}function L({withComparison:e,...t}){return(0,R.jsx)(v,{...t,widgetType:{name:P.name,title:P.title,icon:P.icon,presentation:`framed`},renderModule:z,renderComponent:j,attributes:{reportParams:l(e)}})}var R,z,B,V,H,U,W,G;e((()=>{c(),g(),y(),N(),F(),R=i(),h(),z=`storybook/most-popular-time`,B=e=>(0,R.jsx)(`div`,{style:{width:`100%`,height:`360px`},children:(0,R.jsx)(e,{})}),V={title:`Packages/Premium Analytics/Widgets/MostPopularTime`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Most popular time" widget. Shows the day of week and hour of day that draw the most views, each with its share of the total. The insights endpoint reports across the whole lifetime of the site, so there is no date range or comparison period.`}}}},H={render:I,args:{withComparison:!1},decorators:[B]},U={render:I,args:{withComparison:!0},decorators:[B],parameters:{docs:{description:{story:`The insights endpoint has no comparison period, so this renders identically to Default even when comparison report params are supplied.`}}}},W={render:e=>(0,R.jsx)(L,{...e}),args:{...b,withComparison:!0},argTypes:{..._,withComparison:{control:`boolean`}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: renderMostPopularTime,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...H.parameters?.docs?.source},description:{story:`Default state — the peak day and hour highlights.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:`Comparison state — comparison report params are supplied, but the insights
endpoint has no comparison data, so this renders identically to Default.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{H as Default,W as WidgetDashboardWithWidget,U as WithComparison,G as __namedExportsOrder,V as default};