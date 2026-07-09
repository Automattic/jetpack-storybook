import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{En as i,n as a}from"./build-module-_6UNQmiR.js";import{Et as o,at as s,d as c,f as l,s as u}from"./hooks-BP3sWoWz.js";import{n as d,r as f}from"./line-chart-B15mggmV.js";import{l as p,t as m}from"./src-DLhaPslb.js";import{n as h,t as g}from"./register-report-mocks-BJNYQWAs.js";import{t as _}from"./report-metric-1K22ZJnK.js";import{i as v,n as y,r as b,t as x}from"./widget-dashboard-with-widget-CmuU-JK4.js";import{t as S}from"./src-CnXFdd1f.js";function C(){let{reportParams:e}=c();return(0,w.jsx)(_,{metricKey:`visitors`,data:s(e),dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})}var w,T=e((()=>{l(),S(),w=r()}));function E({attributes:e={},setError:t}){return(0,D.jsx)(u,{attributes:e,setError:t,options:{from:`/`},children:(0,D.jsx)(C,{})})}var D,O=e((()=>{S(),T(),D=r()})),k,A=e((()=>{n(),a(),k={name:`jpa/visitors-over-time`,title:t(`Visitors over time`,`jetpack-premium-analytics`),description:t(`Track website visitor trends and monitor traffic patterns over time.`,`jetpack-premium-analytics`),icon:i}}));function j(e=!1,t=R){return{reportParams:o(e,t)}}function M({withComparison:e,preset:t}){let n=!!e,r=t??R;return!n&&r===R?`getDefaultQueryParams()`:n&&r===R?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function N(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<VisitorsOverTimeRender
\tattributes={ {
\t\treportParams: ${M(e)},
\t} }
/>`}function P({withComparison:e,preset:t}){return B(),(0,I.jsx)(E,{attributes:j(e,t),setError:V})}function F({withComparison:e,preset:t,...n}){return B(),(0,I.jsx)(y,{...n,widgetType:k,renderModule:L,renderComponent:E,attributes:j(e,t)})}var I,L,R,z,B,V,H,U,W,G,K,q;e((()=>{l(),m(),b(),g(),f(),O(),A(),I=r(),h(),L=`storybook/visitors-over-time`,R=`last-30-days`,z=p,B=()=>d.Legend,V=()=>{},H=e=>(0,I.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,I.jsx)(e,{})}),U={title:`Packages/Premium Analytics/Widgets/VisitorsOverTime`,component:E,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:z,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays website visitor trends for the selected period.`}}}},W={render:P,args:{preset:R,withComparison:!1},decorators:[H],parameters:{docs:{source:{transform:(e,t)=>N(t.args)}}}},G={render:P,args:{preset:R,withComparison:!0},decorators:[H],parameters:{docs:{source:{transform:(e,t)=>N(t.args)}}}},K={render:e=>(0,I.jsx)(F,{...e}),args:{...x,preset:R,withComparison:!0},argTypes:{...v,preset:{control:`select`,options:z,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/visitors-over-time"
	renderComponent={ VisitorsOverTimeRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: renderVisitorsOverTime,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<VisitorsOverTimeStoryControls>;
        }) => getVisitorsOverTimeSource(storyContext.args)
      }
    }
  }
}`,...W.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderVisitorsOverTime,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<VisitorsOverTimeStoryControls>;
        }) => getVisitorsOverTimeSource(storyContext.args)
      }
    }
  }
}`,...G.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period change and sparkline data.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <VisitorsOverTimeDashboardStory {...args} />,
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
\\trenderModule="storybook/visitors-over-time"
\\trenderComponent={ VisitorsOverTimeRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...K.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...K.parameters?.docs?.description}}},q=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{W as Default,K as WidgetDashboardWithWidget,G as WithComparison,q as __namedExportsOrder,U as default};