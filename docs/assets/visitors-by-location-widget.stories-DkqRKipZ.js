import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Ji as i,n as a}from"./build-module-C6Ow06jV.js";import{c as o,t as s}from"./src-AIpdnvxP.js";import{Yn as c,tr as l,ut as u}from"./chart-tooltip-DjozNI1k.js";import{C as d,S as f,T as p,k as m}from"./report-metric-BDvGeXwR.js";import{t as h}from"./visitors-by-location-widget-4GLzJDtr.js";import{S as g,b as _,t as v,x as y,y as b}from"./src-Dl15LA5n.js";import{n as x,t as S}from"./with-widget-canvas-Dz43KNHY.js";function C({attributes:e={},setError:t}){return(0,w.jsx)(m,{attributes:e,setError:t,options:{from:`/`},children:(0,w.jsx)(h,{})})}var w,T=e((()=>{v(),w=r()})),E,D=e((()=>{n(),a(),E={name:`jpa/visitors-by-location`,title:t(`Visitors by location`,`jetpack-premium-analytics`),help:{content:t(`See where your store visitors are located geographically.`,`jetpack-premium-analytics`)},icon:i}}));function O(e=!1,t=I){return{reportParams:c(e,t)}}function k({withComparison:e,preset:t}){let n=!!e,r=t??I;return!n&&r===I?`getDefaultQueryParams()`:n&&r===I?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function A(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<VisitorsByLocationRender
\tattributes={ {
\t\treportParams: ${k(e)},
\t} }
/>`}function j({withComparison:e,preset:t}){return(0,P.jsx)(C,{attributes:O(e,t)})}function M(e){return(0,P.jsx)(C,{attributes:O(!1,e)})}function N({withComparison:e,preset:t,...n}){return(0,P.jsx)(l,{children:(0,P.jsx)(_,{...n,widgetType:E,renderModule:F,renderComponent:C,attributes:O(e,t)})})}var P,F,I,L,R,z,B,V,H,U,W,G,K;e((()=>{u(),s(),y(),x(),f(),T(),D(),P=r(),d(),F=`storybook/visitors-by-location`,I=`last-30-days`,L=o,R=e=>(0,P.jsx)(l,{children:(0,P.jsx)(S,{children:(0,P.jsx)(e,{})})}),z={title:`Packages/Premium Analytics/Widgets/VisitorsByLocation`,component:C,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:L,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Visitors by location" widget. Fetches the visitors report and displays where store visitors are located geographically.`}}}},B={render:j,args:{preset:I,withComparison:!1},decorators:[R],parameters:{docs:{source:{transform:(e,t)=>A(t.args)}}}},V={render:j,args:{preset:I,withComparison:!0},decorators:[R],parameters:{docs:{source:{transform:(e,t)=>A(t.args)}}}},H={render:()=>M(`last-90-days`),tags:[`!autodocs`],decorators:[R],beforeEach:()=>(p(`sessions/by-location`,`loading`),()=>p(`sessions/by-location`,null))},U={render:()=>M(`last-7-days`),tags:[`!autodocs`],decorators:[R],beforeEach:()=>(p(`sessions/by-location`,`error`),()=>p(`sessions/by-location`,null))},W={render:()=>M(`last-365-days`),tags:[`!autodocs`],decorators:[R],beforeEach:()=>(p(`sessions/by-location`,`empty`),()=>p(`sessions/by-location`,null))},G={render:e=>(0,P.jsx)(N,{...e}),args:{...b,preset:I,withComparison:!0},argTypes:{...g,preset:{control:`select`,options:L,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/visitors-by-location"
	renderComponent={ VisitorsByLocationRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:`Comparison period enabled for the same report period.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => renderVisitorsByLocationOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('sessions/by-location', 'loading');
    return () => setReportMockState('sessions/by-location', null);
  }
}`,...H.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state
below the (still interactive) US/Worldwide toggle. The mock is forced to
never resolve for the duration of this story.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => renderVisitorsByLocationOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('sessions/by-location', 'error');
    return () => setReportMockState('sessions/by-location', null);
  }
}`,...U.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => renderVisitorsByLocationOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('sessions/by-location', 'empty');
    return () => setReportMockState('sessions/by-location', null);
  }
}`,...W.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state ("No location data in
this period.").`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...G.parameters?.docs?.description}}},K=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{B as Default,W as Empty,U as Error,H as Loading,G as WidgetDashboardWithWidget,V as WithComparison,K as __namedExportsOrder,z as default};