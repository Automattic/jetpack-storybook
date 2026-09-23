import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Uu as a,Zi as o,ju as s,t as c}from"./build-module-2iv4IIRq.js";import{Et as ee}from"./build-module-l8c-_EUg2.js";import{fn as l,hn as u,it as d,m as f,pn as te,qt as ne,r as re,rt as p,v as ie}from"./hooks-DHCJb27o.js";import{t as ae,w as oe}from"./src-C-E2d-Lb.js";import{t as m}from"./src-C4u6bkr2.js";import{nt as h,r as g,tn as _}from"./date-period-dropdown-Lkqpg5EL.js";import"./constants-C7AKabD4.js";import{r as se}from"./leaderboard-skeleton-BQskv03H.js";import{i as v,r as y}from"./register-report-mocks-DI1BCi0x.js";import{S as ce,T as le,b as ue,k as de,v as fe}from"./report-metric-Bc4QPhaR.js";import{t as pe}from"./widget-state-DYquvHa_.js";import{t as me}from"./src-KXjo8tPs.js";import{a as he,c as ge,d as b,i as _e,l as ve,n as ye,o as be,r as x,s as xe,u as Se}from"./with-widget-canvas-R4jKdyOZ.js";import{n as Ce,t as we}from"./register-stats-mocks-Csa-qK4s.js";import{n as Te,t as S}from"./force-stats-mock-state-DESdo62k.js";var C,w,T,E,D,O,k,A,j,M,Ee=e((()=>{C=`_root_mw6wj_1`,w=`_backLink_mw6wj_9`,T=`_content_mw6wj_17`,E=`_bodyHeader_mw6wj_24`,D=`_stateArea_mw6wj_31`,O=`_chartArea_mw6wj_36`,k=`_leaderboardPanel_mw6wj_46`,A=`_leaderboard_mw6wj_46`,j=`_geoChart_mw6wj_62`,M={root:C,backLink:w,content:T,bodyHeader:E,stateArea:D,chartArea:O,leaderboardPanel:k,leaderboard:A,geoChart:j}}));function De(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function Oe({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{comparisonRows:i,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:ee,refetch:l}=h({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),u=(i?.rows??[]).map(De).filter(e=>e!==null);return{data:u,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:u.length===0&&ee,refetch:l}}var ke=e((()=>{g()}));function Ae({geoGranularity:e}){let{reportParams:n}=ie(),{drillDownItem:i,drillDown:o,resetDrillDown:s}=re();(0,a.useEffect)(()=>{e!==`country`&&s()},[s,e]);let c=e===`country`?i:void 0,d=e===`country`&&c?`region`:e,{data:f,hasComparison:p,isLoading:ae,isFetching:m,isError:h,refetch:g}=Oe({reportParams:n,max:10,geoMode:d,countryFilter:c?.code}),_=(0,a.useMemo)(()=>f.map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull})),[f]),v=(0,a.useMemo)(()=>{let e=te(f.map(e=>e.value),p?f.map(e=>e.previousValue):[]);return f.map(n=>{let i=ne(n.countryCode),a=n.previousValue,s=n.countryCode;return{id:n.key,...de({label:n.label,media:{kind:`flag`,url:i??void 0,country:n.countryFull},action:d===`country`&&s?{kind:`drillDown`,onClick:()=>o({code:s,name:n.countryFull}),ariaLabel:r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),n.countryFull)}:{kind:`static`}}),currentValue:n.value,previousValue:a,currentShare:l(n.value,e),previousShare:p&&a!==void 0?l(a,e):void 0,delta:p&&a!==void 0?u(n.value,a):void 0}})},[f,d,p,o]),y=c?(0,P.jsx)(ce,{label:t(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:s,className:M.backLink}):null,ue=y?(0,P.jsx)(ee,{direction:`row`,align:`center`,className:M.bodyHeader,children:y}):null;return(0,P.jsxs)(`div`,{className:M.content,children:[ue,(0,P.jsx)(`div`,{className:M.stateArea,children:(0,P.jsx)(pe,{isLoading:ae,isFetching:m,isError:h,isEmpty:f.length===0,error:{description:t(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:g}]},empty:{icon:oe,description:t(`No location data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,P.jsxs)(`div`,{className:M.chartArea,children:[(0,P.jsx)(`div`,{className:M.leaderboardPanel,children:(0,P.jsx)(se,{data:v,withOverlayLabel:!0,withComparison:p,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:M.leaderboard})}),(0,P.jsx)(`div`,{className:M.geoChart,children:(0,P.jsx)(le,{rows:_,mode:d,focusCountry:c,resizeDebounceTime:100})})]})})})]})}function N({attributes:e={}}){let t=e?.geoGranularity??I,n=Object.prototype.hasOwnProperty.call(F,t)?t:I;return(0,P.jsx)(f,{attributes:e,children:(0,P.jsxs)(`div`,{className:M.root,children:[(0,P.jsx)(Ae,{geoGranularity:n}),(0,P.jsx)(ue,{children:(0,P.jsx)(fe,{report:`locations`,section:F[n]})})]})})}var P,F,I,je=e((()=>{me(),ae(),s(),n(),m(),Ee(),ke(),P=i(),F={country:`countries`,region:`regions`,city:`cities`},I=`country`})),L,Me=e((()=>{n(),c(),p(),L={icon:o,attributes:[{id:`geoGranularity`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:d,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:t(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:t(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),R,z,B,V,Ne,Pe,Fe,Ie=e((()=>{R=`jpa/locations`,z=`Top locations`,B=`Where your visitors are viewing from — by country, region, or city.`,V={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Ne=`stats`,Pe=`framed`,Fe={name:R,title:z,description:B,help:V,category:Ne,presentation:Pe}}));function Le({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:_(e)}}function H(e){return(0,W.jsx)(N,{attributes:Le(e)})}function U(e){return(0,W.jsx)(N,{attributes:{geoGranularity:`country`,reportParams:_(!1,e)}})}function Re(e){return(0,W.jsx)(N,{...e})}function ze({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(xe,{...n,widgetType:Ve,renderModule:Be,renderComponent:Re,attributes:Le({withComparison:e,geoGranularity:t})})}var W,Be,Ve,He,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),ge(),he(),Se(),ye(),y(),we(),Te(),je(),Me(),Ie(),W=i(),v(),Ce(),Be=`storybook/locations`,Ve=_e(Fe,L),He={title:`Packages/Premium Analytics/Widgets/Locations`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with country drill-down into regions, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[x,b]},K={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[x,b]},q={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[x,b]},J={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[x,b]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/location-views`,`loading`),()=>S(`stats/location-views`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/location-views`,`error`),()=>S(`stats/location-views`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/location-views`,`empty`),()=>S(`stats/location-views`,null))},Q={render:e=>(0,W.jsx)(ze,{...e}),args:{...be,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...ve,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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