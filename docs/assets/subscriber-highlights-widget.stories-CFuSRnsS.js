import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{gi as i,js as a,n as o,ui as s,vn as c}from"./build-module-CDRs4YxF.js";import{Tr as ee,t as l}from"./src-B-cUg7xA.js";import{K as te,X as u,et as ne,q as re}from"./report-metric-DykAMe7x.js";import{d as ie,t as ae}from"./src-tEZrN6jJ.js";import{Tt as d,en as oe,hr as f,jr as se}from"./chart-tooltip-KET-sEal.js";import{t as p}from"./metric-tile-grid-B88hUjOu.js";import{t as m}from"./widget-state-BlpU-WUj.js";import{C as h,D as ce,E as le,S as ue,T as de,b as fe,t as pe,w as me,x as g}from"./src-Bhzo9Aci.js";import{i as _,t as v}from"./src-DfG1q17x.js";var y,b,x,S=e((()=>{y=`_root_1qhg5_2`,b=`_placeholder_1qhg5_11`,x={root:y,placeholder:b}})),C,w,T,E=e((()=>{n(),o(),v(),C=[{id:`total`,label:t(`Total subscribers`,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics-pkg`)},{id:`free`,label:t(`Free subscribers`,`jetpack-premium-analytics-pkg`)},{id:`social`,label:t(`Social followers`,`jetpack-premium-analytics-pkg`)}],w=C.map(e=>e.id),T={icon:s,attributes:[{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:_,elements:C.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:w}}}}));function D({metrics:e=w}){let{data:n,isLoading:r,isFetching:i,isError:a,refetch:o}=oe(),s=new Set(e),c=!!n&&Object.values(n).some(e=>e!==void 0),l=C.filter(({id:e})=>s.has(e)).map(({id:e,label:t})=>({key:e,label:t,icon:j[e].icon,value:j[e].count(n)}));return(0,k.jsx)(`div`,{className:x.root,children:(0,k.jsx)(m,{isLoading:r,isFetching:i,isError:a&&!c,isEmpty:!c,error:{description:t(`We couldn't load subscriber highlights. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]},empty:{icon:ie,description:t(`No subscriber counts available yet.`,`jetpack-premium-analytics-pkg`)},children:l.length===0?(0,k.jsx)(ee,{className:x.placeholder,children:t(`Select at least one metric to display.`,`jetpack-premium-analytics-pkg`)}):(0,k.jsx)(p,{tiles:l,dataFormat:A})})})}function O({attributes:e={}}){return(0,k.jsx)(ne,{attributes:e,children:(0,k.jsx)(D,{metrics:e.metrics})})}var k,A,j,M=e((()=>{d(),ae(),pe(),n(),o(),l(),S(),E(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j={total:{icon:s,count:e=>e?.total_subscribers??0},paid:{icon:i,count:e=>e?.paid_subscribers??0},free:{icon:a,count:e=>e?.email_subscribers??0},social:{icon:c,count:e=>e?.social_followers??0}}})),N,P,F,I,L,R,z,he=e((()=>{N=`jpa/subscriber-highlights`,P=`Subscriber highlights`,F=`Your subscriber totals at a glance — total, paid, free, and social followers.`,I={content:`A summary of your subscribers — total, paid, free, and social followers.`},L=`subscribers`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({metrics:e}){return(0,H.jsx)(O,{attributes:{reportParams:f(),metrics:e}})}function V(){se.removeQueries({queryKey:[`stats`,`subscribers-counts`]})}function ge({metrics:e,...t}){return(0,H.jsx)(de,{...t,widgetType:W,renderModule:U,renderComponent:O,attributes:{reportParams:f(!0),metrics:e}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),le(),h(),fe(),te(),M(),E(),he(),H=r(),re(),U=`storybook/subscriber-highlights`,W=ue(z,T),G={metrics:{control:`check`,options:w}},K={metrics:w},q={title:`Packages/Premium Analytics/Widgets/SubscriberHighlights`,component:O,tags:[`autodocs`],argTypes:{...G},parameters:{docs:{description:{component:"The \"Subscriber highlights\" widget. Shows current subscriber totals — total, paid, free, and social followers — as a grid of metric tiles. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. Data comes from the designated `useStatsSubscribersCounts` hook; in Storybook it is served by `registerReportMocks()` (the `subscribers/counts` handler). The counts module has no comparison period, so the tiles show bare counts."}}}},J={render:B,args:{...K},decorators:[g]},Y={render:B,args:{...K},tags:[`!autodocs`],decorators:[g],beforeEach:()=>(V(),u(`subscribers/counts`,`loading`),()=>{u(`subscribers/counts`,null),V()})},X={render:B,args:{...K},tags:[`!autodocs`],decorators:[g],beforeEach:()=>(V(),u(`subscribers/counts`,`error`),()=>{u(`subscribers/counts`,null),V()})},Z={render:B,args:{...K},tags:[`!autodocs`],decorators:[g],beforeEach:()=>(V(),u(`subscribers/counts`,`empty`),()=>{u(`subscribers/counts`,null),V()})},Q={render:e=>(0,H.jsx)(ge,{...e}),args:{...me,widgetWidth:1,widgetHeight:1,...K},argTypes:{...ce,...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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