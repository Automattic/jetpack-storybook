import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{M as i,Zt as a,mt as o,n as s,ut as c}from"./build-module-DmVuor49.js";import{W as l,t as u}from"./build-module-B34MKSgB.js";import{d as ee,t as te}from"./src-B3le4dug.js";import{Bt as ne,dt as d,er as f,hr as re}from"./chart-tooltip-BXDnGPby.js";import{t as p}from"./metric-tile-grid-CicXVYqR.js";import{M as ie,P as m,R as h,j as g}from"./report-metric-HIq6UNa0.js";import{t as _}from"./widget-state-CJF1ZH55.js";import{C as v,S as y,T as b,b as x,t as S,w as C,x as w}from"./src-CKZJ5Ebh.js";import{i as ae,t as T}from"./src-DgI-PPmw.js";var E,D,O,k=e((()=>{E=`_root_1qhg5_2`,D=`_placeholder_1qhg5_11`,O={root:E,placeholder:D}})),A,j,M,N=e((()=>{n(),s(),T(),A=[{id:`total`,label:t(`Total subscribers`,`jetpack-premium-analytics`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics`)},{id:`free`,label:t(`Free subscribers`,`jetpack-premium-analytics`)},{id:`social`,label:t(`Social followers`,`jetpack-premium-analytics`)}],j=A.map(e=>e.id),M={name:`jpa/subscriber-highlights`,title:t(`Subscriber highlights`,`jetpack-premium-analytics`),help:{content:t(`A summary of your subscribers — total, paid, free, and social followers.`,`jetpack-premium-analytics`)},icon:c,attributes:[{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:ae,elements:A.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:j}}}}));function oe({metrics:e=j}){let{data:n,isLoading:r,isFetching:i,isError:a,refetch:o}=ne(),s=new Set(e),c=!!n&&Object.values(n).some(e=>e!==void 0),u=A.filter(({id:e})=>s.has(e)).map(({id:e,label:t})=>({key:e,label:t,icon:L[e].icon,value:L[e].count(n)}));return(0,F.jsx)(`div`,{className:O.root,children:(0,F.jsx)(_,{isLoading:r,isFetching:i,isError:a&&!c,isEmpty:!c,error:{description:t(`We couldn't load subscriber highlights. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:o}]},empty:{icon:ee,description:t(`No subscriber counts available yet.`,`jetpack-premium-analytics`)},children:u.length===0?(0,F.jsx)(l,{className:O.placeholder,children:t(`Select at least one metric to display.`,`jetpack-premium-analytics`)}):(0,F.jsx)(p,{tiles:u,dataFormat:I})})})}function P({attributes:e={}}){return(0,F.jsx)(h,{attributes:e,children:(0,F.jsx)(oe,{metrics:e.metrics})})}var F,I,L,R=e((()=>{d(),te(),S(),n(),s(),u(),k(),N(),F=r(),I={type:`number`,options:{useMultipliers:!0,decimals:0}},L={total:{icon:c,count:e=>e?.total_subscribers??0},paid:{icon:o,count:e=>e?.paid_subscribers??0},free:{icon:a,count:e=>e?.email_subscribers??0},social:{icon:i,count:e=>e?.social_followers??0}}}));function z({metrics:e}){return(0,H.jsx)(P,{attributes:{reportParams:f(),metrics:e}})}function B(){re.removeQueries({queryKey:[`stats`,`subscribers-counts`]})}function V({metrics:e,...t}){return(0,H.jsx)(v,{...t,widgetType:W,renderModule:U,renderComponent:P,attributes:{reportParams:f(!0),metrics:e}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),C(),x(),g(),R(),N(),H=r(),ie(),U=`storybook/subscriber-highlights`,W={name:M.name,title:M.title,icon:M.icon,attributes:M.attributes,example:M.example},G={metrics:{control:`check`,options:j}},K={metrics:j},q={title:`Packages/Premium Analytics/Widgets/SubscriberHighlights`,component:P,tags:[`autodocs`],argTypes:{...G},parameters:{docs:{description:{component:"The \"Subscriber highlights\" widget. Shows current subscriber totals — total, paid, free, and social followers — as a grid of metric tiles. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. Data comes from the designated `useStatsSubscribersCounts` hook; in Storybook it is served by `registerReportMocks()` (the `subscribers/counts` handler). The counts module has no comparison period, so the tiles show bare counts."}}}},J={render:z,args:{...K},decorators:[w]},Y={render:z,args:{...K},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(B(),m(`subscribers/counts`,`loading`),()=>{m(`subscribers/counts`,null),B()})},X={render:z,args:{...K},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(B(),m(`subscribers/counts`,`error`),()=>{m(`subscribers/counts`,null),B()})},Z={render:z,args:{...K},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(B(),m(`subscribers/counts`,`empty`),()=>{m(`subscribers/counts`,null),B()})},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...y,widgetWidth:1,widgetHeight:1,...K},argTypes:{...b,...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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