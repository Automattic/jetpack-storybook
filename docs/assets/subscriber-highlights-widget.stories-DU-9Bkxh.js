import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Ts as i,fi as a,n as o,oi as s,vn as c}from"./build-module-Bt8gOW8e.js";import{K as l,t as u}from"./build-module-BAze1CUO.js";import{d,t as f}from"./src-CT5b53ej.js";import{Ft as p,Kn as m,ut as h}from"./chart-tooltip-ClIvRUzH.js";import{t as g}from"./metric-tile-grid-Cx0v-Z8I.js";import{S as _}from"./report-metric-C9QRZwAo.js";import{n as v,t as y}from"./register-report-mocks-CEOd2Lr0.js";import{t as b}from"./widget-state-CkRqQWXE.js";import{S as x,b as ee,t as S,x as C,y as w}from"./src-DeeVzTNc.js";import{n as T,t as E}from"./src-BIoci1og.js";var D,O,k,A=e((()=>{D=`_root_bhtfe_2`,O=`_placeholder_bhtfe_11`,k={root:D,placeholder:O}})),j,M,N,P=e((()=>{n(),o(),E(),j=[{id:`total`,label:t(`Total subscribers`,`jetpack-premium-analytics`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics`)},{id:`free`,label:t(`Free subscribers`,`jetpack-premium-analytics`)},{id:`social`,label:t(`Social followers`,`jetpack-premium-analytics`)}],M=j.map(e=>e.id),N={name:`jpa/subscriber-highlights`,title:t(`Subscriber highlights`,`jetpack-premium-analytics`),help:{content:t(`Your subscriber totals at a glance — total, paid, free, and social followers.`,`jetpack-premium-analytics`)},icon:s,attributes:[{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:T,elements:j.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:M}}}}));function F({metrics:e=M}){let{data:n,isLoading:r,isFetching:i,isError:a,refetch:o}=p(),s=new Set(e),c=!!n&&Object.values(n).some(e=>e!==void 0),u=j.filter(({id:e})=>s.has(e)).map(({id:e,label:t})=>({key:e,label:t,icon:z[e].icon,value:z[e].count(n)}));return(0,L.jsx)(`div`,{className:k.root,children:(0,L.jsx)(b,{isLoading:r,isFetching:i,isError:a&&!c,isEmpty:!c,error:{description:t(`We couldn't load subscriber highlights. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:o}]},empty:{icon:d,description:t(`No subscriber counts available yet.`,`jetpack-premium-analytics`)},children:u.length===0?(0,L.jsx)(l,{className:k.placeholder,children:t(`Select at least one metric to display.`,`jetpack-premium-analytics`)}):(0,L.jsx)(g,{tiles:u,dataFormat:R})})})}function I({attributes:e={}}){return(0,L.jsx)(_,{attributes:e,children:(0,L.jsx)(F,{metrics:e.metrics})})}var L,R,z,B=e((()=>{h(),f(),S(),n(),o(),u(),A(),P(),L=r(),R={type:`number`,options:{useMultipliers:!0,decimals:0}},z={total:{icon:s,count:e=>e?.total_subscribers??0},paid:{icon:a,count:e=>e?.paid_subscribers??0},free:{icon:i,count:e=>e?.email_subscribers??0},social:{icon:c,count:e=>e?.social_followers??0}}}));function V({withComparison:e,metrics:t}){return(0,U.jsx)(I,{attributes:{reportParams:m(e),metrics:t}})}function H({withComparison:e,metrics:t,...n}){return(0,U.jsx)(ee,{...n,widgetType:G,renderModule:W,renderComponent:I,attributes:{reportParams:m(e),metrics:t}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),C(),y(),B(),P(),U=r(),v(),W=`storybook/subscriber-highlights`,G={name:N.name,title:N.title,icon:N.icon,attributes:N.attributes,example:N.example},K={metrics:{control:`check`,options:M}},q={metrics:M},J=e=>(0,U.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,U.jsx)(e,{})}),Y={title:`Packages/Premium Analytics/Widgets/SubscriberHighlights`,component:I,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...K},parameters:{docs:{description:{component:"The \"Subscriber highlights\" widget. Shows current subscriber totals — total, paid, free, and social followers — as a grid of metric tiles. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. Data comes from the designated `useStatsSubscribersCounts` hook; in Storybook it is served by `registerReportMocks()` (the `subscribers/counts` handler). The counts module has no comparison period, so the tiles show bare counts and the `WithComparison` story renders identically to `Default`."}}}},X={render:V,args:{withComparison:!1,...q},decorators:[J]},Z={render:V,args:{withComparison:!0,...q},decorators:[J]},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...w,widgetWidth:1,widgetHeight:1,withComparison:!0,...q},argTypes:{...x,withComparison:{control:`boolean`},...K}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderSubscriberHighlights,
  args: {
    withComparison: false,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...X.parameters?.docs?.source},description:{story:`The widget on its own, populated from the mocked subscribers/counts payload.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderSubscriberHighlights,
  args: {
    withComparison: true,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...Z.parameters?.docs?.source},description:{story:`Same close-up with comparison report params injected. The counts module has no
comparison data, so this renders identically to \`Default\` — it only verifies
the widget stays stable when the host provides comparison params.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{X as Default,Q as WidgetDashboardWithWidget,Z as WithComparison,$ as __namedExportsOrder,Y as default};