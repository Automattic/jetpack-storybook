import{i as e}from"./preload-helper-usAeo7Bx.js";import{d as t,n,t as r}from"./build-module-BXPCp--5.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-Cm3Kd3py.js";import{It as s}from"./build-module-YF-BmBv-.js";import{g as c,t as l}from"./build-module-CEr4yIZs.js";import{t as u}from"./src-DOjYD6Qv.js";import{Lt as d,cn as f,ht as p,t as m}from"./src-CRO_I5he.js";import{Ot as ee,Yt as te,jt as h,m as g,o as ne,qt as re,v as ie}from"./charts-provider-C1StHlgN.js";import"./rows-DAmD2BmE.js";import{r as ae}from"./leaderboard-skeleton-B0Outcuj.js";import{n as _,r as v}from"./register-report-mocks-62J3WC_l.js";import{t as oe}from"./widget-state-BTSHomY4.js";import{n as y,r as b}from"./with-story-router-TjVyBU09.js";import{i as se}from"./build-leaderboard-chart-data-DbugCWta.js";import{f as ce,l as le,o as ue}from"./leaderboard-DUXTQXj0.js";import{n as de}from"./locations-geo-chart-D4_vtDmA.js";import{b as fe,c as x,o as S,s as pe,t as C,u as me}from"./src-DgqMapCf.js";import{a as w,g as he,h as ge,i as _e,m as T,n as E,p as D,r as O}from"./with-widget-canvas-Cq3FFtld.js";import{n as ve,t as ye}from"./use-no-views-empty-state-B0Zijm3j.js";import{n as be,t as xe}from"./register-stats-mocks-C60Cjw0p.js";import{n as Se,t as k}from"./force-stats-mock-state-BcOTHlvK.js";var A,j,M,N,P,F,I,L,R,z,Ce=e((()=>{A=`_root_33236_1`,j=`_trail_33236_9`,M=`_content_33236_13`,N=`_bodyHeader_33236_20`,P=`_stateArea_33236_27`,F=`_chartArea_33236_32`,I=`_leaderboardPanel_33236_42`,L=`_leaderboard_33236_42`,R=`_geoChart_33236_58`,z={root:A,trail:j,content:M,bodyHeader:N,stateArea:P,chartArea:F,leaderboardPanel:I,leaderboard:L,geoChart:R}}));function we({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let o=JSON.stringify(i),[s,c]=(0,a.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==o||s.data!==e)&&c({drillDepth:r,paramsKey:o,data:e,hasComparison:t}),n&&s&&s.paramsKey===o&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0}:{data:e,hasComparison:t,isHeld:!1}}var Te=e((()=>{o()}));function Ee(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function De({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:u,refetch:d}=p({...e,geoMode:n,max:t,...x(r)},{maxRows:t}),f=(0,a.useMemo)(()=>(i?.rows??[]).map(Ee),[i]);return{data:f,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:f.length===0&&u,refetch:d}}var Oe=e((()=>{m(),o(),C()}));function ke({geoGranularity:e}){d();let{reportParams:r}=ie(),{drillDownItem:i,drillDown:o,resetDrillDown:l}=ne(),u=i?.country,f=e,p=0;i&&(f=i.region?`city`:`region`,p=i.region?2:1);let m=(0,a.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),g=De({reportParams:r,max:10,geoMode:f,filter:m}),{isLoading:_,isFetching:v,isError:y,refetch:b}=g,{data:x,hasComparison:S,isHeld:C}=we({...g,drillDepth:p,reportParams:r}),w=ve({isLoading:_&&!C,isError:y,isEmpty:x.length===0},n(`You don’t have locations recorded yet.`,`jetpack-premium-analytics-pkg`)),he=(0,a.useMemo)(()=>me(pe(f),m),[f,m]),ge=(0,a.useMemo)(()=>(C?[]:x).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[x,C]),_e=(0,a.useMemo)(()=>{let e=e=>{if(C||!e.countryCode)return{kind:`static`};let r={code:e.countryCode,name:e.countryFull};return f===`country`?{kind:`drillDown`,onClick:()=>o({country:r}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:f===`region`?{kind:`drillDown`,onClick:()=>o({country:r,region:e.label}),ariaLabel:t(n(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}},r=ee(x.map(e=>e.value),S?x.map(e=>e.previousValue):[]);return x.map(t=>{let n=re(t.countryCode),i=t.previousValue;return{id:t.key,...se({label:t.label,media:{kind:`flag`,url:n??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:i,currentShare:h(t.value,r),previousShare:S&&i!==void 0?h(i,r):void 0,delta:S&&i!==void 0?te(t.value,i):void 0}})},[x,f,S,C,o]),T=i?.region&&e===`country`?i.country:null,E=(0,a.useCallback)(()=>{T?o({country:T}):l()},[T,l,o]),D=i?(0,V.jsx)(le,{label:T?.name??n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:T?t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),T.name):n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:E,current:i.region??i.country.name,className:z.trail}):null,O=D?(0,V.jsx)(s,{direction:`row`,align:`center`,className:z.bodyHeader,children:D}):null;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(`div`,{className:z.content,children:[O,(0,V.jsx)(`div`,{className:z.stateArea,children:(0,V.jsx)(oe,{isLoading:w.isLoading,isFetching:v,isError:y,isEmpty:x.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:b}]},empty:w.empty,children:(0,V.jsxs)(`div`,{className:z.chartArea,children:[(0,V.jsx)(c,{isDisabled:C,className:z.leaderboardPanel,children:(0,V.jsx)(ae,{data:_e,loading:C,withOverlayLabel:!0,withComparison:S,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:z.leaderboard})}),(0,V.jsx)(`div`,{className:z.geoChart,children:(0,V.jsx)(de,{rows:ge,mode:f,focusCountry:u,resizeDebounceTime:100})})]})})})]}),(0,V.jsxs)(ue,{children:[(0,V.jsx)(ce,{report:`locations`,section:pe(e)}),(0,V.jsx)(fe,{exporter:he,status:{isLoading:_,isFetching:v,isError:y},rowCount:x.length})]})]})}function B({attributes:e={}}){let t=e?.geoGranularity??H,n=Object.values(S).includes(t)?t:H;return(0,V.jsx)(g,{attributes:e,children:(0,V.jsx)(`div`,{className:z.root,children:(0,V.jsx)(ke,{geoGranularity:n},n)})})}var V,H,Ae=e((()=>{m(),C(),l(),o(),r(),u(),ye(),Ce(),Te(),Oe(),V=i(),H=`country`})),je,Me=e((()=>{r(),je={attributes:[{id:`geoGranularity`,label:n(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:n(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:n(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:n(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve=e((()=>{Ne=`jpa/locations`,Pe=`jpa/map-marker`,Fe=`Top locations`,Ie=`Where your visitors are viewing from — by country, region, or city.`,Le={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Re=`stats`,ze=`framed`,Be={name:Ne,icon:Pe,title:Fe,description:Ie,help:Le,category:Re,presentation:ze}}));function He({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:f(e)}}function U(e){return(0,G.jsx)(B,{attributes:He(e)})}function W(e){return(0,G.jsx)(B,{attributes:{geoGranularity:`country`,reportParams:f(!1,e)}})}function Ue(e){return(0,G.jsx)(B,{...e})}function We({withComparison:e,geoGranularity:t,...n}){return(0,G.jsx)(T,{...n,widgetType:Ke,renderModule:Ge,renderComponent:Ue,attributes:He({withComparison:e,geoGranularity:t})})}var G,Ge,Ke,qe,K,q,J,Y,X,Z,Q,$,Je;e((()=>{m(),ge(),w(),y(),E(),_(),xe(),Se(),Ae(),Me(),Ve(),G=i(),v(),be(),Ge=`storybook/locations`,Ke=_e(Be,je),qe={title:`Packages/Premium Analytics/Widgets/Locations`,component:B,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:U,args:{withComparison:!1,geoGranularity:`country`},decorators:[O,b]},q={render:U,args:{withComparison:!0,geoGranularity:`country`},decorators:[O,b]},J={render:U,args:{withComparison:!1,geoGranularity:`region`},decorators:[O,b]},Y={render:U,args:{withComparison:!1,geoGranularity:`city`},decorators:[O,b]},X={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[O,b],beforeEach:()=>(k(`stats/location-views`,`loading`),()=>k(`stats/location-views`,null))},Z={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[O,b],beforeEach:()=>(k(`stats/location-views`,`error`),()=>k(`stats/location-views`,null))},Q={render:()=>W(`last-365-days`),tags:[`!autodocs`],decorators:[O,b],beforeEach:()=>(k(`stats/location-views`,`empty`),()=>k(`stats/location-views`,null))},$={render:e=>(0,G.jsx)(We,{...e}),args:{...D,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...he,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: false,
    geoGranularity: 'country'
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: true,
    geoGranularity: 'country'
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: false,
    geoGranularity: 'region'
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: false,
    geoGranularity: 'city'
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderLocationsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/location-views', 'loading');
    return () => forceStatsMockState('stats/location-views', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderLocationsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/location-views', 'error');
    return () => forceStatsMockState('stats/location-views', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => renderLocationsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/location-views', 'empty');
    return () => forceStatsMockState('stats/location-views', null);
  }
}`,...Q.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows the generic empty state (the magnifier
glyph and "We couldn’t find results for this time period.").`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Je=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{Y as CitiesMode,K as Default,Q as Empty,Z as Error,X as Loading,J as RegionsMode,$ as WidgetDashboardWithWidget,q as WithComparison,Je as __namedExportsOrder,qe as default};