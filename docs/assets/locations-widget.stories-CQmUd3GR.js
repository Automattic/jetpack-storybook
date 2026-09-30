import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Vu as a,Yi as o,ku as s,t as c}from"./build-module-DNhkEVJn.js";import{At as l}from"./build-module-DmDwTLpf2.js";import{m as u,r as d,v as ee}from"./hooks-Bq6ETFPM.js";import{t as f}from"./src-Xepxd1fs.js";import{$t as p,Z as m,t as h,yt as te}from"./src-DCi-6Sxm.js";import{Dt as ne,Et as g,kt as re,st as ie}from"./helpers-3GexU4Kn.js";import"./rows-DAmD2BmE.js";import{r as ae}from"./leaderboard-skeleton-B1HMiqe5.js";import{n as oe,r as _}from"./with-story-router-CnlhsywU.js";import{n as se,r as v}from"./register-report-mocks-BBiWKLO8.js";import{_ as ce,b as y,i as le,m as b}from"./leaderboard-xkKQVUrC.js";import{t as ue}from"./widget-state-D3EfcjBI.js";import{m as de}from"./report-metric-CS0gl0q1.js";import{t as fe}from"./src-BqbET1B7.js";import{a as pe,d as me,f as he,i as ge,n as _e,p as ve,r as x,u as ye}from"./with-widget-canvas-CtYqrXoj.js";import{n as be,t as xe}from"./register-stats-mocks-BqjbmIh8.js";import{n as Se,t as S}from"./force-stats-mock-state-CFkxjZ4H.js";var Ce,we,C,w,T,E,Te,D,O,k,Ee=e((()=>{Ce=`_root_mw6wj_1`,we=`_backLink_mw6wj_9`,C=`_content_mw6wj_17`,w=`_bodyHeader_mw6wj_24`,T=`_stateArea_mw6wj_31`,E=`_chartArea_mw6wj_36`,Te=`_leaderboardPanel_mw6wj_46`,D=`_leaderboard_mw6wj_46`,O=`_geoChart_mw6wj_62`,k={root:Ce,backLink:we,content:C,bodyHeader:w,stateArea:T,chartArea:E,leaderboardPanel:Te,leaderboard:D,geoChart:O}}));function De(e){let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryCode??``,r=e.countryFull??n;return{key:`${n}:${t}`,label:t,countryCode:n,countryFull:r,value:e.views,previousValue:e.previousViews,region:e.region??``,coordinates:e.coordinates}}function Oe({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{comparisonRows:i,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:l,refetch:u}=m({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),d=(i?.rows??[]).map(De);return{data:d,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:d.length===0&&l,refetch:u}}var ke=e((()=>{h()}));function Ae({geoGranularity:e}){te();let{reportParams:n}=ee(),{drillDownItem:i,drillDown:o,resetDrillDown:s}=d();(0,a.useEffect)(()=>{e!==`country`&&s()},[s,e]);let c=e===`country`?i:void 0,u=e===`country`&&c?`region`:e,{data:f,hasComparison:p,isLoading:m,isFetching:h,isError:oe,refetch:_}=Oe({reportParams:n,max:10,geoMode:u,countryFilter:c?.code}),se=(0,a.useMemo)(()=>f.filter(e=>e.countryCode).map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull,coordinates:e.coordinates})),[f]),v=(0,a.useMemo)(()=>{let e=ne(f.map(e=>e.value),p?f.map(e=>e.previousValue):[]);return f.map(n=>{let i=ie(n.countryCode),a=n.previousValue,s=n.countryCode;return{id:n.key,...le({label:n.label,media:{kind:`flag`,url:i??void 0,country:n.countryFull},action:u===`country`&&s?{kind:`drillDown`,onClick:()=>o({code:s,name:n.countryFull}),ariaLabel:r(t(`View regions in %s`,`jetpack-premium-analytics-pkg`),n.countryFull)}:{kind:`static`}}),currentValue:n.value,previousValue:a,currentShare:g(n.value,e),previousShare:p&&a!==void 0?g(a,e):void 0,delta:p&&a!==void 0?re(n.value,a):void 0}})},[f,u,p,o]),y=c?(0,j.jsx)(ce,{label:t(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:s,className:k.backLink}):null,b=y?(0,j.jsx)(l,{direction:`row`,align:`center`,className:k.bodyHeader,children:y}):null;return(0,j.jsxs)(`div`,{className:k.content,children:[b,(0,j.jsx)(`div`,{className:k.stateArea,children:(0,j.jsx)(ue,{isLoading:m,isFetching:h,isError:oe,isEmpty:f.length===0,error:{description:t(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:_}]},children:(0,j.jsxs)(`div`,{className:k.chartArea,children:[(0,j.jsx)(`div`,{className:k.leaderboardPanel,children:(0,j.jsx)(ae,{data:v,withOverlayLabel:!0,withComparison:p,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:k.leaderboard})}),(0,j.jsx)(`div`,{className:k.geoChart,children:(0,j.jsx)(de,{rows:se,mode:u,focusCountry:c,resizeDebounceTime:100})})]})})})]})}function A({attributes:e={}}){let t=e?.geoGranularity??N,n=Object.prototype.hasOwnProperty.call(M,t)?t:N;return(0,j.jsx)(u,{attributes:e,children:(0,j.jsxs)(`div`,{className:k.root,children:[(0,j.jsx)(Ae,{geoGranularity:n}),(0,j.jsx)(b,{children:(0,j.jsx)(y,{report:`locations`,section:M[n]})})]})})}var j,M,N,je=e((()=>{h(),fe(),s(),n(),f(),Ee(),ke(),j=i(),M={country:`countries`,region:`regions`,city:`cities`},N=`country`})),P,Me=e((()=>{n(),c(),P={icon:o,attributes:[{id:`geoGranularity`,label:t(`View by`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:t(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:t(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),F,I,L,R,z,B,V,Ne=e((()=>{F=`jpa/locations`,I=`Top locations`,L=`Where your visitors are viewing from — by country, region, or city.`,R={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:p(e)}}function U(e){return(0,G.jsx)(A,{attributes:H(e)})}function W(e){return(0,G.jsx)(A,{attributes:{geoGranularity:`country`,reportParams:p(!1,e)}})}function Pe(e){return(0,G.jsx)(A,{...e})}function Fe({withComparison:e,geoGranularity:t,...n}){return(0,G.jsx)(me,{...n,widgetType:Le,renderModule:Ie,renderComponent:Pe,attributes:H({withComparison:e,geoGranularity:t})})}var G,Ie,Le,Re,K,q,J,Y,X,Z,Q,$,ze;e((()=>{h(),he(),pe(),oe(),_e(),se(),xe(),Se(),je(),Me(),Ne(),G=i(),v(),be(),Ie=`storybook/locations`,Le=ge(V,P),Re={title:`Packages/Premium Analytics/Widgets/Locations`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with country drill-down into regions, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:U,args:{withComparison:!1,geoGranularity:`country`},decorators:[x,_]},q={render:U,args:{withComparison:!0,geoGranularity:`country`},decorators:[x,_]},J={render:U,args:{withComparison:!1,geoGranularity:`region`},decorators:[x,_]},Y={render:U,args:{withComparison:!1,geoGranularity:`city`},decorators:[x,_]},X={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[x,_],beforeEach:()=>(S(`stats/location-views`,`loading`),()=>S(`stats/location-views`,null))},Z={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[x,_],beforeEach:()=>(S(`stats/location-views`,`error`),()=>S(`stats/location-views`,null))},Q={render:()=>W(`last-365-days`),tags:[`!autodocs`],decorators:[x,_],beforeEach:()=>(S(`stats/location-views`,`empty`),()=>S(`stats/location-views`,null))},$={render:e=>(0,G.jsx)(Fe,{...e}),args:{...ye,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...ve,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},ze=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{Y as CitiesMode,K as Default,Q as Empty,Z as Error,X as Loading,J as RegionsMode,$ as WidgetDashboardWithWidget,q as WithComparison,ze as __namedExportsOrder,Re as default};