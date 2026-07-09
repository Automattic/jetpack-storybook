import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-DQ5lAs4a.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{An as a,n as o}from"./build-module-_6UNQmiR.js";import{Dt as s,p as c,s as l,x as u}from"./hooks-B4X0-bKK.js";import{K as d,R as f,t as p}from"./build-module-CqMGkL50.js";import{n as m}from"./widget-loading-overlay-Di7UCXw3.js";import{n as h,t as g}from"./register-report-mocks-BDYwKS0z.js";import{i as _,n as v,r as y,t as b}from"./widget-dashboard-with-widget-CZ4r78hT.js";import{t as x}from"./src-B3SmSjhk.js";var S,C,w,T,E,D,O=e((()=>{S=`_root_1as8p_1`,C=`_label_1as8p_6`,w=`_value_1as8p_10`,T=`_caption_1as8p_14`,E=`_placeholder_1as8p_18`,D={root:S,label:C,value:w,caption:T,placeholder:E}}));function k({label:e,value:n,percent:i}){return(0,M.jsxs)(f,{direction:`column`,gap:`xs`,children:[(0,M.jsx)(d,{variant:`heading-md`,render:(0,M.jsx)(`h4`,{}),className:D.label,children:e}),(0,M.jsx)(d,{variant:`heading-2xl`,className:D.value,children:n}),(0,M.jsx)(d,{variant:`body-md`,className:D.caption,children:r(t(`%d%% of views`,`jetpack-premium-analytics`),i)})]})}function A(){let{data:e,isLoading:n,isError:r}=u(),i=e;return r?(0,M.jsx)(d,{className:D.placeholder,children:t(`Unable to load insights.`,`jetpack-premium-analytics`)}):n&&!i?.hour?(0,M.jsx)(m,{}):!i?.day||!i?.hour?(0,M.jsx)(d,{className:D.placeholder,children:t(`Not enough data to determine your most popular time yet.`,`jetpack-premium-analytics`)}):(0,M.jsxs)(f,{className:D.root,direction:`column`,gap:`lg`,children:[(0,M.jsx)(k,{label:t(`Best day`,`jetpack-premium-analytics`),value:i.day,percent:i.percent??0}),(0,M.jsx)(k,{label:t(`Best hour`,`jetpack-premium-analytics`),value:i.hour,percent:i.hourPercent??0})]})}function j({attributes:e={}}){return(0,M.jsx)(l,{attributes:e,children:(0,M.jsx)(A,{})})}var M,N=e((()=>{c(),x(),n(),p(),O(),M=i()})),P,F=e((()=>{n(),o(),P={name:`jpa/most-popular-time`,title:t(`Most popular time`,`jetpack-premium-analytics`),icon:a}}));function I({withComparison:e}){return(0,R.jsx)(j,{attributes:{reportParams:s(e)}})}function L({withComparison:e,...t}){return(0,R.jsx)(v,{...t,widgetType:{name:P.name,title:P.title,icon:P.icon,presentation:`framed`},renderModule:z,renderComponent:j,attributes:{reportParams:s(e)}})}var R,z,B,V,H,U,W,G;e((()=>{c(),g(),y(),N(),F(),R=i(),h(),z=`storybook/most-popular-time`,B=e=>(0,R.jsx)(`div`,{style:{width:`100%`,height:`360px`},children:(0,R.jsx)(e,{})}),V={title:`Packages/Premium Analytics/Widgets/MostPopularTime`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Most popular time" widget. Shows the day of week and hour of day that draw the most views, each with its share of the total. The insights endpoint reports across the whole lifetime of the site, so there is no date range or comparison period.`}}}},H={render:I,args:{withComparison:!1},decorators:[B]},U={render:I,args:{withComparison:!0},decorators:[B],parameters:{docs:{description:{story:`The insights endpoint has no comparison period, so this renders identically to Default even when comparison report params are supplied.`}}}},W={render:e=>(0,R.jsx)(L,{...e}),args:{...b,withComparison:!0},argTypes:{..._,withComparison:{control:`boolean`}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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