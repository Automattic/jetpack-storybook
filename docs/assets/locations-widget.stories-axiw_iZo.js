import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{C as t,n,t as r}from"./build-module-DQe4AOzJ.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{Mu as a,bu as o}from"./build-module-BI3_PVVO.js";import{F as s,bn as c,f as ee,o as te,on as l,rn as u,vn as ne,z as re}from"./charts-provider-DWkxm3u5.js";import{an as ie}from"./build-module-BN2Djb9A.js";import{t as d,v as ae}from"./build-module-BVQ1F0gg.js";import{t as f}from"./src-C0nwXc6l.js";import{St as p,Wt as oe,hn as m,o as se,t as h}from"./src-DfQ3R5pV.js";import{t as ce}from"./widget-state-B-3KFlZy.js";import{D as g,L as le,d as _,f as ue,i as v,l as de,m as fe,n as y,r as b,u as x}from"./with-story-router-CBFCRmvT.js";import"./constants-B9OTkkI1.js";import{r as pe}from"./leaderboard-skeleton-COjQurU9.js";import{n as S,r as me}from"./register-report-mocks-xm2nLXrN.js";import{n as he,s as ge}from"./locations-geo-chart-DtblBzH9.js";import{a as _e,g as C,h as ve,i as ye,m as w,n as be,p as T,r as E}from"./with-widget-canvas-f-HWvqgU.js";import{n as xe,t as D}from"./use-no-views-empty-state-fBs8woUf.js";import{n as O,t as k}from"./register-stats-mocks-Nvcu00DF.js";import{n as Se,t as A}from"./force-stats-mock-state-rsmsojFj.js";var j,M,N,P,F,I,Ce,we,Te,L,Ee=e((()=>{j=`_root_33236_1`,M=`_trail_33236_9`,N=`_content_33236_13`,P=`_bodyHeader_33236_20`,F=`_stateArea_33236_27`,I=`_chartArea_33236_32`,Ce=`_leaderboardPanel_33236_42`,we=`_leaderboard_33236_42`,Te=`_geoChart_33236_58`,L={root:j,trail:M,content:N,bodyHeader:P,stateArea:F,chartArea:I,leaderboardPanel:Ce,leaderboard:we,geoChart:Te}}));function De({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let o=JSON.stringify(i),[s,c]=(0,a.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==o||s.data!==e)&&c({drillDepth:r,paramsKey:o,data:e,hasComparison:t}),n&&s&&s.paramsKey===o&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0,drillDepth:s.drillDepth}:{data:e,hasComparison:t,isHeld:!1,drillDepth:r}}var Oe=e((()=>{o()}));function ke(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function Ae({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,hasData:ee,isError:te,refetch:l}=p({...e,geoMode:n,max:t,..._(r)},{maxRows:t}),u=(0,a.useMemo)(()=>(i?.rows??[]).map(ke),[i]);return{data:u,hasComparison:o,isLoading:s,isFetching:c,hasData:ee,isError:u.length===0&&te,refetch:l}}var je=e((()=>{h(),o(),v()}));function Me(e,t){return e===0?t:[`region`,`city`][e-1]}function Ne({geoGranularity:e}){oe();let{reportParams:r}=re(),{drillDownItem:i,drillDown:o,resetDrillDown:s}=te(),d=i?.country,f=0;i&&(f=i.region?2:1);let p=Me(f,e),m=(0,a.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),h=Ae({reportParams:r,max:10,geoMode:p,filter:m}),{isLoading:g,isFetching:_,isError:v,refetch:de}=h,{data:y,hasComparison:b,isHeld:S,drillDepth:me}=De({...h,drillDepth:f,reportParams:r}),_e=ue(x(Me(me,e))),C=xe({isLoading:g&&!S,isError:v,isEmpty:y.length===0},n(`You don’t have locations recorded yet.`,`jetpack-premium-analytics-pkg`)),ve=(0,a.useMemo)(()=>fe(x(p),m),[p,m]),ye=(0,a.useMemo)(()=>(S?[]:y).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[y,S]),w=se(`regions-cities`),be=(0,a.useMemo)(()=>{let e=e=>{if(S||!e.countryCode||w)return{kind:`static`};let r={code:e.countryCode,name:e.countryFull};return p===`country`?{kind:`drillDown`,onClick:()=>o({country:r}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:p===`region`?{kind:`drillDown`,onClick:()=>o({country:r,region:e.label}),ariaLabel:t(n(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}},r=u(y.map(e=>e.value),b?y.map(e=>e.previousValue):[]);return y.map(t=>{let n=ne(t.countryCode),i=t.previousValue;return{id:t.key,...ge({label:t.label,media:{kind:`flag`,url:n??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:i,currentShare:l(t.value,r),previousShare:b&&i!==void 0?l(i,r):void 0,delta:b&&i!==void 0?c(t.value,i):void 0}})},[y,p,b,S,w,o]),T=i?.region&&e===`country`?i.country:null,E=(0,a.useCallback)(()=>{T?o({country:T}):s()},[T,s,o]),D=i?(0,z.jsx)(le,{label:T?.name??n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:T?t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),T.name):n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:E,current:i.region??i.country.name,className:L.trail}):null,O=D?(0,z.jsx)(ie,{direction:`row`,align:`center`,className:L.bodyHeader,children:D}):null,k=n(`Top locations`,`jetpack-premium-analytics-pkg`);return ee({report:`locations`,section:x(e),csv:{exporter:ve,status:{isLoading:g,isFetching:_,isError:v},rowCount:y.length}}),(0,z.jsxs)(`div`,{className:L.content,children:[O,(0,z.jsx)(`div`,{className:L.stateArea,children:(0,z.jsx)(ce,{isLoading:C.isLoading,isFetching:_,isError:v,isEmpty:y.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:de}]},empty:C.empty,children:(0,z.jsxs)(`div`,{className:L.chartArea,children:[(0,z.jsx)(ae,{isDisabled:S,className:L.leaderboardPanel,children:(0,z.jsx)(pe,{data:be,loading:S,withOverlayLabel:!0,withComparison:b,showLegend:!1,columns:{label:_e,metric:`views`},dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:L.leaderboard,chartTitle:k})}),(0,z.jsx)(`div`,{className:L.geoChart,children:(0,z.jsx)(he,{chartTitle:k,rows:ye,mode:p,focusCountry:d,resizeDebounceTime:100})})]})})})]})}function R({attributes:e={}}){let t=e?.geoGranularity??B,n=Object.values(de).includes(t)?t:B;return n!==`country`&&se(`regions-cities`)?(0,z.jsx)(s,{attributes:e,children:(0,z.jsx)(g,{feature:`regions-cities`})}):(0,z.jsx)(s,{attributes:e,children:(0,z.jsx)(`div`,{className:L.root,children:(0,z.jsx)(Ne,{geoGranularity:n},n)})})}var z,B,Pe=e((()=>{h(),v(),d(),o(),r(),f(),D(),Ee(),Oe(),je(),z=i(),B=`country`})),Fe,Ie=e((()=>{Fe={example:{attributes:{geoGranularity:`country`}}}})),Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke=e((()=>{Le=`jpa/locations`,Re=`jpa/map-marker`,ze=`Top locations`,Be=`Where your visitors are viewing from — by country, region, or city.`,Ve={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},He=`stats`,Ue=`framed`,We=[{id:`geoGranularity`,type:`jpa/select`,label:`View by`,relevance:`high`,elements:[{value:`country`,label:`Countries`},{value:`region`,label:`Regions`},{value:`city`,label:`Cities`}]}],Ge={name:Le,icon:Re,title:ze,description:Be,help:Ve,category:He,presentation:Ue,attributes:We}}));function qe({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:m(e)}}function V(e){return(0,U.jsx)(R,{attributes:qe(e)})}function H(e){return(0,U.jsx)(R,{attributes:{geoGranularity:`country`,reportParams:m(!1,e)}})}function Je(e){return(0,U.jsx)(R,{...e})}function Ye({withComparison:e,geoGranularity:t,...n}){return(0,U.jsx)(w,{...n,widgetType:W,renderModule:Xe,renderComponent:Je,attributes:qe({withComparison:e,geoGranularity:t})})}var U,Xe,W,Ze,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),ve(),_e(),y(),be(),S(),k(),Se(),Pe(),Ie(),Ke(),U=i(),me(),O(),Xe=`storybook/locations`,W=ye(Ge,Fe),Ze={title:`Packages/Premium Analytics/Widgets/Locations`,component:R,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:V,args:{withComparison:!1,geoGranularity:`country`},decorators:[E,b]},K={render:V,args:{withComparison:!0,geoGranularity:`country`},decorators:[E,b]},q={render:V,args:{withComparison:!1,geoGranularity:`region`},decorators:[E,b]},J={render:V,args:{withComparison:!1,geoGranularity:`city`},decorators:[E,b]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[E,b],beforeEach:()=>(A(`stats/location-views`,`loading`),()=>A(`stats/location-views`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[E,b],beforeEach:()=>(A(`stats/location-views`,`error`),()=>A(`stats/location-views`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[E,b],beforeEach:()=>(A(`stats/location-views`,`empty`),()=>A(`stats/location-views`,null))},Q={render:e=>(0,U.jsx)(Ye,{...e}),args:{...T,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...C,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},$=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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