import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Tn as ee,t as te}from"./build-module-2iv4IIRq.js";import{m as i,v as a}from"./hooks-D_R3QS6O.js";import{n as o,r as s}from"./line-chart-Li-oS7vD.js";import{rt as c,t as l}from"./src-CJGEmgc4.js";import{Mt as u,r as d,tn as ne}from"./date-period-dropdown-vHTUvO8h.js";import{c as f,i as p,r as re}from"./register-report-mocks-D03YAGqA.js";import{t as ie}from"./report-metric-BAg9MN_E.js";import{t as m}from"./src-DlrgbfLC.js";import{a as ae,c as oe,i as se,l as h,n as g,o as _,r as v,s as ce}from"./with-widget-canvas-CGTmPkuu.js";function le(){let{reportParams:e}=a();return(0,y.jsx)(ie,{metricKey:`visitors`,seriesLabel:t(`Visitors`,`jetpack-premium-analytics-pkg`),data:u(e),dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},emptyStateText:t(`No visitors in this period.`,`jetpack-premium-analytics-pkg`),errorText:t(`We couldn't load visitors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`)})}var y,b=e((()=>{d(),m(),n(),y=r()}));function x({attributes:e={},setError:t}){return(0,S.jsx)(i,{attributes:e,setError:t,options:{from:`/`},children:(0,S.jsx)(le,{})})}var S,C=e((()=>{m(),b(),S=r()})),w,T=e((()=>{te(),w={icon:ee}})),E,D,O,k,A,j,M,N=e((()=>{E=`jpa/visitors-over-time`,D=`Visitors over time`,O=`Track website visitor trends and monitor traffic patterns over time.`,k={content:`Track website visitor trends and monitor traffic patterns over time.`},A=`visitors`,j=`framed`,M={name:E,title:D,description:O,help:k,category:A,presentation:j}}));function P(e=!1,t=H){return{reportParams:ne(e,t)}}function F({withComparison:e,preset:t}){let n=!!e,r=t??H;return!n&&r===H?`getDefaultQueryParams()`:n&&r===H?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function I(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<VisitorsOverTimeRender
\tattributes={ {
\t\treportParams: ${F(e)},
\t} }
/>`}function L({withComparison:e,preset:t}){return W(),(0,B.jsx)(x,{attributes:P(e,t),setError:G})}function R(e){return W(),(0,B.jsx)(x,{attributes:P(!1,e),setError:G})}function z({withComparison:e,preset:t,...n}){return W(),(0,B.jsx)(ce,{...n,widgetType:se(M,w),renderModule:V,renderComponent:x,attributes:P(e,t)})}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),l(),oe(),ae(),g(),re(),s(),C(),T(),N(),B=r(),p(),V=`storybook/visitors-over-time`,H=`last-30-days`,U=c,W=()=>o.Legend,G=()=>{},K={title:`Packages/Premium Analytics/Widgets/VisitorsOverTime`,component:x,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:U,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays website visitor trends for the selected period.`}}}},q={render:L,args:{preset:H,withComparison:!1},decorators:[v],parameters:{docs:{source:{transform:(e,t)=>I(t.args)}}}},J={render:L,args:{preset:H,withComparison:!0},decorators:[v],parameters:{docs:{source:{transform:(e,t)=>I(t.args)}}}},Y={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(f(`sessions/by-date`,`loading`),()=>f(`sessions/by-date`,null))},X={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(f(`sessions/by-date`,`error`),()=>f(`sessions/by-date`,null))},Z={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(f(`sessions/by-date`,`empty`),()=>f(`sessions/by-date`,null))},Q={render:e=>(0,B.jsx)(z,{...e}),args:{..._,preset:H,withComparison:!0},argTypes:{...h,preset:{control:`select`,options:U,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

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