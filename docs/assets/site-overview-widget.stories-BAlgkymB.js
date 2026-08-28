import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Dn as o,Oo as s,Vt as c,gc as l,li as u,t as d}from"./build-module-CR6EsQjA.js";import{kn as ee,t as f}from"./src-BE2mgXt0.js";import{b as te,g as p}from"./hooks-DT56Dmn5.js";import{D as ne,qt as m,t as h}from"./src-DqldzYl1.js";import{n as re,t as ie}from"./src-HGPyuYZy.js";import{f as ae,h as oe}from"./chart-tooltip-Du53clWB.js";import{r as se,t as ce}from"./metric-tile-grid-skeleton-BBHDLARP.js";import{G as g,K as le,Y as _}from"./report-metric-73aO7QNv.js";import{t as ue}from"./widget-state--I9OUbLH.js";import{C as de,D as fe,E as pe,S as v,T as me,b as he,t as ge,w as _e,x as y}from"./src-DKk8s94o.js";var b,x,S,ve=t((()=>{b=`_root_4wv3p_5`,x=`_state_4wv3p_10`,S={root:b,state:x}})),C,w,T,E=t((()=>{i(),d(),ae(),C=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`)},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`)},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`)}],w=C.map(e=>e.id),T={icon:s,attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:oe,elements:C.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:w}}}}));function ye({metricIds:e=w}){let{reportParams:t}=te(),{primary:n,comparison:i,hasComparison:a,isLoading:o,isFetching:c,isError:l,refetch:u}=ne(t),d=n.data,f=i.data,p=(0,O.useMemo)(()=>{let t=new Set(e);return C.filter(e=>t.has(e.id))},[e]);if(p.length===0)return(0,k.jsx)(`div`,{className:S.root,children:(0,k.jsx)(`div`,{className:S.state,children:(0,k.jsx)(ee,{children:r(`Select at least one metric to display.`,`jetpack-premium-analytics-pkg`)})})});let m=!d||p.every(({id:e})=>j[e].value(d)===0),h=p.map(({id:e,label:t})=>{let{icon:n,note:r,value:i}=j[e],o=d?i(d):0;return{key:e,icon:n,label:t,value:o,previousValue:a&&f?i(f):null,note:r,valueTitle:re(o,`number`,{decimals:0})}});return(0,k.jsx)(`div`,{className:S.root,children:(0,k.jsx)(ue,{isLoading:o||n.isPending,isFetching:c,isError:!d&&l,isEmpty:m,error:{description:r(`We couldn't load the site overview. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{icon:s,description:r(`No stats recorded for this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(ce,{tiles:p.length}),children:(0,k.jsx)(se,{tiles:h,dataFormat:A})})})}function D({attributes:e={}}){return(0,k.jsx)(p,{attributes:e,children:(0,k.jsx)(ye,{metricIds:e.metrics})})}var O,k,A,j,be=t((()=>{h(),ie(),ge(),i(),d(),f(),O=e(n(),1),ve(),E(),k=a(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j={views:{icon:o,value:e=>e.views},visitors:{icon:u,value:e=>e.visitors,note:r(`Sum of daily visitors — a returning visitor is counted once per day, not once for the whole period.`,`jetpack-premium-analytics-pkg`)},likes:{icon:c,value:e=>e.likes},comments:{icon:l,value:e=>e.comments}}})),M,N,P,F,I,L,R,xe=t((()=>{M=`jpa/site-overview`,N=`Site overview`,P=`Views, visitors, likes, and comments for the selected period, with period-over-period change.`,F={content:`A summary of your site's views, visitors, likes, and comments, with period-over-period change.`},I=`stats`,L=`framed`,R={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function z({withComparison:e,metrics:t}){return(0,V.jsx)(D,{attributes:{reportParams:m(e),metrics:t}})}function B(e){return(0,V.jsx)(D,{attributes:{reportParams:m(!1,e),...G}})}function Se({withComparison:e,metrics:t,...n}){return(0,V.jsx)(me,{...n,widgetType:U,renderModule:H,renderComponent:D,attributes:{reportParams:m(e),metrics:t}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{h(),g(),pe(),de(),he(),be(),E(),xe(),V=a(),le(),H=`storybook/site-overview`,U=v(R,T),W={metrics:{control:`check`,options:w,description:`Metric tiles to show in the widget body.`}},G={metrics:w},K={title:`Packages/Premium Analytics/Widgets/SiteOverview`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...W},parameters:{docs:{description:{component:"The \"Site overview\" widget. Shows the selected period's headline traffic and engagement — views, visitors, likes, and comments — as metric tiles, sourced from the Jetpack Stats `summary` endpoint. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. This module has genuine period-over-period comparison data, so the `WithComparison` story shows a change indicator on each tile."}}}},q={render:z,args:{withComparison:!1,...G},decorators:[y]},J={render:z,args:{withComparison:!0,...G},decorators:[y]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(_(`stats/summary`,`loading`),()=>_(`stats/summary`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(_(`stats/summary`,`error`),()=>_(`stats/summary`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(_(`stats/summary`,`empty`),()=>_(`stats/summary`,null))},Q={render:e=>(0,V.jsx)(Se,{...e}),args:{..._e,withComparison:!0,...G},argTypes:{...fe,withComparison:{control:`boolean`},...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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