import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{C as t,n,t as r}from"./build-module-DQe4AOzJ.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{Mu as a,bu as o}from"./build-module-BI3_PVVO.js";import{an as s}from"./build-module-DhwsekaI.js";import{t as c,v as l}from"./build-module-BVQ1F0gg.js";import{t as u}from"./src-aM0T7o7l.js";import{Ht as ee,bt as d,o as f,pn as p,t as m}from"./src-5g9sGwvT.js";import{F as h,Ft as g,Mt as te,Yt as ne,f as re,o as ie,qt as ae,z as oe}from"./charts-provider-bUtI3a4j.js";import{t as se}from"./widget-state-DmJn3qOC.js";import{n as _}from"./locked-widget-C3AQPPCr.js";import"./rows-DoJXoHhN.js";import{r as ce}from"./leaderboard-skeleton-C5ZIz2fL.js";import{a as v,o as y}from"./widget-state-QAs2RT9y.js";import{n as b,r as x}from"./with-story-router-CyVN4A4U.js";import{i as le}from"./leaderboard-CBd6vP-k.js";import{i as ue}from"./build-leaderboard-chart-data-DKIdE2af.js";import{n as de}from"./locations-geo-chart-C95uBbZX.js";import{A as S,H as C,M as fe,N as pe,U as w,V as me,W as he,c as T,d as ge,j as E,l as _e,o as D,s as O,t as k}from"./src-8B4VP-Wm.js";import{n as ve,t as A}from"./use-no-views-empty-state-CxhOKb5k.js";import{n as j,t as M}from"./register-stats-mocks-Nvcu00DF.js";import{n as ye,t as N}from"./force-stats-mock-state-BRgWvvYE.js";var P,F,I,be,xe,Se,Ce,we,Te,L,Ee=e((()=>{P=`_root_33236_1`,F=`_trail_33236_9`,I=`_content_33236_13`,be=`_bodyHeader_33236_20`,xe=`_stateArea_33236_27`,Se=`_chartArea_33236_32`,Ce=`_leaderboardPanel_33236_42`,we=`_leaderboard_33236_42`,Te=`_geoChart_33236_58`,L={root:P,trail:F,content:I,bodyHeader:be,stateArea:xe,chartArea:Se,leaderboardPanel:Ce,leaderboard:we,geoChart:Te}}));function De({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let o=JSON.stringify(i),[s,c]=(0,a.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==o||s.data!==e)&&c({drillDepth:r,paramsKey:o,data:e,hasComparison:t}),n&&s&&s.paramsKey===o&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0,drillDepth:s.drillDepth}:{data:e,hasComparison:t,isHeld:!1,drillDepth:r}}var Oe=e((()=>{o()}));function ke(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function Ae({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:u,refetch:ee}=d({...e,geoMode:n,max:t,...T(r)},{maxRows:t}),f=(0,a.useMemo)(()=>(i?.rows??[]).map(ke),[i]);return{data:f,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:f.length===0&&u,refetch:ee}}var je=e((()=>{m(),o(),k()}));function Me(e,t){return e===0?t:[`region`,`city`][e-1]}function Ne({geoGranularity:e}){ee();let{reportParams:r}=oe(),{drillDownItem:i,drillDown:o,resetDrillDown:c}=ie(),u=i?.country,d=0;i&&(d=i.region?2:1);let p=Me(d,e),m=(0,a.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),h=Ae({reportParams:r,max:10,geoMode:p,filter:m}),{isLoading:_,isFetching:v,isError:y,refetch:b}=h,{data:x,hasComparison:S,isHeld:C,drillDepth:fe}=De({...h,drillDepth:d,reportParams:r}),pe=_e(O(Me(fe,e))),w=ve({isLoading:_&&!C,isError:y,isEmpty:x.length===0},n(`You don’t have locations recorded yet.`,`jetpack-premium-analytics-pkg`)),me=(0,a.useMemo)(()=>ge(O(p),m),[p,m]),he=(0,a.useMemo)(()=>(C?[]:x).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[x,C]),T=f(`regions-cities`),E=(0,a.useMemo)(()=>{let e=e=>{if(C||!e.countryCode||T)return{kind:`static`};let r={code:e.countryCode,name:e.countryFull};return p===`country`?{kind:`drillDown`,onClick:()=>o({country:r}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:p===`region`?{kind:`drillDown`,onClick:()=>o({country:r,region:e.label}),ariaLabel:t(n(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}},r=te(x.map(e=>e.value),S?x.map(e=>e.previousValue):[]);return x.map(t=>{let n=ae(t.countryCode),i=t.previousValue;return{id:t.key,...ue({label:t.label,media:{kind:`flag`,url:n??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:i,currentShare:g(t.value,r),previousShare:S&&i!==void 0?g(i,r):void 0,delta:S&&i!==void 0?ne(t.value,i):void 0}})},[x,p,S,C,T,o]),D=i?.region&&e===`country`?i.country:null,k=(0,a.useCallback)(()=>{D?o({country:D}):c()},[D,c,o]),A=i?(0,z.jsx)(le,{label:D?.name??n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:D?t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),D.name):n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:k,current:i.region??i.country.name,className:L.trail}):null,j=A?(0,z.jsx)(s,{direction:`row`,align:`center`,className:L.bodyHeader,children:A}):null,M=n(`Top locations`,`jetpack-premium-analytics-pkg`);return re({report:`locations`,section:O(e),csv:{exporter:me,status:{isLoading:_,isFetching:v,isError:y},rowCount:x.length}}),(0,z.jsxs)(`div`,{className:L.content,children:[j,(0,z.jsx)(`div`,{className:L.stateArea,children:(0,z.jsx)(se,{isLoading:w.isLoading,isFetching:v,isError:y,isEmpty:x.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:b}]},empty:w.empty,children:(0,z.jsxs)(`div`,{className:L.chartArea,children:[(0,z.jsx)(l,{isDisabled:C,className:L.leaderboardPanel,children:(0,z.jsx)(ce,{data:E,loading:C,withOverlayLabel:!0,withComparison:S,showLegend:!1,columns:{label:pe,metric:`views`},dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:L.leaderboard,chartTitle:M})}),(0,z.jsx)(`div`,{className:L.geoChart,children:(0,z.jsx)(de,{chartTitle:M,rows:he,mode:p,focusCountry:u,resizeDebounceTime:100})})]})})})]})}function R({attributes:e={}}){let t=e?.geoGranularity??B,n=Object.values(D).includes(t)?t:B;return n!==`country`&&f(`regions-cities`)?(0,z.jsx)(h,{attributes:e,children:(0,z.jsx)(_,{feature:`regions-cities`})}):(0,z.jsx)(h,{attributes:e,children:(0,z.jsx)(`div`,{className:L.root,children:(0,z.jsx)(Ne,{geoGranularity:n},n)})})}var z,B,Pe=e((()=>{m(),k(),c(),o(),r(),u(),A(),Ee(),Oe(),je(),z=i(),B=`country`})),Fe,Ie=e((()=>{Fe={example:{attributes:{geoGranularity:`country`}}}})),Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke=e((()=>{Le=`jpa/locations`,Re=`jpa/map-marker`,ze=`Top locations`,Be=`Where your visitors are viewing from — by country, region, or city.`,Ve={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},He=`stats`,Ue=`framed`,We=[{id:`geoGranularity`,type:`jpa/select`,label:`View by`,relevance:`high`,elements:[{value:`country`,label:`Countries`},{value:`region`,label:`Regions`},{value:`city`,label:`Cities`}]}],Ge={name:Le,icon:Re,title:ze,description:Be,help:Ve,category:He,presentation:Ue,attributes:We}}));function qe({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:p(e)}}function V(e){return(0,U.jsx)(R,{attributes:qe(e)})}function H(e){return(0,U.jsx)(R,{attributes:{geoGranularity:`country`,reportParams:p(!1,e)}})}function Je(e){return(0,U.jsx)(R,{...e})}function Ye({withComparison:e,geoGranularity:t,...n}){return(0,U.jsx)(C,{...n,widgetType:W,renderModule:Xe,renderComponent:Je,attributes:qe({withComparison:e,geoGranularity:t})})}var U,Xe,W,Ze,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),w(),pe(),b(),S(),v(),M(),ye(),Pe(),Ie(),Ke(),U=i(),y(),j(),Xe=`storybook/locations`,W=fe(Ge,Fe),Ze={title:`Packages/Premium Analytics/Widgets/Locations`,component:R,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:V,args:{withComparison:!1,geoGranularity:`country`},decorators:[E,x]},K={render:V,args:{withComparison:!0,geoGranularity:`country`},decorators:[E,x]},q={render:V,args:{withComparison:!1,geoGranularity:`region`},decorators:[E,x]},J={render:V,args:{withComparison:!1,geoGranularity:`city`},decorators:[E,x]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[E,x],beforeEach:()=>(N(`stats/location-views`,`loading`),()=>N(`stats/location-views`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[E,x],beforeEach:()=>(N(`stats/location-views`,`error`),()=>N(`stats/location-views`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[E,x],beforeEach:()=>(N(`stats/location-views`,`empty`),()=>N(`stats/location-views`,null))},Q={render:e=>(0,U.jsx)(Ye,{...e}),args:{...me,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...he,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},$=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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