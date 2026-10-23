import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{C as t,n,t as r}from"./build-module-DQe4AOzJ.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{Mu as a,bu as o}from"./build-module-BI3_PVVO.js";import{F as s,f as c,gn as ee,in as l,o as te,tn as u,vn as ne,z as re}from"./charts-provider-CHpSzGut.js";import{an as ie}from"./build-module-DhwsekaI.js";import{t as d,v as ae}from"./build-module-BVQ1F0gg.js";import{t as f}from"./src-BlGMEEBc.js";import{St as p,Wt as oe,hn as m,o as se,t as h}from"./src-BEwaewMJ.js";import{t as ce}from"./widget-state-BwHOn80-.js";import{n as g}from"./locked-widget-D7g55Aat.js";import"./constants-B9OTkkI1.js";import{r as le}from"./leaderboard-skeleton-CTUQ1y61.js";import{n as _,r as v}from"./register-report-mocks-D47Rougd.js";import{M as ue,d as de,f as fe,i as y,l as b,m as pe,n as x,r as S,u as C}from"./with-story-router-B7u0fWxg.js";import{n as me,s as he}from"./locations-geo-chart-Di6ZUBL2.js";import{a as ge,g as w,h as _e,i as ve,m as T,n as ye,p as E,r as D}from"./with-widget-canvas-aKDVvh1v.js";import{n as be,t as O}from"./use-no-views-empty-state-bJgzD4tv.js";import{n as k,t as A}from"./register-stats-mocks-Nvcu00DF.js";import{n as xe,t as j}from"./force-stats-mock-state-BxPlbF2m.js";var M,N,P,F,I,Se,Ce,we,Te,L,Ee=e((()=>{M=`_root_33236_1`,N=`_trail_33236_9`,P=`_content_33236_13`,F=`_bodyHeader_33236_20`,I=`_stateArea_33236_27`,Se=`_chartArea_33236_32`,Ce=`_leaderboardPanel_33236_42`,we=`_leaderboard_33236_42`,Te=`_geoChart_33236_58`,L={root:M,trail:N,content:P,bodyHeader:F,stateArea:I,chartArea:Se,leaderboardPanel:Ce,leaderboard:we,geoChart:Te}}));function De({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let o=JSON.stringify(i),[s,c]=(0,a.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==o||s.data!==e)&&c({drillDepth:r,paramsKey:o,data:e,hasComparison:t}),n&&s&&s.paramsKey===o&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0,drillDepth:s.drillDepth}:{data:e,hasComparison:t,isHeld:!1,drillDepth:r}}var Oe=e((()=>{o()}));function ke(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function Ae({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,hasData:ee,isError:l,refetch:te}=p({...e,geoMode:n,max:t,...de(r)},{maxRows:t}),u=(0,a.useMemo)(()=>(i?.rows??[]).map(ke),[i]);return{data:u,hasComparison:o,isLoading:s,isFetching:c,hasData:ee,isError:u.length===0&&l,refetch:te}}var je=e((()=>{h(),o(),y()}));function Me(e,t){return e===0?t:[`region`,`city`][e-1]}function Ne({geoGranularity:e}){oe();let{reportParams:r}=re(),{drillDownItem:i,drillDown:o,resetDrillDown:s}=te(),d=i?.country,f=0;i&&(f=i.region?2:1);let p=Me(f,e),m=(0,a.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),h=Ae({reportParams:r,max:10,geoMode:p,filter:m}),{isLoading:g,isFetching:_,isError:v,refetch:de}=h,{data:y,hasComparison:b,isHeld:x,drillDepth:S}=De({...h,drillDepth:f,reportParams:r}),ge=fe(C(Me(S,e))),w=be({isLoading:g&&!x,isError:v,isEmpty:y.length===0},n(`You don’t have locations recorded yet.`,`jetpack-premium-analytics-pkg`)),_e=(0,a.useMemo)(()=>pe(C(p),m),[p,m]),ve=(0,a.useMemo)(()=>(x?[]:y).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[y,x]),T=se(`regions-cities`),ye=(0,a.useMemo)(()=>{let e=e=>{if(x||!e.countryCode||T)return{kind:`static`};let r={code:e.countryCode,name:e.countryFull};return p===`country`?{kind:`drillDown`,onClick:()=>o({country:r}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:p===`region`?{kind:`drillDown`,onClick:()=>o({country:r,region:e.label}),ariaLabel:t(n(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}},r=u(y.map(e=>e.value),b?y.map(e=>e.previousValue):[]);return y.map(t=>{let n=ee(t.countryCode),i=t.previousValue;return{id:t.key,...he({label:t.label,media:{kind:`flag`,url:n??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:i,currentShare:l(t.value,r),previousShare:b&&i!==void 0?l(i,r):void 0,delta:b&&i!==void 0?ne(t.value,i):void 0}})},[y,p,b,x,T,o]),E=i?.region&&e===`country`?i.country:null,D=(0,a.useCallback)(()=>{E?o({country:E}):s()},[E,s,o]),O=i?(0,z.jsx)(ue,{label:E?.name??n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:E?t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),E.name):n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:D,current:i.region??i.country.name,className:L.trail}):null,k=O?(0,z.jsx)(ie,{direction:`row`,align:`center`,className:L.bodyHeader,children:O}):null,A=n(`Top locations`,`jetpack-premium-analytics-pkg`);return c({report:`locations`,section:C(e),csv:{exporter:_e,status:{isLoading:g,isFetching:_,isError:v},rowCount:y.length}}),(0,z.jsxs)(`div`,{className:L.content,children:[k,(0,z.jsx)(`div`,{className:L.stateArea,children:(0,z.jsx)(ce,{isLoading:w.isLoading,isFetching:_,isError:v,isEmpty:y.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:de}]},empty:w.empty,children:(0,z.jsxs)(`div`,{className:L.chartArea,children:[(0,z.jsx)(ae,{isDisabled:x,className:L.leaderboardPanel,children:(0,z.jsx)(le,{data:ye,loading:x,withOverlayLabel:!0,withComparison:b,showLegend:!1,columns:{label:ge,metric:`views`},dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:L.leaderboard,chartTitle:A})}),(0,z.jsx)(`div`,{className:L.geoChart,children:(0,z.jsx)(me,{chartTitle:A,rows:ve,mode:p,focusCountry:d,resizeDebounceTime:100})})]})})})]})}function R({attributes:e={}}){let t=e?.geoGranularity??B,n=Object.values(b).includes(t)?t:B;return n!==`country`&&se(`regions-cities`)?(0,z.jsx)(s,{attributes:e,children:(0,z.jsx)(g,{feature:`regions-cities`})}):(0,z.jsx)(s,{attributes:e,children:(0,z.jsx)(`div`,{className:L.root,children:(0,z.jsx)(Ne,{geoGranularity:n},n)})})}var z,B,Pe=e((()=>{h(),y(),d(),o(),r(),f(),O(),Ee(),Oe(),je(),z=i(),B=`country`})),Fe,Ie=e((()=>{Fe={example:{attributes:{geoGranularity:`country`}}}})),Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke=e((()=>{Le=`jpa/locations`,Re=`jpa/map-marker`,ze=`Top locations`,Be=`Where your visitors are viewing from — by country, region, or city.`,Ve={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},He=`stats`,Ue=`framed`,We=[{id:`geoGranularity`,type:`jpa/select`,label:`View by`,relevance:`high`,elements:[{value:`country`,label:`Countries`},{value:`region`,label:`Regions`},{value:`city`,label:`Cities`}]}],Ge={name:Le,icon:Re,title:ze,description:Be,help:Ve,category:He,presentation:Ue,attributes:We}}));function qe({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:m(e)}}function V(e){return(0,U.jsx)(R,{attributes:qe(e)})}function H(e){return(0,U.jsx)(R,{attributes:{geoGranularity:`country`,reportParams:m(!1,e)}})}function Je(e){return(0,U.jsx)(R,{...e})}function Ye({withComparison:e,geoGranularity:t,...n}){return(0,U.jsx)(T,{...n,widgetType:W,renderModule:Xe,renderComponent:Je,attributes:qe({withComparison:e,geoGranularity:t})})}var U,Xe,W,Ze,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),_e(),ge(),x(),ye(),_(),A(),xe(),Pe(),Ie(),Ke(),U=i(),v(),k(),Xe=`storybook/locations`,W=ve(Ge,Fe),Ze={title:`Packages/Premium Analytics/Widgets/Locations`,component:R,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:V,args:{withComparison:!1,geoGranularity:`country`},decorators:[D,S]},K={render:V,args:{withComparison:!0,geoGranularity:`country`},decorators:[D,S]},q={render:V,args:{withComparison:!1,geoGranularity:`region`},decorators:[D,S]},J={render:V,args:{withComparison:!1,geoGranularity:`city`},decorators:[D,S]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[D,S],beforeEach:()=>(j(`stats/location-views`,`loading`),()=>j(`stats/location-views`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[D,S],beforeEach:()=>(j(`stats/location-views`,`error`),()=>j(`stats/location-views`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[D,S],beforeEach:()=>(j(`stats/location-views`,`empty`),()=>j(`stats/location-views`,null))},Q={render:e=>(0,U.jsx)(Ye,{...e}),args:{...E,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...w,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},$=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}}}))();export{J as CitiesMode,G as Default,Z as Empty,X as Error,Y as Loading,q as RegionsMode,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,Ze as default};