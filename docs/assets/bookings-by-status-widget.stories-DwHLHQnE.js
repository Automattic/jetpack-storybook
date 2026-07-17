import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Nn as i,n as a}from"./build-module-DmVuor49.js";import{c as o,t as s}from"./src-DN9VFS2M.js";import{Yn as c,ut as l}from"./chart-tooltip-DMgEXtyG.js";import{C as u,S as d,T as f,k as p}from"./report-metric-BmlYe5tZ.js";import{S as m,b as h,t as g,u as _,x as v,y}from"./src-B_XkmHiU.js";import{n as b,r as x}from"./with-widget-canvas-Dz43KNHY.js";function S({attributes:e={},setError:t}){return(0,C.jsx)(p,{attributes:e,setError:t,options:{from:`/`},children:(0,C.jsx)(_,{})})}var C,w=e((()=>{g(),C=r()})),T,E=e((()=>{n(),a(),T={name:`jpa/bookings-by-status`,title:t(`Bookings by status`,`jetpack-premium-analytics`),help:{content:t(`Number of bookings by status over the selected time period.`,`jetpack-premium-analytics`)},icon:i}}));function D(e=!1,t=F){return{reportParams:c(e,t)}}function O({withComparison:e,preset:t}){let n=!!e,r=t??F;return!n&&r===F?`getDefaultQueryParams()`:n&&r===F?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function k(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<BookingsByStatusRender
\tattributes={ {
\t\treportParams: ${O(e)},
\t} }
/>`}function A({withComparison:e,preset:t}){return(0,N.jsx)(S,{attributes:D(e,t)})}function j(e){return(0,N.jsx)(S,{attributes:D(!1,e)})}function M({withComparison:e,preset:t,...n}){return(0,N.jsx)(h,{...n,widgetType:T,renderModule:P,renderComponent:S,attributes:{reportParams:c(e,t)}})}var N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{l(),s(),v(),b(),d(),w(),E(),N=r(),u(),P=`storybook/bookings-by-status`,F=`last-30-days`,I=o,L={title:`Packages/Premium Analytics/Widgets/BookingsByStatus`,component:S,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:I,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays the bookings status breakdown for the selected period.`}}}},R={render:A,args:{preset:F,withComparison:!1},decorators:[x],parameters:{docs:{source:{code:k({withComparison:!1,preset:F})}}}},z={render:A,args:{preset:F,withComparison:!0},decorators:[x],parameters:{docs:{source:{code:k({withComparison:!0,preset:F})}}}},B={render:()=>j(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(`bookings/by-date`,`loading`),()=>f(`bookings/by-date`,null))},V={render:()=>j(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(`bookings/by-date`,`error`),()=>f(`bookings/by-date`,null))},H={render:()=>j(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(`bookings/by-date`,`empty`),()=>f(`bookings/by-date`,null))},U={render:e=>(0,N.jsx)(M,{...e}),args:{...y,preset:F,withComparison:!0},argTypes:{...m,preset:{control:`select`,options:I},withComparison:{control:`boolean`}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: renderBookingsByStatus,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        code: getBookingsByStatusSource({
          withComparison: false,
          preset: DEFAULT_PRESET
        })
      }
    }
  }
}`,...R.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: renderBookingsByStatus,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        code: getBookingsByStatusSource({
          withComparison: true,
          preset: DEFAULT_PRESET
        })
      }
    }
  }
}`,...z.parameters?.docs?.source},description:{story:`Current period with previous-period comparison data.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => renderBookingsByStatusOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('bookings/by-date', 'loading');
    return () => setReportMockState('bookings/by-date', null);
  }
}`,...B.parameters?.docs?.source},description:{story:`First load: the bookings report is in flight, so the widget shows its
loading state. The mock is forced to never resolve for the duration of this
story.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => renderBookingsByStatusOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('bookings/by-date', 'error');
    return () => setReportMockState('bookings/by-date', null);
  }
}`,...V.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action
(which re-runs the query — still mocked as failing while this story is
active).`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => renderBookingsByStatusOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('bookings/by-date', 'empty');
    return () => setReportMockState('bookings/by-date', null);
  }
}`,...H.parameters?.docs?.source},description:{story:`Resolved with no bookings: the widget shows its empty state ("No bookings in
this period.").`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => <BookingsByStatusDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    preset: {
      control: 'select',
      options: PRESET_OPTIONS
    },
    withComparison: {
      control: 'boolean'
    }
  }
}`,...U.parameters?.docs?.source}}},W=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{R as Default,H as Empty,V as Error,B as Loading,U as WidgetDashboardWithWidget,z as WithComparison,W as __namedExportsOrder,L as default};