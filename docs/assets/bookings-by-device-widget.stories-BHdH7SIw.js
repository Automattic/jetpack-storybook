import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{dn as i,n as a}from"./build-module-h3iDQ_Ze.js";import{$ as o,a as s,u as c}from"./hooks-BlowJPd3.js";import{l,t as u}from"./src-BlU2m1VV.js";import{I as d}from"./chart-tooltip-C-gTEaht.js";import{n as f,t as p}from"./register-report-mocks-BPAvHAMi.js";import{t as m}from"./sales-by-device-widget-C7QhXBSZ.js";import{t as h}from"./src-tjnedql7.js";import{i as g,n as _,r as v,t as y}from"./widget-dashboard-with-widget-KvF6j31P.js";function b(){return(0,S.jsx)(m,{filter:d})}function x({attributes:e={},setError:t}){return(0,S.jsx)(s,{attributes:e,setError:t,options:{from:`/`},children:(0,S.jsx)(b,{})})}var S,C=e((()=>{h(),S=r()})),w,T=e((()=>{n(),a(),w={name:`jpa/bookings-by-device`,title:t(`Bookings by device`,`jetpack-premium-analytics`),description:t(`See which devices your customers are using to make bookings in your store.`,`jetpack-premium-analytics`),icon:i}}));function E(e=!1,t=N){return{reportParams:o(e,t)}}function D({withComparison:e,preset:t}){let n=!!e,r=t??N;return!n&&r===N?`getDefaultQueryParams()`:n&&r===N?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function O(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<BookingsByDeviceRender
\tattributes={ {
\t\treportParams: ${D(e)},
\t} }
/>`}function k({withComparison:e,preset:t}){return(0,j.jsx)(x,{attributes:E(e,t)})}function A({withComparison:e,preset:t,...n}){return(0,j.jsx)(_,{...n,widgetType:w,renderModule:M,renderComponent:x,attributes:E(e,t)})}var j,M,N,P,F,I,L,R,z,B;e((()=>{c(),u(),v(),p(),C(),T(),j=r(),f(),M=`storybook/bookings-by-device`,N=`last-30-days`,P=l,F=e=>(0,j.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,j.jsx)(e,{})}),I={title:`Packages/Premium Analytics/Widgets/BookingsByDevice`,component:x,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:P,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays which devices customers use to make bookings.`}}}},L={render:k,args:{preset:N,withComparison:!1},decorators:[F],parameters:{docs:{source:{transform:(e,t)=>O(t.args)}}}},R={render:k,args:{preset:N,withComparison:!0},decorators:[F],parameters:{docs:{source:{transform:(e,t)=>O(t.args)}}}},z={render:e=>(0,j.jsx)(A,{...e}),args:{...y,preset:N,withComparison:!0},argTypes:{...g,preset:{control:`select`,options:P,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/bookings-by-device"
	renderComponent={ BookingsByDeviceRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: renderBookingsByDevice,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<BookingsByDeviceStoryControls>;
        }) => getBookingsByDeviceSource(storyContext.args)
      }
    }
  }
}`,...L.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: renderBookingsByDevice,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<BookingsByDeviceStoryControls>;
        }) => getBookingsByDeviceSource(storyContext.args)
      }
    }
  }
}`,...R.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period change and sparkline data.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => <BookingsByDeviceDashboardStory {...args} />,
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
  },
  parameters: {
    docs: {
      source: {
        code: \`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
\\twidgetType={ widgetDefinition }
\\trenderModule="storybook/bookings-by-device"
\\trenderComponent={ BookingsByDeviceRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...z.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...z.parameters?.docs?.description}}},B=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{L as Default,z as WidgetDashboardWithWidget,R as WithComparison,B as __namedExportsOrder,I as default};