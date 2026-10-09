import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-Cm3Kd3py.js";import{At as s}from"./build-module-D2aEjqke.js";import{g as c,t as l}from"./build-module-BapH4ioY.js";import{t as u}from"./src-CZBHQCU6.js";import{Lt as d,Mn as f,ht as p,t as m}from"./src-CTpdfVFW.js";import{Ut as ee,_ as h,en as g,o as te,rn as ne,tn as re,x as ie}from"./charts-provider-BA6IhbKQ.js";import"./rows-DAmD2BmE.js";import{r as ae}from"./leaderboard-skeleton-D1y--mOR.js";import{n as _,r as v}from"./register-report-mocks-CW1VdKfU.js";import{t as oe}from"./widget-state--3z8khIa.js";import{n as y,r as b}from"./with-story-router-Beljd9ki.js";import{g as se,i as ce,p as le,y as ue}from"./leaderboard-DAHzFJpq.js";import{n as de,w as fe}from"./components-BfTAYn2q.js";import{_ as x,g as S,h as C,t as w,y as pe}from"./src-C8uiRrOG.js";import{a as me,g as he,h as T,i as E,m as ge,n as D,p as _e,r as O}from"./with-widget-canvas-uks1OQ01.js";import{n as ve,t as ye}from"./register-stats-mocks-DqhawnJP.js";import{n as be,t as k}from"./force-stats-mock-state-DIdlHRtP.js";var xe,A,j,M,N,P,F,I,L,R,Se=e((()=>{xe=`_root_33236_1`,A=`_trail_33236_9`,j=`_content_33236_13`,M=`_bodyHeader_33236_20`,N=`_stateArea_33236_27`,P=`_chartArea_33236_32`,F=`_leaderboardPanel_33236_42`,I=`_leaderboard_33236_42`,L=`_geoChart_33236_58`,R={root:xe,trail:A,content:j,bodyHeader:M,stateArea:N,chartArea:P,leaderboardPanel:F,leaderboard:I,geoChart:L}}));function Ce({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let o=JSON.stringify(i),[s,c]=(0,a.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==o||s.data!==e)&&c({drillDepth:r,paramsKey:o,data:e,hasComparison:t}),n&&s&&s.paramsKey===o&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0}:{data:e,hasComparison:t,isHeld:!1}}var we=e((()=>{o()}));function Te(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function Ee({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:u,refetch:d}=p({...e,geoMode:n,max:t,...x(r)},{maxRows:t}),f=(0,a.useMemo)(()=>(i?.rows??[]).map(Te),[i]);return{data:f,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:f.length===0&&u,refetch:d}}var De=e((()=>{m(),o(),w()}));function Oe({geoGranularity:e}){d();let{reportParams:n}=ie(),{drillDownItem:i,drillDown:o,resetDrillDown:l}=te(),u=i?.country,f=e,p=0;i&&(f=i.region?`city`:`region`,p=i.region?2:1);let m=(0,a.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),h=Ee({reportParams:n,max:10,geoMode:f,filter:m}),{isLoading:_,isFetching:v,isError:y,refetch:b}=h,{data:x,hasComparison:C,isHeld:w}=Ce({...h,drillDepth:p,reportParams:n}),me=(0,a.useMemo)(()=>pe(S(f),m),[f,m]),he=(0,a.useMemo)(()=>(w?[]:x).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[x,w]),T=(0,a.useMemo)(()=>{let e=e=>{if(w||!e.countryCode)return{kind:`static`};let n={code:e.countryCode,name:e.countryFull};return f===`country`?{kind:`drillDown`,onClick:()=>o({country:n}),ariaLabel:r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:f===`region`?{kind:`drillDown`,onClick:()=>o({country:n,region:e.label}),ariaLabel:r(t(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}},n=re(x.map(e=>e.value),C?x.map(e=>e.previousValue):[]);return x.map(t=>{let r=ee(t.countryCode),i=t.previousValue;return{id:t.key,...ce({label:t.label,media:{kind:`flag`,url:r??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:i,currentShare:g(t.value,n),previousShare:C&&i!==void 0?g(i,n):void 0,delta:C&&i!==void 0?ne(t.value,i):void 0}})},[x,f,C,w,o]),E=i?.region&&e===`country`?i.country:null,ge=(0,a.useCallback)(()=>{E?o({country:E}):l()},[E,l,o]),D=i?(0,B.jsx)(se,{label:E?.name??t(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:E?r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),E.name):t(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:ge,current:i.region??i.country.name,className:R.trail}):null,_e=D?(0,B.jsx)(s,{direction:`row`,align:`center`,className:R.bodyHeader,children:D}):null;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(`div`,{className:R.content,children:[_e,(0,B.jsx)(`div`,{className:R.stateArea,children:(0,B.jsx)(oe,{isLoading:_&&!w,isFetching:v,isError:y,isEmpty:x.length===0,error:{description:t(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:b}]},children:(0,B.jsxs)(`div`,{className:R.chartArea,children:[(0,B.jsx)(c,{isDisabled:w,className:R.leaderboardPanel,children:(0,B.jsx)(ae,{data:T,loading:w,withOverlayLabel:!0,withComparison:C,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:R.leaderboard})}),(0,B.jsx)(`div`,{className:R.geoChart,children:(0,B.jsx)(fe,{rows:he,mode:f,focusCountry:u,resizeDebounceTime:100})})]})})})]}),(0,B.jsxs)(le,{children:[(0,B.jsx)(ue,{report:`locations`,section:S(e)}),(0,B.jsx)(de,{exporter:me,status:{isLoading:_,isFetching:v,isError:y},rowCount:x.length})]})]})}function z({attributes:e={}}){let t=e?.geoGranularity??V,n=Object.values(C).includes(t)?t:V;return(0,B.jsx)(h,{attributes:e,children:(0,B.jsx)(`div`,{className:R.root,children:(0,B.jsx)(Oe,{geoGranularity:n},n)})})}var B,V,ke=e((()=>{m(),w(),l(),o(),n(),u(),Se(),we(),De(),B=i(),V=`country`})),Ae,je=e((()=>{n(),Ae={attributes:[{id:`geoGranularity`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:t(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:t(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be=e((()=>{Me=`jpa/locations`,Ne=`jpa/map-marker`,Pe=`Top locations`,Fe=`Where your visitors are viewing from — by country, region, or city.`,Ie={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Le=`stats`,Re=`framed`,ze={name:Me,icon:Ne,title:Pe,description:Fe,help:Ie,category:Le,presentation:Re}}));function Ve({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:f(e)}}function H(e){return(0,W.jsx)(z,{attributes:Ve(e)})}function U(e){return(0,W.jsx)(z,{attributes:{geoGranularity:`country`,reportParams:f(!1,e)}})}function He(e){return(0,W.jsx)(z,{...e})}function Ue({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(ge,{...n,widgetType:Ge,renderModule:We,renderComponent:He,attributes:Ve({withComparison:e,geoGranularity:t})})}var W,We,Ge,Ke,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),T(),me(),y(),D(),_(),ye(),be(),ke(),je(),Be(),W=i(),v(),ve(),We=`storybook/locations`,Ge=E(ze,Ae),Ke={title:`Packages/Premium Analytics/Widgets/Locations`,component:z,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[O,b]},K={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[O,b]},q={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[O,b]},J={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[O,b]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[O,b],beforeEach:()=>(k(`stats/location-views`,`loading`),()=>k(`stats/location-views`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[O,b],beforeEach:()=>(k(`stats/location-views`,`error`),()=>k(`stats/location-views`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[O,b],beforeEach:()=>(k(`stats/location-views`,`empty`),()=>k(`stats/location-views`,null))},Q={render:e=>(0,W.jsx)(Ue,{...e}),args:{..._e,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...he,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as CitiesMode,G as Default,Z as Empty,X as Error,Y as Loading,q as RegionsMode,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,Ke as default};