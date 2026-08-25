import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Ht as o,On as s,_c as c,ko as l,n as u,ui as d}from"./build-module-CDRs4YxF.js";import{Tn as ee,t as f}from"./src-rViHHq_A.js";import{b as te,g as p}from"./hooks-BOTPS5ra.js";import{qt as m,t as h,w as ne}from"./src-D3Oz9WaR.js";import{n as re,t as ie}from"./src-9PaLR6qt.js";import{c as ae,d as oe}from"./chart-tooltip-BApLzbBh.js";import{r as se,t as ce}from"./metric-tile-grid-skeleton-bpTYorV9.js";import{K as le,X as g,q as ue}from"./report-metric-CgbvY3KN.js";import{t as de}from"./widget-state-qwWnzsbP.js";import{C as fe,D as pe,E as me,S as he,T as _,b as ge,t as _e,w as ve,x as v}from"./src-BlZWMuVm.js";var y,b,x,ye=t((()=>{y=`_root_4wv3p_5`,b=`_state_4wv3p_10`,x={root:y,state:b}})),S,C,w,T=t((()=>{i(),u(),ae(),S=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`)},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`)},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`)}],C=S.map(e=>e.id),w={icon:l,attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:oe,elements:S.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:C}}}}));function be({metricIds:e=C}){let{reportParams:t}=te(),{primary:n,comparison:i,hasComparison:a,isLoading:o,isFetching:s,isError:c,refetch:u}=ne(t),d=n.data,f=i.data,p=(0,D.useMemo)(()=>{let t=new Set(e);return S.filter(e=>t.has(e.id))},[e]);if(p.length===0)return(0,O.jsx)(`div`,{className:x.root,children:(0,O.jsx)(`div`,{className:x.state,children:(0,O.jsx)(ee,{children:r(`Select at least one metric to display.`,`jetpack-premium-analytics-pkg`)})})});let m=!d||p.every(({id:e})=>A[e].value(d)===0),h=p.map(({id:e,label:t})=>{let{icon:n,note:r,value:i}=A[e],o=d?i(d):0;return{key:e,icon:n,label:t,value:o,previousValue:a&&f?i(f):null,note:r,valueTitle:re(o,`number`,{decimals:0})}});return(0,O.jsx)(`div`,{className:x.root,children:(0,O.jsx)(de,{isLoading:o||n.isPending,isFetching:s,isError:!d&&c,isEmpty:m,error:{description:r(`We couldn't load the site overview. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{icon:l,description:r(`No stats recorded for this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,O.jsx)(ce,{tiles:p.length}),children:(0,O.jsx)(se,{tiles:h,dataFormat:k})})})}function E({attributes:e={}}){return(0,O.jsx)(p,{attributes:e,children:(0,O.jsx)(be,{metricIds:e.metrics})})}var D,O,k,A,j=t((()=>{h(),ie(),_e(),i(),u(),f(),D=e(n(),1),ye(),T(),O=a(),k={type:`number`,options:{useMultipliers:!0,decimals:0}},A={views:{icon:s,value:e=>e.views},visitors:{icon:d,value:e=>e.visitors,note:r(`Sum of daily visitors — a returning visitor is counted once per day, not once for the whole period.`,`jetpack-premium-analytics-pkg`)},likes:{icon:o,value:e=>e.likes},comments:{icon:c,value:e=>e.comments}}})),M,N,P,F,I,L,R,xe=t((()=>{M=`jpa/site-overview`,N=`Site overview`,P=`Views, visitors, likes, and comments for the selected period, with period-over-period change.`,F={content:`A summary of your site's views, visitors, likes, and comments, with period-over-period change.`},I=`stats`,L=`framed`,R={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function z({withComparison:e,metrics:t}){return(0,V.jsx)(E,{attributes:{reportParams:m(e),metrics:t}})}function B(e){return(0,V.jsx)(E,{attributes:{reportParams:m(!1,e),...G}})}function Se({withComparison:e,metrics:t,...n}){return(0,V.jsx)(_,{...n,widgetType:U,renderModule:H,renderComponent:E,attributes:{reportParams:m(e),metrics:t}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{h(),le(),me(),fe(),ge(),j(),T(),xe(),V=a(),ue(),H=`storybook/site-overview`,U=he(R,w),W={metrics:{control:`check`,options:C,description:`Metric tiles to show in the widget body.`}},G={metrics:C},K={title:`Packages/Premium Analytics/Widgets/SiteOverview`,component:E,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...W},parameters:{docs:{description:{component:"The \"Site overview\" widget. Shows the selected period's headline traffic and engagement — views, visitors, likes, and comments — as metric tiles, sourced from the Jetpack Stats `summary` endpoint. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. This module has genuine period-over-period comparison data, so the `WithComparison` story shows a change indicator on each tile."}}}},q={render:z,args:{withComparison:!1,...G},decorators:[v]},J={render:z,args:{withComparison:!0,...G},decorators:[v]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(g(`stats/summary`,`loading`),()=>g(`stats/summary`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(g(`stats/summary`,`error`),()=>g(`stats/summary`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(g(`stats/summary`,`empty`),()=>g(`stats/summary`,null))},Q={render:e=>(0,V.jsx)(Se,{...e}),args:{...ve,withComparison:!0,...G},argTypes:{...pe,withComparison:{control:`boolean`},...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
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