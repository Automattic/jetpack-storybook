import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-Cm3Kd3py.js";import{At as s}from"./build-module-D2aEjqke.js";import{g as c,t as l}from"./build-module-C9AdtV69.js";import{t as u}from"./src-Bxm-NuvJ.js";import{Ft as d,bn as f,pt as p,t as m}from"./src-DIdFH5Mi.js";import{Kt as ee,Qt as te,Zt as h,_ as g,en as ne,o as re,x as ie}from"./charts-provider-CKCfJeum.js";import"./rows-DAmD2BmE.js";import{r as ae}from"./leaderboard-skeleton-Dk1ZNv-u.js";import{n as _,r as v}from"./register-report-mocks-CHLGUeWf.js";import{t as oe}from"./widget-state-BesFZWSf.js";import{n as y,r as b}from"./with-story-router-Beljd9ki.js";import{g as se,i as ce,p as le,y as ue}from"./leaderboard-9kdqJLuR.js";import{E as de,n as fe}from"./components-CUR0W9DP.js";import{d as x,l as S,p as pe,t as C,u as w}from"./src-Dnyg7NDA.js";import{a as me,g as T,h as E,i as D,m as he,n as O,p as ge,r as k}from"./with-widget-canvas-qDBjkP46.js";import{n as _e,t as ve}from"./register-stats-mocks-DMEcE_vc.js";import{n as ye,t as A}from"./force-stats-mock-state-Brky9iCl.js";var be,xe,j,M,N,P,F,I,L,R,Se=e((()=>{be=`_root_33236_1`,xe=`_trail_33236_9`,j=`_content_33236_13`,M=`_bodyHeader_33236_20`,N=`_stateArea_33236_27`,P=`_chartArea_33236_32`,F=`_leaderboardPanel_33236_42`,I=`_leaderboard_33236_42`,L=`_geoChart_33236_58`,R={root:be,trail:xe,content:j,bodyHeader:M,stateArea:N,chartArea:P,leaderboardPanel:F,leaderboard:I,geoChart:L}}));function Ce({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let o=JSON.stringify(i),[s,c]=(0,a.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==o||s.data!==e)&&c({drillDepth:r,paramsKey:o,data:e,hasComparison:t}),n&&s&&s.paramsKey===o&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0}:{data:e,hasComparison:t,isHeld:!1}}var we=e((()=>{o()}));function Te(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function Ee({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:u,refetch:d}=p({...e,geoMode:n,max:t,...x(r)},{maxRows:t}),f=(0,a.useMemo)(()=>(i?.rows??[]).map(Te),[i]);return{data:f,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:f.length===0&&u,refetch:d}}var De=e((()=>{m(),o(),C()}));function Oe({geoGranularity:e}){d();let{reportParams:n}=ie(),{drillDownItem:i,drillDown:o,resetDrillDown:l}=re(),u=i?.country,f=e,p=0;i&&(f=i.region?`city`:`region`,p=i.region?2:1);let m=(0,a.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),g=Ee({reportParams:n,max:10,geoMode:f,filter:m}),{isLoading:_,isFetching:v,isError:y,refetch:b}=g,{data:x,hasComparison:S,isHeld:C}=Ce({...g,drillDepth:p,reportParams:n}),me=(0,a.useMemo)(()=>pe(w(f),m),[f,m]),T=(0,a.useMemo)(()=>(C?[]:x).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[x,C]),E=(0,a.useMemo)(()=>{let e=e=>{if(C||!e.countryCode)return{kind:`static`};let n={code:e.countryCode,name:e.countryFull};return f===`country`?{kind:`drillDown`,onClick:()=>o({country:n}),ariaLabel:r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:f===`region`?{kind:`drillDown`,onClick:()=>o({country:n,region:e.label}),ariaLabel:r(t(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}},n=te(x.map(e=>e.value),S?x.map(e=>e.previousValue):[]);return x.map(t=>{let r=ee(t.countryCode),i=t.previousValue;return{id:t.key,...ce({label:t.label,media:{kind:`flag`,url:r??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:i,currentShare:h(t.value,n),previousShare:S&&i!==void 0?h(i,n):void 0,delta:S&&i!==void 0?ne(t.value,i):void 0}})},[x,f,S,C,o]),D=i?.region&&e===`country`?i.country:null,he=(0,a.useCallback)(()=>{D?o({country:D}):l()},[D,l,o]),O=i?(0,B.jsx)(se,{label:D?.name??t(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:D?r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),D.name):t(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:he,current:i.region??i.country.name,className:R.trail}):null,ge=O?(0,B.jsx)(s,{direction:`row`,align:`center`,className:R.bodyHeader,children:O}):null;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(`div`,{className:R.content,children:[ge,(0,B.jsx)(`div`,{className:R.stateArea,children:(0,B.jsx)(oe,{isLoading:_&&!C,isFetching:v,isError:y,isEmpty:x.length===0,error:{description:t(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:b}]},children:(0,B.jsxs)(`div`,{className:R.chartArea,children:[(0,B.jsx)(c,{isDisabled:C,className:R.leaderboardPanel,children:(0,B.jsx)(ae,{data:E,loading:C,withOverlayLabel:!0,withComparison:S,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:R.leaderboard})}),(0,B.jsx)(`div`,{className:R.geoChart,children:(0,B.jsx)(de,{rows:T,mode:f,focusCountry:u,resizeDebounceTime:100})})]})})})]}),(0,B.jsxs)(le,{children:[(0,B.jsx)(ue,{report:`locations`,section:w(e)}),(0,B.jsx)(fe,{exporter:me,status:{isLoading:_,isFetching:v,isError:y},rowCount:x.length})]})]})}function z({attributes:e={}}){let t=e?.geoGranularity??V,n=Object.values(S).includes(t)?t:V;return(0,B.jsx)(g,{attributes:e,children:(0,B.jsx)(`div`,{className:R.root,children:(0,B.jsx)(Oe,{geoGranularity:n},n)})})}var B,V,ke=e((()=>{m(),C(),l(),o(),n(),u(),Se(),we(),De(),B=i(),V=`country`})),Ae,je=e((()=>{n(),Ae={attributes:[{id:`geoGranularity`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:t(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:t(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be=e((()=>{Me=`jpa/locations`,Ne=`jpa/map-marker`,Pe=`Top locations`,Fe=`Where your visitors are viewing from — by country, region, or city.`,Ie={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Le=`stats`,Re=`framed`,ze={name:Me,icon:Ne,title:Pe,description:Fe,help:Ie,category:Le,presentation:Re}}));function Ve({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:f(e)}}function H(e){return(0,W.jsx)(z,{attributes:Ve(e)})}function U(e){return(0,W.jsx)(z,{attributes:{geoGranularity:`country`,reportParams:f(!1,e)}})}function He(e){return(0,W.jsx)(z,{...e})}function Ue({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(he,{...n,widgetType:Ge,renderModule:We,renderComponent:He,attributes:Ve({withComparison:e,geoGranularity:t})})}var W,We,Ge,Ke,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),E(),me(),y(),O(),_(),ve(),ye(),ke(),je(),Be(),W=i(),v(),_e(),We=`storybook/locations`,Ge=D(ze,Ae),Ke={title:`Packages/Premium Analytics/Widgets/Locations`,component:z,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[k,b]},K={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[k,b]},q={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[k,b]},J={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[k,b]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[k,b],beforeEach:()=>(A(`stats/location-views`,`loading`),()=>A(`stats/location-views`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[k,b],beforeEach:()=>(A(`stats/location-views`,`error`),()=>A(`stats/location-views`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[k,b],beforeEach:()=>(A(`stats/location-views`,`empty`),()=>A(`stats/location-views`,null))},Q={render:e=>(0,W.jsx)(Ue,{...e}),args:{...ge,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...T,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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