import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Nn as i,n as a}from"./build-module-DmVuor49.js";import{c as o,t as s}from"./src-DN9VFS2M.js";import{Yn as c,ut as l}from"./chart-tooltip-Di6LzjAf.js";import{C as u,S as d,T as f,k as p}from"./report-metric-BsmxMryV.js";import{S as m,b as h,f as g,t as _,x as v,y}from"./src-DqnNGuvD.js";import{n as b,r as x}from"./with-widget-canvas-Dz43KNHY.js";function S({attributes:e={},setError:t}){return(0,C.jsx)(p,{attributes:e,setError:t,options:{from:`/`},children:(0,C.jsx)(g,{view:`source`})})}var C,w=e((()=>{_(),C=r()})),T,E=e((()=>{n(),a(),T={name:`jpa/sales-by-utm-source`,title:t(`Sales by UTM source`,`jetpack-premium-analytics`),help:{content:t(`See which referral sources are driving sales in your store.`,`jetpack-premium-analytics`)},icon:i}}));function D(e=!1,t=F){return{reportParams:c(e,t)}}function O({withComparison:e,preset:t}){let n=!!e,r=t??F;return!n&&r===F?`getDefaultQueryParams()`:n&&r===F?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function k(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<SalesByUtmSourceRender
\tattributes={ {
\t\treportParams: ${O(e)},
\t} }
/>`}function A({withComparison:e,preset:t}){return(0,N.jsx)(S,{attributes:D(e,t)})}function j(e){return(0,N.jsx)(S,{attributes:D(!1,e)})}function M({withComparison:e,preset:t,...n}){return(0,N.jsx)(h,{...n,widgetType:T,renderModule:P,renderComponent:S,attributes:D(e,t)})}var N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{l(),s(),v(),b(),d(),w(),E(),N=r(),u(),P=`storybook/sales-by-utm-source`,F=`last-30-days`,I=o,L={title:`Packages/Premium Analytics/Widgets/SalesByUtmSource`,component:S,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:I,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays top UTM sources by order revenue for the selected period.`}}}},R={render:A,args:{preset:F,withComparison:!1},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>k(t.args)}}}},z={render:A,args:{preset:F,withComparison:!0},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>k(t.args)}}}},B={render:()=>j(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(`order-attribution/source/summary`,`loading`),()=>f(`order-attribution/source/summary`,null))},V={render:()=>j(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(`order-attribution/source/summary`,`error`),()=>f(`order-attribution/source/summary`,null))},H={render:()=>j(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(`order-attribution/source/summary`,`empty`),()=>f(`order-attribution/source/summary`,null))},U={render:e=>(0,N.jsx)(M,{...e}),args:{...y,preset:F,withComparison:!0},argTypes:{...m,preset:{control:`select`,options:I,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/sales-by-utm-source"
	renderComponent={ SalesByUtmSourceRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: renderSalesByUtmSource,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<SalesByUtmSourceStoryControls>;
        }) => getSalesByUtmSourceSource(storyContext.args)
      }
    }
  }
}`,...R.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: renderSalesByUtmSource,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<SalesByUtmSourceStoryControls>;
        }) => getSalesByUtmSourceSource(storyContext.args)
      }
    }
  }
}`,...z.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period change and trend data.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByUtmSourceOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution/source/summary', 'loading');
    return () => setReportMockState('order-attribution/source/summary', null);
  }
}`,...B.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByUtmSourceOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution/source/summary', 'error');
    return () => setReportMockState('order-attribution/source/summary', null);
  }
}`,...V.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByUtmSourceOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution/source/summary', 'empty');
    return () => setReportMockState('order-attribution/source/summary', null);
  }
}`,...H.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state ("No attribution data
in this period.").`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => <SalesByUtmSourceDashboardStory {...args} />,
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
\\trenderModule="storybook/sales-by-utm-source"
\\trenderComponent={ SalesByUtmSourceRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...U.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...U.parameters?.docs?.description}}},W=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{R as Default,H as Empty,V as Error,B as Loading,U as WidgetDashboardWithWidget,z as WithComparison,W as __namedExportsOrder,L as default};