import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{b as t,n,t as r}from"./build-module-BXs6jvWf.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{ou as a,vu as o}from"./build-module-D8x1-0PG.js";import{B as s,I as c,f as l,o as ee,vn as u}from"./charts-provider-C9ojlUj8.js";import{Zr as d,t as te,v as ne}from"./build-module-BEvijrel.js";import{t as f}from"./src-DwJsks-j.js";import{Dt as p,Sn as m,Yt as re,o as ie,t as h}from"./src-BcILQ8ng.js";import{t as ae}from"./widget-state-DnbF8hrz.js";import{O as g,U as oe,c as _,d as se,l as ce,o as v,s as y,t as b}from"./src-DPkpeJi9.js";import"./constants-JU419spr.js";import{r as le}from"./leaderboard-skeleton-fedGeyMF.js";import{n as x,r as ue}from"./register-report-mocks-DEKgkFm4.js";import{n as de,s as fe}from"./locations-geo-chart-DbreAoGj.js";import{n as S,r as C}from"./with-story-router-DbcsTEOF.js";import{a as pe,c as w,i as T,l as me,o as E,r as he,s as D,u as ge}from"./with-widget-canvas-Cwe-ucMl.js";import{n as _e,t as O}from"./use-no-views-empty-state-LaY4mrhf.js";import{n as k,t as ve}from"./register-stats-mocks-BLfWbTqK.js";import{n as ye,t as A}from"./force-stats-mock-state-CZ4B651-.js";var j,M,N,P,F,I,L,be,xe,R,Se=e((()=>{j=`_root_33236_1`,M=`_trail_33236_9`,N=`_content_33236_13`,P=`_bodyHeader_33236_20`,F=`_stateArea_33236_27`,I=`_chartArea_33236_32`,L=`_leaderboardPanel_33236_42`,be=`_leaderboard_33236_42`,xe=`_geoChart_33236_58`,R={root:j,trail:M,content:N,bodyHeader:P,stateArea:F,chartArea:I,leaderboardPanel:L,leaderboard:be,geoChart:xe}}));function Ce({data:e,hasComparison:t,isLoading:n,drillDepth:r,reportParams:i}){let a=JSON.stringify(i),[s,c]=(0,o.useState)(null);return!n&&(s?.drillDepth!==r||s.paramsKey!==a||s.data!==e)&&c({drillDepth:r,paramsKey:a,data:e,hasComparison:t}),n&&s&&s.paramsKey===a&&r>s.drillDepth&&s.data.length>0?{data:s.data,hasComparison:s.hasComparison,isHeld:!0,drillDepth:s.drillDepth}:{data:e,hasComparison:t,isHeld:!1,drillDepth:r}}var we=e((()=>{a()}));function Te(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function Ee({reportParams:e,max:t,geoMode:n=`country`,filter:r}){let{comparisonRows:i,hasComparison:a,isLoading:s,isFetching:c,hasData:l,isError:ee,refetch:u}=p({...e,geoMode:n,max:t,..._(r)},{maxRows:t}),d=(0,o.useMemo)(()=>(i?.rows??[]).map(Te),[i]);return{data:d,hasComparison:a,isLoading:s,isFetching:c,hasData:l,isError:d.length===0&&ee,refetch:u}}var De=e((()=>{h(),a(),b()}));function Oe(e,t){return e===0?t:[`region`,`city`][e-1]}function ke({geoGranularity:e}){re();let{reportParams:r}=s(),{drillDownItem:i,drillDown:a,resetDrillDown:c}=ee(),te=i?.country,f=0;i&&(f=i.region?2:1);let p=Oe(f,e),m=(0,o.useMemo)(()=>i?{country:i.country.code,region:i.region}:void 0,[i]),h=Ee({reportParams:r,max:10,geoMode:p,filter:m}),{isLoading:g,isFetching:_,isError:v,refetch:b}=h,{data:x,hasComparison:ue,isHeld:S,drillDepth:C}=Ce({...h,drillDepth:f,reportParams:r}),pe=ce(y(Oe(C,e))),w=_e({isLoading:g&&!S,isError:v,isEmpty:x.length===0},n(`You don’t have locations recorded yet.`,`jetpack-premium-analytics-pkg`)),T=(0,o.useMemo)(()=>se(y(p),m),[p,m]),me=(0,o.useMemo)(()=>(S?[]:x).filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[x,S]),E=ie(`regions-cities`),he=(0,o.useMemo)(()=>{let e=e=>{if(S||!e.countryCode||E)return{kind:`static`};let r={code:e.countryCode,name:e.countryFull};return p===`country`?{kind:`drillDown`,onClick:()=>a({country:r}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),e.countryFull)}:p===`region`?{kind:`drillDown`,onClick:()=>a({country:r,region:e.label}),ariaLabel:t(n(`View cities in %s`,`jetpack-premium-analytics-pkg`),e.label)}:{kind:`static`}};return x.map(t=>{let n=u(t.countryCode);return{id:t.key,...fe({label:t.label,media:{kind:`flag`,url:n??void 0,country:t.countryFull},action:e(t)}),currentValue:t.value,previousValue:t.previousValue}})},[x,p,S,E,a]),D=i?.region&&e===`country`?i.country:null,ge=(0,o.useCallback)(()=>{D?a({country:D}):c()},[D,c,a]),O=i?(0,B.jsx)(oe,{label:D?.name??n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:D?t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),D.name):n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:ge,current:i.region??i.country.name,className:R.trail}):null,k=O?(0,B.jsx)(d,{direction:`row`,align:`center`,className:R.bodyHeader,children:O}):null;return l({report:`locations`,section:y(e),csv:{exporter:T,status:{isLoading:g,isFetching:_,isError:v},rowCount:x.length}}),(0,B.jsxs)(`div`,{className:R.content,children:[k,(0,B.jsx)(`div`,{className:R.stateArea,children:(0,B.jsx)(ae,{isLoading:w.isLoading,isFetching:_,isError:v,isEmpty:x.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:b}]},empty:w.empty,children:(0,B.jsxs)(`div`,{className:R.chartArea,children:[(0,B.jsx)(ne,{isDisabled:S,className:R.leaderboardPanel,children:(0,B.jsx)(le,{data:he,loading:S,withOverlayLabel:!0,withComparison:ue,showLegend:!1,columns:{label:pe,metric:`views`},dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:R.leaderboard})}),(0,B.jsx)(`div`,{className:R.geoChart,children:(0,B.jsx)(de,{rows:me,mode:p,focusCountry:te,resizeDebounceTime:100})})]})})})]})}function z({attributes:e={}}){let t=e?.geoGranularity??V,n=Object.values(v).includes(t)?t:V;return n!==`country`&&ie(`regions-cities`)?(0,B.jsx)(c,{attributes:e,children:(0,B.jsx)(g,{feature:`regions-cities`})}):(0,B.jsx)(c,{attributes:e,children:(0,B.jsx)(`div`,{className:R.root,children:(0,B.jsx)(ke,{geoGranularity:n},n)})})}var B,V,Ae=e((()=>{h(),b(),te(),a(),r(),f(),O(),Se(),we(),De(),B=i(),V=`country`})),je,Me=e((()=>{je={example:{attributes:{geoGranularity:`country`}}}})),Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He=e((()=>{Ne=`jpa/locations`,Pe=`jpa/map-marker`,Fe=`Top locations`,Ie=`Where your visitors are viewing from — by country, region, or city.`,Le={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Re=`stats`,ze=`framed`,Be=[{id:`geoGranularity`,type:`jpa/toggle-group`,label:`View by`,relevance:`high`,elements:[{value:`country`,label:`Countries`},{value:`region`,label:`Regions`},{value:`city`,label:`Cities`}]}],Ve={name:Ne,icon:Pe,title:Fe,description:Ie,help:Le,category:Re,presentation:ze,attributes:Be}}));function Ue({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:m(e)}}function H(e){return(0,W.jsx)(z,{attributes:Ue(e)})}function U(e){return(0,W.jsx)(z,{attributes:{geoGranularity:`country`,reportParams:m(!1,e)}})}function We(e){return(0,W.jsx)(z,{...e})}function Ge({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(w,{...n,widgetType:qe,renderModule:Ke,renderComponent:We,attributes:Ue({withComparison:e,geoGranularity:t})})}var W,Ke,qe,Je,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),me(),E(),S(),he(),x(),ve(),ye(),Ae(),Me(),He(),W=i(),ue(),k(),Ke=`storybook/locations`,qe=pe(Ve,je),Je={title:`Packages/Premium Analytics/Widgets/Locations`,component:z,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with drill-down from a country into its regions and from a region into its cities, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[T,C]},K={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[T,C]},q={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[T,C]},J={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[T,C]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[T,C],beforeEach:()=>(A(`stats/location-views`,`loading`),()=>A(`stats/location-views`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[T,C],beforeEach:()=>(A(`stats/location-views`,`error`),()=>A(`stats/location-views`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[T,C],beforeEach:()=>(A(`stats/location-views`,`empty`),()=>A(`stats/location-views`,null))},Q={tags:[`widget-dashboard`],render:e=>(0,W.jsx)(Ge,{...e}),args:{...D,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...ge,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},$=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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