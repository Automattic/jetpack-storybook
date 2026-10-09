import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-Cm3Kd3py.js";import{At as s}from"./build-module-D2aEjqke.js";import{g as c,t as l}from"./build-module-ZKM1yXzY.js";import{t as u}from"./src-DxplVuUa.js";import{Lt as ee,ht as d,t as f,wn as p}from"./src-C-EghbUA.js";import{$t as te,Gt as ne,Xt as m,Zt as re,_ as h,o as ie,x as ae}from"./charts-provider-DqwK50kj.js";import"./rows-DAmD2BmE.js";import{r as oe}from"./leaderboard-skeleton-DAtYE-w1.js";import{n as g,r as _}from"./register-report-mocks-s-nppK1i.js";import{t as se}from"./widget-state-BV7A4dgE.js";import{n as v,r as y}from"./with-story-router-Beljd9ki.js";import{g as ce,i as le,p as ue,y as de}from"./leaderboard-DWybDTNC.js";import{n as fe,w as pe}from"./components-DWb0bf80.js";import{d as b,l as x,p as me,t as S,u as he}from"./src-0KcSXslG.js";import{a as ge,g as _e,h as ve,i as C,m as w,n as T,p as E,r as D}from"./with-widget-canvas-BbIjt46K.js";import{n as ye,t as be}from"./register-stats-mocks-BncfF1So.js";import{n as xe,t as O}from"./force-stats-mock-state-9dV0NBcI.js";var k,A,j,M,N,P,F,I,L,R,Se=e((()=>{k=`_root_33236_1`,A=`_trail_33236_9`,j=`_content_33236_13`,M=`_bodyHeader_33236_20`,N=`_stateArea_33236_27`,P=`_chartArea_33236_32`,F=`_leaderboardPanel_33236_42`,I=`_leaderboard_33236_42`,L=`_geoChart_33236_58`,R={root:k,trail:A,content:j,bodyHeader:M,stateArea:N,chartArea:P,leaderboardPanel:F,leaderboard:I,geoChart:L}}));function Ce({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let o=JSON.stringify(i),[s,c]=(0,a.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==o||s.data!==e)&&c({drillDepth:r,paramsKey:o,data:e,hasComparison:t}),n&&s&&s.paramsKey===o&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0}:{data:e,hasComparison:t,isHeld:!1}}var we=e((()=>{o()}));function Te(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function Ee({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:u,refetch:ee}=d({...e,geoMode:n,max:t,...b(r)},{maxRows:t}),f=(0,a.useMemo)(()=>(i?.rows??[]).map(Te),[i]);return{data:f,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:f.length===0&&u,refetch:ee}}var De=e((()=>{f(),o(),S()}));function Oe({geoGranularity:e}){ee();let{reportParams:n}=ae(),{drillDownItem:i,drillDown:o,resetDrillDown:l}=ie(),u=i?.country,d=e,f=0;i&&(d=i.region?`city`:`region`,f=i.region?2:1);let p=(0,a.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),h=Ee({reportParams:n,max:10,geoMode:d,filter:p}),{isLoading:g,isFetching:_,isError:v,refetch:y}=h,{data:b,hasComparison:x,isHeld:S}=Ce({...h,drillDepth:f,reportParams:n}),ge=(0,a.useMemo)(()=>me(he(d),p),[d,p]),_e=(0,a.useMemo)(()=>(S?[]:b).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[b,S]),ve=(0,a.useMemo)(()=>{let e=e=>{if(S||!e.countryCode)return{kind:`static`};let n={code:e.countryCode,name:e.countryFull};return d===`country`?{kind:`drillDown`,onClick:()=>o({country:n}),ariaLabel:r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:d===`region`?{kind:`drillDown`,onClick:()=>o({country:n,region:e.label}),ariaLabel:r(t(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}},n=re(b.map(e=>e.value),x?b.map(e=>e.previousValue):[]);return b.map(t=>{let r=ne(t.countryCode),i=t.previousValue;return{id:t.key,...le({label:t.label,media:{kind:`flag`,url:r??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:i,currentShare:m(t.value,n),previousShare:x&&i!==void 0?m(i,n):void 0,delta:x&&i!==void 0?te(t.value,i):void 0}})},[b,d,x,S,o]),C=i?.region&&e===`country`?i.country:null,w=(0,a.useCallback)(()=>{C?o({country:C}):l()},[C,l,o]),T=i?(0,B.jsx)(ce,{label:C?.name??t(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:C?r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),C.name):t(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:w,current:i.region??i.country.name,className:R.trail}):null,E=T?(0,B.jsx)(s,{direction:`row`,align:`center`,className:R.bodyHeader,children:T}):null;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(`div`,{className:R.content,children:[E,(0,B.jsx)(`div`,{className:R.stateArea,children:(0,B.jsx)(se,{isLoading:g&&!S,isFetching:_,isError:v,isEmpty:b.length===0,error:{description:t(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:y}]},children:(0,B.jsxs)(`div`,{className:R.chartArea,children:[(0,B.jsx)(c,{isDisabled:S,className:R.leaderboardPanel,children:(0,B.jsx)(oe,{data:ve,loading:S,withOverlayLabel:!0,withComparison:x,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:R.leaderboard})}),(0,B.jsx)(`div`,{className:R.geoChart,children:(0,B.jsx)(pe,{rows:_e,mode:d,focusCountry:u,resizeDebounceTime:100})})]})})})]}),(0,B.jsxs)(ue,{children:[(0,B.jsx)(de,{report:`locations`,section:he(e)}),(0,B.jsx)(fe,{exporter:ge,status:{isLoading:g,isFetching:_,isError:v},rowCount:b.length})]})]})}function z({attributes:e={}}){let t=e?.geoGranularity??V,n=Object.values(x).includes(t)?t:V;return(0,B.jsx)(h,{attributes:e,children:(0,B.jsx)(`div`,{className:R.root,children:(0,B.jsx)(Oe,{geoGranularity:n},n)})})}var B,V,ke=e((()=>{f(),S(),l(),o(),n(),u(),Se(),we(),De(),B=i(),V=`country`})),Ae,je=e((()=>{n(),Ae={attributes:[{id:`geoGranularity`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:t(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:t(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be=e((()=>{Me=`jpa/locations`,Ne=`jpa/map-marker`,Pe=`Top locations`,Fe=`Where your visitors are viewing from — by country, region, or city.`,Ie={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Le=`stats`,Re=`framed`,ze={name:Me,icon:Ne,title:Pe,description:Fe,help:Ie,category:Le,presentation:Re}}));function Ve({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:p(e)}}function H(e){return(0,W.jsx)(z,{attributes:Ve(e)})}function U(e){return(0,W.jsx)(z,{attributes:{geoGranularity:`country`,reportParams:p(!1,e)}})}function He(e){return(0,W.jsx)(z,{...e})}function Ue({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(w,{...n,widgetType:G,renderModule:We,renderComponent:He,attributes:Ve({withComparison:e,geoGranularity:t})})}var W,We,G,Ge,K,q,J,Y,X,Z,Q,$,Ke;e((()=>{f(),ve(),ge(),v(),T(),g(),be(),xe(),ke(),je(),Be(),W=i(),_(),ye(),We=`storybook/locations`,G=C(ze,Ae),Ge={title:`Packages/Premium Analytics/Widgets/Locations`,component:z,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[D,y]},q={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[D,y]},J={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[D,y]},Y={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[D,y]},X={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[D,y],beforeEach:()=>(O(`stats/location-views`,`loading`),()=>O(`stats/location-views`,null))},Z={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[D,y],beforeEach:()=>(O(`stats/location-views`,`error`),()=>O(`stats/location-views`,null))},Q={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[D,y],beforeEach:()=>(O(`stats/location-views`,`empty`),()=>O(`stats/location-views`,null))},$={render:e=>(0,W.jsx)(Ue,{...e}),args:{...E,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{..._e,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Ke=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{Y as CitiesMode,K as Default,Q as Empty,Z as Error,X as Loading,J as RegionsMode,$ as WidgetDashboardWithWidget,q as WithComparison,Ke as __namedExportsOrder,Ge as default};