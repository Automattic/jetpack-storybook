import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{dn as i,n as a}from"./build-module-h3iDQ_Ze.js";import{Y as o,a as s,u as c}from"./hooks-Dt7jJLRa.js";import{l,t as u}from"./src-BlU2m1VV.js";import{n as d,t as f}from"./register-report-mocks-XuSXA-Pt.js";import{n as p,t as m}from"./src-De_1VCra.js";import{i as h,n as g,r as _,t as v}from"./widget-dashboard-with-widget-D4AHWkRb.js";function y({attributes:e={},setError:t}){return(0,b.jsx)(s,{attributes:e,setError:t,options:{from:`/`},children:(0,b.jsx)(p,{})})}var b,x=e((()=>{m(),b=r()})),S,C=e((()=>{n(),a(),S={name:`jpa/bookings-by-status`,title:t(`Bookings by status`,`jetpack-premium-analytics`),description:t(`Number of bookings by status over the selected time period.`,`jetpack-premium-analytics`),icon:i}}));function w(e=!1,t=j){return{reportParams:o(e,t)}}function T({withComparison:e,preset:t}){let n=!!e,r=t??j;return!n&&r===j?`getDefaultQueryParams()`:n&&r===j?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function E(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<BookingsByStatusRender
\tattributes={ {
\t\treportParams: ${T(e)},
\t} }
/>`}function D({withComparison:e,preset:t}){return(0,k.jsx)(y,{attributes:w(e,t)})}function O({withComparison:e,preset:t,...n}){return(0,k.jsx)(g,{...n,widgetType:S,renderModule:A,renderComponent:y,attributes:{reportParams:o(e,t)}})}var k,A,j,M,N,P,F,I,L,R;e((()=>{c(),u(),_(),f(),x(),C(),k=r(),d(),A=`storybook/bookings-by-status`,j=`last-30-days`,M=l,N=e=>(0,k.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,k.jsx)(e,{})}),P={title:`Packages/Premium Analytics/Widgets/BookingsByStatus`,component:y,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:M,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays the bookings status breakdown for the selected period.`}}}},F={render:D,args:{preset:j,withComparison:!1},decorators:[N],parameters:{docs:{source:{code:E({withComparison:!1,preset:j})}}}},I={render:D,args:{preset:j,withComparison:!0},decorators:[N],parameters:{docs:{source:{code:E({withComparison:!0,preset:j})}}}},L={render:e=>(0,k.jsx)(O,{...e}),args:{...v,preset:j,withComparison:!0},argTypes:{...h,preset:{control:`select`,options:M},withComparison:{control:`boolean`}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:`Current period with previous-period comparison data.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{F as Default,L as WidgetDashboardWithWidget,I as WithComparison,R as __namedExportsOrder,P as default};