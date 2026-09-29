import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Vu as a,Yi as o,ku as s,t as c}from"./build-module-DNhkEVJn.js";import{At as l}from"./build-module-DmDwTLpf2.js";import{m as u,r as d,v as ee}from"./hooks-B7ZLXs37.js";import{t as f}from"./src-BUCYjmcs.js";import{$t as p,Z as te,t as m,yt as ne}from"./src-DbPUhH64.js";import{Dt as re,Et as ie,kt as ae,st as oe}from"./helpers-DiovautF.js";import"./constants-B1kGztHF.js";import{r as se}from"./leaderboard-skeleton-DVqmPVp_.js";import{n as ce,r as le}from"./register-report-mocks-CxwTeDLi.js";import{C as ue,D as de,b as fe,m as pe,v as h}from"./report-metric-DIgp9y2Q.js";import{t as me}from"./widget-state-CYntyx_C.js";import{t as g}from"./src-6QGxnGHN.js";import{a as he,d as ge,f as _e,h as _,i as ve,m as ye,n as be,p as xe,r as v,u as Se}from"./with-widget-canvas-DEXi_eSa.js";import{n as Ce,t as we}from"./register-stats-mocks-XWhF44ig.js";import{n as Te,t as y}from"./force-stats-mock-state-BbxRCN_8.js";var b,x,S,C,w,T,E,D,O,k,Ee=e((()=>{b=`_root_mw6wj_1`,x=`_backLink_mw6wj_9`,S=`_content_mw6wj_17`,C=`_bodyHeader_mw6wj_24`,w=`_stateArea_mw6wj_31`,T=`_chartArea_mw6wj_36`,E=`_leaderboardPanel_mw6wj_46`,D=`_leaderboard_mw6wj_46`,O=`_geoChart_mw6wj_62`,k={root:b,backLink:x,content:S,bodyHeader:C,stateArea:w,chartArea:T,leaderboardPanel:E,leaderboard:D,geoChart:O}}));function De(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function Oe({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{comparisonRows:i,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:l,refetch:u}=te({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),d=(i?.rows??[]).map(De).filter(e=>e!==null);return{data:d,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:d.length===0&&l,refetch:u}}var ke=e((()=>{m()}));function Ae({geoGranularity:e}){ne();let{reportParams:n}=ee(),{drillDownItem:i,drillDown:o,resetDrillDown:s}=d();(0,a.useEffect)(()=>{e!==`country`&&s()},[s,e]);let c=e===`country`?i:void 0,u=e===`country`&&c?`region`:e,{data:f,hasComparison:p,isLoading:te,isFetching:m,isError:ce,refetch:le}=Oe({reportParams:n,max:10,geoMode:u,countryFilter:c?.code}),pe=(0,a.useMemo)(()=>f.map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull})),[f]),h=(0,a.useMemo)(()=>{let e=re(f.map(e=>e.value),p?f.map(e=>e.previousValue):[]);return f.map(n=>{let i=oe(n.countryCode),a=n.previousValue,s=n.countryCode;return{id:n.key,...de({label:n.label,media:{kind:`flag`,url:i??void 0,country:n.countryFull},action:u===`country`&&s?{kind:`drillDown`,onClick:()=>o({code:s,name:n.countryFull}),ariaLabel:r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),n.countryFull)}:{kind:`static`}}),currentValue:n.value,previousValue:a,currentShare:ie(n.value,e),previousShare:p&&a!==void 0?ie(a,e):void 0,delta:p&&a!==void 0?ae(n.value,a):void 0}})},[f,u,p,o]),g=c?(0,j.jsx)(fe,{label:t(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:s,className:k.backLink}):null,he=g?(0,j.jsx)(l,{direction:`row`,align:`center`,className:k.bodyHeader,children:g}):null;return(0,j.jsxs)(`div`,{className:k.content,children:[he,(0,j.jsx)(`div`,{className:k.stateArea,children:(0,j.jsx)(me,{isLoading:te,isFetching:m,isError:ce,isEmpty:f.length===0,error:{description:t(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:le}]},children:(0,j.jsxs)(`div`,{className:k.chartArea,children:[(0,j.jsx)(`div`,{className:k.leaderboardPanel,children:(0,j.jsx)(se,{data:h,withOverlayLabel:!0,withComparison:p,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:k.leaderboard})}),(0,j.jsx)(`div`,{className:k.geoChart,children:(0,j.jsx)(ue,{rows:pe,mode:u,focusCountry:c,resizeDebounceTime:100})})]})})})]})}function A({attributes:e={}}){let t=e?.geoGranularity??N,n=Object.prototype.hasOwnProperty.call(M,t)?t:N;return(0,j.jsx)(u,{attributes:e,children:(0,j.jsxs)(`div`,{className:k.root,children:[(0,j.jsx)(Ae,{geoGranularity:n}),(0,j.jsx)(h,{children:(0,j.jsx)(pe,{report:`locations`,section:M[n]})})]})})}var j,M,N,je=e((()=>{m(),g(),s(),n(),f(),Ee(),ke(),j=i(),M={country:`countries`,region:`regions`,city:`cities`},N=`country`})),P,Me=e((()=>{n(),c(),P={icon:o,attributes:[{id:`geoGranularity`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:t(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:t(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),F,I,L,R,z,B,V,Ne=e((()=>{F=`jpa/locations`,I=`Top locations`,L=`Where your visitors are viewing from — by country, region, or city.`,R={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function Pe({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:p(e)}}function H(e){return(0,W.jsx)(A,{attributes:Pe(e)})}function U(e){return(0,W.jsx)(A,{attributes:{geoGranularity:`country`,reportParams:p(!1,e)}})}function Fe(e){return(0,W.jsx)(A,{...e})}function Ie({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(ge,{...n,widgetType:Re,renderModule:Le,renderComponent:Fe,attributes:Pe({withComparison:e,geoGranularity:t})})}var W,Le,Re,ze,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),_e(),he(),ye(),be(),ce(),we(),Te(),je(),Me(),Ne(),W=i(),le(),Ce(),Le=`storybook/locations`,Re=ve(V,P),ze={title:`Packages/Premium Analytics/Widgets/Locations`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with country drill-down into regions, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[v,_]},K={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[v,_]},q={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[v,_]},J={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[v,_]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[v,_],beforeEach:()=>(y(`stats/location-views`,`loading`),()=>y(`stats/location-views`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[v,_],beforeEach:()=>(y(`stats/location-views`,`error`),()=>y(`stats/location-views`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[v,_],beforeEach:()=>(y(`stats/location-views`,`empty`),()=>y(`stats/location-views`,null))},Q={render:e=>(0,W.jsx)(Ie,{...e}),args:{...Se,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...xe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as CitiesMode,G as Default,Z as Empty,X as Error,Y as Loading,q as RegionsMode,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,ze as default};