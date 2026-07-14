import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DQ5lAs4a.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Co as o,Ht as s,On as c,dc as l,n as u,oi as d}from"./build-module-Bt8gOW8e.js";import{T as f,W as ee,d as te,in as p,s as m}from"./hooks-D7o9A1ud.js";import{K as ne,t as h}from"./build-module-BAze1CUO.js";import{n as g,t as _}from"./src-CTTL0FAF.js";import{t as v}from"./metric-tile-grid-Bl_A01kS.js";import{i as y,n as re,t as ie}from"./register-report-mocks-uBWFIUpP.js";import{t as ae}from"./widget-state-C4l4MzAJ.js";import{S as oe,b as se,t as ce,x as le,y as ue}from"./src-BC4r6ARe.js";import{n as b,t as x}from"./src-C-NsQZW7.js";var S,C,w,T=t((()=>{S=`_root_4wv3p_5`,C=`_state_4wv3p_10`,w={root:S,state:C}})),E,D,O,k=t((()=>{i(),u(),x(),E=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics`)},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics`)},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics`)}],D=E.map(e=>e.id),O={name:`jpa/site-overview`,title:r(`Site overview`,`jetpack-premium-analytics`),help:{content:r(`Views, visitors, likes, and comments for the selected period, with period-over-period change.`,`jetpack-premium-analytics`)},icon:o,attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:b,elements:E.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:D}}}}));function A({metricIds:e=D}){let{reportParams:t}=te(),{primary:n,comparison:i,hasComparison:a,isLoading:s,isFetching:c,isError:l,refetch:u}=ee(t),d=n.data,f=i.data,p=(0,M.useMemo)(()=>{let t=new Set(e);return E.filter(e=>t.has(e.id))},[e]);if(p.length===0)return(0,N.jsx)(`div`,{className:w.root,children:(0,N.jsx)(`div`,{className:w.state,children:(0,N.jsx)(ne,{children:r(`Select at least one metric to display.`,`jetpack-premium-analytics`)})})});let m=!d||p.every(({id:e})=>F[e].value(d)===0),h=p.map(({id:e,label:t})=>{let{icon:n,note:r,value:i}=F[e],o=d?i(d):0;return{key:e,icon:n,label:t,value:o,previousValue:a&&f?i(f):null,note:r,valueTitle:g(o,`number`,{decimals:0})}});return(0,N.jsx)(`div`,{className:w.root,children:(0,N.jsx)(ae,{isLoading:(s||n.isPending)&&!d,isFetching:c,isError:l,isEmpty:m,error:{description:r(`We couldn't load the site overview. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:u}]},empty:{icon:o,description:r(`No stats recorded for this period.`,`jetpack-premium-analytics`)},children:(0,N.jsx)(v,{tiles:h,dataFormat:P})})})}function j({attributes:e={}}){return(0,N.jsx)(m,{attributes:e,children:(0,N.jsx)(A,{metricIds:e.metrics})})}var M,N,P,F,I=t((()=>{f(),_(),ce(),i(),u(),h(),M=e(n(),1),T(),k(),N=a(),P={type:`number`,options:{useMultipliers:!0,decimals:0}},F={views:{icon:c,value:e=>e.views},visitors:{icon:d,value:e=>e.visitors,note:r(`Sum of daily visitors — a returning visitor is counted once per day, not once for the whole period.`,`jetpack-premium-analytics`)},likes:{icon:s,value:e=>e.likes},comments:{icon:l,value:e=>e.comments}}}));function L({withComparison:e,metrics:t}){return(0,B.jsx)(j,{attributes:{reportParams:p(e),metrics:t}})}function R(e){return(0,B.jsx)(j,{attributes:{reportParams:p(!1,e),...W}})}function z({withComparison:e,metrics:t,...n}){return(0,B.jsx)(se,{...n,widgetType:H,renderModule:V,renderComponent:j,attributes:{reportParams:p(e),metrics:t}})}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{f(),ie(),le(),I(),k(),B=a(),re(),V=`storybook/site-overview`,H={name:O.name,title:O.title,icon:O.icon,attributes:O.attributes,example:O.example},U={metrics:{control:`check`,options:D,description:`Metric tiles to show in the widget body.`}},W={metrics:D},G=e=>(0,B.jsx)(`div`,{style:{width:`100%`,maxWidth:`560px`},children:(0,B.jsx)(e,{})}),K={title:`Packages/Premium Analytics/Widgets/SiteOverview`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...U},parameters:{docs:{description:{component:"The \"Site overview\" widget. Shows the selected period's headline traffic and engagement — views, visitors, likes, and comments — as metric tiles, sourced from the Jetpack Stats `summary` endpoint. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. This module has genuine period-over-period comparison data, so the `WithComparison` story shows a change indicator on each tile."}}}},q={render:L,args:{withComparison:!1,...W},decorators:[G]},J={render:L,args:{withComparison:!0,...W},decorators:[G]},Y={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(y(`stats/summary`,`loading`),()=>y(`stats/summary`,null))},X={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(y(`stats/summary`,`error`),()=>y(`stats/summary`,null))},Z={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(y(`stats/summary`,`empty`),()=>y(`stats/summary`,null))},Q={render:e=>(0,B.jsx)(z,{...e}),args:{...ue,withComparison:!0,...W},argTypes:{...oe,withComparison:{control:`boolean`},...U}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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