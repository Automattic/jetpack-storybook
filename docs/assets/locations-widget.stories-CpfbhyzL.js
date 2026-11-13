import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{b as t,n,t as r}from"./build-module-BXs6jvWf.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{ou as a,vu as o}from"./build-module-D8x1-0PG.js";import{Zr as s,t as c,v as ee}from"./build-module-BEvijrel.js";import{t as l}from"./src-DwJsks-j.js";import{Dt as u,Sn as d,Yt as f,o as p,t as m}from"./src-CU_16BOb.js";import{H as te,I as h,f as ne,in as re,o as ie}from"./charts-provider-DOirnpAA.js";import{t as ae}from"./widget-state-DnbF8hrz.js";import{G as oe,d as g,f as se,i as _,j as v,l as y,m as ce,n as b,r as x,u as S}from"./with-story-router-CI3ZTRlv.js";import"./constants-qKcHC8ID.js";import{r as le}from"./leaderboard-skeleton-FNRYZS_s.js";import{n as C,r as ue}from"./register-report-mocks-C2D4cGS-.js";import{n as de,s as fe}from"./locations-geo-chart-BvNRBuvd.js";import{a as pe,c as w,i as T,l as me,o as E,r as he,s as D,u as ge}from"./with-widget-canvas-_EJfaAe7.js";import{n as _e,t as O}from"./use-no-views-empty-state-BIupyoWW.js";import{n as k,t as ve}from"./register-stats-mocks-BLfWbTqK.js";import{n as ye,t as A}from"./force-stats-mock-state-BGfGpqBC.js";var j,M,N,P,F,I,L,be,xe,R,Se=e((()=>{j=`_root_33236_1`,M=`_trail_33236_9`,N=`_content_33236_13`,P=`_bodyHeader_33236_20`,F=`_stateArea_33236_27`,I=`_chartArea_33236_32`,L=`_leaderboardPanel_33236_42`,be=`_leaderboard_33236_42`,xe=`_geoChart_33236_58`,R={root:j,trail:M,content:N,bodyHeader:P,stateArea:F,chartArea:I,leaderboardPanel:L,leaderboard:be,geoChart:xe}}));function Ce({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let a=JSON.stringify(i),[s,c]=(0,o.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==a||s.data!==e)&&c({drillDepth:r,paramsKey:a,data:e,hasComparison:t}),n&&s&&s.paramsKey===a&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0,drillDepth:s.drillDepth}:{data:e,hasComparison:t,isHeld:!1,drillDepth:r}}var we=e((()=>{a()}));function Te(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function Ee({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:a,isLoading:s,isFetching:c,hasData:ee,isError:l,refetch:d}=u({...e,geoMode:n,max:t,...g(r)},{maxRows:t}),f=(0,o.useMemo)(()=>(i?.rows??[]).map(Te),[i]);return{data:f,hasComparison:a,isLoading:s,isFetching:c,hasData:ee,isError:f.length===0&&l,refetch:d}}var De=e((()=>{m(),a(),_()}));function Oe(e,t){return e===0?t:[`region`,`city`][e-1]}function ke({geoGranularity:e}){f();let{reportParams:r}=te(),{drillDownItem:i,drillDown:a,resetDrillDown:c}=ie(),l=i?.country,u=0;i&&(u=i.region?2:1);let d=Oe(u,e),m=(0,o.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),h=Ee({reportParams:r,max:10,geoMode:d,filter:m}),{isLoading:g,isFetching:_,isError:v,refetch:y}=h,{data:b,hasComparison:x,isHeld:C,drillDepth:ue}=Ce({...h,drillDepth:u,reportParams:r}),pe=se(S(Oe(ue,e))),w=_e({isLoading:g&&!C,isError:v,isEmpty:b.length===0},n(`You don’t have locations recorded yet.`,`jetpack-premium-analytics-pkg`)),T=(0,o.useMemo)(()=>ce(S(d),m),[d,m]),me=(0,o.useMemo)(()=>(C?[]:b).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[b,C]),E=p(`regions-cities`),he=(0,o.useMemo)(()=>{let e=e=>{if(C||!e.countryCode||E)return{kind:`static`};let r={code:e.countryCode,name:e.countryFull};return d===`country`?{kind:`drillDown`,onClick:()=>a({country:r}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:d===`region`?{kind:`drillDown`,onClick:()=>a({country:r,region:e.label}),ariaLabel:t(n(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}};return b.map(t=>{let n=re(t.countryCode);return{id:t.key,...fe({label:t.label,media:{kind:`flag`,url:n??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:t.previousValue}})},[b,d,C,E,a]),D=i?.region&&e===`country`?i.country:null,ge=(0,o.useCallback)(()=>{D?a({country:D}):c()},[D,c,a]),O=i?(0,B.jsx)(oe,{label:D?.name??n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:D?t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),D.name):n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:ge,current:i.region??i.country.name,className:R.trail}):null,k=O?(0,B.jsx)(s,{direction:`row`,align:`center`,className:R.bodyHeader,children:O}):null;return ne({report:`locations`,section:S(e),csv:{exporter:T,status:{isLoading:g,isFetching:_,isError:v},rowCount:b.length}}),(0,B.jsxs)(`div`,{className:R.content,children:[k,(0,B.jsx)(`div`,{className:R.stateArea,children:(0,B.jsx)(ae,{isLoading:w.isLoading,isFetching:_,isError:v,isEmpty:b.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:y}]},empty:w.empty,children:(0,B.jsxs)(`div`,{className:R.chartArea,children:[(0,B.jsx)(ee,{isDisabled:C,className:R.leaderboardPanel,children:(0,B.jsx)(le,{data:he,loading:C,withOverlayLabel:!0,withComparison:x,showLegend:!1,columns:{label:pe,metric:`views`},dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:R.leaderboard})}),(0,B.jsx)(`div`,{className:R.geoChart,children:(0,B.jsx)(de,{rows:me,mode:d,focusCountry:l,resizeDebounceTime:100})})]})})})]})}function z({attributes:e={}}){let t=e?.geoGranularity??V,n=Object.values(y).includes(t)?t:V;return n!==`country`&&p(`regions-cities`)?(0,B.jsx)(h,{attributes:e,children:(0,B.jsx)(v,{feature:`regions-cities`})}):(0,B.jsx)(h,{attributes:e,children:(0,B.jsx)(`div`,{className:R.root,children:(0,B.jsx)(ke,{geoGranularity:n},n)})})}var B,V,Ae=e((()=>{m(),_(),c(),a(),r(),l(),O(),Se(),we(),De(),B=i(),V=`country`})),je,Me=e((()=>{je={example:{attributes:{geoGranularity:`country`}}}})),Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He=e((()=>{Ne=`jpa/locations`,Pe=`jpa/map-marker`,Fe=`Top locations`,Ie=`Where your visitors are viewing from — by country, region, or city.`,Le={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Re=`stats`,ze=`framed`,Be=[{id:`geoGranularity`,type:`jpa/toggle-group`,label:`View by`,relevance:`high`,elements:[{value:`country`,label:`Countries`},{value:`region`,label:`Regions`},{value:`city`,label:`Cities`}]}],Ve={name:Ne,icon:Pe,title:Fe,description:Ie,help:Le,category:Re,presentation:ze,attributes:Be}}));function Ue({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:d(e)}}function H(e){return(0,W.jsx)(z,{attributes:Ue(e)})}function U(e){return(0,W.jsx)(z,{attributes:{geoGranularity:`country`,reportParams:d(!1,e)}})}function We(e){return(0,W.jsx)(z,{...e})}function Ge({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(w,{...n,widgetType:qe,renderModule:Ke,renderComponent:We,attributes:Ue({withComparison:e,geoGranularity:t})})}var W,Ke,qe,Je,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),me(),E(),b(),he(),C(),ve(),ye(),Ae(),Me(),He(),W=i(),ue(),k(),Ke=`storybook/locations`,qe=pe(Ve,je),Je={title:`Packages/Premium Analytics/Widgets/Locations`,component:z,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[T,x]},K={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[T,x]},q={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[T,x]},J={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[T,x]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[T,x],beforeEach:()=>(A(`stats/location-views`,`loading`),()=>A(`stats/location-views`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[T,x],beforeEach:()=>(A(`stats/location-views`,`error`),()=>A(`stats/location-views`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[T,x],beforeEach:()=>(A(`stats/location-views`,`empty`),()=>A(`stats/location-views`,null))},Q={tags:[`widget-dashboard`],render:e=>(0,W.jsx)(Ge,{...e}),args:{...D,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...ge,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},$=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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