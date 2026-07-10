import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{ci as i,n as a,ni as o,vn as s,xs as c}from"./build-module-_6UNQmiR.js";import{D as l,Dt as u,p as d,s as f}from"./hooks-D6hCAkf2.js";import{H as ee,K as p,t as m}from"./build-module-Cc4XIcM8.js";import{t as h}from"./metric-with-comparison-CidQtPhf.js";import{n as g}from"./widget-loading-overlay-D21I_rx2.js";import{n as _,t as te}from"./register-report-mocks-DkrVC9w3.js";import{i as ne,n as re,r as ie,t as v}from"./widget-dashboard-with-widget-hi5wB5Sg.js";import{t as y}from"./src-CgKysIIZ.js";import{n as b,t as ae}from"./src-C1ZRi4sr.js";var x,S,C,w,T,E,D,O,k,A=e((()=>{x=`_root_zlgtp_2`,S=`_grid_zlgtp_12`,C=`_tile_zlgtp_18`,w=`_tileHeader_zlgtp_29`,T=`_tileIcon_zlgtp_38`,E=`_tileLabel_zlgtp_42`,D=`_tileValue_zlgtp_49`,O=`_placeholder_zlgtp_54`,k={root:x,grid:S,tile:C,tileHeader:w,tileIcon:T,tileLabel:E,tileValue:D,placeholder:O}})),j,M,N,P=e((()=>{n(),a(),ae(),j=[{id:`total`,label:t(`Total subscribers`,`jetpack-premium-analytics`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics`)},{id:`free`,label:t(`Free subscribers`,`jetpack-premium-analytics`)},{id:`social`,label:t(`Social followers`,`jetpack-premium-analytics`)}],M=j.map(e=>e.id),N={name:`jpa/subscriber-highlights`,title:t(`Subscriber highlights`,`jetpack-premium-analytics`),icon:o,attributes:[{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:b,elements:j.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:M}}}}));function F({metrics:e=M}){let{data:n,isLoading:r,isError:i}=l(),a=new Set(e);if(i)return(0,L.jsx)(`div`,{className:k.root,children:(0,L.jsx)(p,{className:k.placeholder,children:t(`Unable to load subscriber highlights.`,`jetpack-premium-analytics`)})});if(r&&!n)return(0,L.jsx)(`div`,{className:k.root,children:(0,L.jsx)(g,{})});let o=j.filter(({id:e})=>a.has(e)).map(({id:e,label:t})=>({key:e,label:t,icon:z[e].icon,value:z[e].count(n)}));return(0,L.jsx)(`div`,{className:k.root,children:o.length===0?(0,L.jsx)(p,{className:k.placeholder,children:t(`Select at least one metric to display.`,`jetpack-premium-analytics`)}):(0,L.jsx)(`div`,{className:k.grid,children:o.map(e=>(0,L.jsxs)(`div`,{className:k.tile,children:[(0,L.jsxs)(`div`,{className:k.tileHeader,children:[(0,L.jsx)(ee,{icon:e.icon,size:24,className:k.tileIcon}),(0,L.jsx)(p,{className:k.tileLabel,children:e.label})]}),(0,L.jsx)(h,{value:e.value,dataFormat:R,fontSize:`xl`,className:k.tileValue})]},e.key))})})}function I({attributes:e={}}){return(0,L.jsx)(f,{attributes:e,children:(0,L.jsx)(F,{metrics:e.metrics})})}var L,R,z,B=e((()=>{d(),y(),n(),a(),m(),A(),P(),L=r(),R={type:`number`,options:{useMultipliers:!0,decimals:0}},z={total:{icon:o,count:e=>e?.total_subscribers??0},paid:{icon:i,count:e=>e?.paid_subscribers??0},free:{icon:c,count:e=>e?.email_subscribers??0},social:{icon:s,count:e=>e?.social_followers??0}}}));function V({withComparison:e,metrics:t}){return(0,U.jsx)(I,{attributes:{reportParams:u(e),metrics:t}})}function H({withComparison:e,metrics:t,...n}){return(0,U.jsx)(re,{...n,widgetType:G,renderModule:W,renderComponent:I,attributes:{reportParams:u(e),metrics:t}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),ie(),te(),B(),P(),U=r(),_(),W=`storybook/subscriber-highlights`,G={name:N.name,title:N.title,icon:N.icon,attributes:N.attributes,example:N.example},K={metrics:{control:`check`,options:M}},q={metrics:M},J=e=>(0,U.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,U.jsx)(e,{})}),Y={title:`Packages/Premium Analytics/Widgets/SubscriberHighlights`,component:I,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...K},parameters:{docs:{description:{component:"The \"Subscriber highlights\" widget. Shows current subscriber totals — total, paid, free, and social followers — as a grid of metric tiles. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. Data comes from the designated `useStatsSubscribersCounts` hook; in Storybook it is served by `registerReportMocks()` (the `subscribers/counts` handler). The counts module has no comparison period, so the tiles show bare counts and the `WithComparison` story renders identically to `Default`."}}}},X={render:V,args:{withComparison:!1,...q},decorators:[J]},Z={render:V,args:{withComparison:!0,...q},decorators:[J]},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...v,widgetWidth:1,widgetHeight:1,withComparison:!0,...q},argTypes:{...ne,withComparison:{control:`boolean`},...K}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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