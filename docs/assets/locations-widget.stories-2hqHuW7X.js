import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Uu as a,Zi as o,ju as s,t as c}from"./build-module-2iv4IIRq.js";import{Et as ee}from"./build-module-CfSFqaK72.js";import{m as l,r as u,v as te}from"./hooks-DWWWq212.js";import{t as d,w as ne}from"./src-C-E2d-Lb.js";import{t as f}from"./src-LYebmD4c.js";import{$t as p,et as m,t as h}from"./src-CUmH3sTN.js";import{Dt as re,Et as g,kt as ie,st as ae}from"./helpers-Dbmd4FKa.js";import"./constants-B1kGztHF.js";import{r as oe}from"./leaderboard-skeleton-BmZFNQ_-.js";import{i as se,r as ce}from"./register-report-mocks-BW28HUEP.js";import{D as le,S as ue,j as de,v as _,w as fe}from"./report-metric-DEas32kQ.js";import{t as pe}from"./widget-state-DtrFKpS2.js";import{t as me}from"./src-COQnGA-f.js";import{a as he,d as ge,f as _e,h as v,i as ve,m as ye,n as be,p as xe,r as y,u as Se}from"./with-widget-canvas-dF4iMX2D.js";import{n as Ce,t as we}from"./register-stats-mocks-CUyefKZ4.js";import{n as Te,t as b}from"./force-stats-mock-state-CHlHZQfr.js";var x,S,C,w,T,E,D,O,k,A,Ee=e((()=>{x=`_root_mw6wj_1`,S=`_backLink_mw6wj_9`,C=`_content_mw6wj_17`,w=`_bodyHeader_mw6wj_24`,T=`_stateArea_mw6wj_31`,E=`_chartArea_mw6wj_36`,D=`_leaderboardPanel_mw6wj_46`,O=`_leaderboard_mw6wj_46`,k=`_geoChart_mw6wj_62`,A={root:x,backLink:S,content:C,bodyHeader:w,stateArea:T,chartArea:E,leaderboardPanel:D,leaderboard:O,geoChart:k}}));function De(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function Oe({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{comparisonRows:i,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:ee,refetch:l}=m({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),u=(i?.rows??[]).map(De).filter(e=>e!==null);return{data:u,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:u.length===0&&ee,refetch:l}}var ke=e((()=>{h()}));function Ae({geoGranularity:e}){let{reportParams:n}=te(),{drillDownItem:i,drillDown:o,resetDrillDown:s}=u();(0,a.useEffect)(()=>{e!==`country`&&s()},[s,e]);let c=e===`country`?i:void 0,l=e===`country`&&c?`region`:e,{data:d,hasComparison:f,isLoading:p,isFetching:m,isError:h,refetch:se}=Oe({reportParams:n,max:10,geoMode:l,countryFilter:c?.code}),ce=(0,a.useMemo)(()=>d.map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull})),[d]),ue=(0,a.useMemo)(()=>{let e=re(d.map(e=>e.value),f?d.map(e=>e.previousValue):[]);return d.map(n=>{let i=ae(n.countryCode),a=n.previousValue,s=n.countryCode;return{id:n.key,...de({label:n.label,media:{kind:`flag`,url:i??void 0,country:n.countryFull},action:l===`country`&&s?{kind:`drillDown`,onClick:()=>o({code:s,name:n.countryFull}),ariaLabel:r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),n.countryFull)}:{kind:`static`}}),currentValue:n.value,previousValue:a,currentShare:g(n.value,e),previousShare:f&&a!==void 0?g(a,e):void 0,delta:f&&a!==void 0?ie(n.value,a):void 0}})},[d,l,f,o]),_=c?(0,M.jsx)(fe,{label:t(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:s,className:A.backLink}):null,me=_?(0,M.jsx)(ee,{direction:`row`,align:`center`,className:A.bodyHeader,children:_}):null;return(0,M.jsxs)(`div`,{className:A.content,children:[me,(0,M.jsx)(`div`,{className:A.stateArea,children:(0,M.jsx)(pe,{isLoading:p,isFetching:m,isError:h,isEmpty:d.length===0,error:{description:t(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:se}]},empty:{icon:ne,description:t(`No location data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,M.jsxs)(`div`,{className:A.chartArea,children:[(0,M.jsx)(`div`,{className:A.leaderboardPanel,children:(0,M.jsx)(oe,{data:ue,withOverlayLabel:!0,withComparison:f,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:A.leaderboard})}),(0,M.jsx)(`div`,{className:A.geoChart,children:(0,M.jsx)(le,{rows:ce,mode:l,focusCountry:c,resizeDebounceTime:100})})]})})})]})}function j({attributes:e={}}){let t=e?.geoGranularity??P,n=Object.prototype.hasOwnProperty.call(N,t)?t:P;return(0,M.jsx)(l,{attributes:e,children:(0,M.jsxs)(`div`,{className:A.root,children:[(0,M.jsx)(Ae,{geoGranularity:n}),(0,M.jsx)(ue,{children:(0,M.jsx)(_,{report:`locations`,section:N[n]})})]})})}var M,N,P,je=e((()=>{me(),d(),s(),n(),f(),Ee(),ke(),M=i(),N={country:`countries`,region:`regions`,city:`cities`},P=`country`})),F,Me=e((()=>{n(),c(),F={icon:o,attributes:[{id:`geoGranularity`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:t(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:t(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),I,L,R,z,B,Ne,Pe,Fe=e((()=>{I=`jpa/locations`,L=`Top locations`,R=`Where your visitors are viewing from — by country, region, or city.`,z={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,Ne=`framed`,Pe={name:I,title:L,description:R,help:z,category:B,presentation:Ne}}));function V({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:p(e)}}function H(e){return(0,W.jsx)(j,{attributes:V(e)})}function U(e){return(0,W.jsx)(j,{attributes:{geoGranularity:`country`,reportParams:p(!1,e)}})}function Ie(e){return(0,W.jsx)(j,{...e})}function Le({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(ge,{...n,widgetType:ze,renderModule:Re,renderComponent:Ie,attributes:V({withComparison:e,geoGranularity:t})})}var W,Re,ze,Be,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),_e(),he(),ye(),be(),ce(),we(),Te(),je(),Me(),Fe(),W=i(),se(),Ce(),Re=`storybook/locations`,ze=ve(Pe,F),Be={title:`Packages/Premium Analytics/Widgets/Locations`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with country drill-down into regions, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[y,v]},K={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[y,v]},q={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[y,v]},J={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[y,v]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[y,v],beforeEach:()=>(b(`stats/location-views`,`loading`),()=>b(`stats/location-views`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[y,v],beforeEach:()=>(b(`stats/location-views`,`error`),()=>b(`stats/location-views`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[y,v],beforeEach:()=>(b(`stats/location-views`,`empty`),()=>b(`stats/location-views`,null))},Q={render:e=>(0,W.jsx)(Le,{...e}),args:{...Se,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...xe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral location
glyph and the "stats will appear here" copy).`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as CitiesMode,G as Default,Z as Empty,X as Error,Y as Loading,q as RegionsMode,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,Be as default};