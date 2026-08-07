import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{gi as i,js as a,n as o,ui as s,vn as c}from"./build-module-CDRs4YxF.js";import{Tr as ee,t as l}from"./src-B73uBrWU.js";import{$ as te,K as ne,Y as u,q as re}from"./report-metric-Dt3bvYem.js";import{d as ie,t as ae}from"./src-DSMTPY80.js";import{Ct as d,Qt as oe,kr as f,pr as p}from"./chart-tooltip-DIHXy1Mg.js";import{t as se}from"./metric-tile-grid-DzM_Hl8N.js";import{C as m,D as h,E as g,S as _,T as ce,b as le,t as ue,w as de,x as v}from"./src-DLHD1_5Z.js";import{t as fe}from"./widget-state-arjd2aPR.js";import{i as pe,t as y}from"./src-BK9tBQpa.js";var b,x,S,C=e((()=>{b=`_root_1qhg5_2`,x=`_placeholder_1qhg5_11`,S={root:b,placeholder:x}})),w,T,E,D=e((()=>{n(),o(),y(),w=[{id:`total`,label:t(`Total subscribers`,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics-pkg`)},{id:`free`,label:t(`Free subscribers`,`jetpack-premium-analytics-pkg`)},{id:`social`,label:t(`Social followers`,`jetpack-premium-analytics-pkg`)}],T=w.map(e=>e.id),E={icon:s,attributes:[{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:pe,elements:w.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:T}}}}));function O({metrics:e=T}){let{data:n,isLoading:r,isFetching:i,isError:a,refetch:o}=oe(),s=new Set(e),c=!!n&&Object.values(n).some(e=>e!==void 0),l=w.filter(({id:e})=>s.has(e)).map(({id:e,label:t})=>({key:e,label:t,icon:M[e].icon,value:M[e].count(n)}));return(0,A.jsx)(`div`,{className:S.root,children:(0,A.jsx)(fe,{isLoading:r,isFetching:i,isError:a&&!c,isEmpty:!c,error:{description:t(`We couldn't load subscriber highlights. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]},empty:{icon:ie,description:t(`No subscriber counts available yet.`,`jetpack-premium-analytics-pkg`)},children:l.length===0?(0,A.jsx)(ee,{className:S.placeholder,children:t(`Select at least one metric to display.`,`jetpack-premium-analytics-pkg`)}):(0,A.jsx)(se,{tiles:l,dataFormat:j})})})}function k({attributes:e={}}){return(0,A.jsx)(te,{attributes:e,children:(0,A.jsx)(O,{metrics:e.metrics})})}var A,j,M,me=e((()=>{d(),ae(),ue(),n(),o(),l(),C(),D(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M={total:{icon:s,count:e=>e?.total_subscribers??0},paid:{icon:i,count:e=>e?.paid_subscribers??0},free:{icon:a,count:e=>e?.email_subscribers??0},social:{icon:c,count:e=>e?.social_followers??0}}})),N,P,F,I,L,R,z,he=e((()=>{N=`jpa/subscriber-highlights`,P=`Subscriber highlights`,F=`Your subscriber totals at a glance — total, paid, free, and social followers.`,I={content:`A summary of your subscribers — total, paid, free, and social followers.`},L=`subscribers`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({metrics:e}){return(0,H.jsx)(k,{attributes:{reportParams:p(),metrics:e}})}function V(){f.removeQueries({queryKey:[`stats`,`subscribers-counts`]})}function ge({metrics:e,...t}){return(0,H.jsx)(ce,{...t,widgetType:W,renderModule:U,renderComponent:k,attributes:{reportParams:p(!0),metrics:e}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),g(),m(),le(),ne(),me(),D(),he(),H=r(),re(),U=`storybook/subscriber-highlights`,W=_(z,E),G={metrics:{control:`check`,options:T}},K={metrics:T},q={title:`Packages/Premium Analytics/Widgets/SubscriberHighlights`,component:k,tags:[`autodocs`],argTypes:{...G},parameters:{docs:{description:{component:"The \"Subscriber highlights\" widget. Shows current subscriber totals — total, paid, free, and social followers — as a grid of metric tiles. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. Data comes from the designated `useStatsSubscribersCounts` hook; in Storybook it is served by `registerReportMocks()` (the `subscribers/counts` handler). The counts module has no comparison period, so the tiles show bare counts."}}}},J={render:B,args:{...K},decorators:[v]},Y={render:B,args:{...K},tags:[`!autodocs`],decorators:[v],beforeEach:()=>(V(),u(`subscribers/counts`,`loading`),()=>{u(`subscribers/counts`,null),V()})},X={render:B,args:{...K},tags:[`!autodocs`],decorators:[v],beforeEach:()=>(V(),u(`subscribers/counts`,`error`),()=>{u(`subscribers/counts`,null),V()})},Z={render:B,args:{...K},tags:[`!autodocs`],decorators:[v],beforeEach:()=>(V(),u(`subscribers/counts`,`empty`),()=>{u(`subscribers/counts`,null),V()})},Q={render:e=>(0,H.jsx)(ge,{...e}),args:{...de,widgetWidth:1,widgetHeight:1,...K},argTypes:{...h,...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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