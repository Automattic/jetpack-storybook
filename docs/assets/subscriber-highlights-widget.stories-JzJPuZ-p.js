import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Ds as i,ci as a,mi as o,n as s,vn as c}from"./build-module-C6Ow06jV.js";import{W as l,t as u}from"./build-module-JNPAD9ni.js";import{d,t as ee}from"./src-Bf8IXmOS.js";import{It as te,qn as f,rr as ne,ut as p}from"./chart-tooltip-CiX_QBjW.js";import{t as re}from"./metric-tile-grid-vuR1TfjP.js";import{C as m,S as h,T as g,k as ie}from"./report-metric-IYanqiCs.js";import{t as _}from"./widget-state-peHoFDnr.js";import{S as v,b as y,t as b,x,y as ae}from"./src-DU5Z0Tuc.js";import{n as oe,r as S}from"./with-widget-canvas-Dz43KNHY.js";import{n as C,t as w}from"./src-DHVerfrF.js";var T,E,D,O=e((()=>{T=`_root_bhtfe_2`,E=`_placeholder_bhtfe_11`,D={root:T,placeholder:E}})),k,A,j,M=e((()=>{n(),s(),w(),k=[{id:`total`,label:t(`Total subscribers`,`jetpack-premium-analytics`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics`)},{id:`free`,label:t(`Free subscribers`,`jetpack-premium-analytics`)},{id:`social`,label:t(`Social followers`,`jetpack-premium-analytics`)}],A=k.map(e=>e.id),j={name:`jpa/subscriber-highlights`,title:t(`Subscriber highlights`,`jetpack-premium-analytics`),help:{content:t(`Your subscriber totals at a glance — total, paid, free, and social followers.`,`jetpack-premium-analytics`)},icon:a,attributes:[{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:C,elements:k.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:A}}}}));function se({metrics:e=A}){let{data:n,isLoading:r,isFetching:i,isError:a,refetch:o}=te(),s=new Set(e),c=!!n&&Object.values(n).some(e=>e!==void 0),u=k.filter(({id:e})=>s.has(e)).map(({id:e,label:t})=>({key:e,label:t,icon:I[e].icon,value:I[e].count(n)}));return(0,P.jsx)(`div`,{className:D.root,children:(0,P.jsx)(_,{isLoading:r,isFetching:i,isError:a&&!c,isEmpty:!c,error:{description:t(`We couldn't load subscriber highlights. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:o}]},empty:{icon:d,description:t(`No subscriber counts available yet.`,`jetpack-premium-analytics`)},children:u.length===0?(0,P.jsx)(l,{className:D.placeholder,children:t(`Select at least one metric to display.`,`jetpack-premium-analytics`)}):(0,P.jsx)(re,{tiles:u,dataFormat:F})})})}function N({attributes:e={}}){return(0,P.jsx)(ie,{attributes:e,children:(0,P.jsx)(se,{metrics:e.metrics})})}var P,F,I,L=e((()=>{p(),ee(),b(),n(),s(),u(),O(),M(),P=r(),F={type:`number`,options:{useMultipliers:!0,decimals:0}},I={total:{icon:a,count:e=>e?.total_subscribers??0},paid:{icon:o,count:e=>e?.paid_subscribers??0},free:{icon:i,count:e=>e?.email_subscribers??0},social:{icon:c,count:e=>e?.social_followers??0}}}));function R({withComparison:e,metrics:t}){return(0,V.jsx)(N,{attributes:{reportParams:f(e),metrics:t}})}function z(){ne.removeQueries({queryKey:[`stats`,`subscribers-counts`]})}function B({withComparison:e,metrics:t,...n}){return(0,V.jsx)(y,{...n,widgetType:U,renderModule:H,renderComponent:N,attributes:{reportParams:f(e),metrics:t}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),x(),oe(),h(),L(),M(),V=r(),m(),H=`storybook/subscriber-highlights`,U={name:j.name,title:j.title,icon:j.icon,attributes:j.attributes,example:j.example},W={metrics:{control:`check`,options:A}},G={metrics:A},K={title:`Packages/Premium Analytics/Widgets/SubscriberHighlights`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...W},parameters:{docs:{description:{component:"The \"Subscriber highlights\" widget. Shows current subscriber totals — total, paid, free, and social followers — as a grid of metric tiles. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. Data comes from the designated `useStatsSubscribersCounts` hook; in Storybook it is served by `registerReportMocks()` (the `subscribers/counts` handler). The counts module has no comparison period, so the tiles show bare counts and the `WithComparison` story renders identically to `Default`."}}}},q={render:R,args:{withComparison:!1,...G},decorators:[S]},J={render:R,args:{withComparison:!0,...G},decorators:[S]},Y={render:R,args:{withComparison:!1,...G},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(z(),g(`subscribers/counts`,`loading`),()=>{g(`subscribers/counts`,null),z()})},X={render:R,args:{withComparison:!1,...G},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(z(),g(`subscribers/counts`,`error`),()=>{g(`subscribers/counts`,null),z()})},Z={render:R,args:{withComparison:!1,...G},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(z(),g(`subscribers/counts`,`empty`),()=>{g(`subscribers/counts`,null),z()})},Q={render:e=>(0,V.jsx)(B,{...e}),args:{...ae,widgetWidth:1,widgetHeight:1,withComparison:!0,...G},argTypes:{...v,withComparison:{control:`boolean`},...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderSubscriberHighlights,
  args: {
    withComparison: false,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`The widget on its own, populated from the mocked subscribers/counts payload.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderSubscriberHighlights,
  args: {
    withComparison: true,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`Same close-up with comparison report params injected. The counts module has no
comparison data, so this renders identically to \`Default\` — it only verifies
the widget stays stable when the host provides comparison params.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderSubscriberHighlights,
  args: {
    withComparison: false,
    ...ALL_METRICS_ARGS
  },
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    resetSubscribersCountsQuery();
    setReportMockState('subscribers/counts', 'loading');
    return () => {
      setReportMockState('subscribers/counts', null);
      resetSubscribersCountsQuery();
    };
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderSubscriberHighlights,
  args: {
    withComparison: false,
    ...ALL_METRICS_ARGS
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    resetSubscribersCountsQuery();
    setReportMockState('subscribers/counts', 'error');
    return () => {
      setReportMockState('subscribers/counts', null);
      resetSubscribersCountsQuery();
    };
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderSubscriberHighlights,
  args: {
    withComparison: false,
    ...ALL_METRICS_ARGS
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    resetSubscribersCountsQuery();
    setReportMockState('subscribers/counts', 'empty');
    return () => {
      setReportMockState('subscribers/counts', null);
      resetSubscribersCountsQuery();
    };
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved without counts: the widget shows its empty state (the neutral
customer glyph and "No subscriber counts available yet.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};