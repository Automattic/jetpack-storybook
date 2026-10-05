import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Vu as a,Yi as o,ku as s,t as c}from"./build-module-DNhkEVJn.js";import{At as ee}from"./build-module-DmDwTLpf2.js";import{m as l,r as u,v as te}from"./hooks-D4QP9lzv.js";import{t as d}from"./src-DqBKwdS9.js";import{Et as ne,it as f,on as p,t as m}from"./src-Df-fKYOi.js";import{Ct as re,St as ie,Tt as ae,rt as oe}from"./helpers-DXscRfKs.js";import"./rows-DAmD2BmE.js";import{r as se}from"./leaderboard-skeleton-DVSOKkNk.js";import{n as ce,r as h}from"./with-story-router-JIRnNK5I.js";import{n as g,r as _}from"./register-report-mocks-bPoMWLP6.js";import{_ as le,b as v,i as ue,m as de}from"./leaderboard-BiO9QTsV.js";import{t as fe}from"./widget-state-C3zSLT7o.js";import{S as pe}from"./report-metric-z8P0bZOy.js";import{t as y}from"./src-i4pQBsMK.js";import{a as b,d as me,f as he,i as ge,n as _e,p as ve,r as x,u as ye}from"./with-widget-canvas-CCB9t6XN.js";import{n as be,t as xe}from"./register-stats-mocks-awTzeBHR.js";import{n as Se,t as S}from"./force-stats-mock-state-BGV8RYXE.js";var C,w,T,E,D,O,k,A,j,M,Ce=e((()=>{C=`_root_33236_1`,w=`_trail_33236_9`,T=`_content_33236_13`,E=`_bodyHeader_33236_20`,D=`_stateArea_33236_27`,O=`_chartArea_33236_32`,k=`_leaderboardPanel_33236_42`,A=`_leaderboard_33236_42`,j=`_geoChart_33236_58`,M={root:C,trail:w,content:T,bodyHeader:E,stateArea:D,chartArea:O,leaderboardPanel:k,leaderboard:A,geoChart:j}}));function we(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function Te({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:ee,refetch:l}=f({...e,geoMode:n,max:t,...r?{filter_by_country:r.country}:{},...r?.region?{filter_by_region:r.region}:{}},{maxRows:t}),u=(i?.rows??[]).map(we);return{data:u,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:u.length===0&&ee,refetch:l}}var Ee=e((()=>{m()}));function De({geoGranularity:e}){ne();let{reportParams:n}=te(),{drillDownItem:i,drillDown:o,resetDrillDown:s}=u(),c=i?.country,l=e;i&&(l=i.region?`city`:`region`);let{data:d,hasComparison:f,isLoading:p,isFetching:m,isError:ce,refetch:h}=Te({reportParams:n,max:10,geoMode:l,filter:i?{country:i.country.code,region:i.region}:void 0}),g=(0,a.useMemo)(()=>d.filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[d]),_=(0,a.useMemo)(()=>{let e=e=>{if(!e.countryCode)return{kind:`static`};let n={code:e.countryCode,name:e.countryFull};return l===`country`?{kind:`drillDown`,onClick:()=>o({country:n}),ariaLabel:r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:l===`region`?{kind:`drillDown`,onClick:()=>o({country:n,region:e.label}),ariaLabel:r(t(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}},n=re(d.map(e=>e.value),f?d.map(e=>e.previousValue):[]);return d.map(t=>{let r=oe(t.countryCode),i=t.previousValue;return{id:t.key,...ue({label:t.label,media:{kind:`flag`,url:r??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:i,currentShare:ie(t.value,n),previousShare:f&&i!==void 0?ie(i,n):void 0,delta:f&&i!==void 0?ae(t.value,i):void 0}})},[d,l,f,o]),v=i?.region&&e===`country`?i.country:null,de=(0,a.useCallback)(()=>{v?o({country:v}):s()},[v,s,o]),y=i?(0,P.jsx)(le,{label:v?.name??t(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:v?r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),v.name):t(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:de,current:i.region??i.country.name,className:M.trail}):null,b=y?(0,P.jsx)(ee,{direction:`row`,align:`center`,className:M.bodyHeader,children:y}):null;return(0,P.jsxs)(`div`,{className:M.content,children:[b,(0,P.jsx)(`div`,{className:M.stateArea,children:(0,P.jsx)(fe,{isLoading:p,isFetching:m,isError:ce,isEmpty:d.length===0,error:{description:t(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:h}]},children:(0,P.jsxs)(`div`,{className:M.chartArea,children:[(0,P.jsx)(`div`,{className:M.leaderboardPanel,children:(0,P.jsx)(se,{data:_,withOverlayLabel:!0,withComparison:f,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:M.leaderboard})}),(0,P.jsx)(`div`,{className:M.geoChart,children:(0,P.jsx)(pe,{rows:g,mode:l,focusCountry:c,resizeDebounceTime:100})})]})})})]})}function N({attributes:e={}}){let t=e?.geoGranularity??I,n=Object.prototype.hasOwnProperty.call(F,t)?t:I;return(0,P.jsx)(l,{attributes:e,children:(0,P.jsxs)(`div`,{className:M.root,children:[(0,P.jsx)(De,{geoGranularity:n},n),(0,P.jsx)(de,{children:(0,P.jsx)(v,{report:`locations`,section:F[n]})})]})})}var P,F,I,Oe=e((()=>{m(),y(),s(),n(),d(),Ce(),Ee(),P=i(),F={country:`countries`,region:`regions`,city:`cities`},I=`country`})),L,ke=e((()=>{n(),c(),L={icon:o,attributes:[{id:`geoGranularity`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:t(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:t(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),R,z,B,V,Ae,je,Me,Ne=e((()=>{R=`jpa/locations`,z=`Top locations`,B=`Where your visitors are viewing from — by country, region, or city.`,V={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Ae=`stats`,je=`framed`,Me={name:R,title:z,description:B,help:V,category:Ae,presentation:je}}));function Pe({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:p(e)}}function H(e){return(0,W.jsx)(N,{attributes:Pe(e)})}function U(e){return(0,W.jsx)(N,{attributes:{geoGranularity:`country`,reportParams:p(!1,e)}})}function Fe(e){return(0,W.jsx)(N,{...e})}function Ie({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(me,{...n,widgetType:Re,renderModule:Le,renderComponent:Fe,attributes:Pe({withComparison:e,geoGranularity:t})})}var W,Le,Re,ze,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),he(),b(),ce(),_e(),g(),xe(),Se(),Oe(),ke(),Ne(),W=i(),_(),be(),Le=`storybook/locations`,Re=ge(Me,L),ze={title:`Packages/Premium Analytics/Widgets/Locations`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[x,h]},K={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[x,h]},q={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[x,h]},J={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[x,h]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[x,h],beforeEach:()=>(S(`stats/location-views`,`loading`),()=>S(`stats/location-views`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[x,h],beforeEach:()=>(S(`stats/location-views`,`error`),()=>S(`stats/location-views`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[x,h],beforeEach:()=>(S(`stats/location-views`,`empty`),()=>S(`stats/location-views`,null))},Q={render:e=>(0,W.jsx)(Ie,{...e}),args:{...ye,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...ve,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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