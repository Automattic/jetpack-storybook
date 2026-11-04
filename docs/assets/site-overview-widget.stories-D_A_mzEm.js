import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-sy00sX6O.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{Lt as o,nc as s,t as c,ti as l,xn as u}from"./build-module-DIcxAdIf.js";import{B as ee,I as d,gt as te}from"./charts-provider-ARR6XQI-.js";import{la as ne}from"./build-module-BtmadFOa.js";import{t as f}from"./src-BVLKL86t.js";import{st as re,t as p,vn as m}from"./src-CRoMOZVt.js";import{t as ie}from"./widget-state-BXwwUN1D.js";import{t as ae}from"./src-CYAbiDlj.js";import{n as oe,r as se,s as h}from"./register-report-mocks-AdY-3qvh.js";import{r as ce,t as le}from"./metric-tile-grid-skeleton-BT5_b4vr.js";import{a as ue,c as de,i as fe,l as g,n as _,o as pe,r as v,s as me}from"./with-widget-canvas-Byxvvc4f.js";var y,b,x,he=e((()=>{y=`_root_4wv3p_5`,b=`_state_4wv3p_10`,x={root:y,state:b}})),S,C,w,T=e((()=>{i(),S=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`)},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`)},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`)}],C=S.map(e=>e.id),w={example:{attributes:{metrics:C}}}}));function ge({metricIds:e=C}){let{reportParams:t}=ee(),{primary:n,comparison:i,hasComparison:a,isLoading:o,isFetching:s,isError:c,refetch:l}=re(t),u=n.data,d=i.data,f=(0,D.useMemo)(()=>{let t=new Set(e);return S.filter(e=>t.has(e.id))},[e]);if(f.length===0)return(0,O.jsx)(`div`,{className:x.root,children:(0,O.jsx)(`div`,{className:x.state,children:(0,O.jsx)(ne,{children:r(`Select at least one metric to display.`,`jetpack-premium-analytics-pkg`)})})});let p=f.map(({id:e,label:t})=>{let{icon:n,note:r,value:i}=k[e];return{key:e,icon:n,label:t,value:u?i(u):0,previousValue:a&&d?i(d):null,note:r}});return(0,O.jsx)(`div`,{className:x.root,children:(0,O.jsx)(ie,{isLoading:o||n.isPending,isFetching:s,isError:!u&&c,error:{description:r(`We couldn't load the site overview. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},renderLoading:(0,O.jsx)(le,{tiles:f.length}),children:(0,O.jsx)(ce,{tiles:p,dataFormat:te})})})}function E({attributes:e={}}){return(0,O.jsx)(d,{attributes:e,children:(0,O.jsx)(ge,{metricIds:e.metrics})})}var D,O,k,_e=e((()=>{p(),ae(),i(),c(),f(),D=t(n(),1),he(),T(),O=a(),k={views:{icon:u,value:e=>e.views},visitors:{icon:l,value:e=>e.visitors,note:r(`Sum of daily visitors — a returning visitor is counted once per day, not once for the whole period.`,`jetpack-premium-analytics-pkg`)},likes:{icon:o,value:e=>e.likes},comments:{icon:s,value:e=>e.comments}}})),A,j,M,N,P,F,I,L,R,ve=e((()=>{A=`jpa/site-overview`,j=`jpa/globe`,M=`Site overview`,N=`Views, visitors, likes, and comments for the selected period, with period-over-period change.`,P={content:`A summary of your site's views, visitors, likes, and comments, with period-over-period change.`},F=`stats`,I=`framed`,L=[{id:`metrics`,type:`jpa/array-checkbox`,label:`Metrics`,relevance:`high`,elements:[{value:`views`,label:`Views`},{value:`visitors`,label:`Visitors`},{value:`comments`,label:`Comments`},{value:`likes`,label:`Likes`}]}],R={name:A,icon:j,title:M,description:N,help:P,category:F,presentation:I,attributes:L}}));function z({withComparison:e,metrics:t}){return(0,V.jsx)(E,{attributes:{reportParams:m(e),metrics:t}})}function B(e){return(0,V.jsx)(E,{attributes:{reportParams:m(!1,e),...G}})}function ye({withComparison:e,metrics:t,...n}){return(0,V.jsx)(me,{...n,widgetType:U,renderModule:H,renderComponent:E,attributes:{reportParams:m(e),metrics:t}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),oe(),de(),ue(),_(),_e(),T(),ve(),V=a(),se(),H=`storybook/site-overview`,U=fe(R,w),W={metrics:{control:`check`,options:C,description:`Metric tiles to show in the widget body.`}},G={metrics:C},K={title:`Packages/Premium Analytics/Widgets/SiteOverview`,component:E,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...W},parameters:{docs:{description:{component:"The \"Site overview\" widget. Shows the selected period's headline traffic and engagement — views, visitors, likes, and comments — as metric tiles, sourced from the Jetpack Stats `summary` endpoint. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. This module has genuine period-over-period comparison data, so the `WithComparison` story shows a change indicator on each tile."}}}},q={render:z,args:{withComparison:!1,...G},decorators:[v]},J={render:z,args:{withComparison:!0,...G},decorators:[v]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(h(`stats/summary`,`loading`),()=>h(`stats/summary`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(h(`stats/summary`,`error`),()=>h(`stats/summary`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(h(`stats/summary`,`empty`),()=>h(`stats/summary`,null))},Q={render:e=>(0,V.jsx)(ye,{...e}),args:{...pe,withComparison:!0,...G},argTypes:{...g,withComparison:{control:`boolean`},...W}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}}}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};