import{i as e}from"./preload-helper-usAeo7Bx.js";import{f as t,n,t as r}from"./build-module-yGZutq_9.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{$i as a,Gu as o,Nu as s,t as c}from"./build-module-zwSmKorH.js";import{bt as l}from"./build-module-CpMuGSvV.js";import{Ft as u,X as d,Y as f,b as ee,en as te,g as p,r as ne,rn as re,tn as ie}from"./hooks-D7FyqFNR.js";import{t as m}from"./src-BpA_U4kt.js";import{t as h,w as ae}from"./src-DFNM1k7F.js";import{$t as g,et as _,r as v}from"./date-period-dropdown-BvcrlBOw.js";import"./constants-B1kGztHF.js";import{r as oe}from"./leaderboard-skeleton-DkDqZ6mB.js";import{i as y,r as b}from"./register-report-mocks-GrNN88RM.js";import{D as se,S as ce,b as le,j as ue,w as de}from"./report-metric-BPWbEjoI.js";import{t as fe}from"./widget-state-CXl6KNbR.js";import{t as pe}from"./src-nY4AmjbG.js";import{a as me,c as he,d as x,i as ge,l as _e,n as ve,o as ye,r as S,s as be,u as xe}from"./with-widget-canvas-CKduXcCH.js";import{n as Se,t as Ce}from"./register-stats-mocks-DyCZy2A1.js";import{n as we,t as C}from"./force-stats-mock-state-BzZ7X5iE.js";var w,T,E,D,O,k,A,j,M,N,Te=e((()=>{w=`_root_mw6wj_1`,T=`_backLink_mw6wj_9`,E=`_content_mw6wj_17`,D=`_bodyHeader_mw6wj_24`,O=`_stateArea_mw6wj_31`,k=`_chartArea_mw6wj_36`,A=`_leaderboardPanel_mw6wj_46`,j=`_leaderboard_mw6wj_46`,M=`_geoChart_mw6wj_62`,N={root:w,backLink:T,content:E,bodyHeader:D,stateArea:O,chartArea:k,leaderboardPanel:A,leaderboard:j,geoChart:M}}));function Ee(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function De({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{comparisonRows:i,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:l,refetch:u}=_({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),d=(i?.rows??[]).map(Ee).filter(e=>e!==null);return{data:d,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:d.length===0&&l,refetch:u}}var Oe=e((()=>{v()}));function ke({geoGranularity:e}){let{reportParams:r}=ee(),{drillDownItem:i,drillDown:a,resetDrillDown:s}=ne();(0,o.useEffect)(()=>{e!==`country`&&s()},[s,e]);let c=e===`country`?i:void 0,d=e===`country`&&c?`region`:e,{data:f,hasComparison:p,isLoading:m,isFetching:h,isError:g,refetch:_}=De({reportParams:r,max:10,geoMode:d,countryFilter:c?.code}),v=(0,o.useMemo)(()=>f.map(e=>({label:e.label,value:e.value,countryCode:e.countryCode,countryFull:e.countryFull})),[f]),y=(0,o.useMemo)(()=>{let e=ie(f.map(e=>e.value),p?f.map(e=>e.previousValue):[]);return f.map(r=>{let i=u(r.countryCode),o=r.previousValue,s=r.countryCode;return{id:r.key,...ue({label:r.label,media:{kind:`flag`,url:i??void 0,country:r.countryFull},action:d===`country`&&s?{kind:`drillDown`,onClick:()=>a({code:s,name:r.countryFull}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),r.countryFull)}:{kind:`static`}}),currentValue:r.value,previousValue:o,currentShare:te(r.value,e),previousShare:p&&o!==void 0?te(o,e):void 0,delta:p&&o!==void 0?re(r.value,o):void 0}})},[f,d,p,a]),b=c?(0,F.jsx)(de,{label:n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:s,className:N.backLink}):null,ce=b?(0,F.jsx)(l,{direction:`row`,align:`center`,className:N.bodyHeader,children:b}):null;return(0,F.jsxs)(`div`,{className:N.content,children:[ce,(0,F.jsx)(`div`,{className:N.stateArea,children:(0,F.jsx)(fe,{isLoading:m,isFetching:h,isError:g,isEmpty:f.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:_}]},empty:{icon:ae,description:n(`No location data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,F.jsxs)(`div`,{className:N.chartArea,children:[(0,F.jsx)(`div`,{className:N.leaderboardPanel,children:(0,F.jsx)(oe,{data:y,withOverlayLabel:!0,withComparison:p,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:N.leaderboard})}),(0,F.jsx)(`div`,{className:N.geoChart,children:(0,F.jsx)(se,{rows:v,mode:d,focusCountry:c,resizeDebounceTime:100})})]})})})]})}function P({attributes:e={}}){let t=e?.geoGranularity??L,n=Object.prototype.hasOwnProperty.call(I,t)?t:L;return(0,F.jsx)(p,{attributes:e,children:(0,F.jsxs)(`div`,{className:N.root,children:[(0,F.jsx)(ke,{geoGranularity:n}),(0,F.jsx)(ce,{children:(0,F.jsx)(le,{report:`locations`,section:I[n]})})]})})}var F,I,L,Ae=e((()=>{pe(),h(),s(),r(),m(),Te(),Oe(),F=i(),I={country:`countries`,region:`regions`,city:`cities`},L=`country`})),R,je=e((()=>{r(),c(),f(),R={icon:a,attributes:[{id:`geoGranularity`,label:n(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:d,elements:[{label:n(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:n(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:n(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),z,B,V,Me,Ne,Pe,Fe,Ie=e((()=>{z=`jpa/locations`,B=`Top locations`,V=`Where your visitors are viewing from — by country, region, or city.`,Me={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Ne=`stats`,Pe=`framed`,Fe={name:z,title:B,description:V,help:Me,category:Ne,presentation:Pe}}));function Le({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:g(e)}}function H(e){return(0,W.jsx)(P,{attributes:Le(e)})}function U(e){return(0,W.jsx)(P,{attributes:{geoGranularity:`country`,reportParams:g(!1,e)}})}function Re(e){return(0,W.jsx)(P,{...e})}function ze({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(be,{...n,widgetType:Ve,renderModule:Be,renderComponent:Re,attributes:Le({withComparison:e,geoGranularity:t})})}var W,Be,Ve,He,G,K,q,J,Y,X,Z,Q,$;e((()=>{v(),he(),me(),xe(),ve(),b(),Ce(),we(),Ae(),je(),Ie(),W=i(),y(),Se(),Be=`storybook/locations`,Ve=ge(Fe,R),He={title:`Packages/Premium Analytics/Widgets/Locations`,component:P,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with country drill-down into regions, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[S,x]},K={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[S,x]},q={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[S,x]},J={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[S,x]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/location-views`,`loading`),()=>C(`stats/location-views`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/location-views`,`error`),()=>C(`stats/location-views`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/location-views`,`empty`),()=>C(`stats/location-views`,null))},Q={render:e=>(0,W.jsx)(ze,{...e}),args:{...ye,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{..._e,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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