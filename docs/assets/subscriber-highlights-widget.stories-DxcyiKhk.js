import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{M as i,Zt as a,mt as o,n as s,ut as c}from"./build-module-DmVuor49.js";import{W as l,t as u}from"./build-module-Xzazcub_.js";import{d as ee,t as te}from"./src-B3le4dug.js";import{Bt as ne,_r as re,dt as d,er as f}from"./chart-tooltip-BpbC1Ly_.js";import{t as p}from"./metric-tile-grid-C7mHZ7_f.js";import{M as ie,P as m,R as h,j as g}from"./report-metric-DrX_Wimw.js";import{t as _}from"./widget-state-Cthq0GVH.js";import{C as v,S as y,T as b,b as x,t as ae,w as S,x as C}from"./src-eTaSBNiP.js";import{i as oe,t as w}from"./src-BUlnQHAi.js";var T,E,D,O=e((()=>{T=`_root_1qhg5_2`,E=`_placeholder_1qhg5_11`,D={root:T,placeholder:E}})),k,A,j,M=e((()=>{n(),s(),w(),k=[{id:`total`,label:t(`Total subscribers`,`jetpack-premium-analytics`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics`)},{id:`free`,label:t(`Free subscribers`,`jetpack-premium-analytics`)},{id:`social`,label:t(`Social followers`,`jetpack-premium-analytics`)}],A=k.map(e=>e.id),j={name:`jpa/subscriber-highlights`,title:t(`Subscriber highlights`,`jetpack-premium-analytics`),help:{content:t(`A summary of your subscribers — total, paid, free, and social followers.`,`jetpack-premium-analytics`)},icon:c,attributes:[{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:oe,elements:k.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:A}}}}));function N({metrics:e=A}){let{data:n,isLoading:r,isFetching:i,isError:a,refetch:o}=ne(),s=new Set(e),c=!!n&&Object.values(n).some(e=>e!==void 0),u=k.filter(({id:e})=>s.has(e)).map(({id:e,label:t})=>({key:e,label:t,icon:L[e].icon,value:L[e].count(n)}));return(0,F.jsx)(`div`,{className:D.root,children:(0,F.jsx)(_,{isLoading:r,isFetching:i,isError:a&&!c,isEmpty:!c,error:{description:t(`We couldn't load subscriber highlights. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:o}]},empty:{icon:ee,description:t(`No subscriber counts available yet.`,`jetpack-premium-analytics`)},children:u.length===0?(0,F.jsx)(l,{className:D.placeholder,children:t(`Select at least one metric to display.`,`jetpack-premium-analytics`)}):(0,F.jsx)(p,{tiles:u,dataFormat:I})})})}function P({attributes:e={}}){return(0,F.jsx)(h,{attributes:e,children:(0,F.jsx)(N,{metrics:e.metrics})})}var F,I,L,R=e((()=>{d(),te(),ae(),n(),s(),u(),O(),M(),F=r(),I={type:`number`,options:{useMultipliers:!0,decimals:0}},L={total:{icon:c,count:e=>e?.total_subscribers??0},paid:{icon:o,count:e=>e?.paid_subscribers??0},free:{icon:a,count:e=>e?.email_subscribers??0},social:{icon:i,count:e=>e?.social_followers??0}}}));function z({metrics:e}){return(0,H.jsx)(P,{attributes:{reportParams:f(),metrics:e}})}function B(){re.removeQueries({queryKey:[`stats`,`subscribers-counts`]})}function V({metrics:e,...t}){return(0,H.jsx)(v,{...t,widgetType:W,renderModule:U,renderComponent:P,attributes:{reportParams:f(!0),metrics:e}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),S(),x(),g(),R(),M(),H=r(),ie(),U=`storybook/subscriber-highlights`,W={name:j.name,title:j.title,icon:j.icon,attributes:j.attributes,example:j.example},G={metrics:{control:`check`,options:A}},K={metrics:A},q={title:`Packages/Premium Analytics/Widgets/SubscriberHighlights`,component:P,tags:[`autodocs`],argTypes:{...G},parameters:{docs:{description:{component:"The \"Subscriber highlights\" widget. Shows current subscriber totals — total, paid, free, and social followers — as a grid of metric tiles. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. Data comes from the designated `useStatsSubscribersCounts` hook; in Storybook it is served by `registerReportMocks()` (the `subscribers/counts` handler). The counts module has no comparison period, so the tiles show bare counts."}}}},J={render:z,args:{...K},decorators:[C]},Y={render:z,args:{...K},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(B(),m(`subscribers/counts`,`loading`),()=>{m(`subscribers/counts`,null),B()})},X={render:z,args:{...K},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(B(),m(`subscribers/counts`,`error`),()=>{m(`subscribers/counts`,null),B()})},Z={render:z,args:{...K},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(B(),m(`subscribers/counts`,`empty`),()=>{m(`subscribers/counts`,null),B()})},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...y,widgetWidth:1,widgetHeight:1,...K},argTypes:{...b,...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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