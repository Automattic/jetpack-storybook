import{i as e}from"./preload-helper-usAeo7Bx.js";import{f as t,n,t as r}from"./build-module-yGZutq_9.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{$i as a,Gu as o,Nu as s,t as c}from"./build-module-zwSmKorH.js";import{bt as l}from"./build-module-CRH4RouM.js";import{C as u,Gt as d,H as f,Tt as ee,V as p,Wt as m,o as te,qt as ne,y as h}from"./wp-date-settings-DihdcyiH.js";import{t as g}from"./src-CeB65ymg.js";import{t as re,w as ie}from"./src-DFNM1k7F.js";import{en as _,i as v,tt as ae}from"./date-filters-panel-z5yifMX5.js";import"./constants-B1kGztHF.js";import{r as oe}from"./leaderboard-skeleton-DNc_Kb6U.js";import{F as se,J as ce,S as y,b as le,j as ue,q as de,w as fe}from"./report-metric-zxHMGTH2.js";import{t as pe}from"./widget-state-BkvJztQN.js";import{C as me,D as he,E as ge,O as _e,S as ve,T as ye,b as be,k as b,t as xe,w as Se,x}from"./src-DJfnp4aY.js";import{n as Ce,t as we}from"./register-stats-mocks-CcJG3PD3.js";import{n as Te,t as S}from"./force-stats-mock-state-DrcA80wO.js";var C,w,T,E,D,O,k,A,j,M,Ee=e((()=>{C=`_root_mw6wj_1`,w=`_backLink_mw6wj_9`,T=`_content_mw6wj_17`,E=`_bodyHeader_mw6wj_24`,D=`_stateArea_mw6wj_31`,O=`_chartArea_mw6wj_36`,k=`_leaderboardPanel_mw6wj_46`,A=`_leaderboard_mw6wj_46`,j=`_geoChart_mw6wj_62`,M={root:C,backLink:w,content:T,bodyHeader:E,stateArea:D,chartArea:O,leaderboardPanel:k,leaderboard:A,geoChart:j}}));function De(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function Oe({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{comparisonRows:i,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:l,refetch:u}=ae({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),d=(i?.rows??[]).map(De).filter(e=>e!==null);return{data:d,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:d.length===0&&l,refetch:u}}var ke=e((()=>{v()}));function Ae({geoGranularity:e}){let{reportParams:r}=u(),{drillDownItem:i,drillDown:a,resetDrillDown:s}=te();(0,o.useEffect)(()=>{e!==`country`&&s()},[s,e]);let c=e===`country`?i:void 0,f=e===`country`&&c?`region`:e,{data:p,hasComparison:h,isLoading:g,isFetching:re,isError:_,refetch:v}=Oe({reportParams:r,max:10,geoMode:f,countryFilter:c?.code}),ae=(0,o.useMemo)(()=>p.map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull})),[p]),ce=(0,o.useMemo)(()=>{let e=d(p.map(e=>e.value),h?p.map(e=>e.previousValue):[]);return p.map(r=>{let i=ee(r.countryCode),o=r.previousValue,s=r.countryCode;return{id:r.key,...se({label:r.label,media:{kind:`flag`,url:i??void 0,country:r.countryFull},action:f===`country`&&s?{kind:`drillDown`,onClick:()=>a({code:s,name:r.countryFull}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),r.countryFull)}:{kind:`static`}}),currentValue:r.value,previousValue:o,currentShare:m(r.value,e),previousShare:h&&o!==void 0?m(o,e):void 0,delta:h&&o!==void 0?ne(r.value,o):void 0}})},[p,f,h,a]),y=c?(0,P.jsx)(fe,{label:n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:s,className:M.backLink}):null,le=y?(0,P.jsx)(l,{direction:`row`,align:`center`,className:M.bodyHeader,children:y}):null;return(0,P.jsxs)(`div`,{className:M.content,children:[le,(0,P.jsx)(`div`,{className:M.stateArea,children:(0,P.jsx)(pe,{isLoading:g,isFetching:re,isError:_,isEmpty:p.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:v}]},empty:{icon:ie,description:n(`No location data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,P.jsxs)(`div`,{className:M.chartArea,children:[(0,P.jsx)(`div`,{className:M.leaderboardPanel,children:(0,P.jsx)(oe,{data:ce,withOverlayLabel:!0,withComparison:h,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:M.leaderboard})}),(0,P.jsx)(`div`,{className:M.geoChart,children:(0,P.jsx)(ue,{rows:ae,mode:f,focusCountry:c,resizeDebounceTime:100})})]})})})]})}function N({attributes:e={}}){let t=e?.geoGranularity??I,n=Object.prototype.hasOwnProperty.call(F,t)?t:I;return(0,P.jsx)(h,{attributes:e,children:(0,P.jsxs)(`div`,{className:M.root,children:[(0,P.jsx)(Ae,{geoGranularity:n}),(0,P.jsx)(y,{children:(0,P.jsx)(le,{report:`locations`,section:F[n]})})]})})}var P,F,I,je=e((()=>{xe(),re(),s(),r(),g(),Ee(),ke(),P=i(),F={country:`countries`,region:`regions`,city:`cities`},I=`country`})),L,Me=e((()=>{r(),c(),p(),L={icon:a,attributes:[{id:`geoGranularity`,label:n(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:f,elements:[{label:n(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:n(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:n(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),R,z,B,V,Ne,Pe,Fe,Ie=e((()=>{R=`jpa/locations`,z=`Top locations`,B=`Where your visitors are viewing from — by country, region, or city.`,V={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Ne=`stats`,Pe=`framed`,Fe={name:R,title:z,description:B,help:V,category:Ne,presentation:Pe}}));function Le({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:_(e)}}function H(e){return(0,W.jsx)(N,{attributes:Le(e)})}function U(e){return(0,W.jsx)(N,{attributes:{geoGranularity:`country`,reportParams:_(!1,e)}})}function Re(e){return(0,W.jsx)(N,{...e})}function ze({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(ye,{...n,widgetType:Ve,renderModule:Be,renderComponent:Re,attributes:Le({withComparison:e,geoGranularity:t})})}var W,Be,Ve,He,G,K,q,J,Y,X,Z,Q,$;e((()=>{v(),ge(),me(),_e(),be(),de(),we(),Te(),je(),Me(),Ie(),W=i(),ce(),Ce(),Be=`storybook/locations`,Ve=ve(Fe,L),He={title:`Packages/Premium Analytics/Widgets/Locations`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with country drill-down into regions, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[x,b]},K={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[x,b]},q={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[x,b]},J={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[x,b]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/location-views`,`loading`),()=>S(`stats/location-views`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/location-views`,`error`),()=>S(`stats/location-views`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/location-views`,`empty`),()=>S(`stats/location-views`,null))},Q={render:e=>(0,W.jsx)(ze,{...e}),args:{...Se,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...he,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral location
glyph and the "stats will appear here" copy).`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as CitiesMode,G as Default,Z as Empty,X as Error,Y as Loading,q as RegionsMode,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,He as default};