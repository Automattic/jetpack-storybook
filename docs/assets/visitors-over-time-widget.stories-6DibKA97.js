import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,r as n,t as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Tn as ee,t as a}from"./build-module-2iv4IIRq.js";import{m as o,v as s}from"./hooks-Cke0-LQ0.js";import{n as te,r as ne}from"./line-chart-Cn-vH2qz.js";import{rt as c,t as re}from"./src-BNPYbbO9.js";import{$t as ie,At as ae,t as l}from"./src-B_26fcQ4.js";import{c as u,i as oe,r as d}from"./register-report-mocks-DAwiDCwH.js";import{t as f}from"./report-metric-Dl4PSY_V.js";import{t as p}from"./src-Qnljzw_R.js";import{a as m,d as h,f as se,i as ce,n as le,p as ue,r as g,u as _}from"./with-widget-canvas-B5Ob05sw.js";function v(){let{reportParams:e}=s();return(0,y.jsx)(f,{metricKey:`visitors`,seriesLabel:t(`Visitors`,`jetpack-premium-analytics-pkg`),seriesCountLabel:b,data:ae(e),dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},emptyStateText:t(`No visitors in this period.`,`jetpack-premium-analytics-pkg`),errorText:t(`We couldn't load visitors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`)})}var y,b,x=e((()=>{l(),p(),r(),y=i(),b=e=>n(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`)}));function S({attributes:e={},setError:t}){return(0,C.jsx)(o,{attributes:e,setError:t,options:{from:`/`},children:(0,C.jsx)(v,{})})}var C,w=e((()=>{p(),x(),C=i()})),T,de=e((()=>{a(),T={icon:ee}})),E,D,O,k,A,j,M,N=e((()=>{E=`jpa/visitors-over-time`,D=`Visitors over time`,O=`Track website visitor trends and monitor traffic patterns over time.`,k={content:`Track website visitor trends and monitor traffic patterns over time.`},A=`visitors`,j=`framed`,M={name:E,title:D,description:O,help:k,category:A,presentation:j}}));function P(e=!1,t=H){return{reportParams:ie(e,t)}}function F({withComparison:e,preset:t}){let n=!!e,r=t??H;return!n&&r===H?`getDefaultQueryParams()`:n&&r===H?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function I(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<VisitorsOverTimeRender
\tattributes={ {
\t\treportParams: ${F(e)},
\t} }
/>`}function L({withComparison:e,preset:t}){return W(),(0,B.jsx)(S,{attributes:P(e,t),setError:G})}function R(e){return W(),(0,B.jsx)(S,{attributes:P(!1,e),setError:G})}function z({withComparison:e,preset:t,...n}){return W(),(0,B.jsx)(h,{...n,widgetType:ce(M,T),renderModule:V,renderComponent:S,attributes:P(e,t)})}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),re(),se(),m(),le(),d(),ne(),w(),de(),N(),B=i(),oe(),V=`storybook/visitors-over-time`,H=`last-30-days`,U=c,W=()=>te.Legend,G=()=>{},K={title:`Packages/Premium Analytics/Widgets/VisitorsOverTime`,component:S,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:U,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays website visitor trends for the selected period.`}}}},q={render:L,args:{preset:H,withComparison:!1},decorators:[g],parameters:{docs:{source:{transform:(e,t)=>I(t.args)}}}},J={render:L,args:{preset:H,withComparison:!0},decorators:[g],parameters:{docs:{source:{transform:(e,t)=>I(t.args)}}}},Y={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(u(`sessions/by-date`,`loading`),()=>u(`sessions/by-date`,null))},X={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(u(`sessions/by-date`,`error`),()=>u(`sessions/by-date`,null))},Z={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(u(`sessions/by-date`,`empty`),()=>u(`sessions/by-date`,null))},Q={render:e=>(0,B.jsx)(z,{...e}),args:{..._,preset:H,withComparison:!0},argTypes:{...ue,preset:{control:`select`,options:U,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

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