import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{ll as n,n as r}from"./build-module-CDRs4YxF.js";import{$ as i,G as a,K as ee}from"./report-metric-BSLTmmnQ.js";import{n as o,t as te}from"./build-module--BT-U7MM.js";import{t as s,x as c}from"./src-CtNOjlNY.js";import{Ft as l,Tr as u}from"./chart-tooltip-BPaTXkrb.js";import{C as d,D as f,E as p,S as m,T as ne,b as re,h as ie,t as ae,w as oe,x as h}from"./src-CScpZfjj.js";import{n as g,t as _}from"./force-stats-mock-state-W-YhApRV.js";function v({attributes:e={},setError:t}){return(0,y.jsx)(i,{attributes:e,setError:t,options:{from:`/`},children:(0,y.jsx)(ie,{})})}var y,b=e((()=>{ae(),y=t()})),x,S=e((()=>{r(),x={icon:n}})),C,w,T,E,D,O,k,A=e((()=>{C=`jpa/conversion-rate`,w=`Store conversion rate`,T=`Store conversion rate over the selected time period.`,E={content:`Conversion funnel from visitors to completed purchases over the selected time period.`},D=`store`,O=`framed`,k={name:C,title:w,description:T,help:E,category:D,presentation:O}}));function j(e){let t={active_sessions:String(e?11840:13260),visitors:String(e?9350:10480),with_cart_addition:String(e?2160:2680),reached_checkout:String(e?940:1160),completed_checkout:String(e?455:625),date_start:`2026-05-01T00:00:00.000Z`,date_end:`2026-05-31T23:59:59.999Z`};return{summary:t,data:[t]}}function M(){W||(W=!0,te.use(async(e,t)=>{let n=String(e.path??e.url??``);if(!n.startsWith(B))return t(e);let r=new URL(n,`https://storybook.local`).searchParams.get(`to`)??void 0;return j(!!(G&&r&&r!==G))}))}function N(e=!1,t=H){let n=u(e,t);return G=n.to,{reportParams:n}}function P({withComparison:e,preset:t}){let n=!!e,r=t??H;return!n&&r===H?`getDefaultQueryParams()`:n&&r===H?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function F(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<ConversionRateRender
\tattributes={ {
\t\treportParams: ${P(e)},
\t} }
/>`}function I({withComparison:e,preset:t}){return(0,z.jsx)(v,{attributes:N(e,t)})}function L(e){return(0,z.jsx)(v,{attributes:N(!1,e)})}function R({withComparison:e,preset:t,...n}){return(0,z.jsx)(ne,{...n,widgetType:m(k,x),renderModule:V,renderComponent:v,attributes:N(e,t)})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{o(),l(),s(),p(),d(),re(),a(),g(),b(),S(),A(),z=t(),B=`/jetpack-premium-analytics/v1/proxy/v2/analytics/reports/sessions/by-conversion-rate`,V=`storybook/conversion-rate`,H=`last-30-days`,U=c,W=!1,ee(),M(),K={title:`Packages/Premium Analytics/Widgets/ConversionRate`,component:v,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:U,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Store conversion rate" widget. Fetches the sessions conversion-rate report and displays the store funnel with optional period-over-period comparison.`}}}},q={render:I,args:{preset:H,withComparison:!1},decorators:[h],parameters:{docs:{source:{transform:(e,t)=>F(t.args)}}}},J={render:I,args:{preset:H,withComparison:!0},decorators:[h],parameters:{docs:{source:{transform:(e,t)=>F(t.args)}}}},Y={render:()=>L(`last-90-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(_(`sessions/by-conversion-rate`,`loading`),()=>_(`sessions/by-conversion-rate`,null))},X={render:()=>L(`last-7-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(_(`sessions/by-conversion-rate`,`error`),()=>_(`sessions/by-conversion-rate`,null))},Z={render:()=>L(`last-365-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(_(`sessions/by-conversion-rate`,`empty`),()=>_(`sessions/by-conversion-rate`,null))},Q={render:e=>(0,z.jsx)(R,{...e}),args:{...oe,preset:H,withComparison:!0},argTypes:{...f,preset:{control:`select`,options:U,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/conversion-rate"
	renderComponent={ ConversionRateRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period conversion changes.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderConversionRateOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('sessions/by-conversion-rate', 'loading');
    return () => forceStatsMockState('sessions/by-conversion-rate', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.

The story's own conversion-rate mock middleware (registered above) would
otherwise shadow \`setReportMockState\` — it always answers
\`sessions/by-conversion-rate\` with canned data and never falls through.
\`forceStatsMockState\` re-registers its shared override when this story sets a
forced state, keeping it ahead of story-local middleware even if Storybook
lazy-loads another story module later.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderConversionRateOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('sessions/by-conversion-rate', 'error');
    return () => forceStatsMockState('sessions/by-conversion-rate', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderConversionRateOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('sessions/by-conversion-rate', 'empty');
    return () => forceStatsMockState('sessions/by-conversion-rate', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no active sessions: the widget shows its empty state ("No
conversion data in this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};