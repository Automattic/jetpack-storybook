import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{ot as n,t as r}from"./src-rrY7vAoW.js";import{t as i,wn as a}from"./src-BXGbBQuk.js";import{_ as o}from"./charts-provider-CPqqWd8T.js";import{n as s,r as c,s as l}from"./register-report-mocks-HpcX_mM9.js";import{t as u}from"./visitors-by-location-widget-B_7xfGco.js";import{t as d}from"./src-BO6UD8Zu.js";import{a as f,g as p,h as m,i as h,m as g,n as _,p as v,t as y}from"./with-widget-canvas-Bkxis0Y9.js";function b({attributes:e={},setError:t}){return(0,x.jsx)(o,{attributes:e,setError:t,options:{from:`/`},children:(0,x.jsx)(u,{})})}var x,S=e((()=>{d(),x=t()})),C,w=e((()=>{C={}})),T,E,D,O,k,A,j,M,N=e((()=>{T=`jpa/visitors-by-location`,E=`jpa/map-marker`,D=`Store visitors by location`,O=`See where your store visitors are located geographically.`,k={content:`See where your store visitors are located geographically.`},A=`visitors`,j=`framed`,M={name:T,icon:E,title:D,description:O,help:k,category:A,presentation:j}}));function P(e=!1,t=H){return{reportParams:a(e,t)}}function F({withComparison:e,preset:t}){let n=!!e,r=t??H;return!n&&r===H?`getDefaultQueryParams()`:n&&r===H?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function I(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<VisitorsByLocationRender
\tattributes={ {
\t\treportParams: ${F(e)},
\t} }
/>`}function L({withComparison:e,preset:t}){return(0,B.jsx)(b,{attributes:P(e,t)})}function R(e){return(0,B.jsx)(b,{attributes:P(!1,e)})}function z({withComparison:e,preset:t,...n}){return(0,B.jsx)(g,{...n,widgetType:h(M,C),renderModule:V,renderComponent:b,attributes:P(e,t)})}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q;e((()=>{i(),r(),m(),f(),_(),s(),S(),w(),N(),B=t(),c(),V=`storybook/visitors-by-location`,H=`last-30-days`,U=n,W=e=>(0,B.jsx)(y,{children:(0,B.jsx)(e,{})}),G={title:`Packages/Premium Analytics/Widgets/VisitorsByLocation`,component:b,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:U,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Store visitors by location" widget. Fetches the visitors report and displays where store visitors are located geographically.`}}}},K={render:L,args:{preset:H,withComparison:!1},decorators:[W],parameters:{docs:{source:{transform:(e,t)=>I(t.args)}}}},q={render:L,args:{preset:H,withComparison:!0},decorators:[W],parameters:{docs:{source:{transform:(e,t)=>I(t.args)}}}},J={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[W],beforeEach:()=>(l(`sessions/by-location`,`loading`),()=>l(`sessions/by-location`,null))},Y={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[W],beforeEach:()=>(l(`sessions/by-location`,`error`),()=>l(`sessions/by-location`,null))},X={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[W],beforeEach:()=>(l(`sessions/by-location`,`empty`),()=>l(`sessions/by-location`,null))},Z={render:e=>(0,B.jsx)(z,{...e}),args:{...v,preset:H,withComparison:!0},argTypes:{...p,preset:{control:`select`,options:U,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/visitors-by-location"
	renderComponent={ VisitorsByLocationRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderVisitorsByLocation,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<VisitorsByLocationStoryControls>;
        }) => getVisitorsByLocationSource(storyContext.args)
      }
    }
  }
}`,...K.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderVisitorsByLocation,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<VisitorsByLocationStoryControls>;
        }) => getVisitorsByLocationSource(storyContext.args)
      }
    }
  }
}`,...q.parameters?.docs?.source},description:{story:`Comparison period enabled for the same report period.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderVisitorsByLocationOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('sessions/by-location', 'loading');
    return () => setReportMockState('sessions/by-location', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state
below the (still interactive) US/Worldwide toggle. The mock is forced to
never resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderVisitorsByLocationOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('sessions/by-location', 'error');
    return () => setReportMockState('sessions/by-location', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderVisitorsByLocationOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('sessions/by-location', 'empty');
    return () => setReportMockState('sessions/by-location', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state ("No location data in
this period.").`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <VisitorsByLocationDashboardStory {...args} />,
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
\\trenderModule="storybook/visitors-by-location"
\\trenderComponent={ VisitorsByLocationRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...Z.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Z.parameters?.docs?.description}}},Q=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as Default,X as Empty,Y as Error,J as Loading,Z as WidgetDashboardWithWidget,q as WithComparison,Q as __namedExportsOrder,G as default};