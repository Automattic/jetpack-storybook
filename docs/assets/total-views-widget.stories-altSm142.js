import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Dn as o,t as s}from"./build-module-CR6EsQjA.js";import{$t as ee,kn as c,t as l}from"./src-DNxY8Wb4.js";import{b as te,g as u}from"./hooks-BWcn0vi0.js";import{n as ne}from"./sparkline-BX3EF0ho.js";import{bn as re,j as ie,qt as d,t as f}from"./src-FsWZnx8G.js";import{n as p,t as m}from"./src-DLGRva36.js";import{M as ae}from"./chart-tooltip-BeJF71cy.js";import{t as oe}from"./metric-sparkline-skeleton-BlAY6rnr.js";import{G as h,K as se,Y as g}from"./report-metric-mdJlOfac.js";import{t as ce}from"./widget-state-DGlWUhZs.js";import{C as _,D as v,E as y,S as b,T as le,b as ue,t as de,w as fe,x}from"./src-CVfVeNRU.js";var S,C,w,T,pe=t((()=>{S=`_root_lau5r_1`,C=`_body_lau5r_9`,w=`_chart_lau5r_21`,T={root:S,body:C,chart:w}}));function me(){let{reportParams:e}=te(),{primary:t,isLoading:n,isFetching:i,isError:a,error:s,refetch:l}=ie((0,D.useMemo)(()=>re({...e,stat_fields:`views,visitors`,period:k}),[e])),u=t.data,d=Number(u?.summary?.views??0),f=p(d,`number`,j),m=p(d,`number`,d>=1e3?A:j),h=(0,D.useMemo)(()=>(u?.data??[]).map(e=>Number(e.views??0)),[u]);return(0,O.jsx)(`div`,{className:T.root,children:(0,O.jsx)(ce,{isLoading:n,isFetching:i,isError:a&&h.length===0,isEmpty:h.length===0,error:ae(s,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:l}),empty:{icon:o,description:r(`No views in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,O.jsx)(oe,{}),children:(0,O.jsxs)(`div`,{className:T.body,children:[(0,O.jsx)(c,{variant:`heading-2xl`,title:f,children:m===f?m:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`span`,{"aria-hidden":`true`,children:m}),(0,O.jsx)(ee,{children:f})]})}),(0,O.jsx)(`div`,{className:T.chart,children:(0,O.jsx)(ne,{data:h,maxWidth:1/0})})]})})})}function E({attributes:e={},setError:t}){return(0,O.jsx)(u,{attributes:e,setError:t,children:(0,O.jsx)(me,{})})}var D,O,k,A,j,he=t((()=>{f(),l(),m(),de(),i(),s(),D=e(n(),1),pe(),O=a(),k=`day`,A={useMultipliers:!0,decimals:1},j={decimals:0}})),M,N=t((()=>{s(),M={icon:o}})),P,F,I,L,R,z,B,ge=t((()=>{P=`jpa/total-views`,F=`Total views`,I=`Total views for the selected period, with the trend over time.`,L={content:`The total number of times your content was viewed.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/#views`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function _e(){return(0,U.jsx)(E,{attributes:{reportParams:d(!1)}})}function V(e){return(0,U.jsx)(E,{attributes:{reportParams:d(!1,e)}})}function H(e){return(0,U.jsx)(le,{...e,widgetType:G,renderModule:W,renderComponent:E,attributes:{reportParams:d(!1)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{f(),h(),y(),_(),ue(),he(),N(),ge(),U=a(),se(),W=`storybook/total-views`,G=b(B,M),K={title:`Packages/Premium Analytics/Widgets/TotalViews`,component:E,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Total views" card: the selected period's view total as a large figure over an area sparkline of the trend. There is no WithComparison story — the widget strips comparison from its request and renders no delta, so it would be identical to Default.`}}}},q={render:_e,decorators:[x]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(g(`stats/visits`,`loading`),()=>g(`stats/visits`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(g(`stats/visits`,`error`),()=>g(`stats/visits`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(g(`stats/visits`,`error-retryable`),()=>g(`stats/visits`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(g(`stats/visits`,`empty`),()=>g(`stats/visits`,null))},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...fe},argTypes:{...v}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderTotalViews,
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Default state — the period total over its trend sparkline.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderTotalViewsOnPreset('last-90-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'loading');
    return () => setReportMockState('stats/visits', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderTotalViewsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'error');
    return () => setReportMockState('stats/visits', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed with a permission-gated 403: neutral copy and no Retry
action, since retrying cannot clear a permission gate.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderTotalViewsOnPreset('last-12-months'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'error-retryable');
    return () => setReportMockState('stats/visits', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed in a way that can heal — the proxy's \`no_connection\` 403: the
retryable copy with a Retry action, which re-runs the query (still mocked as
failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderTotalViewsOnPreset('last-year'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'empty');
    return () => setReportMockState('stats/visits', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no buckets: the widget shows its empty state.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <TotalViewsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};