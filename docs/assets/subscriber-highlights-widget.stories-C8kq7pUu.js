import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-yGZutq_9.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Ps as i,_i as a,_n as o,di as s,t as c}from"./build-module-zwSmKorH.js";import{Mt as ee}from"./build-module-CRH4RouM.js";import{V as l,W as te,y as ne}from"./wp-date-settings-BfoHMrgj.js";import{t as re}from"./src-DbJEEw8n.js";import{p as ie,t as ae}from"./src-DFNM1k7F.js";import{Cn as oe,H as se,en as u,i as d}from"./date-filters-panel-BZW_fv1o.js";import{r as ce,t as le}from"./metric-tile-grid-skeleton-C8hPTcgy.js";import{J as ue,Z as f,q as de}from"./report-metric-BvI2qBox.js";import{t as p}from"./widget-state-D1V1HqmI.js";import{C as fe,D as m,E as h,S as g,T as _,b as v,t as pe,w as me,x as y}from"./src-Cnt-Azoy.js";var b,x,S,C=e((()=>{b=`_root_1qhg5_2`,x=`_placeholder_1qhg5_11`,S={root:b,placeholder:x}})),w,T,E,D=e((()=>{n(),c(),l(),w=[{id:`total`,label:t(`Total subscribers`,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics-pkg`)},{id:`free`,label:t(`Free subscribers`,`jetpack-premium-analytics-pkg`)},{id:`social`,label:t(`Social followers`,`jetpack-premium-analytics-pkg`)}],T=w.map(e=>e.id),E={icon:s,attributes:[{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:te,elements:w.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:T}}}}));function he({metrics:e=T}){let{data:n,isLoading:r,isFetching:i,isError:a,refetch:o}=se(),s=new Set(e),c=!!n&&Object.values(n).some(e=>e!==void 0),l=w.filter(({id:e})=>s.has(e)).map(({id:e,label:t})=>({key:e,label:t,icon:j[e].icon,value:j[e].count(n)}));return(0,k.jsx)(`div`,{className:S.root,children:(0,k.jsx)(p,{isLoading:r,isFetching:i,isError:a&&!c,isEmpty:!c,error:{description:t(`We couldn't load subscriber highlights. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]},empty:{icon:ie,description:t(`No subscriber counts available yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(le,{tiles:l.length}),children:l.length===0?(0,k.jsx)(ee,{className:S.placeholder,children:t(`Select at least one metric to display.`,`jetpack-premium-analytics-pkg`)}):(0,k.jsx)(ce,{tiles:l,dataFormat:A})})})}function O({attributes:e={}}){return(0,k.jsx)(ne,{attributes:e,children:(0,k.jsx)(he,{metrics:e.metrics})})}var k,A,j,M=e((()=>{d(),ae(),pe(),n(),c(),re(),C(),D(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j={total:{icon:s,count:e=>e?.total_subscribers??0},paid:{icon:a,count:e=>e?.paid_subscribers??0},free:{icon:i,count:e=>e?.email_subscribers??0},social:{icon:o,count:e=>e?.social_followers??0}}})),N,P,F,I,L,R,z,ge=e((()=>{N=`jpa/subscriber-highlights`,P=`Subscriber highlights`,F=`Your subscriber totals at a glance — total, paid, free, and social followers.`,I={content:`A summary of your subscribers — total, paid, free, and social followers.`},L=`subscribers`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({metrics:e}){return(0,H.jsx)(O,{attributes:{reportParams:u(),metrics:e}})}function V(){oe.removeQueries({queryKey:[`stats`,`subscribers-counts`]})}function _e({metrics:e,...t}){return(0,H.jsx)(_,{...t,widgetType:W,renderModule:U,renderComponent:O,attributes:{reportParams:u(!0),metrics:e}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),h(),fe(),v(),de(),M(),D(),ge(),H=r(),ue(),U=`storybook/subscriber-highlights`,W=g(z,E),G={metrics:{control:`check`,options:T}},K={metrics:T},q={title:`Packages/Premium Analytics/Widgets/SubscriberHighlights`,component:O,tags:[`autodocs`],argTypes:{...G},parameters:{docs:{description:{component:"The \"Subscriber highlights\" widget. Shows current subscriber totals — total, paid, free, and social followers — as a grid of metric tiles. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. Data comes from the designated `useStatsSubscribersCounts` hook; in Storybook it is served by `registerReportMocks()` (the `subscribers/counts` handler). The counts module has no comparison period, so the tiles show bare counts."}}}},J={render:B,args:{...K},decorators:[y]},Y={render:B,args:{...K},tags:[`!autodocs`],decorators:[y],beforeEach:()=>(V(),f(`subscribers/counts`,`loading`),()=>{f(`subscribers/counts`,null),V()})},X={render:B,args:{...K},tags:[`!autodocs`],decorators:[y],beforeEach:()=>(V(),f(`subscribers/counts`,`error`),()=>{f(`subscribers/counts`,null),V()})},Z={render:B,args:{...K},tags:[`!autodocs`],decorators:[y],beforeEach:()=>(V(),f(`subscribers/counts`,`empty`),()=>{f(`subscribers/counts`,null),V()})},Q={render:e=>(0,H.jsx)(_e,{...e}),args:{...me,widgetWidth:1,widgetHeight:1,...K},argTypes:{...m,...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderSubscriberHighlights,
  args: {
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`The widget on its own, populated from the mocked subscribers/counts payload.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderSubscriberHighlights,
  args: {
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
    ...ALL_METRICS_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    ...METRIC_ARG_TYPES
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,q as default};