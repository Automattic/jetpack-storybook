import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Bi as i,n as a}from"./build-module-C3k6FW0l.js";import{Ct as o,Tt as s,f as c,s as l}from"./hooks-4yHgUEVF.js";import{l as u,t as d}from"./src-DLhaPslb.js";import{n as f,t as p}from"./register-report-mocks-DTbQzVEb.js";import{t as m}from"./visitors-by-location-widget-Df-LfL0H.js";import{i as h,n as g,r as _,t as v}from"./widget-dashboard-with-widget-BGbRdtAs.js";import{t as y}from"./src-BMBI4kpT.js";function b({attributes:e={},setError:t}){return(0,x.jsx)(l,{attributes:e,setError:t,options:{from:`/`},children:(0,x.jsx)(m,{})})}var x,S=e((()=>{y(),x=r()})),C,w=e((()=>{n(),a(),C={name:`jpa/visitors-by-location`,title:t(`Visitors by location`,`jetpack-premium-analytics`),description:t(`See where your store visitors are located geographically.`,`jetpack-premium-analytics`),icon:i}}));function T(e=!1,t=M){return{reportParams:o(e,t)}}function E({withComparison:e,preset:t}){let n=!!e,r=t??M;return!n&&r===M?`getDefaultQueryParams()`:n&&r===M?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function D(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<VisitorsByLocationRender
\tattributes={ {
\t\treportParams: ${E(e)},
\t} }
/>`}function O({withComparison:e,preset:t}){return(0,A.jsx)(b,{attributes:T(e,t)})}function k({withComparison:e,preset:t,...n}){return(0,A.jsx)(s,{children:(0,A.jsx)(g,{...n,widgetType:C,renderModule:j,renderComponent:b,attributes:T(e,t)})})}var A,j,M,N,P,F,I,L,R,z;e((()=>{c(),d(),_(),p(),S(),w(),A=r(),f(),j=`storybook/visitors-by-location`,M=`last-30-days`,N=u,P=e=>(0,A.jsx)(s,{children:(0,A.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,A.jsx)(e,{})})}),F={title:`Packages/Premium Analytics/Widgets/VisitorsByLocation`,component:b,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:N,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Visitors by location" widget. Fetches the visitors report and displays where store visitors are located geographically.`}}}},I={render:O,args:{preset:M,withComparison:!1},decorators:[P],parameters:{docs:{source:{transform:(e,t)=>D(t.args)}}}},L={render:O,args:{preset:M,withComparison:!0},decorators:[P],parameters:{docs:{source:{transform:(e,t)=>D(t.args)}}}},R={render:e=>(0,A.jsx)(k,{...e}),args:{...v,preset:M,withComparison:!0},argTypes:{...h,preset:{control:`select`,options:N,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/visitors-by-location"
	renderComponent={ VisitorsByLocationRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:`Comparison period enabled for the same report period.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...R.parameters?.docs?.description}}},z=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{I as Default,R as WidgetDashboardWithWidget,L as WithComparison,z as __namedExportsOrder,F as default};