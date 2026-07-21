import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{I as i,n as a}from"./build-module-DmVuor49.js";import{n as o,r as s}from"./line-chart-gj8AUbfY.js";import{c,t as l}from"./src-DN9VFS2M.js";import{dt as u,er as d,jn as f}from"./chart-tooltip-DUEH-EBN.js";import{H as p,M as m,P as h,R as g,j as _,t as v}from"./report-metric-DT2EZwqu.js";import{C as y,S as b,T as x,b as S,t as C,w,x as T}from"./src-_5yscEMX.js";function E(){let{reportParams:e}=p();return(0,D.jsx)(v,{metricKey:`visitors`,data:f(e),dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},emptyStateText:t(`No visitors in this period.`,`jetpack-premium-analytics`),errorText:t(`We couldn't load visitors. Please try again in a moment.`,`jetpack-premium-analytics`)})}var D,O=e((()=>{u(),C(),n(),D=r()}));function k({attributes:e={},setError:t}){return(0,A.jsx)(g,{attributes:e,setError:t,options:{from:`/`},children:(0,A.jsx)(E,{})})}var A,j=e((()=>{C(),O(),A=r()})),M,N=e((()=>{n(),a(),M={name:`jpa/visitors-over-time`,title:t(`Visitors over time`,`jetpack-premium-analytics`),help:{content:t(`Track website visitor trends and monitor traffic patterns over time.`,`jetpack-premium-analytics`)},icon:i}}));function P(e=!1,t=H){return{reportParams:d(e,t)}}function F({withComparison:e,preset:t}){let n=!!e,r=t??H;return!n&&r===H?`getDefaultQueryParams()`:n&&r===H?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function I(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<VisitorsOverTimeRender
\tattributes={ {
\t\treportParams: ${F(e)},
\t} }
/>`}function L({withComparison:e,preset:t}){return W(),(0,B.jsx)(k,{attributes:P(e,t),setError:G})}function R(e){return W(),(0,B.jsx)(k,{attributes:P(!1,e),setError:G})}function z({withComparison:e,preset:t,...n}){return W(),(0,B.jsx)(y,{...n,widgetType:M,renderModule:V,renderComponent:k,attributes:P(e,t)})}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),l(),w(),S(),_(),s(),j(),N(),B=r(),m(),V=`storybook/visitors-over-time`,H=`last-30-days`,U=c,W=()=>o.Legend,G=()=>{},K={title:`Packages/Premium Analytics/Widgets/VisitorsOverTime`,component:k,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:U,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays website visitor trends for the selected period.`}}}},q={render:L,args:{preset:H,withComparison:!1},decorators:[T],parameters:{docs:{source:{transform:(e,t)=>I(t.args)}}}},J={render:L,args:{preset:H,withComparison:!0},decorators:[T],parameters:{docs:{source:{transform:(e,t)=>I(t.args)}}}},Y={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(h(`sessions/by-date`,`loading`),()=>h(`sessions/by-date`,null))},X={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(h(`sessions/by-date`,`error`),()=>h(`sessions/by-date`,null))},Z={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(h(`sessions/by-date`,`empty`),()=>h(`sessions/by-date`,null))},Q={render:e=>(0,B.jsx)(z,{...e}),args:{...b,preset:H,withComparison:!0},argTypes:{...x,preset:{control:`select`,options:U,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/visitors-over-time"
	renderComponent={ VisitorsOverTimeRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period change and sparkline data.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderVisitorsOverTimeOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('sessions/by-date', 'loading');
    return () => setReportMockState('sessions/by-date', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderVisitorsOverTimeOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('sessions/by-date', 'error');
    return () => setReportMockState('sessions/by-date', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderVisitorsOverTimeOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('sessions/by-date', 'empty');
    return () => setReportMockState('sessions/by-date', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no visitor data: the widget shows its empty state ("No visitors
in this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};