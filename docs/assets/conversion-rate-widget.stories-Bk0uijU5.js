import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{n as i,rl as a}from"./build-module-Bt8gOW8e.js";import{Bt as o,p as s,s as c}from"./hooks-Cw-H66ea.js";import{n as l,t as u}from"./build-module-BNNB-m6p.js";import{l as d,t as f}from"./src-DsEGMN_I.js";import{n as p,t as m}from"./register-report-mocks-BPl_Kj4W.js";import{i as h,n as g,r as _,t as v}from"./widget-dashboard-with-widget-BY2z4b5b.js";import{h as y,t as b}from"./src-C0QqKDKI.js";function x({attributes:e={},setError:t}){return(0,S.jsx)(c,{attributes:e,setError:t,options:{from:`/`},children:(0,S.jsx)(y,{})})}var S,C=e((()=>{b(),S=r()})),w,T=e((()=>{n(),i(),w={name:`jpa/conversion-rate`,title:t(`Store conversion rate`,`jetpack-premium-analytics`),description:t(`Store conversion rate over the selected time period.`,`jetpack-premium-analytics`),icon:a}}));function E(e){let t={active_sessions:String(e?11840:13260),visitors:String(e?9350:10480),with_cart_addition:String(e?2160:2680),reached_checkout:String(e?940:1160),completed_checkout:String(e?455:625),date_start:`2026-05-01T00:00:00.000Z`,date_end:`2026-05-31T23:59:59.999Z`};return{summary:t,data:[t]}}function D(){R||(R=!0,u.use(async(e,t)=>{let n=String(e.path??e.url??``);if(!n.startsWith(P))return t(e);let r=new URL(n,`https://storybook.local`).searchParams.get(`to`)??void 0;return E(!!(z&&r&&r!==z))}))}function O(e=!1,t=I){let n=o(e,t);return z=n.to,{reportParams:n}}function k({withComparison:e,preset:t}){let n=!!e,r=t??I;return!n&&r===I?`getDefaultQueryParams()`:n&&r===I?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function A(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<ConversionRateRender
\tattributes={ {
\t\treportParams: ${k(e)},
\t} }
/>`}function j({withComparison:e,preset:t}){return(0,N.jsx)(x,{attributes:O(e,t)})}function M({withComparison:e,preset:t,...n}){return(0,N.jsx)(g,{...n,widgetType:w,renderModule:F,renderComponent:x,attributes:O(e,t)})}var N,P,F,I,L,R,z,B,V,H,U,W,G;e((()=>{l(),s(),f(),_(),m(),C(),T(),N=r(),P=`/jetpack-premium-analytics/v1/proxy/v2/analytics/reports/sessions/by-conversion-rate`,F=`storybook/conversion-rate`,I=`last-30-days`,L=d,R=!1,p(),D(),B=e=>(0,N.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,N.jsx)(e,{})}),V={title:`Packages/Premium Analytics/Widgets/ConversionRate`,component:x,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:L,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Store conversion rate" widget. Fetches the sessions conversion-rate report and displays the store funnel with optional period-over-period comparison.`}}}},H={render:j,args:{preset:I,withComparison:!1},decorators:[B],parameters:{docs:{source:{transform:(e,t)=>A(t.args)}}}},U={render:j,args:{preset:I,withComparison:!0},decorators:[B],parameters:{docs:{source:{transform:(e,t)=>A(t.args)}}}},W={render:e=>(0,N.jsx)(M,{...e}),args:{...v,preset:I,withComparison:!0},argTypes:{...h,preset:{control:`select`,options:L,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/conversion-rate"
	renderComponent={ ConversionRateRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period conversion changes.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...W.parameters?.docs?.description}}},G=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{H as Default,W as WidgetDashboardWithWidget,U as WithComparison,G as __namedExportsOrder,V as default};