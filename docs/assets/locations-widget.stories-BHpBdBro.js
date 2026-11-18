import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{b as t,n,t as r}from"./build-module-BXs6jvWf.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{p as a,t as o}from"./build-module-nWjoY2Yf.js";import{Zr as s,t as c,v as ee}from"./build-module-DfajCjHN.js";import{t as l}from"./src-DADrLB41.js";import{Dt as u,Yt as te,s as d,t as f,xn as p}from"./src-0XClGMDx.js";import{H as ne,I as m,f as re,o as ie,rn as ae}from"./charts-provider-BV34n8Rd.js";import{t as oe}from"./widget-state-CkWN1S5r.js";import{d as h,f as se,i as g,j as _,l as v,m as ce,n as y,q as le,r as b,u as x}from"./with-story-router-ODx8uUox.js";import"./constants-m1ZDneCk.js";import{r as ue}from"./leaderboard-skeleton-UMVRakaI.js";import{n as S,r as de}from"./register-report-mocks-Ch99HCsV.js";import{n as fe,s as pe}from"./locations-geo-chart-CV19Xcag.js";import{a as me,c as C,i as w,l as he,o as T,r as ge,s as E,u as _e}from"./with-widget-canvas-BZ5RwT25.js";import{n as ve,t as D}from"./use-no-views-empty-state-xHD-ZXpu.js";import{n as O,t as ye}from"./register-stats-mocks-CgwFqLbO.js";import{n as be,t as k}from"./force-stats-mock-state-BAjXKLs7.js";var A,j,M,N,P,F,I,L,xe,R,Se=e((()=>{A=`_root_33236_1`,j=`_trail_33236_9`,M=`_content_33236_13`,N=`_bodyHeader_33236_20`,P=`_stateArea_33236_27`,F=`_chartArea_33236_32`,I=`_leaderboardPanel_33236_42`,L=`_leaderboard_33236_42`,xe=`_geoChart_33236_58`,R={root:A,trail:j,content:M,bodyHeader:N,stateArea:P,chartArea:F,leaderboardPanel:I,leaderboard:L,geoChart:xe}}));function Ce({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let o=JSON.stringify(i),[s,c]=(0,a.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==o||s.data!==e)&&c({drillDepth:r,paramsKey:o,data:e,hasComparison:t}),n&&s&&s.paramsKey===o&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0,drillDepth:s.drillDepth}:{data:e,hasComparison:t,isHeld:!1,drillDepth:r}}var we=e((()=>{o()}));function Te(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function Ee({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,hasData:ee,isError:l,refetch:te}=u({...e,geoMode:n,max:t,...h(r)},{maxRows:t}),d=(0,a.useMemo)(()=>(i?.rows??[]).map(Te),[i]);return{data:d,hasComparison:o,isLoading:s,isFetching:c,hasData:ee,isError:d.length===0&&l,refetch:te}}var De=e((()=>{f(),o(),g()}));function Oe(e,t){return e===0?t:[`region`,`city`][e-1]}function ke({geoGranularity:e}){te();let{reportParams:r}=ne(),{drillDownItem:i,drillDown:o,resetDrillDown:c}=ie(),l=i?.country,u=0;i&&(u=i.region?2:1);let f=Oe(u,e),p=(0,a.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),m=Ee({reportParams:r,max:10,geoMode:f,filter:p}),{isLoading:h,isFetching:g,isError:_,refetch:v}=m,{data:y,hasComparison:b,isHeld:S,drillDepth:de}=Ce({...m,drillDepth:u,reportParams:r}),me=se(x(Oe(de,e))),C=ve({isLoading:h&&!S,isError:_,isEmpty:y.length===0},n(`You don’t have locations recorded yet.`,`jetpack-premium-analytics-pkg`)),w=(0,a.useMemo)(()=>ce(x(f),p),[f,p]),he=(0,a.useMemo)(()=>(S?[]:y).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[y,S]),T=d(`regions-cities`),ge=(0,a.useMemo)(()=>{let e=e=>{if(S||!e.countryCode||T)return{kind:`static`};let r={code:e.countryCode,name:e.countryFull};return f===`country`?{kind:`drillDown`,onClick:()=>o({country:r}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:f===`region`?{kind:`drillDown`,onClick:()=>o({country:r,region:e.label}),ariaLabel:t(n(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}};return y.map(t=>{let n=ae(t.countryCode);return{id:t.key,...pe({label:t.label,media:{kind:`flag`,url:n??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:t.previousValue}})},[y,f,S,T,o]),E=i?.region&&e===`country`?i.country:null,_e=(0,a.useCallback)(()=>{E?o({country:E}):c()},[E,c,o]),D=i?(0,B.jsx)(le,{label:E?.name??n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:E?t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),E.name):n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:_e,current:i.region??i.country.name,className:R.trail}):null,O=D?(0,B.jsx)(s,{direction:`row`,align:`center`,className:R.bodyHeader,children:D}):null;return re({report:`locations`,section:x(e),csv:{exporter:w,status:{isLoading:h,isFetching:g,isError:_},rowCount:y.length}}),(0,B.jsxs)(`div`,{className:R.content,children:[O,(0,B.jsx)(`div`,{className:R.stateArea,children:(0,B.jsx)(oe,{isLoading:C.isLoading,isFetching:g,isError:_,isEmpty:y.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:v}]},empty:C.empty,children:(0,B.jsxs)(`div`,{className:R.chartArea,children:[(0,B.jsx)(ee,{isDisabled:S,className:R.leaderboardPanel,children:(0,B.jsx)(ue,{data:ge,loading:S,withOverlayLabel:!0,withComparison:b,showLegend:!1,columns:{label:me,metric:`views`},dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:R.leaderboard})}),(0,B.jsx)(`div`,{className:R.geoChart,children:(0,B.jsx)(fe,{rows:he,mode:f,focusCountry:l,resizeDebounceTime:100})})]})})})]})}function z({attributes:e={}}){let t=e?.geoGranularity??V,n=Object.values(v).includes(t)?t:V;return n!==`country`&&d(`regions-cities`)?(0,B.jsx)(m,{attributes:e,children:(0,B.jsx)(_,{feature:`regions-cities`})}):(0,B.jsx)(m,{attributes:e,children:(0,B.jsx)(`div`,{className:R.root,children:(0,B.jsx)(ke,{geoGranularity:n},n)})})}var B,V,Ae=e((()=>{f(),g(),c(),o(),r(),l(),D(),Se(),we(),De(),B=i(),V=`country`})),je,Me=e((()=>{je={example:{attributes:{geoGranularity:`country`}}}})),Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He=e((()=>{Ne=`jpa/locations`,Pe=`jpa/map-marker`,Fe=`Top locations`,Ie=`Where your visitors are viewing from — by country, region, or city.`,Le={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Re=`stats`,ze=`framed`,Be=[{id:`geoGranularity`,type:`jpa/toggle-group`,label:`View by`,relevance:`high`,elements:[{value:`country`,label:`Countries`},{value:`region`,label:`Regions`},{value:`city`,label:`Cities`}]}],Ve={name:Ne,icon:Pe,title:Fe,description:Ie,help:Le,category:Re,presentation:ze,attributes:Be}}));function Ue({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:p(e)}}function H(e){return(0,W.jsx)(z,{attributes:Ue(e)})}function U(e){return(0,W.jsx)(z,{attributes:{geoGranularity:`country`,reportParams:p(!1,e)}})}function We(e){return(0,W.jsx)(z,{...e})}function Ge({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(C,{...n,widgetType:qe,renderModule:Ke,renderComponent:We,attributes:Ue({withComparison:e,geoGranularity:t})})}var W,Ke,qe,Je,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),he(),T(),y(),ge(),S(),ye(),be(),Ae(),Me(),He(),W=i(),de(),O(),Ke=`storybook/locations`,qe=me(Ve,je),Je={title:`Packages/Premium Analytics/Widgets/Locations`,component:z,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[w,b]},K={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[w,b]},q={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[w,b]},J={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[w,b]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[w,b],beforeEach:()=>(k(`stats/location-views`,`loading`),()=>k(`stats/location-views`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[w,b],beforeEach:()=>(k(`stats/location-views`,`error`),()=>k(`stats/location-views`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[w,b],beforeEach:()=>(k(`stats/location-views`,`empty`),()=>k(`stats/location-views`,null))},Q={tags:[`widget-dashboard`],render:e=>(0,W.jsx)(Ge,{...e}),args:{...E,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{..._e,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},$=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
  tags: ['widget-dashboard'],
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
}`,...Q.parameters?.docs?.source}}}}))();export{J as CitiesMode,G as Default,Z as Empty,X as Error,Y as Loading,q as RegionsMode,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,Je as default};