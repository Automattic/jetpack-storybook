import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{I as o,O as s,an as c,n as l,ut as u,zt as d}from"./build-module-DmVuor49.js";import{W as ee,t as f}from"./build-module-s1rX69Gq.js";import{n as te,t as p}from"./src-3Lv7Etdm.js";import{Pt as ne,dt as m,er as h}from"./chart-tooltip-IKMM6k6K.js";import{t as g}from"./metric-tile-grid-1fi3Ybew.js";import{D as _,F as re,T as ie,j as ae,w as oe}from"./report-metric-Cl9zgJsV.js";import{t as se}from"./widget-state-C6ykyujP.js";import{C as ce,S as le,T as ue,b as v,t as y,w as b,x}from"./src-jWH5buQC.js";import{i as S,t as C}from"./src-BqqImFNx.js";var w,T,E,D=t((()=>{w=`_root_4wv3p_5`,T=`_state_4wv3p_10`,E={root:w,state:T}})),O,k,A,j=t((()=>{i(),l(),C(),O=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics`)},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics`)},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics`)}],k=O.map(e=>e.id),A={name:`jpa/site-overview`,title:r(`Site overview`,`jetpack-premium-analytics`),help:{content:r(`A summary of your site's views, visitors, likes, and comments, with period-over-period change.`,`jetpack-premium-analytics`)},icon:d,attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:S,elements:O.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:k}}}}));function de({metricIds:e=k}){let{reportParams:t}=re(),{primary:n,comparison:i,hasComparison:a,isLoading:o,isFetching:s,isError:c,refetch:l}=ne(t),u=n.data,f=i.data,p=(0,N.useMemo)(()=>{let t=new Set(e);return O.filter(e=>t.has(e.id))},[e]);if(p.length===0)return(0,P.jsx)(`div`,{className:E.root,children:(0,P.jsx)(`div`,{className:E.state,children:(0,P.jsx)(ee,{children:r(`Select at least one metric to display.`,`jetpack-premium-analytics`)})})});let m=!u||p.every(({id:e})=>I[e].value(u)===0),h=p.map(({id:e,label:t})=>{let{icon:n,note:r,value:i}=I[e],o=u?i(u):0;return{key:e,icon:n,label:t,value:o,previousValue:a&&f?i(f):null,note:r,valueTitle:te(o,`number`,{decimals:0})}});return(0,P.jsx)(`div`,{className:E.root,children:(0,P.jsx)(se,{isLoading:(o||n.isPending)&&!u,isFetching:s,isError:!u&&c,isEmpty:m,error:{description:r(`We couldn't load the site overview. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:l}]},empty:{icon:d,description:r(`No stats recorded for this period.`,`jetpack-premium-analytics`)},children:(0,P.jsx)(g,{tiles:h,dataFormat:F})})})}function M({attributes:e={}}){return(0,P.jsx)(ae,{attributes:e,children:(0,P.jsx)(de,{metricIds:e.metrics})})}var N,P,F,I,L=t((()=>{m(),p(),y(),i(),l(),f(),N=e(n(),1),D(),j(),P=a(),F={type:`number`,options:{useMultipliers:!0,decimals:0}},I={views:{icon:o,value:e=>e.views},visitors:{icon:u,value:e=>e.visitors,note:r(`Sum of daily visitors — a returning visitor is counted once per day, not once for the whole period.`,`jetpack-premium-analytics`)},likes:{icon:s,value:e=>e.likes},comments:{icon:c,value:e=>e.comments}}}));function R({withComparison:e,metrics:t}){return(0,V.jsx)(M,{attributes:{reportParams:h(e),metrics:t}})}function z(e){return(0,V.jsx)(M,{attributes:{reportParams:h(!1,e),...G}})}function B({withComparison:e,metrics:t,...n}){return(0,V.jsx)(ce,{...n,widgetType:U,renderModule:H,renderComponent:M,attributes:{reportParams:h(e),metrics:t}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{m(),oe(),b(),v(),L(),j(),V=a(),ie(),H=`storybook/site-overview`,U={name:A.name,title:A.title,icon:A.icon,attributes:A.attributes,example:A.example},W={metrics:{control:`check`,options:k,description:`Metric tiles to show in the widget body.`}},G={metrics:k},K={title:`Packages/Premium Analytics/Widgets/SiteOverview`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...W},parameters:{docs:{description:{component:"The \"Site overview\" widget. Shows the selected period's headline traffic and engagement — views, visitors, likes, and comments — as metric tiles, sourced from the Jetpack Stats `summary` endpoint. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. This module has genuine period-over-period comparison data, so the `WithComparison` story shows a change indicator on each tile."}}}},q={render:R,args:{withComparison:!1,...G},decorators:[x]},J={render:R,args:{withComparison:!0,...G},decorators:[x]},Y={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(_(`stats/summary`,`loading`),()=>_(`stats/summary`,null))},X={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(_(`stats/summary`,`error`),()=>_(`stats/summary`,null))},Z={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(_(`stats/summary`,`empty`),()=>_(`stats/summary`,null))},Q={render:e=>(0,V.jsx)(B,{...e}),args:{...le,withComparison:!0,...G},argTypes:{...ue,withComparison:{control:`boolean`},...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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