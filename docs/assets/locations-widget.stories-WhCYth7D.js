import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Uu as a,Zi as o,ju as s,t as c}from"./build-module-2iv4IIRq.js";import{vt as l}from"./build-module-BX6MUpOQ2.js";import{Ft as u,X as d,Y as f,b as ee,en as te,g as p,r as ne,rn as re,tn as ie}from"./hooks-B2yFFi2C.js";import{t as m,w as ae}from"./src-C-E2d-Lb.js";import{t as h}from"./src-BBGd1c09.js";import{$t as g,et as oe,r as _}from"./date-period-dropdown-BEY2IP9Y.js";import"./constants-B1kGztHF.js";import{r as se}from"./leaderboard-skeleton-CInpLGMp.js";import{i as ce,r as v}from"./register-report-mocks-DSWyIeBw.js";import{E as le,N as ue,S as y,k as de,w as fe}from"./report-metric-CLz1bq_s.js";import{t as pe}from"./widget-state-DgCWdpl8.js";import{t as me}from"./src-C4OpgBRF.js";import{a as he,c as ge,d as b,i as _e,l as ve,n as ye,o as be,r as x,s as xe,u as Se}from"./with-widget-canvas-D6uWcVuJ.js";import{n as Ce,t as we}from"./register-stats-mocks-BMeCcFvu.js";import{n as Te,t as S}from"./force-stats-mock-state-CVOamAoS.js";var C,w,T,E,D,O,k,A,j,M,Ee=e((()=>{C=`_root_mw6wj_1`,w=`_backLink_mw6wj_9`,T=`_content_mw6wj_17`,E=`_bodyHeader_mw6wj_24`,D=`_stateArea_mw6wj_31`,O=`_chartArea_mw6wj_36`,k=`_leaderboardPanel_mw6wj_46`,A=`_leaderboard_mw6wj_46`,j=`_geoChart_mw6wj_62`,M={root:C,backLink:w,content:T,bodyHeader:E,stateArea:D,chartArea:O,leaderboardPanel:k,leaderboard:A,geoChart:j}}));function De(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function Oe({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{comparisonRows:i,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:l,refetch:u}=oe({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),d=(i?.rows??[]).map(De).filter(e=>e!==null);return{data:d,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:d.length===0&&l,refetch:u}}var ke=e((()=>{_()}));function Ae({geoGranularity:e}){let{reportParams:n}=ee(),{drillDownItem:i,drillDown:o,resetDrillDown:s}=ne();(0,a.useEffect)(()=>{e!==`country`&&s()},[s,e]);let c=e===`country`?i:void 0,d=e===`country`&&c?`region`:e,{data:f,hasComparison:p,isLoading:m,isFetching:h,isError:g,refetch:oe}=Oe({reportParams:n,max:10,geoMode:d,countryFilter:c?.code}),_=(0,a.useMemo)(()=>f.map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull})),[f]),ce=(0,a.useMemo)(()=>{let e=ie(f.map(e=>e.value),p?f.map(e=>e.previousValue):[]);return f.map(n=>{let i=u(n.countryCode),a=n.previousValue,s=n.countryCode;return{id:n.key,...ue({label:n.label,media:{kind:`flag`,url:i??void 0,country:n.countryFull},action:d===`country`&&s?{kind:`drillDown`,onClick:()=>o({code:s,name:n.countryFull}),ariaLabel:r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),n.countryFull)}:{kind:`static`}}),currentValue:n.value,previousValue:a,currentShare:te(n.value,e),previousShare:p&&a!==void 0?te(a,e):void 0,delta:p&&a!==void 0?re(n.value,a):void 0}})},[f,d,p,o]),v=c?(0,P.jsx)(le,{label:t(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:s,className:M.backLink}):null,y=v?(0,P.jsx)(l,{direction:`row`,align:`center`,className:M.bodyHeader,children:v}):null;return(0,P.jsxs)(`div`,{className:M.content,children:[y,(0,P.jsx)(`div`,{className:M.stateArea,children:(0,P.jsx)(pe,{isLoading:m,isFetching:h,isError:g,isEmpty:f.length===0,error:{description:t(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:oe}]},empty:{icon:ae,description:t(`No location data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,P.jsxs)(`div`,{className:M.chartArea,children:[(0,P.jsx)(`div`,{className:M.leaderboardPanel,children:(0,P.jsx)(se,{data:ce,withOverlayLabel:!0,withComparison:p,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:M.leaderboard})}),(0,P.jsx)(`div`,{className:M.geoChart,children:(0,P.jsx)(de,{rows:_,mode:d,focusCountry:c,resizeDebounceTime:100})})]})})})]})}function N({attributes:e={}}){let t=e?.geoGranularity??I,n=Object.prototype.hasOwnProperty.call(F,t)?t:I;return(0,P.jsx)(p,{attributes:e,children:(0,P.jsxs)(`div`,{className:M.root,children:[(0,P.jsx)(Ae,{geoGranularity:n}),(0,P.jsx)(fe,{children:(0,P.jsx)(y,{report:`locations`,section:F[n]})})]})})}var P,F,I,je=e((()=>{me(),m(),s(),n(),h(),Ee(),ke(),P=i(),F={country:`countries`,region:`regions`,city:`cities`},I=`country`})),L,Me=e((()=>{n(),c(),f(),L={icon:o,attributes:[{id:`geoGranularity`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:d,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:t(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:t(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),R,z,B,V,Ne,Pe,Fe,Ie=e((()=>{R=`jpa/locations`,z=`Top locations`,B=`Where your visitors are viewing from — by country, region, or city.`,V={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Ne=`stats`,Pe=`framed`,Fe={name:R,title:z,description:B,help:V,category:Ne,presentation:Pe}}));function Le({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:g(e)}}function H(e){return(0,W.jsx)(N,{attributes:Le(e)})}function U(e){return(0,W.jsx)(N,{attributes:{geoGranularity:`country`,reportParams:g(!1,e)}})}function Re(e){return(0,W.jsx)(N,{...e})}function ze({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(xe,{...n,widgetType:Ve,renderModule:Be,renderComponent:Re,attributes:Le({withComparison:e,geoGranularity:t})})}var W,Be,Ve,He,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),ge(),he(),Se(),ye(),v(),we(),Te(),je(),Me(),Ie(),W=i(),ce(),Ce(),Be=`storybook/locations`,Ve=_e(Fe,L),He={title:`Packages/Premium Analytics/Widgets/Locations`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with country drill-down into regions, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[x,b]},K={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[x,b]},q={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[x,b]},J={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[x,b]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/location-views`,`loading`),()=>S(`stats/location-views`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/location-views`,`error`),()=>S(`stats/location-views`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/location-views`,`empty`),()=>S(`stats/location-views`,null))},Q={render:e=>(0,W.jsx)(ze,{...e}),args:{...be,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...ve,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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