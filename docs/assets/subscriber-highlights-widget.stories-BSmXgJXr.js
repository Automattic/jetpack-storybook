import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{M as i,Zt as a,mt as o,n as s,ut as c}from"./build-module-DmVuor49.js";import{W as ee,t as l}from"./build-module-BTuZvhNV.js";import{d as te,t as ne}from"./src-B3le4dug.js";import{Ct as u,Qt as re,fr as d,kr as ie}from"./chart-tooltip-Mn1p1GH5.js";import{t as ae}from"./metric-tile-grid-BkvciNZk.js";import{I as oe,L as se,U as ce,z as f}from"./report-metric-DxWeCzOx.js";import{t as p}from"./widget-state-Wz_xMv29.js";import{C as le,D as m,E as ue,S as de,T as h,b as g,t as _,w as fe,x as v}from"./src-4HO2JkEO.js";import{i as y,t as b}from"./src-BImHH_Nt.js";var x,S,C,w=e((()=>{x=`_root_1qhg5_2`,S=`_placeholder_1qhg5_11`,C={root:x,placeholder:S}})),T,E,D,O=e((()=>{n(),s(),b(),T=[{id:`total`,label:t(`Total subscribers`,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics-pkg`)},{id:`free`,label:t(`Free subscribers`,`jetpack-premium-analytics-pkg`)},{id:`social`,label:t(`Social followers`,`jetpack-premium-analytics-pkg`)}],E=T.map(e=>e.id),D={icon:c,attributes:[{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:y,elements:T.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:E}}}}));function pe({metrics:e=E}){let{data:n,isLoading:r,isFetching:i,isError:a,refetch:o}=re(),s=new Set(e),c=!!n&&Object.values(n).some(e=>e!==void 0),l=T.filter(({id:e})=>s.has(e)).map(({id:e,label:t})=>({key:e,label:t,icon:M[e].icon,value:M[e].count(n)}));return(0,A.jsx)(`div`,{className:C.root,children:(0,A.jsx)(p,{isLoading:r,isFetching:i,isError:a&&!c,isEmpty:!c,error:{description:t(`We couldn't load subscriber highlights. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]},empty:{icon:te,description:t(`No subscriber counts available yet.`,`jetpack-premium-analytics-pkg`)},children:l.length===0?(0,A.jsx)(ee,{className:C.placeholder,children:t(`Select at least one metric to display.`,`jetpack-premium-analytics-pkg`)}):(0,A.jsx)(ae,{tiles:l,dataFormat:j})})})}function k({attributes:e={}}){return(0,A.jsx)(ce,{attributes:e,children:(0,A.jsx)(pe,{metrics:e.metrics})})}var A,j,M,me=e((()=>{u(),ne(),_(),n(),s(),l(),w(),O(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M={total:{icon:c,count:e=>e?.total_subscribers??0},paid:{icon:o,count:e=>e?.paid_subscribers??0},free:{icon:a,count:e=>e?.email_subscribers??0},social:{icon:i,count:e=>e?.social_followers??0}}})),N,P,F,I,L,R,z,he=e((()=>{N=`jpa/subscriber-highlights`,P=`Subscriber highlights`,F=`Your subscriber totals at a glance — total, paid, free, and social followers.`,I={content:`A summary of your subscribers — total, paid, free, and social followers.`},L=`subscribers`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({metrics:e}){return(0,H.jsx)(k,{attributes:{reportParams:d(),metrics:e}})}function V(){ie.removeQueries({queryKey:[`stats`,`subscribers-counts`]})}function ge({metrics:e,...t}){return(0,H.jsx)(h,{...t,widgetType:W,renderModule:U,renderComponent:k,attributes:{reportParams:d(!0),metrics:e}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),ue(),le(),g(),oe(),me(),O(),he(),H=r(),se(),U=`storybook/subscriber-highlights`,W=de(z,D),G={metrics:{control:`check`,options:E}},K={metrics:E},q={title:`Packages/Premium Analytics/Widgets/SubscriberHighlights`,component:k,tags:[`autodocs`],argTypes:{...G},parameters:{docs:{description:{component:"The \"Subscriber highlights\" widget. Shows current subscriber totals — total, paid, free, and social followers — as a grid of metric tiles. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. Data comes from the designated `useStatsSubscribersCounts` hook; in Storybook it is served by `registerReportMocks()` (the `subscribers/counts` handler). The counts module has no comparison period, so the tiles show bare counts."}}}},J={render:B,args:{...K},decorators:[v]},Y={render:B,args:{...K},tags:[`!autodocs`],decorators:[v],beforeEach:()=>(V(),f(`subscribers/counts`,`loading`),()=>{f(`subscribers/counts`,null),V()})},X={render:B,args:{...K},tags:[`!autodocs`],decorators:[v],beforeEach:()=>(V(),f(`subscribers/counts`,`error`),()=>{f(`subscribers/counts`,null),V()})},Z={render:B,args:{...K},tags:[`!autodocs`],decorators:[v],beforeEach:()=>(V(),f(`subscribers/counts`,`empty`),()=>{f(`subscribers/counts`,null),V()})},Q={render:e=>(0,H.jsx)(ge,{...e}),args:{...fe,widgetWidth:1,widgetHeight:1,...K},argTypes:{...m,...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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