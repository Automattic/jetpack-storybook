import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Tn as o,Vt as s,li as c,t as l,vc as u}from"./build-module-Cm3Kd3py.js";import{Hn as ee}from"./build-module-D2aEjqke.js";import{t as d}from"./src-DSKrH2vS.js";import{On as f,Y as te,t as p}from"./src-eFflVWkb.js";import{_ as ne,x as re}from"./charts-provider-CG5jlyMR.js";import{n as ie,r as ae,s as m}from"./register-report-mocks-CaddGZDb.js";import{t as oe}from"./widget-state-Dy1Xd117.js";import{r as se,t as ce}from"./metric-tile-grid-skeleton-C6Ov72po.js";import{t as le}from"./src-B1RxCXze.js";import{a as h,g as ue,h as de,i as fe,m as g,n as pe,p as _,r as v}from"./with-widget-canvas-fJNR6VE0.js";var y,b,x,me=t((()=>{y=`_root_4wv3p_5`,b=`_state_4wv3p_10`,x={root:y,state:b}})),S,C,w,T=t((()=>{i(),S=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`)},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`)},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`)}],C=S.map(e=>e.id),w={attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics-pkg`),type:`jpa/array-checkbox`,relevance:`high`,elements:S.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:C}}}}));function he({metricIds:e=C}){let{reportParams:t}=re(),{primary:n,comparison:i,hasComparison:a,isLoading:o,isFetching:s,isError:c,refetch:l}=te(t),u=n.data,d=i.data,f=(0,D.useMemo)(()=>{let t=new Set(e);return S.filter(e=>t.has(e.id))},[e]);if(f.length===0)return(0,O.jsx)(`div`,{className:x.root,children:(0,O.jsx)(`div`,{className:x.state,children:(0,O.jsx)(ee,{children:r(`Select at least one metric to display.`,`jetpack-premium-analytics-pkg`)})})});let p=f.map(({id:e,label:t})=>{let{icon:n,note:r,value:i}=A[e];return{key:e,icon:n,label:t,value:u?i(u):0,previousValue:a&&d?i(d):null,note:r}});return(0,O.jsx)(`div`,{className:x.root,children:(0,O.jsx)(oe,{isLoading:o||n.isPending,isFetching:s,isError:!u&&c,error:{description:r(`We couldn't load the site overview. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},renderLoading:(0,O.jsx)(ce,{tiles:f.length}),children:(0,O.jsx)(se,{tiles:p,dataFormat:k})})})}function E({attributes:e={}}){return(0,O.jsx)(ne,{attributes:e,children:(0,O.jsx)(he,{metricIds:e.metrics})})}var D,O,k,A,ge=t((()=>{p(),le(),i(),l(),d(),D=e(n(),1),me(),T(),O=a(),k={type:`number`,options:{useMultipliers:!0,decimals:0}},A={views:{icon:o,value:e=>e.views},visitors:{icon:c,value:e=>e.visitors,note:r(`Sum of daily visitors — a returning visitor is counted once per day, not once for the whole period.`,`jetpack-premium-analytics-pkg`)},likes:{icon:s,value:e=>e.likes},comments:{icon:u,value:e=>e.comments}}})),j,M,N,P,F,I,L,R,_e=t((()=>{j=`jpa/site-overview`,M=`jpa/globe`,N=`Site overview`,P=`Views, visitors, likes, and comments for the selected period, with period-over-period change.`,F={content:`A summary of your site's views, visitors, likes, and comments, with period-over-period change.`},I=`stats`,L=`framed`,R={name:j,icon:M,title:N,description:P,help:F,category:I,presentation:L}}));function z({withComparison:e,metrics:t}){return(0,V.jsx)(E,{attributes:{reportParams:f(e),metrics:t}})}function B(e){return(0,V.jsx)(E,{attributes:{reportParams:f(!1,e),...G}})}function ve({withComparison:e,metrics:t,...n}){return(0,V.jsx)(g,{...n,widgetType:U,renderModule:H,renderComponent:E,attributes:{reportParams:f(e),metrics:t}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{p(),ie(),de(),h(),pe(),ge(),T(),_e(),V=a(),ae(),H=`storybook/site-overview`,U=fe(R,w),W={metrics:{control:`check`,options:C,description:`Metric tiles to show in the widget body.`}},G={metrics:C},K={title:`Packages/Premium Analytics/Widgets/SiteOverview`,component:E,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...W},parameters:{docs:{description:{component:"The \"Site overview\" widget. Shows the selected period's headline traffic and engagement — views, visitors, likes, and comments — as metric tiles, sourced from the Jetpack Stats `summary` endpoint. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. This module has genuine period-over-period comparison data, so the `WithComparison` story shows a change indicator on each tile."}}}},q={render:z,args:{withComparison:!1,...G},decorators:[v]},J={render:z,args:{withComparison:!0,...G},decorators:[v]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(m(`stats/summary`,`loading`),()=>m(`stats/summary`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(m(`stats/summary`,`error`),()=>m(`stats/summary`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(m(`stats/summary`,`empty`),()=>m(`stats/summary`,null))},Q={render:e=>(0,V.jsx)(ve,{...e}),args:{..._,withComparison:!0,...G},argTypes:{...ue,withComparison:{control:`boolean`},...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
object even for idle periods, and the tiles show those zeros.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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