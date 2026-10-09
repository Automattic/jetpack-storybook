import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{ot as n,t as r}from"./src-rrY7vAoW.js";import{Mn as i,t as a}from"./src-CTpdfVFW.js";import{_ as o}from"./charts-provider-BA6IhbKQ.js";import{n as s,r as c,s as l}from"./register-report-mocks-CW1VdKfU.js";import{t as u}from"./sessions-by-device-widget-CbyVwLOw.js";import{t as d}from"./src-C8uiRrOG.js";import{a as f,g as p,h as m,i as h,m as g,n as _,p as v,r as y}from"./with-widget-canvas-uks1OQ01.js";function b({attributes:e={},setError:t}){return(0,x.jsx)(o,{attributes:e,setError:t,options:{from:`/`},children:(0,x.jsx)(u,{})})}var x,S=e((()=>{d(),x=t()})),C,w=e((()=>{C={}})),T,E,D,O,k,A,j,M,N=e((()=>{T=`jpa/sessions-by-device`,E=`jpa/chart-bar`,D=`Sessions by device`,O=`Shows the sessions breakdown by device type over the selected time period.`,k={content:`See how store sessions are split by device type.`},A=`store`,j=`framed`,M={name:T,icon:E,title:D,description:O,help:k,category:A,presentation:j}}));function P(e=!1,t=H){return{reportParams:i(e,t)}}function F({withComparison:e,preset:t}){let n=!!e,r=t??H;return!n&&r===H?`getDefaultQueryParams()`:n&&r===H?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function I(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<SessionsByDeviceRender
\tattributes={ {
\t\treportParams: ${F(e)},
\t} }
/>`}function L({withComparison:e,preset:t}){return(0,B.jsx)(b,{attributes:P(e,t)})}function R(e){return(0,B.jsx)(b,{attributes:P(!1,e)})}function z({withComparison:e,preset:t,...n}){return(0,B.jsx)(g,{...n,widgetType:h(M,C),renderModule:V,renderComponent:b,attributes:P(e,t)})}var B,V,H,U,W,G,K,q,J,Y,X,Z;e((()=>{a(),r(),m(),f(),_(),s(),S(),w(),N(),B=t(),c(),V=`storybook/sessions-by-device`,H=`last-30-days`,U=n,W={title:`Packages/Premium Analytics/Widgets/SessionsByDevice`,component:b,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:U,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays sessions by device type for the selected period.`}}}},G={render:L,args:{preset:H,withComparison:!1},decorators:[y],parameters:{docs:{source:{transform:(e,t)=>I(t.args)}}}},K={render:L,args:{preset:H,withComparison:!0},decorators:[y],parameters:{docs:{source:{transform:(e,t)=>I(t.args)}}}},q={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(l(`sessions/by-device`,`loading`),()=>l(`sessions/by-device`,null))},J={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(l(`sessions/by-device`,`error`),()=>l(`sessions/by-device`,null))},Y={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(l(`sessions/by-device`,`empty`),()=>l(`sessions/by-device`,null))},X={render:e=>(0,B.jsx)(z,{...e}),args:{...v,preset:H,withComparison:!0},argTypes:{...p,preset:{control:`select`,options:U,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/sessions-by-device"
	renderComponent={ SessionsByDeviceRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderSessionsByDevice,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<SessionsByDeviceStoryControls>;
        }) => getSessionsByDeviceSource(storyContext.args)
      }
    }
  }
}`,...G.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderSessionsByDevice,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<SessionsByDeviceStoryControls>;
        }) => getSessionsByDeviceSource(storyContext.args)
      }
    }
  }
}`,...K.parameters?.docs?.source},description:{story:`Comparison period enabled, showing previous-period context in the widget data.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => renderSessionsByDeviceOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('sessions/by-device', 'loading');
    return () => setReportMockState('sessions/by-device', null);
  }
}`,...q.parameters?.docs?.source},description:{story:`First load: the sessions-by-device report is in flight, so the widget shows
its loading state. The mock is forced to never resolve for the duration of
this story.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderSessionsByDeviceOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('sessions/by-device', 'error');
    return () => setReportMockState('sessions/by-device', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action
(which re-runs the query — still mocked as failing while this story is
active).`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderSessionsByDeviceOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('sessions/by-device', 'empty');
    return () => setReportMockState('sessions/by-device', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`Resolved with no sessions: the widget shows its empty state ("No session
data in this period.").`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => <SessionsByDeviceDashboardStory {...args} />,
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
\\trenderModule="storybook/sessions-by-device"
\\trenderComponent={ SessionsByDeviceRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...X.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...X.parameters?.docs?.description}}},Z=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{G as Default,Y as Empty,J as Error,q as Loading,X as WidgetDashboardWithWidget,K as WithComparison,Z as __namedExportsOrder,W as default};