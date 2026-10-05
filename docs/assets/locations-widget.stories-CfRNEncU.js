import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Vu as a,Yi as o,ku as s,t as c}from"./build-module-DNhkEVJn.js";import{At as l}from"./build-module-DmDwTLpf2.js";import{m as u,r as ee,v as d}from"./hooks-BMFzqau9.js";import{g as te,t as f}from"./build-module-DntR1qmK.js";import{t as p}from"./src-SYG0X5Zz.js";import{dn as m,jt as ne,lt as re,t as h}from"./src-Bq3Nn1OK.js";import{Et as ie,Ot as ae,Tt as g,ot as oe}from"./helpers-CGi3ryra.js";import"./rows-DAmD2BmE.js";import{r as se}from"./leaderboard-skeleton-CmVO-z2M.js";import{n as ce,r as _}from"./with-story-router-CRSGw62n.js";import{n as v,r as y}from"./register-report-mocks-B8WrHl1u.js";import{_ as le,b as ue,i as de,m as fe}from"./leaderboard-B2MiGbuI.js";import{t as pe}from"./widget-state-CXfK5uTe.js";import{S as me}from"./report-metric-zURqLYZQ.js";import{t as b}from"./src-qKJmLfBY.js";import{a as he,d as x,f as ge,i as _e,n as ve,p as ye,r as S,u as be}from"./with-widget-canvas-BtQW7Y7E.js";import{n as xe,t as Se}from"./register-stats-mocks-D4Vyf9Li.js";import{n as Ce,t as C}from"./force-stats-mock-state-SJrQsaS3.js";var w,T,E,D,O,k,A,j,M,N,we=e((()=>{w=`_root_33236_1`,T=`_trail_33236_9`,E=`_content_33236_13`,D=`_bodyHeader_33236_20`,O=`_stateArea_33236_27`,k=`_chartArea_33236_32`,A=`_leaderboardPanel_33236_42`,j=`_leaderboard_33236_42`,M=`_geoChart_33236_58`,N={root:w,trail:T,content:E,bodyHeader:D,stateArea:O,chartArea:k,leaderboardPanel:A,leaderboard:j,geoChart:M}}));function Te({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let o=JSON.stringify(i),[s,c]=(0,a.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==o||s.data!==e)&&c({drillDepth:r,paramsKey:o,data:e,hasComparison:t}),n&&s&&s.paramsKey===o&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0}:{data:e,hasComparison:t,isHeld:!1}}var Ee=e((()=>{s()}));function De(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function Oe({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:u,refetch:ee}=re({...e,geoMode:n,max:t,...r?{filter_by_country:r.country}:{},...r?.region?{filter_by_region:r.region}:{}},{maxRows:t}),d=(0,a.useMemo)(()=>(i?.rows??[]).map(De),[i]);return{data:d,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:d.length===0&&u,refetch:ee}}var ke=e((()=>{h(),s()}));function Ae({geoGranularity:e}){ne();let{reportParams:n}=d(),{drillDownItem:i,drillDown:o,resetDrillDown:s}=ee(),c=i?.country,u=e,f=0;i&&(u=i.region?`city`:`region`,f=i.region?2:1);let p=Oe({reportParams:n,max:10,geoMode:u,filter:i?{country:i.country.code,region:i.region}:void 0}),{isLoading:m,isFetching:re,isError:h,refetch:ce}=p,{data:_,hasComparison:v,isHeld:y}=Te({...p,drillDepth:f,reportParams:n}),ue=(0,a.useMemo)(()=>(y?[]:_).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[_,y]),fe=(0,a.useMemo)(()=>{let e=e=>{if(y||!e.countryCode)return{kind:`static`};let n={code:e.countryCode,name:e.countryFull};return u===`country`?{kind:`drillDown`,onClick:()=>o({country:n}),ariaLabel:r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:u===`region`?{kind:`drillDown`,onClick:()=>o({country:n,region:e.label}),ariaLabel:r(t(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}},n=ie(_.map(e=>e.value),v?_.map(e=>e.previousValue):[]);return _.map(t=>{let r=oe(t.countryCode),i=t.previousValue;return{id:t.key,...de({label:t.label,media:{kind:`flag`,url:r??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:i,currentShare:g(t.value,n),previousShare:v&&i!==void 0?g(i,n):void 0,delta:v&&i!==void 0?ae(t.value,i):void 0}})},[_,u,v,y,o]),b=i?.region&&e===`country`?i.country:null,he=(0,a.useCallback)(()=>{b?o({country:b}):s()},[b,s,o]),x=i?(0,F.jsx)(le,{label:b?.name??t(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:b?r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),b.name):t(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:he,current:i.region??i.country.name,className:N.trail}):null,ge=x?(0,F.jsx)(l,{direction:`row`,align:`center`,className:N.bodyHeader,children:x}):null;return(0,F.jsxs)(`div`,{className:N.content,children:[ge,(0,F.jsx)(`div`,{className:N.stateArea,children:(0,F.jsx)(pe,{isLoading:m&&!y,isFetching:re,isError:h,isEmpty:_.length===0,error:{description:t(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:ce}]},children:(0,F.jsxs)(`div`,{className:N.chartArea,children:[(0,F.jsx)(te,{isDisabled:y,className:N.leaderboardPanel,children:(0,F.jsx)(se,{data:fe,loading:y,withOverlayLabel:!0,withComparison:v,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:N.leaderboard})}),(0,F.jsx)(`div`,{className:N.geoChart,children:(0,F.jsx)(me,{rows:ue,mode:u,focusCountry:c,resizeDebounceTime:100})})]})})})]})}function P({attributes:e={}}){let t=e?.geoGranularity??L,n=Object.prototype.hasOwnProperty.call(I,t)?t:L;return(0,F.jsx)(u,{attributes:e,children:(0,F.jsxs)(`div`,{className:N.root,children:[(0,F.jsx)(Ae,{geoGranularity:n},n),(0,F.jsx)(fe,{children:(0,F.jsx)(ue,{report:`locations`,section:I[n]})})]})})}var F,I,L,je=e((()=>{h(),b(),f(),s(),n(),p(),we(),Ee(),ke(),F=i(),I={country:`countries`,region:`regions`,city:`cities`},L=`country`})),R,Me=e((()=>{n(),c(),R={icon:o,attributes:[{id:`geoGranularity`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:t(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:t(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),z,B,Ne,Pe,Fe,Ie,Le,Re=e((()=>{z=`jpa/locations`,B=`Top locations`,Ne=`Where your visitors are viewing from — by country, region, or city.`,Pe={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Fe=`stats`,Ie=`framed`,Le={name:z,title:B,description:Ne,help:Pe,category:Fe,presentation:Ie}}));function ze({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:m(e)}}function V(e){return(0,U.jsx)(P,{attributes:ze(e)})}function H(e){return(0,U.jsx)(P,{attributes:{geoGranularity:`country`,reportParams:m(!1,e)}})}function Be(e){return(0,U.jsx)(P,{...e})}function Ve({withComparison:e,geoGranularity:t,...n}){return(0,U.jsx)(x,{...n,widgetType:Ue,renderModule:He,renderComponent:Be,attributes:ze({withComparison:e,geoGranularity:t})})}var U,He,Ue,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),ge(),he(),ce(),ve(),v(),Se(),Ce(),je(),Me(),Re(),U=i(),y(),xe(),He=`storybook/locations`,Ue=_e(Le,R),W={title:`Packages/Premium Analytics/Widgets/Locations`,component:P,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:V,args:{withComparison:!1,geoGranularity:`country`},decorators:[S,_]},K={render:V,args:{withComparison:!0,geoGranularity:`country`},decorators:[S,_]},q={render:V,args:{withComparison:!1,geoGranularity:`region`},decorators:[S,_]},J={render:V,args:{withComparison:!1,geoGranularity:`city`},decorators:[S,_]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[S,_],beforeEach:()=>(C(`stats/location-views`,`loading`),()=>C(`stats/location-views`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[S,_],beforeEach:()=>(C(`stats/location-views`,`error`),()=>C(`stats/location-views`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[S,_],beforeEach:()=>(C(`stats/location-views`,`empty`),()=>C(`stats/location-views`,null))},Q={render:e=>(0,U.jsx)(Ve,{...e}),args:{...be,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...ye,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as CitiesMode,G as Default,Z as Empty,X as Error,Y as Loading,q as RegionsMode,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,W as default};