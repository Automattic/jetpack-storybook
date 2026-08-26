import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{gi as i,js as a,n as o,ui as s,vn as c}from"./build-module-CDRs4YxF.js";import{Tn as ee,t as l}from"./src-_7Oewwpr.js";import{g as te}from"./hooks-BCKkPlG3.js";import{p as ne,t as re}from"./src-B64ifip5.js";import{F as ie,mn as ae,qt as u,t as d}from"./src-wJTWVfDi.js";import{f as oe,h as se}from"./chart-tooltip-CdWXTGi-.js";import{r as f,t as p}from"./metric-tile-grid-skeleton-CJRJdZel.js";import{K as m,X as h,q as g}from"./report-metric-C0twNcQq.js";import{t as _}from"./widget-state-BVy8ulzF.js";import{C as ce,D as le,E as ue,S as de,T as fe,b as pe,t as me,w as v,x as y}from"./src-YMIW_bG7.js";var b,x,S,he=e((()=>{b=`_root_1qhg5_2`,x=`_placeholder_1qhg5_11`,S={root:b,placeholder:x}})),C,w,T,E=e((()=>{n(),o(),oe(),C=[{id:`total`,label:t(`Total subscribers`,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics-pkg`)},{id:`free`,label:t(`Free subscribers`,`jetpack-premium-analytics-pkg`)},{id:`social`,label:t(`Social followers`,`jetpack-premium-analytics-pkg`)}],w=C.map(e=>e.id),T={icon:s,attributes:[{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:se,elements:C.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:w}}}}));function D({metrics:e=w}){let{data:n,isLoading:r,isFetching:i,isError:a,refetch:o}=ie(),s=new Set(e),c=!!n&&Object.values(n).some(e=>e!==void 0),l=C.filter(({id:e})=>s.has(e)).map(({id:e,label:t})=>({key:e,label:t,icon:j[e].icon,value:j[e].count(n)}));return(0,k.jsx)(`div`,{className:S.root,children:(0,k.jsx)(_,{isLoading:r,isFetching:i,isError:a&&!c,isEmpty:!c,error:{description:t(`We couldn't load subscriber highlights. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]},empty:{icon:ne,description:t(`No subscriber counts available yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(p,{tiles:l.length}),children:l.length===0?(0,k.jsx)(ee,{className:S.placeholder,children:t(`Select at least one metric to display.`,`jetpack-premium-analytics-pkg`)}):(0,k.jsx)(f,{tiles:l,dataFormat:A})})})}function O({attributes:e={}}){return(0,k.jsx)(te,{attributes:e,children:(0,k.jsx)(D,{metrics:e.metrics})})}var k,A,j,M=e((()=>{d(),re(),me(),n(),o(),l(),he(),E(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j={total:{icon:s,count:e=>e?.total_subscribers??0},paid:{icon:i,count:e=>e?.paid_subscribers??0},free:{icon:a,count:e=>e?.email_subscribers??0},social:{icon:c,count:e=>e?.social_followers??0}}})),N,P,F,I,L,R,z,ge=e((()=>{N=`jpa/subscriber-highlights`,P=`Subscriber highlights`,F=`Your subscriber totals at a glance — total, paid, free, and social followers.`,I={content:`A summary of your subscribers — total, paid, free, and social followers.`},L=`subscribers`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({metrics:e}){return(0,H.jsx)(O,{attributes:{reportParams:u(),metrics:e}})}function V(){ae.removeQueries({queryKey:[`stats`,`subscribers-counts`]})}function _e({metrics:e,...t}){return(0,H.jsx)(fe,{...t,widgetType:W,renderModule:U,renderComponent:O,attributes:{reportParams:u(!0),metrics:e}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),ue(),ce(),pe(),m(),M(),E(),ge(),H=r(),g(),U=`storybook/subscriber-highlights`,W=de(z,T),G={metrics:{control:`check`,options:w}},K={metrics:w},q={title:`Packages/Premium Analytics/Widgets/SubscriberHighlights`,component:O,tags:[`autodocs`],argTypes:{...G},parameters:{docs:{description:{component:"The \"Subscriber highlights\" widget. Shows current subscriber totals — total, paid, free, and social followers — as a grid of metric tiles. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. Data comes from the designated `useStatsSubscribersCounts` hook; in Storybook it is served by `registerReportMocks()` (the `subscribers/counts` handler). The counts module has no comparison period, so the tiles show bare counts."}}}},J={render:B,args:{...K},decorators:[y]},Y={render:B,args:{...K},tags:[`!autodocs`],decorators:[y],beforeEach:()=>(V(),h(`subscribers/counts`,`loading`),()=>{h(`subscribers/counts`,null),V()})},X={render:B,args:{...K},tags:[`!autodocs`],decorators:[y],beforeEach:()=>(V(),h(`subscribers/counts`,`error`),()=>{h(`subscribers/counts`,null),V()})},Z={render:B,args:{...K},tags:[`!autodocs`],decorators:[y],beforeEach:()=>(V(),h(`subscribers/counts`,`empty`),()=>{h(`subscribers/counts`,null),V()})},Q={render:e=>(0,H.jsx)(_e,{...e}),args:{...v,widgetWidth:1,widgetHeight:1,...K},argTypes:{...le,...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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