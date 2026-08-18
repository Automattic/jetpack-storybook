import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{gi as i,js as a,n as o,ui as s,vn as c}from"./build-module-CDRs4YxF.js";import{Cn as ee,t as l}from"./src-D6mrnv3D.js";import{$ as te,G as ne,K as re,Y as u}from"./report-metric-C9BdlXmy.js";import{d as ie,t as ae}from"./src-Cvyt29m2.js";import{Cr as d,Nt as f,c as oe,cn as p,d as m,zr as se}from"./chart-tooltip-CXOBUE8q.js";import{t as ce}from"./metric-tile-grid-Co2tku8g.js";import{t as le}from"./widget-state-gnnyozZ8.js";import{C as ue,D as de,E as fe,S as h,T as g,b as _,t as pe,w as v,x as y}from"./src-CjbavHyO.js";var b,x,S,C=e((()=>{b=`_root_1qhg5_2`,x=`_placeholder_1qhg5_11`,S={root:b,placeholder:x}})),w,T,E,D=e((()=>{n(),o(),oe(),w=[{id:`total`,label:t(`Total subscribers`,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics-pkg`)},{id:`free`,label:t(`Free subscribers`,`jetpack-premium-analytics-pkg`)},{id:`social`,label:t(`Social followers`,`jetpack-premium-analytics-pkg`)}],T=w.map(e=>e.id),E={icon:s,attributes:[{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:m,elements:w.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:T}}}}));function me({metrics:e=T}){let{data:n,isLoading:r,isFetching:i,isError:a,refetch:o}=p(),s=new Set(e),c=!!n&&Object.values(n).some(e=>e!==void 0),l=w.filter(({id:e})=>s.has(e)).map(({id:e,label:t})=>({key:e,label:t,icon:j[e].icon,value:j[e].count(n)}));return(0,k.jsx)(`div`,{className:S.root,children:(0,k.jsx)(le,{isLoading:r,isFetching:i,isError:a&&!c,isEmpty:!c,error:{description:t(`We couldn't load subscriber highlights. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]},empty:{icon:ie,description:t(`No subscriber counts available yet.`,`jetpack-premium-analytics-pkg`)},children:l.length===0?(0,k.jsx)(ee,{className:S.placeholder,children:t(`Select at least one metric to display.`,`jetpack-premium-analytics-pkg`)}):(0,k.jsx)(ce,{tiles:l,dataFormat:A})})})}function O({attributes:e={}}){return(0,k.jsx)(te,{attributes:e,children:(0,k.jsx)(me,{metrics:e.metrics})})}var k,A,j,M=e((()=>{f(),ae(),pe(),n(),o(),l(),C(),D(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j={total:{icon:s,count:e=>e?.total_subscribers??0},paid:{icon:i,count:e=>e?.paid_subscribers??0},free:{icon:a,count:e=>e?.email_subscribers??0},social:{icon:c,count:e=>e?.social_followers??0}}})),N,P,F,I,L,R,z,he=e((()=>{N=`jpa/subscriber-highlights`,P=`Subscriber highlights`,F=`Your subscriber totals at a glance — total, paid, free, and social followers.`,I={content:`A summary of your subscribers — total, paid, free, and social followers.`},L=`subscribers`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({metrics:e}){return(0,H.jsx)(O,{attributes:{reportParams:d(),metrics:e}})}function V(){se.removeQueries({queryKey:[`stats`,`subscribers-counts`]})}function ge({metrics:e,...t}){return(0,H.jsx)(g,{...t,widgetType:W,renderModule:U,renderComponent:O,attributes:{reportParams:d(!0),metrics:e}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),fe(),ue(),_(),ne(),M(),D(),he(),H=r(),re(),U=`storybook/subscriber-highlights`,W=h(z,E),G={metrics:{control:`check`,options:T}},K={metrics:T},q={title:`Packages/Premium Analytics/Widgets/SubscriberHighlights`,component:O,tags:[`autodocs`],argTypes:{...G},parameters:{docs:{description:{component:"The \"Subscriber highlights\" widget. Shows current subscriber totals — total, paid, free, and social followers — as a grid of metric tiles. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. Data comes from the designated `useStatsSubscribersCounts` hook; in Storybook it is served by `registerReportMocks()` (the `subscribers/counts` handler). The counts module has no comparison period, so the tiles show bare counts."}}}},J={render:B,args:{...K},decorators:[y]},Y={render:B,args:{...K},tags:[`!autodocs`],decorators:[y],beforeEach:()=>(V(),u(`subscribers/counts`,`loading`),()=>{u(`subscribers/counts`,null),V()})},X={render:B,args:{...K},tags:[`!autodocs`],decorators:[y],beforeEach:()=>(V(),u(`subscribers/counts`,`error`),()=>{u(`subscribers/counts`,null),V()})},Z={render:B,args:{...K},tags:[`!autodocs`],decorators:[y],beforeEach:()=>(V(),u(`subscribers/counts`,`empty`),()=>{u(`subscribers/counts`,null),V()})},Q={render:e=>(0,H.jsx)(ge,{...e}),args:{...v,widgetWidth:1,widgetHeight:1,...K},argTypes:{...de,...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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