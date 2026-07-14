import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DQ5lAs4a.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Co as o,Ht as s,On as c,dc as l,n as u,oi as d}from"./build-module-Bt8gOW8e.js";import{S as f,V as ee,d as te,s as p,tn as m}from"./hooks-Bvvxelsf.js";import{K as ne,t as h}from"./build-module-BAze1CUO.js";import{n as re,t as g}from"./src-CTTL0FAF.js";import{t as _}from"./metric-tile-grid-Bl_A01kS.js";import{i as v,n as y,t as ie}from"./register-report-mocks-CuqI1p-5.js";import{t as ae}from"./widget-state-Cmg_M35h.js";import{S as oe,b as se,t as b,x,y as ce}from"./src-ltgLebdV.js";import{n as le,t as S}from"./src-C-NsQZW7.js";var C,w,T,ue=t((()=>{C=`_root_4wv3p_5`,w=`_state_4wv3p_10`,T={root:C,state:w}})),E,D,O,k=t((()=>{i(),u(),S(),E=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics`)},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics`)},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics`)}],D=E.map(e=>e.id),O={name:`jpa/site-overview`,title:r(`Site overview`,`jetpack-premium-analytics`),icon:o,attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:le,elements:E.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:D}}}}));function A({metricIds:e=D}){let{reportParams:t}=te(),{primary:n,comparison:i,hasComparison:a,isLoading:s,isFetching:c,isError:l,refetch:u}=ee(t),d=n.data,f=i.data,p=(0,M.useMemo)(()=>{let t=new Set(e);return E.filter(e=>t.has(e.id))},[e]);if(p.length===0)return(0,N.jsx)(`div`,{className:T.root,children:(0,N.jsx)(`div`,{className:T.state,children:(0,N.jsx)(ne,{children:r(`Select at least one metric to display.`,`jetpack-premium-analytics`)})})});let m=!d||p.every(({id:e})=>F[e].value(d)===0),h=p.map(({id:e,label:t})=>{let{icon:n,note:r,value:i}=F[e],o=d?i(d):0;return{key:e,icon:n,label:t,value:o,previousValue:a&&f?i(f):null,note:r,valueTitle:re(o,`number`,{decimals:0})}});return(0,N.jsx)(`div`,{className:T.root,children:(0,N.jsx)(ae,{isLoading:(s||n.isPending)&&!d,isFetching:c,isError:l,isEmpty:m,error:{description:r(`We couldn't load the site overview. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:u}]},empty:{icon:o,description:r(`No stats recorded for this period.`,`jetpack-premium-analytics`)},children:(0,N.jsx)(_,{tiles:h,dataFormat:P})})})}function j({attributes:e={}}){return(0,N.jsx)(p,{attributes:e,children:(0,N.jsx)(A,{metricIds:e.metrics})})}var M,N,P,F,I=t((()=>{f(),g(),b(),i(),u(),h(),M=e(n(),1),ue(),k(),N=a(),P={type:`number`,options:{useMultipliers:!0,decimals:0}},F={views:{icon:c,value:e=>e.views},visitors:{icon:d,value:e=>e.visitors,note:r(`Sum of daily visitors — a returning visitor is counted once per day, not once for the whole period.`,`jetpack-premium-analytics`)},likes:{icon:s,value:e=>e.likes},comments:{icon:l,value:e=>e.comments}}}));function L({withComparison:e,metrics:t}){return(0,B.jsx)(j,{attributes:{reportParams:m(e),metrics:t}})}function R(e){return(0,B.jsx)(j,{attributes:{reportParams:m(!1,e),...W}})}function z({withComparison:e,metrics:t,...n}){return(0,B.jsx)(se,{...n,widgetType:H,renderModule:V,renderComponent:j,attributes:{reportParams:m(e),metrics:t}})}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{f(),ie(),x(),I(),k(),B=a(),y(),V=`storybook/site-overview`,H={name:O.name,title:O.title,icon:O.icon,attributes:O.attributes,example:O.example},U={metrics:{control:`check`,options:D,description:`Metric tiles to show in the widget body.`}},W={metrics:D},G=e=>(0,B.jsx)(`div`,{style:{width:`100%`,maxWidth:`560px`},children:(0,B.jsx)(e,{})}),K={title:`Packages/Premium Analytics/Widgets/SiteOverview`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...U},parameters:{docs:{description:{component:"The \"Site overview\" widget. Shows the selected period's headline traffic and engagement — views, visitors, likes, and comments — as metric tiles, sourced from the Jetpack Stats `summary` endpoint. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. This module has genuine period-over-period comparison data, so the `WithComparison` story shows a change indicator on each tile."}}}},q={render:L,args:{withComparison:!1,...W},decorators:[G]},J={render:L,args:{withComparison:!0,...W},decorators:[G]},Y={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(v(`stats/summary`,`loading`),()=>v(`stats/summary`,null))},X={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(v(`stats/summary`,`error`),()=>v(`stats/summary`,null))},Z={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(v(`stats/summary`,`empty`),()=>v(`stats/summary`,null))},Q={render:e=>(0,B.jsx)(z,{...e}),args:{...ce,withComparison:!0,...W},argTypes:{...oe,withComparison:{control:`boolean`},...U}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderSiteOverview,
  args: {
    withComparison: false,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Default state — the period totals for the current preset, no comparison.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderSiteOverview,
  args: {
    withComparison: true,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:"Comparison params flow through `reportParams`, and the summary module returns\ncomparison-period data, so each tile shows its period-over-period change.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderSiteOverviewOnPreset('last-90-days'),
  // Kept off the shared autodocs page: the mock override is keyed by path, so it
  // would otherwise force the sibling stories on that page into the same state.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/summary', 'loading');
    return () => setReportMockState('stats/summary', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderSiteOverviewOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/summary', 'error');
    return () => setReportMockState('stats/summary', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderSiteOverviewOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/summary', 'empty');
    return () => setReportMockState('stats/summary', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with every metric at zero: the summary endpoint returns a flat totals
object even for idle periods, so the widget derives its empty state ("No stats
recorded for this period." under the neutral globe glyph) from all-zero
visible metrics.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <SiteOverviewDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};