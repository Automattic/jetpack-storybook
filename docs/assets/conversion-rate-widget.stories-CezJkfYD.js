import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Nn as i,n as a}from"./build-module-DmVuor49.js";import{n as o,t as s}from"./build-module-DO79sfXE.js";import{c,t as l}from"./src-DN9VFS2M.js";import{$n as u,ut as d}from"./chart-tooltip-ajO0My7f.js";import{C as f,S as p,k as m}from"./report-metric-Bb8KPagE.js";import{C as h,S as g,T as _,b as v,h as y,t as b,w as x,x as S}from"./src-DK8vEfS1.js";import{n as C,t as w}from"./force-stats-mock-state-C8cJtAhf.js";function T({attributes:e={},setError:t}){return(0,E.jsx)(m,{attributes:e,setError:t,options:{from:`/`},children:(0,E.jsx)(y,{})})}var E,D=e((()=>{b(),E=r()})),O,k=e((()=>{n(),a(),O={name:`jpa/conversion-rate`,title:t(`Store conversion rate`,`jetpack-premium-analytics`),help:{content:t(`Conversion funnel from visitors to completed purchases over the selected time period.`,`jetpack-premium-analytics`)},icon:i}}));function A(e){let t={active_sessions:String(e?11840:13260),visitors:String(e?9350:10480),with_cart_addition:String(e?2160:2680),reached_checkout:String(e?940:1160),completed_checkout:String(e?455:625),date_start:`2026-05-01T00:00:00.000Z`,date_end:`2026-05-31T23:59:59.999Z`};return{summary:t,data:[t]}}function j(){U||(U=!0,s.use(async(e,t)=>{let n=String(e.path??e.url??``);if(!n.startsWith(z))return t(e);let r=new URL(n,`https://storybook.local`).searchParams.get(`to`)??void 0;return A(!!(W&&r&&r!==W))}))}function M(e=!1,t=V){let n=u(e,t);return W=n.to,{reportParams:n}}function N({withComparison:e,preset:t}){let n=!!e,r=t??V;return!n&&r===V?`getDefaultQueryParams()`:n&&r===V?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function P(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<ConversionRateRender
\tattributes={ {
\t\treportParams: ${N(e)},
\t} }
/>`}function F({withComparison:e,preset:t}){return(0,R.jsx)(T,{attributes:M(e,t)})}function I(e){return(0,R.jsx)(T,{attributes:M(!1,e)})}function L({withComparison:e,preset:t,...n}){return(0,R.jsx)(h,{...n,widgetType:O,renderModule:B,renderComponent:T,attributes:M(e,t)})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;e((()=>{o(),d(),l(),x(),v(),p(),C(),D(),k(),R=r(),z=`/jetpack-premium-analytics/v1/proxy/v2/analytics/reports/sessions/by-conversion-rate`,B=`storybook/conversion-rate`,V=`last-30-days`,H=c,U=!1,f(),j(),G={title:`Packages/Premium Analytics/Widgets/ConversionRate`,component:T,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:H,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Store conversion rate" widget. Fetches the sessions conversion-rate report and displays the store funnel with optional period-over-period comparison.`}}}},K={render:F,args:{preset:V,withComparison:!1},decorators:[S],parameters:{docs:{source:{transform:(e,t)=>P(t.args)}}}},q={render:F,args:{preset:V,withComparison:!0},decorators:[S],parameters:{docs:{source:{transform:(e,t)=>P(t.args)}}}},J={render:()=>I(`last-90-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(w(`sessions/by-conversion-rate`,`loading`),()=>w(`sessions/by-conversion-rate`,null))},Y={render:()=>I(`last-7-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(w(`sessions/by-conversion-rate`,`error`),()=>w(`sessions/by-conversion-rate`,null))},X={render:()=>I(`last-365-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(w(`sessions/by-conversion-rate`,`empty`),()=>w(`sessions/by-conversion-rate`,null))},Z={render:e=>(0,R.jsx)(L,{...e}),args:{...g,preset:V,withComparison:!0},argTypes:{..._,preset:{control:`select`,options:H,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/conversion-rate"
	renderComponent={ ConversionRateRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderConversionRate,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<ConversionRateStoryControls>;
        }) => getConversionRateSource(storyContext.args)
      }
    }
  }
}`,...K.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderConversionRate,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<ConversionRateStoryControls>;
        }) => getConversionRateSource(storyContext.args)
      }
    }
  }
}`,...q.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period conversion changes.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderConversionRateOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('sessions/by-conversion-rate', 'loading');
    return () => forceStatsMockState('sessions/by-conversion-rate', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.

The story's own conversion-rate mock middleware (registered above) would
otherwise shadow \`setReportMockState\` — it always answers
\`sessions/by-conversion-rate\` with canned data and never falls through.
\`forceStatsMockState\` re-registers its shared override when this story sets a
forced state, keeping it ahead of story-local middleware even if Storybook
lazy-loads another story module later.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderConversionRateOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('sessions/by-conversion-rate', 'error');
    return () => forceStatsMockState('sessions/by-conversion-rate', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderConversionRateOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('sessions/by-conversion-rate', 'empty');
    return () => forceStatsMockState('sessions/by-conversion-rate', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`Resolved with no active sessions: the widget shows its empty state ("No
conversion data in this period.").`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <ConversionRateDashboardStory {...args} />,
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
\\trenderModule="storybook/conversion-rate"
\\trenderComponent={ ConversionRateRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...Z.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Z.parameters?.docs?.description}}},Q=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as Default,X as Empty,Y as Error,J as Loading,Z as WidgetDashboardWithWidget,q as WithComparison,Q as __namedExportsOrder,G as default};