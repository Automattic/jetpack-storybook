import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Uu as a,Zi as o,ju as s,t as c}from"./build-module-2iv4IIRq.js";import{Et as ee}from"./build-module-CfSFqaK72.js";import{m as l,r as u,v as te}from"./hooks-C6uC8D6p.js";import{t as d}from"./src-BTWI2D1R.js";import{St as ne,et as f,nn as p,t as m}from"./src-C9rlvqIx.js";import{Dt as re,Et as ie,kt as ae,st as oe}from"./helpers-C3PYD0ul.js";import"./constants-B1kGztHF.js";import{r as se}from"./leaderboard-skeleton-Bj8f8psN.js";import{i as ce,r as le}from"./register-report-mocks-jOVWgqW2.js";import{D as ue,S as de,j as fe,v as h,w as pe}from"./report-metric-8GVNWEP9.js";import{t as me}from"./widget-state-DFM0RGEq.js";import{t as g}from"./src-BYRMloPq.js";import{a as _,d as he,f as ge,h as v,i as _e,m as ve,n as ye,p as be,r as y,u as xe}from"./with-widget-canvas-Co9pnelY.js";import{n as Se,t as Ce}from"./register-stats-mocks-C1ifviXU.js";import{n as we,t as b}from"./force-stats-mock-state-CJWb8B2c.js";var Te,Ee,x,S,C,w,T,E,D,O,De=e((()=>{Te=`_root_mw6wj_1`,Ee=`_backLink_mw6wj_9`,x=`_content_mw6wj_17`,S=`_bodyHeader_mw6wj_24`,C=`_stateArea_mw6wj_31`,w=`_chartArea_mw6wj_36`,T=`_leaderboardPanel_mw6wj_46`,E=`_leaderboard_mw6wj_46`,D=`_geoChart_mw6wj_62`,O={root:Te,backLink:Ee,content:x,bodyHeader:S,stateArea:C,chartArea:w,leaderboardPanel:T,leaderboard:E,geoChart:D}}));function Oe(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function ke({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{comparisonRows:i,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:ee,refetch:l}=f({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),u=(i?.rows??[]).map(Oe).filter(e=>e!==null);return{data:u,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:u.length===0&&ee,refetch:l}}var Ae=e((()=>{m()}));function je({geoGranularity:e}){ne();let{reportParams:n}=te(),{drillDownItem:i,drillDown:o,resetDrillDown:s}=u();(0,a.useEffect)(()=>{e!==`country`&&s()},[s,e]);let c=e===`country`?i:void 0,l=e===`country`&&c?`region`:e,{data:d,hasComparison:f,isLoading:p,isFetching:m,isError:ce,refetch:le}=ke({reportParams:n,max:10,geoMode:l,countryFilter:c?.code}),de=(0,a.useMemo)(()=>d.map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull})),[d]),h=(0,a.useMemo)(()=>{let e=re(d.map(e=>e.value),f?d.map(e=>e.previousValue):[]);return d.map(n=>{let i=oe(n.countryCode),a=n.previousValue,s=n.countryCode;return{id:n.key,...fe({label:n.label,media:{kind:`flag`,url:i??void 0,country:n.countryFull},action:l===`country`&&s?{kind:`drillDown`,onClick:()=>o({code:s,name:n.countryFull}),ariaLabel:r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),n.countryFull)}:{kind:`static`}}),currentValue:n.value,previousValue:a,currentShare:ie(n.value,e),previousShare:f&&a!==void 0?ie(a,e):void 0,delta:f&&a!==void 0?ae(n.value,a):void 0}})},[d,l,f,o]),g=c?(0,A.jsx)(pe,{label:t(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:s,className:O.backLink}):null,_=g?(0,A.jsx)(ee,{direction:`row`,align:`center`,className:O.bodyHeader,children:g}):null;return(0,A.jsxs)(`div`,{className:O.content,children:[_,(0,A.jsx)(`div`,{className:O.stateArea,children:(0,A.jsx)(me,{isLoading:p,isFetching:m,isError:ce,isEmpty:d.length===0,error:{description:t(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:le}]},children:(0,A.jsxs)(`div`,{className:O.chartArea,children:[(0,A.jsx)(`div`,{className:O.leaderboardPanel,children:(0,A.jsx)(se,{data:h,withOverlayLabel:!0,withComparison:f,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:O.leaderboard})}),(0,A.jsx)(`div`,{className:O.geoChart,children:(0,A.jsx)(ue,{rows:de,mode:l,focusCountry:c,resizeDebounceTime:100})})]})})})]})}function k({attributes:e={}}){let t=e?.geoGranularity??M,n=Object.prototype.hasOwnProperty.call(j,t)?t:M;return(0,A.jsx)(l,{attributes:e,children:(0,A.jsxs)(`div`,{className:O.root,children:[(0,A.jsx)(je,{geoGranularity:n}),(0,A.jsx)(de,{children:(0,A.jsx)(h,{report:`locations`,section:j[n]})})]})})}var A,j,M,Me=e((()=>{m(),g(),s(),n(),d(),De(),Ae(),A=i(),j={country:`countries`,region:`regions`,city:`cities`},M=`country`})),N,Ne=e((()=>{n(),c(),N={icon:o,attributes:[{id:`geoGranularity`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:t(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:t(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),P,F,I,L,R,z,B,Pe=e((()=>{P=`jpa/locations`,F=`Top locations`,I=`Where your visitors are viewing from — by country, region, or city.`,L={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:p(e)}}function H(e){return(0,W.jsx)(k,{attributes:V(e)})}function U(e){return(0,W.jsx)(k,{attributes:{geoGranularity:`country`,reportParams:p(!1,e)}})}function Fe(e){return(0,W.jsx)(k,{...e})}function Ie({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(he,{...n,widgetType:Re,renderModule:Le,renderComponent:Fe,attributes:V({withComparison:e,geoGranularity:t})})}var W,Le,Re,ze,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),ge(),_(),ve(),ye(),le(),Ce(),we(),Me(),Ne(),Pe(),W=i(),ce(),Se(),Le=`storybook/locations`,Re=_e(B,N),ze={title:`Packages/Premium Analytics/Widgets/Locations`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with country drill-down into regions, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[y,v]},K={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[y,v]},q={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[y,v]},J={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[y,v]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[y,v],beforeEach:()=>(b(`stats/location-views`,`loading`),()=>b(`stats/location-views`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[y,v],beforeEach:()=>(b(`stats/location-views`,`error`),()=>b(`stats/location-views`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[y,v],beforeEach:()=>(b(`stats/location-views`,`empty`),()=>b(`stats/location-views`,null))},Q={render:e=>(0,W.jsx)(Ie,{...e}),args:{...xe,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...be,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: false,
    geoGranularity: 'country'
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: true,
    geoGranularity: 'country'
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: false,
    geoGranularity: 'region'
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: false,
    geoGranularity: 'city'
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderLocationsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/location-views', 'loading');
    return () => forceStatsMockState('stats/location-views', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderLocationsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/location-views', 'error');
    return () => forceStatsMockState('stats/location-views', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderLocationsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/location-views', 'empty');
    return () => forceStatsMockState('stats/location-views', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows the generic empty state (the magnifier
glyph and "We couldn’t find results for this time period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <LocationsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    widgetWidth: 2,
    widgetHeight: 1,
    withComparison: true,
    geoGranularity: 'country'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean',
      description: 'Include previous-period comparison report params.'
    },
    geoGranularity: {
      control: 'radio',
      options: ['country', 'region', 'city'],
      description: 'The "View by" toolbar attribute rendered by the widget host.'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as CitiesMode,G as Default,Z as Empty,X as Error,Y as Loading,q as RegionsMode,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,ze as default};