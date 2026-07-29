import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{I as o,O as s,an as c,n as l,ut as u,zt as d}from"./build-module-DmVuor49.js";import{W as ee,t as f}from"./build-module-B07GZ8y5.js";import{n as te,t as p}from"./src-3Lv7Etdm.js";import{Ct as m,Kt as ne,fr as h}from"./chart-tooltip-D1h4g3rx.js";import{t as re}from"./metric-tile-grid-WFsEfGJV.js";import{I as ie,L as ae,U as oe,q as se,z as g}from"./report-metric-DrUls6Lq.js";import{t as ce}from"./widget-state-DSBBpEYr.js";import{C as le,D as ue,E as de,S as fe,T as pe,b as _,t as me,w as v,x as y}from"./src-B7pwfil2.js";import{i as he,t as ge}from"./src-Dcd-pJb0.js";var b,x,S,_e=t((()=>{b=`_root_4wv3p_5`,x=`_state_4wv3p_10`,S={root:b,state:x}})),C,w,T,E=t((()=>{i(),l(),ge(),C=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`)},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`)},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`)}],w=C.map(e=>e.id),T={icon:d,attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:he,elements:C.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:w}}}}));function ve({metricIds:e=w}){let{reportParams:t}=se(),{primary:n,comparison:i,hasComparison:a,isLoading:o,isFetching:s,isError:c,refetch:l}=ne(t),u=n.data,f=i.data,p=(0,O.useMemo)(()=>{let t=new Set(e);return C.filter(e=>t.has(e.id))},[e]);if(p.length===0)return(0,k.jsx)(`div`,{className:S.root,children:(0,k.jsx)(`div`,{className:S.state,children:(0,k.jsx)(ee,{children:r(`Select at least one metric to display.`,`jetpack-premium-analytics-pkg`)})})});let m=!u||p.every(({id:e})=>j[e].value(u)===0),h=p.map(({id:e,label:t})=>{let{icon:n,note:r,value:i}=j[e],o=u?i(u):0;return{key:e,icon:n,label:t,value:o,previousValue:a&&f?i(f):null,note:r,valueTitle:te(o,`number`,{decimals:0})}});return(0,k.jsx)(`div`,{className:S.root,children:(0,k.jsx)(ce,{isLoading:(o||n.isPending)&&!u,isFetching:s,isError:!u&&c,isEmpty:m,error:{description:r(`We couldn't load the site overview. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},empty:{icon:d,description:r(`No stats recorded for this period.`,`jetpack-premium-analytics-pkg`)},children:(0,k.jsx)(re,{tiles:h,dataFormat:A})})})}function D({attributes:e={}}){return(0,k.jsx)(oe,{attributes:e,children:(0,k.jsx)(ve,{metricIds:e.metrics})})}var O,k,A,j,ye=t((()=>{m(),p(),me(),i(),l(),f(),O=e(n(),1),_e(),E(),k=a(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j={views:{icon:o,value:e=>e.views},visitors:{icon:u,value:e=>e.visitors,note:r(`Sum of daily visitors — a returning visitor is counted once per day, not once for the whole period.`,`jetpack-premium-analytics-pkg`)},likes:{icon:s,value:e=>e.likes},comments:{icon:c,value:e=>e.comments}}})),M,N,P,F,I,L,R,be=t((()=>{M=`jpa/site-overview`,N=`Site overview`,P=`Views, visitors, likes, and comments for the selected period, with period-over-period change.`,F={content:`A summary of your site's views, visitors, likes, and comments, with period-over-period change.`},I=`stats`,L=`framed`,R={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function z({withComparison:e,metrics:t}){return(0,V.jsx)(D,{attributes:{reportParams:h(e),metrics:t}})}function B(e){return(0,V.jsx)(D,{attributes:{reportParams:h(!1,e),...G}})}function xe({withComparison:e,metrics:t,...n}){return(0,V.jsx)(pe,{...n,widgetType:U,renderModule:H,renderComponent:D,attributes:{reportParams:h(e),metrics:t}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{m(),ie(),de(),le(),_(),ye(),E(),be(),V=a(),ae(),H=`storybook/site-overview`,U=fe(R,T),W={metrics:{control:`check`,options:w,description:`Metric tiles to show in the widget body.`}},G={metrics:w},K={title:`Packages/Premium Analytics/Widgets/SiteOverview`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...W},parameters:{docs:{description:{component:"The \"Site overview\" widget. Shows the selected period's headline traffic and engagement — views, visitors, likes, and comments — as metric tiles, sourced from the Jetpack Stats `summary` endpoint. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. This module has genuine period-over-period comparison data, so the `WithComparison` story shows a change indicator on each tile."}}}},q={render:z,args:{withComparison:!1,...G},decorators:[y]},J={render:z,args:{withComparison:!0,...G},decorators:[y]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(g(`stats/summary`,`loading`),()=>g(`stats/summary`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(g(`stats/summary`,`error`),()=>g(`stats/summary`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(g(`stats/summary`,`empty`),()=>g(`stats/summary`,null))},Q={render:e=>(0,V.jsx)(xe,{...e}),args:{...v,withComparison:!0,...G},argTypes:{...ue,withComparison:{control:`boolean`},...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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