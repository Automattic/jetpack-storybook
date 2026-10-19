import{i as e}from"./preload-helper-usAeo7Bx.js";import{d as t,n,t as r}from"./build-module-BXPCp--5.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-CDZL_1rk.js";import{an as s}from"./build-module-TfO_FJU3.js";import{t as c,v as ee}from"./build-module-a7i4hmE-.js";import{t as l}from"./src-C-3MWLvN.js";import{Bt as te,dn as u,i as ne,t as d,vt as f}from"./src-hJfttuzM.js";import{Lt as re,m as p,o as ie,v as ae,vt as oe,xt as se,zt as ce}from"./charts-provider-DtMzsgV2.js";import"./rows-DAmD2BmE.js";import{r as le}from"./leaderboard-skeleton-ChcA58x6.js";import{n as m,r as h}from"./register-report-mocks-CDiWgFqy.js";import{t as ue}from"./widget-state-i3-RAkgN.js";import{n as g,r as _}from"./with-story-router-B8AmDh4M.js";import{i as de}from"./build-leaderboard-chart-data-Ye9V1J-U.js";import{f as fe,l as pe,o as me}from"./leaderboard-DfSrb_Iw.js";import{n as he}from"./locations-geo-chart-D-mUS0_p.js";import{n as v}from"./locked-widget-ILSzExuH.js";import{C as ge,c as y,d as _e,l as b,p as ve,s as x,t as S,u as ye}from"./src-CkUrciEb.js";import{a as C,g as be,h as w,i as T,m as xe,n as E,p as Se,r as D}from"./with-widget-canvas-ixC2fu1y.js";import{n as Ce,t as we}from"./use-no-views-empty-state-BbQ-ehHV.js";import{n as O,t as Te}from"./register-stats-mocks-DbeEJSlI.js";import{n as Ee,t as k}from"./force-stats-mock-state-Cdq-Wrem.js";var A,j,M,N,P,F,I,L,De,R,Oe=e((()=>{A=`_root_33236_1`,j=`_trail_33236_9`,M=`_content_33236_13`,N=`_bodyHeader_33236_20`,P=`_stateArea_33236_27`,F=`_chartArea_33236_32`,I=`_leaderboardPanel_33236_42`,L=`_leaderboard_33236_42`,De=`_geoChart_33236_58`,R={root:A,trail:j,content:M,bodyHeader:N,stateArea:P,chartArea:F,leaderboardPanel:I,leaderboard:L,geoChart:De}}));function ke({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let o=JSON.stringify(i),[s,c]=(0,a.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==o||s.data!==e)&&c({drillDepth:r,paramsKey:o,data:e,hasComparison:t}),n&&s&&s.paramsKey===o&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0,drillDepth:s.drillDepth}:{data:e,hasComparison:t,isHeld:!1,drillDepth:r}}var Ae=e((()=>{o()}));function je(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function Me({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,hasData:ee,isError:l,refetch:te}=f({...e,geoMode:n,max:t,...ye(r)},{maxRows:t}),u=(0,a.useMemo)(()=>(i?.rows??[]).map(je),[i]);return{data:u,hasComparison:o,isLoading:s,isFetching:c,hasData:ee,isError:u.length===0&&l,refetch:te}}var Ne=e((()=>{d(),o(),S()}));function Pe(e,t){return e===0?t:[`region`,`city`][e-1]}function Fe({geoGranularity:e}){te();let{reportParams:r}=ae(),{drillDownItem:i,drillDown:o,resetDrillDown:c}=ie(),l=i?.country,u=0;i&&(u=i.region?2:1);let d=Pe(u,e),f=(0,a.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),p=Me({reportParams:r,max:10,geoMode:d,filter:f}),{isLoading:m,isFetching:h,isError:g,refetch:_}=p,{data:v,hasComparison:y,isHeld:x,drillDepth:S}=ke({...p,drillDepth:u,reportParams:r}),ye=_e(b(Pe(S,e))),C=Ce({isLoading:m&&!x,isError:g,isEmpty:v.length===0},n(`You don’t have locations recorded yet.`,`jetpack-premium-analytics-pkg`)),be=(0,a.useMemo)(()=>ve(b(d),f),[d,f]),w=(0,a.useMemo)(()=>(x?[]:v).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[v,x]),T=ne(`regions-cities`),xe=(0,a.useMemo)(()=>{let e=e=>{if(x||!e.countryCode||T)return{kind:`static`};let r={code:e.countryCode,name:e.countryFull};return d===`country`?{kind:`drillDown`,onClick:()=>o({country:r}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:d===`region`?{kind:`drillDown`,onClick:()=>o({country:r,region:e.label}),ariaLabel:t(n(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}},r=oe(v.map(e=>e.value),y?v.map(e=>e.previousValue):[]);return v.map(t=>{let n=re(t.countryCode),i=t.previousValue;return{id:t.key,...de({label:t.label,media:{kind:`flag`,url:n??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:i,currentShare:se(t.value,r),previousShare:y&&i!==void 0?se(i,r):void 0,delta:y&&i!==void 0?ce(t.value,i):void 0}})},[v,d,y,x,T,o]),E=i?.region&&e===`country`?i.country:null,Se=(0,a.useCallback)(()=>{E?o({country:E}):c()},[E,c,o]),D=i?(0,B.jsx)(pe,{label:E?.name??n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:E?t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),E.name):n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:Se,current:i.region??i.country.name,className:R.trail}):null,we=D?(0,B.jsx)(s,{direction:`row`,align:`center`,className:R.bodyHeader,children:D}):null,O=n(`Top locations`,`jetpack-premium-analytics-pkg`);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(`div`,{className:R.content,children:[we,(0,B.jsx)(`div`,{className:R.stateArea,children:(0,B.jsx)(ue,{isLoading:C.isLoading,isFetching:h,isError:g,isEmpty:v.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:_}]},empty:C.empty,children:(0,B.jsxs)(`div`,{className:R.chartArea,children:[(0,B.jsx)(ee,{isDisabled:x,className:R.leaderboardPanel,children:(0,B.jsx)(le,{data:xe,loading:x,withOverlayLabel:!0,withComparison:y,showLegend:!1,columns:{label:ye,metric:`views`},dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:R.leaderboard,chartTitle:O})}),(0,B.jsx)(`div`,{className:R.geoChart,children:(0,B.jsx)(he,{chartTitle:O,rows:w,mode:d,focusCountry:l,resizeDebounceTime:100})})]})})})]}),(0,B.jsxs)(me,{children:[(0,B.jsx)(fe,{report:`locations`,section:b(e)}),(0,B.jsx)(ge,{exporter:be,status:{isLoading:m,isFetching:h,isError:g},rowCount:v.length})]})]})}function z({attributes:e={}}){let t=e?.geoGranularity??V,n=Object.values(x).includes(t)?t:V;return n!==`country`&&ne(`regions-cities`)?(0,B.jsx)(p,{attributes:e,children:(0,B.jsx)(v,{feature:`regions-cities`})}):(0,B.jsx)(p,{attributes:e,children:(0,B.jsx)(`div`,{className:R.root,children:(0,B.jsx)(Fe,{geoGranularity:n},n)})})}var B,V,Ie=e((()=>{d(),S(),c(),o(),r(),l(),we(),Oe(),Ae(),Ne(),B=i(),V=`country`})),Le,Re=e((()=>{r(),S(),Le={attributes:[{id:`geoGranularity`,label:n(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:y(),relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),ze,Be,Ve,He,Ue,We,Ge,Ke,qe=e((()=>{ze=`jpa/locations`,Be=`jpa/map-marker`,Ve=`Top locations`,He=`Where your visitors are viewing from — by country, region, or city.`,Ue={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},We=`stats`,Ge=`framed`,Ke={name:ze,icon:Be,title:Ve,description:He,help:Ue,category:We,presentation:Ge}}));function Je({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:u(e)}}function H(e){return(0,W.jsx)(z,{attributes:Je(e)})}function U(e){return(0,W.jsx)(z,{attributes:{geoGranularity:`country`,reportParams:u(!1,e)}})}function Ye(e){return(0,W.jsx)(z,{...e})}function Xe({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(xe,{...n,widgetType:Qe,renderModule:Ze,renderComponent:Ye,attributes:Je({withComparison:e,geoGranularity:t})})}var W,Ze,Qe,$e,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),w(),C(),g(),E(),m(),Te(),Ee(),Ie(),Re(),qe(),W=i(),h(),O(),Ze=`storybook/locations`,Qe=T(Ke,Le),$e={title:`Packages/Premium Analytics/Widgets/Locations`,component:z,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[D,_]},K={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[D,_]},q={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[D,_]},J={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[D,_]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[D,_],beforeEach:()=>(k(`stats/location-views`,`loading`),()=>k(`stats/location-views`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[D,_],beforeEach:()=>(k(`stats/location-views`,`error`),()=>k(`stats/location-views`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[D,_],beforeEach:()=>(k(`stats/location-views`,`empty`),()=>k(`stats/location-views`,null))},Q={render:e=>(0,W.jsx)(Xe,{...e}),args:{...Se,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...be,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as CitiesMode,G as Default,Z as Empty,X as Error,Y as Loading,q as RegionsMode,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,$e as default};