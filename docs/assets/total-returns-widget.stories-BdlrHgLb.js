import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{ot as n,t as r}from"./src-rrY7vAoW.js";import{t as i,wn as a}from"./src-BXGbBQuk.js";import{_ as o}from"./charts-provider-CPqqWd8T.js";import{n as s,r as c,s as l}from"./register-report-mocks-HpcX_mM9.js";import{t as u}from"./total-returns-widget-BSaaUCdh.js";import{t as d}from"./src-BO6UD8Zu.js";import{a as f,g as p,h as m,i as h,m as g,n as _,p as v,r as y}from"./with-widget-canvas-Bkxis0Y9.js";function b({attributes:e={},setError:t}){return(0,x.jsx)(o,{attributes:e,setError:t,options:{from:`/`},children:(0,x.jsx)(u,{})})}var x,S=e((()=>{d(),x=t()})),C,w=e((()=>{C={}})),T,E,D,O,k,A,j,M,N=e((()=>{T=`jpa/total-returns`,E=`jpa/chart-bar`,D=`Total returns`,O=`Shows refunds and net sales over the selected time period.`,k={content:`Total value of returns issued for physical products over the selected time period.`},A=`store`,j=`framed`,M={name:T,icon:E,title:D,description:O,help:k,category:A,presentation:j}}));function P(e=!1,t=B){return{reportParams:a(e,t)}}function F({withComparison:e,preset:t}){return(0,R.jsx)(b,{attributes:P(e,t),setError:H})}function I(e){return(0,R.jsx)(b,{attributes:P(!1,e),setError:H})}function L({withComparison:e,preset:t,...n}){return(0,R.jsx)(g,{...n,widgetType:h(M,C),renderModule:z,renderComponent:b,attributes:P(e,t)})}var R,z,B,V,H,U,W,G,K,q,J,Y,X;e((()=>{i(),r(),s(),m(),f(),_(),S(),w(),N(),R=t(),c(),z=`storybook/total-returns`,B=`last-30-days`,V=n,H=()=>void 0,U={title:`Packages/Premium Analytics/Widgets/TotalReturns`,component:b,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:V,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays refunds and net sales for the selected period.`}}}},W={render:F,args:{preset:B,withComparison:!1},decorators:[y]},G={render:F,args:{preset:B,withComparison:!0},decorators:[y]},K={render:()=>I(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(l(`orders/by-date`,`loading`),()=>l(`orders/by-date`,null))},q={render:()=>I(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(l(`orders/by-date`,`error`),()=>l(`orders/by-date`,null))},J={render:()=>I(`last-365-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(l(`orders/by-date`,`empty`),()=>l(`orders/by-date`,null))},Y={render:e=>(0,R.jsx)(L,{...e}),args:{...v,preset:B,withComparison:!0},argTypes:{...p,preset:{control:`select`,options:V,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: renderTotalReturns,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...W.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderTotalReturns,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period change data.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => renderTotalReturnsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders/by-date', 'loading');
    return () => setReportMockState('orders/by-date', null);
  }
}`,...K.parameters?.docs?.source},description:{story:`First load: the orders report is in flight, so the widget shows its loading
state. The mock is forced to never resolve for the duration of this story.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => renderTotalReturnsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders/by-date', 'error');
    return () => setReportMockState('orders/by-date', null);
  }
}`,...q.parameters?.docs?.source},description:{story:`The orders report failed: the widget shows its error state with a Retry action
(which re-runs the query — still mocked as failing while this story is
active).`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderTotalReturnsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders/by-date', 'empty');
    return () => setReportMockState('orders/by-date', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`Resolved with no refunds in the period: the widget shows its empty state (the
neutral payment-return glyph and "No returns in this period.").`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => <TotalReturnsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    preset: {
      control: 'select',
      options: PRESET_OPTIONS,
      description: 'Date-range preset used to generate the widget report params.'
    },
    withComparison: {
      control: 'boolean',
      description: 'Include previous-period comparison report params.'
    }
  }
}`,...Y.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Y.parameters?.docs?.description}}},X=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{W as Default,J as Empty,q as Error,K as Loading,Y as WidgetDashboardWithWidget,G as WithComparison,X as __namedExportsOrder,U as default};