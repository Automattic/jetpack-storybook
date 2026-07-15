import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-DQ5lAs4a.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Mn as a,n as o}from"./build-module-Bt8gOW8e.js";import{K as s,R as c,t as l}from"./build-module-BAze1CUO.js";import{Dt as u,Kn as d,ut as f}from"./chart-tooltip-ClIvRUzH.js";import{S as p}from"./report-metric-C9QRZwAo.js";import{n as m,t as h}from"./register-report-mocks-CEOd2Lr0.js";import{t as g}from"./widget-state-CkRqQWXE.js";import{S as _,b as v,t as y,x as b,y as x}from"./src-DeeVzTNc.js";var S,C,w,T,E,D,O=e((()=>{S=`_content_1gd4e_1`,C=`_root_1gd4e_9`,w=`_label_1gd4e_14`,T=`_value_1gd4e_18`,E=`_caption_1gd4e_22`,D={content:S,root:C,label:w,value:T,caption:E}}));function k({label:e,value:n,percent:i}){return(0,M.jsxs)(c,{direction:`column`,gap:`xs`,children:[(0,M.jsx)(s,{variant:`heading-md`,render:(0,M.jsx)(`h4`,{}),className:D.label,children:e}),(0,M.jsx)(s,{variant:`heading-2xl`,className:D.value,children:n}),(0,M.jsx)(s,{variant:`body-md`,className:D.caption,children:r(t(`%d%% of views`,`jetpack-premium-analytics`),i)})]})}function A(){let{data:e,isLoading:n,isFetching:r,isError:i,refetch:o}=u(),s=e,l=!s?.day||!s?.hour;return(0,M.jsx)(`div`,{className:D.content,children:(0,M.jsx)(g,{isLoading:n,isFetching:r,isError:i&&l,isEmpty:l,error:{description:t(`We couldn't load your most popular time. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:()=>void o()}]},empty:{icon:a,description:t(`Not enough data to determine your most popular time yet.`,`jetpack-premium-analytics`)},children:s?.day&&s?.hour&&(0,M.jsxs)(c,{className:D.root,direction:`column`,gap:`lg`,children:[(0,M.jsx)(k,{label:t(`Best day`,`jetpack-premium-analytics`),value:s.day,percent:s.percent??0}),(0,M.jsx)(k,{label:t(`Best hour`,`jetpack-premium-analytics`),value:s.hour,percent:s.hourPercent??0})]})})})}function j({attributes:e={}}){return(0,M.jsx)(p,{attributes:e,children:(0,M.jsx)(A,{})})}var M,N=e((()=>{f(),y(),n(),o(),l(),O(),M=i()})),P,F=e((()=>{n(),o(),P={name:`jpa/most-popular-time`,title:t(`Most popular time`,`jetpack-premium-analytics`),help:{content:t(`The day of week and hour of day when your site gets the most views.`,`jetpack-premium-analytics`)},icon:a}}));function I({withComparison:e}){return(0,R.jsx)(j,{attributes:{reportParams:d(e)}})}function L({withComparison:e,...t}){return(0,R.jsx)(v,{...t,widgetType:{name:P.name,title:P.title,icon:P.icon,presentation:`framed`},renderModule:z,renderComponent:j,attributes:{reportParams:d(e)}})}var R,z,B,V,H,U,W,G;e((()=>{f(),h(),b(),N(),F(),R=i(),m(),z=`storybook/most-popular-time`,B=e=>(0,R.jsx)(`div`,{style:{width:`100%`,height:`360px`},children:(0,R.jsx)(e,{})}),V={title:`Packages/Premium Analytics/Widgets/MostPopularTime`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Most popular time" widget. Shows the day of week and hour of day that draw the most views, each with its share of the total. The insights endpoint reports across the whole lifetime of the site, so there is no date range or comparison period.`}}}},H={render:I,args:{withComparison:!1},decorators:[B]},U={render:I,args:{withComparison:!0},decorators:[B],parameters:{docs:{description:{story:`The insights endpoint has no comparison period, so this renders identically to Default even when comparison report params are supplied.`}}}},W={render:e=>(0,R.jsx)(L,{...e}),args:{...x,withComparison:!0},argTypes:{..._,withComparison:{control:`boolean`}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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