import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{n,sl as r}from"./build-module-Bb7IR3OP.js";import{G as i,W as a,Z as o,q as s}from"./report-metric-CYHfdN1i.js";import{t as c,x as l}from"./src-B-_HxovR.js";import{ur as u,xt as d}from"./chart-tooltip-Cw816hJP.js";import{C as f,D as p,E as m,S as h,T as g,b as _,t as v,u as y,w as b,x}from"./src-DypA9rWg.js";function S({attributes:e={},setError:t}){return(0,C.jsx)(o,{attributes:e,setError:t,options:{from:`/`},children:(0,C.jsx)(y,{})})}var C,w=e((()=>{v(),C=t()})),T,E=e((()=>{n(),T={icon:r}})),D,O,k,A,j,M,N,P=e((()=>{D=`jpa/bookings-by-status`,O=`Bookings by status`,k=`Number of bookings by status over the selected time period.`,A={content:`Number of bookings by status over the selected time period.`},j=`bookings`,M=`framed`,N={name:D,title:O,description:k,help:A,category:j,presentation:M}}));function F(e=!1,t=U){return{reportParams:u(e,t)}}function I({withComparison:e,preset:t}){let n=!!e,r=t??U;return!n&&r===U?`getDefaultQueryParams()`:n&&r===U?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function L(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<BookingsByStatusRender
\tattributes={ {
\t\treportParams: ${I(e)},
\t} }
/>`}function R({withComparison:e,preset:t}){return(0,V.jsx)(S,{attributes:F(e,t)})}function z(e){return(0,V.jsx)(S,{attributes:F(!1,e)})}function B({withComparison:e,preset:t,...n}){return(0,V.jsx)(g,{...n,widgetType:h(N,T),renderModule:H,renderComponent:S,attributes:{reportParams:u(e,t)}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q;e((()=>{d(),c(),m(),f(),_(),a(),w(),E(),P(),V=t(),i(),H=`storybook/bookings-by-status`,U=`last-30-days`,W=l,G={title:`Packages/Premium Analytics/Widgets/BookingsByStatus`,component:S,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays the bookings status breakdown for the selected period.`}}}},K={render:R,args:{preset:U,withComparison:!1},decorators:[x],parameters:{docs:{source:{code:L({withComparison:!1,preset:U})}}}},q={render:R,args:{preset:U,withComparison:!0},decorators:[x],parameters:{docs:{source:{code:L({withComparison:!0,preset:U})}}}},J={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(s(`bookings/by-date`,`loading`),()=>s(`bookings/by-date`,null))},Y={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(s(`bookings/by-date`,`error`),()=>s(`bookings/by-date`,null))},X={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(s(`bookings/by-date`,`empty`),()=>s(`bookings/by-date`,null))},Z={render:e=>(0,V.jsx)(B,{...e}),args:{...b,preset:U,withComparison:!0},argTypes:{...p,preset:{control:`select`,options:W},withComparison:{control:`boolean`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`Current period with previous-period comparison data.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderBookingsByStatusOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('bookings/by-date', 'loading');
    return () => setReportMockState('bookings/by-date', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: the bookings report is in flight, so the widget shows its
loading state. The mock is forced to never resolve for the duration of this
story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderBookingsByStatusOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('bookings/by-date', 'error');
    return () => setReportMockState('bookings/by-date', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action
(which re-runs the query — still mocked as failing while this story is
active).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderBookingsByStatusOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('bookings/by-date', 'empty');
    return () => setReportMockState('bookings/by-date', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`Resolved with no bookings: the widget shows its empty state ("No bookings in
this period.").`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as Default,X as Empty,Y as Error,J as Loading,Z as WidgetDashboardWithWidget,q as WithComparison,Q as __namedExportsOrder,G as default};