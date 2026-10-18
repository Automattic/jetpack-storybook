import{i as e}from"./preload-helper-usAeo7Bx.js";import{d as t,n,t as r}from"./build-module-BXPCp--5.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-CDZL_1rk.js";import{an as s}from"./build-module-BmMv3y-x.js";import{g as c,t as l}from"./build-module-DU0Zg_Rz.js";import{t as u}from"./src-CwaSdI2a.js";import{Bt as d,dn as f,i as ee,t as p,vt as m}from"./src-r4K25zVe.js";import{Lt as te,m as h,o as ne,v as re,vt as ie,xt as ae,zt as oe}from"./charts-provider-DZmRjokK.js";import"./rows-DAmD2BmE.js";import{r as se}from"./leaderboard-skeleton-Hs6RZPZZ.js";import{n as g,r as _}from"./register-report-mocks-BoMCoOTr.js";import{t as ce}from"./widget-state-DOYQL1k1.js";import{n as v,r as y}from"./with-story-router-B8AmDh4M.js";import{i as le}from"./build-leaderboard-chart-data-NxYCFacz.js";import{f as ue,l as de,o as fe}from"./leaderboard-BZbRFxVJ.js";import{n as pe}from"./locations-geo-chart-yZqedtOL.js";import{n as b}from"./locked-widget-CqS80Inf.js";import{C as me,c as x,d as he,l as S,p as ge,s as C,t as w,u as _e}from"./src-Ct8sIxhZ.js";import{a as T,g as ve,h as ye,i as E,m as be,n as D,p as xe,r as O}from"./with-widget-canvas-gOvSxUoS.js";import{n as Se,t as Ce}from"./use-no-views-empty-state-mAR4Yj77.js";import{n as k,t as we}from"./register-stats-mocks-CvjErK_f.js";import{n as Te,t as A}from"./force-stats-mock-state-D_-NAkoz.js";var Ee,j,M,N,P,F,I,L,De,R,Oe=e((()=>{Ee=`_root_33236_1`,j=`_trail_33236_9`,M=`_content_33236_13`,N=`_bodyHeader_33236_20`,P=`_stateArea_33236_27`,F=`_chartArea_33236_32`,I=`_leaderboardPanel_33236_42`,L=`_leaderboard_33236_42`,De=`_geoChart_33236_58`,R={root:Ee,trail:j,content:M,bodyHeader:N,stateArea:P,chartArea:F,leaderboardPanel:I,leaderboard:L,geoChart:De}}));function ke({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let o=JSON.stringify(i),[s,c]=(0,a.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==o||s.data!==e)&&c({drillDepth:r,paramsKey:o,data:e,hasComparison:t}),n&&s&&s.paramsKey===o&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0,drillDepth:s.drillDepth}:{data:e,hasComparison:t,isHeld:!1,drillDepth:r}}var Ae=e((()=>{o()}));function je(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function Me({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:u,refetch:d}=m({...e,geoMode:n,max:t,..._e(r)},{maxRows:t}),f=(0,a.useMemo)(()=>(i?.rows??[]).map(je),[i]);return{data:f,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:f.length===0&&u,refetch:d}}var Ne=e((()=>{p(),o(),w()}));function Pe(e,t){return e===0?t:[`region`,`city`][e-1]}function Fe({geoGranularity:e}){d();let{reportParams:r}=re(),{drillDownItem:i,drillDown:o,resetDrillDown:l}=ne(),u=i?.country,f=0;i&&(f=i.region?2:1);let p=Pe(f,e),m=(0,a.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),h=Me({reportParams:r,max:10,geoMode:p,filter:m}),{isLoading:g,isFetching:_,isError:v,refetch:y}=h,{data:b,hasComparison:x,isHeld:C,drillDepth:w}=ke({...h,drillDepth:f,reportParams:r}),_e=he(S(Pe(w,e))),T=Se({isLoading:g&&!C,isError:v,isEmpty:b.length===0},n(`You don’t have locations recorded yet.`,`jetpack-premium-analytics-pkg`)),ve=(0,a.useMemo)(()=>ge(S(p),m),[p,m]),ye=(0,a.useMemo)(()=>(C?[]:b).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[b,C]),E=ee(`regions-cities`),be=(0,a.useMemo)(()=>{let e=e=>{if(C||!e.countryCode||E)return{kind:`static`};let r={code:e.countryCode,name:e.countryFull};return p===`country`?{kind:`drillDown`,onClick:()=>o({country:r}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:p===`region`?{kind:`drillDown`,onClick:()=>o({country:r,region:e.label}),ariaLabel:t(n(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}},r=ie(b.map(e=>e.value),x?b.map(e=>e.previousValue):[]);return b.map(t=>{let n=te(t.countryCode),i=t.previousValue;return{id:t.key,...le({label:t.label,media:{kind:`flag`,url:n??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:i,currentShare:ae(t.value,r),previousShare:x&&i!==void 0?ae(i,r):void 0,delta:x&&i!==void 0?oe(t.value,i):void 0}})},[b,p,x,C,E,o]),D=i?.region&&e===`country`?i.country:null,xe=(0,a.useCallback)(()=>{D?o({country:D}):l()},[D,l,o]),O=i?(0,B.jsx)(de,{label:D?.name??n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:D?t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),D.name):n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:xe,current:i.region??i.country.name,className:R.trail}):null,Ce=O?(0,B.jsx)(s,{direction:`row`,align:`center`,className:R.bodyHeader,children:O}):null,k=n(`Top locations`,`jetpack-premium-analytics-pkg`);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(`div`,{className:R.content,children:[Ce,(0,B.jsx)(`div`,{className:R.stateArea,children:(0,B.jsx)(ce,{isLoading:T.isLoading,isFetching:_,isError:v,isEmpty:b.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:y}]},empty:T.empty,children:(0,B.jsxs)(`div`,{className:R.chartArea,children:[(0,B.jsx)(c,{isDisabled:C,className:R.leaderboardPanel,children:(0,B.jsx)(se,{data:be,loading:C,withOverlayLabel:!0,withComparison:x,showLegend:!1,columns:{label:_e,metric:`views`},dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:R.leaderboard,chartTitle:k})}),(0,B.jsx)(`div`,{className:R.geoChart,children:(0,B.jsx)(pe,{chartTitle:k,rows:ye,mode:p,focusCountry:u,resizeDebounceTime:100})})]})})})]}),(0,B.jsxs)(fe,{children:[(0,B.jsx)(ue,{report:`locations`,section:S(e)}),(0,B.jsx)(me,{exporter:ve,status:{isLoading:g,isFetching:_,isError:v},rowCount:b.length})]})]})}function z({attributes:e={}}){let t=e?.geoGranularity??V,n=Object.values(C).includes(t)?t:V;return n!==`country`&&ee(`regions-cities`)?(0,B.jsx)(h,{attributes:e,children:(0,B.jsx)(b,{feature:`regions-cities`})}):(0,B.jsx)(h,{attributes:e,children:(0,B.jsx)(`div`,{className:R.root,children:(0,B.jsx)(Fe,{geoGranularity:n},n)})})}var B,V,Ie=e((()=>{p(),w(),l(),o(),r(),u(),Ce(),Oe(),Ae(),Ne(),B=i(),V=`country`})),Le,Re=e((()=>{r(),w(),Le={attributes:[{id:`geoGranularity`,label:n(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:x(),relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),ze,Be,Ve,He,Ue,We,Ge,Ke,qe=e((()=>{ze=`jpa/locations`,Be=`jpa/map-marker`,Ve=`Top locations`,He=`Where your visitors are viewing from — by country, region, or city.`,Ue={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},We=`stats`,Ge=`framed`,Ke={name:ze,icon:Be,title:Ve,description:He,help:Ue,category:We,presentation:Ge}}));function Je({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:f(e)}}function H(e){return(0,W.jsx)(z,{attributes:Je(e)})}function U(e){return(0,W.jsx)(z,{attributes:{geoGranularity:`country`,reportParams:f(!1,e)}})}function Ye(e){return(0,W.jsx)(z,{...e})}function Xe({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(be,{...n,widgetType:Qe,renderModule:Ze,renderComponent:Ye,attributes:Je({withComparison:e,geoGranularity:t})})}var W,Ze,Qe,$e,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),ye(),T(),v(),D(),g(),we(),Te(),Ie(),Re(),qe(),W=i(),_(),k(),Ze=`storybook/locations`,Qe=E(Ke,Le),$e={title:`Packages/Premium Analytics/Widgets/Locations`,component:z,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[O,y]},K={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[O,y]},q={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[O,y]},J={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[O,y]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[O,y],beforeEach:()=>(A(`stats/location-views`,`loading`),()=>A(`stats/location-views`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[O,y],beforeEach:()=>(A(`stats/location-views`,`error`),()=>A(`stats/location-views`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[O,y],beforeEach:()=>(A(`stats/location-views`,`empty`),()=>A(`stats/location-views`,null))},Q={render:e=>(0,W.jsx)(Xe,{...e}),args:{...xe,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...ve,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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