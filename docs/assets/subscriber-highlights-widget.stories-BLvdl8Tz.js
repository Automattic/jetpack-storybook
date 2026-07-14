import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Ts as i,fi as a,n as o,oi as s,vn as c}from"./build-module-Bt8gOW8e.js";import{S as l,q as u,s as d,tn as f}from"./hooks-vVT9DHIc.js";import{K as p,t as m}from"./build-module-BAze1CUO.js";import{n as h}from"./widget-loading-overlay-CZo6ZUln.js";import{t as g}from"./metric-tile-grid-Bl_A01kS.js";import{n as _,t as v}from"./register-report-mocks-DsVqLJR9.js";import{S as y,b,t as x,x as S,y as C}from"./src-BnRzOHF6.js";import{n as w,t as T}from"./src-C-NsQZW7.js";var E,D,O,k=e((()=>{E=`_root_bhtfe_2`,D=`_placeholder_bhtfe_11`,O={root:E,placeholder:D}})),A,j,M,N=e((()=>{n(),o(),T(),A=[{id:`total`,label:t(`Total subscribers`,`jetpack-premium-analytics`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics`)},{id:`free`,label:t(`Free subscribers`,`jetpack-premium-analytics`)},{id:`social`,label:t(`Social followers`,`jetpack-premium-analytics`)}],j=A.map(e=>e.id),M={name:`jpa/subscriber-highlights`,title:t(`Subscriber highlights`,`jetpack-premium-analytics`),icon:s,attributes:[{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:w,elements:A.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:j}}}}));function P({metrics:e=j}){let{data:n,isLoading:r,isError:i}=u(),a=new Set(e);if(i)return(0,I.jsx)(`div`,{className:O.root,children:(0,I.jsx)(p,{className:O.placeholder,children:t(`Unable to load subscriber highlights.`,`jetpack-premium-analytics`)})});if(r&&!n)return(0,I.jsx)(`div`,{className:O.root,children:(0,I.jsx)(h,{})});let o=A.filter(({id:e})=>a.has(e)).map(({id:e,label:t})=>({key:e,label:t,icon:R[e].icon,value:R[e].count(n)}));return(0,I.jsx)(`div`,{className:O.root,children:o.length===0?(0,I.jsx)(p,{className:O.placeholder,children:t(`Select at least one metric to display.`,`jetpack-premium-analytics`)}):(0,I.jsx)(g,{tiles:o,dataFormat:L})})}function F({attributes:e={}}){return(0,I.jsx)(d,{attributes:e,children:(0,I.jsx)(P,{metrics:e.metrics})})}var I,L,R,z=e((()=>{l(),x(),n(),o(),m(),k(),N(),I=r(),L={type:`number`,options:{useMultipliers:!0,decimals:0}},R={total:{icon:s,count:e=>e?.total_subscribers??0},paid:{icon:a,count:e=>e?.paid_subscribers??0},free:{icon:i,count:e=>e?.email_subscribers??0},social:{icon:c,count:e=>e?.social_followers??0}}}));function B({withComparison:e,metrics:t}){return(0,H.jsx)(F,{attributes:{reportParams:f(e),metrics:t}})}function V({withComparison:e,metrics:t,...n}){return(0,H.jsx)(b,{...n,widgetType:W,renderModule:U,renderComponent:F,attributes:{reportParams:f(e),metrics:t}})}var H,U,W,G,K,q,J,Y,X,Z,Q;e((()=>{l(),S(),v(),z(),N(),H=r(),_(),U=`storybook/subscriber-highlights`,W={name:M.name,title:M.title,icon:M.icon,attributes:M.attributes,example:M.example},G={metrics:{control:`check`,options:j}},K={metrics:j},q=e=>(0,H.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,H.jsx)(e,{})}),J={title:`Packages/Premium Analytics/Widgets/SubscriberHighlights`,component:F,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...G},parameters:{docs:{description:{component:"The \"Subscriber highlights\" widget. Shows current subscriber totals — total, paid, free, and social followers — as a grid of metric tiles. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. Data comes from the designated `useStatsSubscribersCounts` hook; in Storybook it is served by `registerReportMocks()` (the `subscribers/counts` handler). The counts module has no comparison period, so the tiles show bare counts and the `WithComparison` story renders identically to `Default`."}}}},Y={render:B,args:{withComparison:!1,...K},decorators:[q]},X={render:B,args:{withComparison:!0,...K},decorators:[q]},Z={render:e=>(0,H.jsx)(V,{...e}),args:{...C,widgetWidth:1,widgetHeight:1,withComparison:!0,...K},argTypes:{...y,withComparison:{control:`boolean`},...G}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderSubscriberHighlights,
  args: {
    withComparison: false,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...Y.parameters?.docs?.source},description:{story:`The widget on its own, populated from the mocked subscribers/counts payload.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderSubscriberHighlights,
  args: {
    withComparison: true,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...X.parameters?.docs?.source},description:{story:`Same close-up with comparison report params injected. The counts module has no
comparison data, so this renders identically to \`Default\` — it only verifies
the widget stays stable when the host provides comparison params.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <SubscriberHighlightsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    widgetWidth: 1,
    widgetHeight: 1,
    withComparison: true,
    ...ALL_METRICS_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean'
    },
    ...METRIC_ARG_TYPES
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{Y as Default,Z as WidgetDashboardWithWidget,X as WithComparison,Q as __namedExportsOrder,J as default};