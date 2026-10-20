import{i as e}from"./preload-helper-usAeo7Bx.js";import{d as t,n,t as r}from"./build-module-BXPCp--5.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-CDZL_1rk.js";import{an as s}from"./build-module-Dmr4YtNQ.js";import{t as c,v as ee}from"./build-module-T7y0NYV7.js";import{t as l}from"./src-Zo6M7MGQ.js";import{Ht as te,bt as u,o as d,pn as f,t as p}from"./src-oBqoEV9n.js";import{Lt as ne,m,o as re,v as ie,vt as ae,xt as oe,zt as se}from"./charts-provider-DIMYBOsS.js";import"./rows-DAmD2BmE.js";import{r as ce}from"./leaderboard-skeleton-BcEi-dmL.js";import{n as h,r as g}from"./register-report-mocks-B5NW5Ctv.js";import{t as le}from"./widget-state-1xFE4TA5.js";import{n as _,r as v}from"./with-story-router-B8AmDh4M.js";import{i as ue}from"./build-leaderboard-chart-data-CYVtTWAS.js";import{f as de,l as fe,o as pe}from"./leaderboard-D68wDmPY.js";import{n as me}from"./locations-geo-chart-DHGd5BlQ.js";import{n as y}from"./locked-widget-M3DIBrVs.js";import{C as he,c as b,d as ge,l as x,p as _e,s as S,t as C,u as ve}from"./src-D4uzv82S.js";import{a as w,g as ye,h as T,i as E,m as be,n as D,p as xe,r as O}from"./with-widget-canvas-CALdA6ku.js";import{n as Se,t as Ce}from"./use-no-views-empty-state-DvYDMAVf.js";import{n as k,t as we}from"./register-stats-mocks-D5988pvy.js";import{n as Te,t as A}from"./force-stats-mock-state-kMQn68jv.js";var j,M,N,P,F,I,L,R,Ee,z,De=e((()=>{j=`_root_33236_1`,M=`_trail_33236_9`,N=`_content_33236_13`,P=`_bodyHeader_33236_20`,F=`_stateArea_33236_27`,I=`_chartArea_33236_32`,L=`_leaderboardPanel_33236_42`,R=`_leaderboard_33236_42`,Ee=`_geoChart_33236_58`,z={root:j,trail:M,content:N,bodyHeader:P,stateArea:F,chartArea:I,leaderboardPanel:L,leaderboard:R,geoChart:Ee}}));function Oe({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let o=JSON.stringify(i),[s,c]=(0,a.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==o||s.data!==e)&&c({drillDepth:r,paramsKey:o,data:e,hasComparison:t}),n&&s&&s.paramsKey===o&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0,drillDepth:s.drillDepth}:{data:e,hasComparison:t,isHeld:!1,drillDepth:r}}var ke=e((()=>{o()}));function Ae(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function je({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,hasData:ee,isError:l,refetch:te}=u({...e,geoMode:n,max:t,...ve(r)},{maxRows:t}),d=(0,a.useMemo)(()=>(i?.rows??[]).map(Ae),[i]);return{data:d,hasComparison:o,isLoading:s,isFetching:c,hasData:ee,isError:d.length===0&&l,refetch:te}}var Me=e((()=>{p(),o(),C()}));function Ne(e,t){return e===0?t:[`region`,`city`][e-1]}function Pe({geoGranularity:e}){te();let{reportParams:r}=ie(),{drillDownItem:i,drillDown:o,resetDrillDown:c}=re(),l=i?.country,u=0;i&&(u=i.region?2:1);let f=Ne(u,e),p=(0,a.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),m=je({reportParams:r,max:10,geoMode:f,filter:p}),{isLoading:h,isFetching:g,isError:_,refetch:v}=m,{data:y,hasComparison:b,isHeld:S,drillDepth:C}=Oe({...m,drillDepth:u,reportParams:r}),ve=ge(x(Ne(C,e))),w=Se({isLoading:h&&!S,isError:_,isEmpty:y.length===0},n(`You don’t have locations recorded yet.`,`jetpack-premium-analytics-pkg`)),ye=(0,a.useMemo)(()=>_e(x(f),p),[f,p]),T=(0,a.useMemo)(()=>(S?[]:y).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[y,S]),E=d(`regions-cities`),be=(0,a.useMemo)(()=>{let e=e=>{if(S||!e.countryCode||E)return{kind:`static`};let r={code:e.countryCode,name:e.countryFull};return f===`country`?{kind:`drillDown`,onClick:()=>o({country:r}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:f===`region`?{kind:`drillDown`,onClick:()=>o({country:r,region:e.label}),ariaLabel:t(n(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}},r=ae(y.map(e=>e.value),b?y.map(e=>e.previousValue):[]);return y.map(t=>{let n=ne(t.countryCode),i=t.previousValue;return{id:t.key,...ue({label:t.label,media:{kind:`flag`,url:n??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:i,currentShare:oe(t.value,r),previousShare:b&&i!==void 0?oe(i,r):void 0,delta:b&&i!==void 0?se(t.value,i):void 0}})},[y,f,b,S,E,o]),D=i?.region&&e===`country`?i.country:null,xe=(0,a.useCallback)(()=>{D?o({country:D}):c()},[D,c,o]),O=i?(0,V.jsx)(fe,{label:D?.name??n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:D?t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),D.name):n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:xe,current:i.region??i.country.name,className:z.trail}):null,Ce=O?(0,V.jsx)(s,{direction:`row`,align:`center`,className:z.bodyHeader,children:O}):null,k=n(`Top locations`,`jetpack-premium-analytics-pkg`);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(`div`,{className:z.content,children:[Ce,(0,V.jsx)(`div`,{className:z.stateArea,children:(0,V.jsx)(le,{isLoading:w.isLoading,isFetching:g,isError:_,isEmpty:y.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:v}]},empty:w.empty,children:(0,V.jsxs)(`div`,{className:z.chartArea,children:[(0,V.jsx)(ee,{isDisabled:S,className:z.leaderboardPanel,children:(0,V.jsx)(ce,{data:be,loading:S,withOverlayLabel:!0,withComparison:b,showLegend:!1,columns:{label:ve,metric:`views`},dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:z.leaderboard,chartTitle:k})}),(0,V.jsx)(`div`,{className:z.geoChart,children:(0,V.jsx)(me,{chartTitle:k,rows:T,mode:f,focusCountry:l,resizeDebounceTime:100})})]})})})]}),(0,V.jsxs)(pe,{children:[(0,V.jsx)(de,{report:`locations`,section:x(e)}),(0,V.jsx)(he,{exporter:ye,status:{isLoading:h,isFetching:g,isError:_},rowCount:y.length})]})]})}function B({attributes:e={}}){let t=e?.geoGranularity??H,n=Object.values(S).includes(t)?t:H;return n!==`country`&&d(`regions-cities`)?(0,V.jsx)(m,{attributes:e,children:(0,V.jsx)(y,{feature:`regions-cities`})}):(0,V.jsx)(m,{attributes:e,children:(0,V.jsx)(`div`,{className:z.root,children:(0,V.jsx)(Pe,{geoGranularity:n},n)})})}var V,H,Fe=e((()=>{p(),C(),c(),o(),r(),l(),Ce(),De(),ke(),Me(),V=i(),H=`country`})),Ie,Le=e((()=>{r(),C(),Ie={attributes:[{id:`geoGranularity`,label:n(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:b(),relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),Re,ze,Be,Ve,He,Ue,We,Ge,Ke=e((()=>{Re=`jpa/locations`,ze=`jpa/map-marker`,Be=`Top locations`,Ve=`Where your visitors are viewing from — by country, region, or city.`,He={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Ue=`stats`,We=`framed`,Ge={name:Re,icon:ze,title:Be,description:Ve,help:He,category:Ue,presentation:We}}));function qe({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:f(e)}}function U(e){return(0,G.jsx)(B,{attributes:qe(e)})}function W(e){return(0,G.jsx)(B,{attributes:{geoGranularity:`country`,reportParams:f(!1,e)}})}function Je(e){return(0,G.jsx)(B,{...e})}function Ye({withComparison:e,geoGranularity:t,...n}){return(0,G.jsx)(be,{...n,widgetType:Ze,renderModule:Xe,renderComponent:Je,attributes:qe({withComparison:e,geoGranularity:t})})}var G,Xe,Ze,Qe,K,q,J,Y,X,Z,Q,$,$e;e((()=>{p(),T(),w(),_(),D(),h(),we(),Te(),Fe(),Le(),Ke(),G=i(),g(),k(),Xe=`storybook/locations`,Ze=E(Ge,Ie),Qe={title:`Packages/Premium Analytics/Widgets/Locations`,component:B,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:U,args:{withComparison:!1,geoGranularity:`country`},decorators:[O,v]},q={render:U,args:{withComparison:!0,geoGranularity:`country`},decorators:[O,v]},J={render:U,args:{withComparison:!1,geoGranularity:`region`},decorators:[O,v]},Y={render:U,args:{withComparison:!1,geoGranularity:`city`},decorators:[O,v]},X={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[O,v],beforeEach:()=>(A(`stats/location-views`,`loading`),()=>A(`stats/location-views`,null))},Z={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[O,v],beforeEach:()=>(A(`stats/location-views`,`error`),()=>A(`stats/location-views`,null))},Q={render:()=>W(`last-365-days`),tags:[`!autodocs`],decorators:[O,v],beforeEach:()=>(A(`stats/location-views`,`empty`),()=>A(`stats/location-views`,null))},$={render:e=>(0,G.jsx)(Ye,{...e}),args:{...xe,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...ye,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},$e=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{Y as CitiesMode,K as Default,Q as Empty,Z as Error,X as Loading,J as RegionsMode,$ as WidgetDashboardWithWidget,q as WithComparison,$e as __namedExportsOrder,Qe as default};