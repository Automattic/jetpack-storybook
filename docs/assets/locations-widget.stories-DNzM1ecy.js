import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-Cm3Kd3py.js";import{At as s}from"./build-module-D2aEjqke.js";import{g as c,t as l}from"./build-module-DOqfMuVb.js";import{t as u}from"./src-B-dKoZrA.js";import{Lt as ee,ht as d,t as f,wn as p}from"./src-BdYGzNLD.js";import{C as te,Xt as ne,in as re,nn as ie,o as ae,tn as oe,y as m}from"./charts-provider-CTKbFoXP.js";import"./rows-DAmD2BmE.js";import{r as se}from"./leaderboard-skeleton-4Mx_UFi5.js";import{n as h,r as g}from"./register-report-mocks-DilXs3g1.js";import{t as ce}from"./widget-state-Dyjo1bZn.js";import{n as _,r as v}from"./with-story-router-Beljd9ki.js";import{g as le,i as ue,p as de,y as fe}from"./leaderboard-ct3jyvpD.js";import{n as pe,w as me}from"./components-DOLGZfjl.js";import{d as y,l as b,p as he,t as x,u as ge}from"./src-LIa9Lbek.js";import{a as _e,g as ve,h as ye,i as S,m as C,n as w,p as T,r as E}from"./with-widget-canvas-DiU50LEM.js";import{n as be,t as xe}from"./register-stats-mocks-0FUuil3T.js";import{n as Se,t as D}from"./force-stats-mock-state-BHu4HA43.js";var O,k,A,j,M,N,P,F,I,L,Ce=e((()=>{O=`_root_33236_1`,k=`_trail_33236_9`,A=`_content_33236_13`,j=`_bodyHeader_33236_20`,M=`_stateArea_33236_27`,N=`_chartArea_33236_32`,P=`_leaderboardPanel_33236_42`,F=`_leaderboard_33236_42`,I=`_geoChart_33236_58`,L={root:O,trail:k,content:A,bodyHeader:j,stateArea:M,chartArea:N,leaderboardPanel:P,leaderboard:F,geoChart:I}}));function we({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let o=JSON.stringify(i),[s,c]=(0,a.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==o||s.data!==e)&&c({drillDepth:r,paramsKey:o,data:e,hasComparison:t}),n&&s&&s.paramsKey===o&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0}:{data:e,hasComparison:t,isHeld:!1}}var Te=e((()=>{o()}));function Ee(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function De({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:u,refetch:ee}=d({...e,geoMode:n,max:t,...y(r)},{maxRows:t}),f=(0,a.useMemo)(()=>(i?.rows??[]).map(Ee),[i]);return{data:f,hasComparison:o,isLoading:s,isFetching:c,hasData:l,isError:f.length===0&&u,refetch:ee}}var Oe=e((()=>{f(),o(),x()}));function ke({geoGranularity:e}){ee();let{reportParams:n}=te(),{drillDownItem:i,drillDown:o,resetDrillDown:l}=ae(),u=i?.country,d=e,f=0;i&&(d=i.region?`city`:`region`,f=i.region?2:1);let p=(0,a.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),m=De({reportParams:n,max:10,geoMode:d,filter:p}),{isLoading:h,isFetching:g,isError:_,refetch:v}=m,{data:y,hasComparison:b,isHeld:x}=we({...m,drillDepth:f,reportParams:n}),_e=(0,a.useMemo)(()=>he(ge(d),p),[d,p]),ve=(0,a.useMemo)(()=>(x?[]:y).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[y,x]),ye=(0,a.useMemo)(()=>{let e=e=>{if(x||!e.countryCode)return{kind:`static`};let n={code:e.countryCode,name:e.countryFull};return d===`country`?{kind:`drillDown`,onClick:()=>o({country:n}),ariaLabel:r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:d===`region`?{kind:`drillDown`,onClick:()=>o({country:n,region:e.label}),ariaLabel:r(t(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}},n=ie(y.map(e=>e.value),b?y.map(e=>e.previousValue):[]);return y.map(t=>{let r=ne(t.countryCode),i=t.previousValue;return{id:t.key,...ue({label:t.label,media:{kind:`flag`,url:r??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:i,currentShare:oe(t.value,n),previousShare:b&&i!==void 0?oe(i,n):void 0,delta:b&&i!==void 0?re(t.value,i):void 0}})},[y,d,b,x,o]),S=i?.region&&e===`country`?i.country:null,C=(0,a.useCallback)(()=>{S?o({country:S}):l()},[S,l,o]),w=i?(0,z.jsx)(le,{label:S?.name??t(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:S?r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),S.name):t(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:C,current:i.region??i.country.name,className:L.trail}):null,T=w?(0,z.jsx)(s,{direction:`row`,align:`center`,className:L.bodyHeader,children:w}):null;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(`div`,{className:L.content,children:[T,(0,z.jsx)(`div`,{className:L.stateArea,children:(0,z.jsx)(ce,{isLoading:h&&!x,isFetching:g,isError:_,isEmpty:y.length===0,error:{description:t(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:v}]},children:(0,z.jsxs)(`div`,{className:L.chartArea,children:[(0,z.jsx)(c,{isDisabled:x,className:L.leaderboardPanel,children:(0,z.jsx)(se,{data:ye,loading:x,withOverlayLabel:!0,withComparison:b,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:L.leaderboard})}),(0,z.jsx)(`div`,{className:L.geoChart,children:(0,z.jsx)(me,{rows:ve,mode:d,focusCountry:u,resizeDebounceTime:100})})]})})})]}),(0,z.jsxs)(de,{children:[(0,z.jsx)(fe,{report:`locations`,section:ge(e)}),(0,z.jsx)(pe,{exporter:_e,status:{isLoading:h,isFetching:g,isError:_},rowCount:y.length})]})]})}function R({attributes:e={}}){let t=e?.geoGranularity??B,n=Object.values(b).includes(t)?t:B;return(0,z.jsx)(m,{attributes:e,children:(0,z.jsx)(`div`,{className:L.root,children:(0,z.jsx)(ke,{geoGranularity:n},n)})})}var z,B,Ae=e((()=>{f(),x(),l(),o(),n(),u(),Ce(),Te(),Oe(),z=i(),B=`country`})),V,je=e((()=>{n(),V={attributes:[{id:`geoGranularity`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:t(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:t(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be=e((()=>{Me=`jpa/locations`,Ne=`jpa/map-marker`,Pe=`Top locations`,Fe=`Where your visitors are viewing from — by country, region, or city.`,Ie={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Le=`stats`,Re=`framed`,ze={name:Me,icon:Ne,title:Pe,description:Fe,help:Ie,category:Le,presentation:Re}}));function Ve({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:p(e)}}function H(e){return(0,W.jsx)(R,{attributes:Ve(e)})}function U(e){return(0,W.jsx)(R,{attributes:{geoGranularity:`country`,reportParams:p(!1,e)}})}function He(e){return(0,W.jsx)(R,{...e})}function Ue({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(C,{...n,widgetType:G,renderModule:We,renderComponent:He,attributes:Ve({withComparison:e,geoGranularity:t})})}var W,We,G,Ge,K,q,J,Y,X,Z,Q,$,Ke;e((()=>{f(),ye(),_e(),_(),w(),h(),xe(),Se(),Ae(),je(),Be(),W=i(),g(),be(),We=`storybook/locations`,G=S(ze,V),Ge={title:`Packages/Premium Analytics/Widgets/Locations`,component:R,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[E,v]},q={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[E,v]},J={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[E,v]},Y={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[E,v]},X={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[E,v],beforeEach:()=>(D(`stats/location-views`,`loading`),()=>D(`stats/location-views`,null))},Z={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[E,v],beforeEach:()=>(D(`stats/location-views`,`error`),()=>D(`stats/location-views`,null))},Q={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[E,v],beforeEach:()=>(D(`stats/location-views`,`empty`),()=>D(`stats/location-views`,null))},$={render:e=>(0,W.jsx)(Ue,{...e}),args:{...T,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...ve,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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