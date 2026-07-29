import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{Ot as s,n as c}from"./build-module-DmVuor49.js";import{r as l}from"./hooks-BhE_AEI0.js";import{t as u}from"./geo-chart-BXLXV_wI.js";import{R as d,t as f}from"./build-module-Cq3fcld0.js";import{S as ee,t as p}from"./src-B3le4dug.js";import{Ct as m,J as te,O as ne,X as re,dn as h,fr as g,q as ie}from"./chart-tooltip-DFYNpcJf.js";import{t as ae}from"./leaderboard-chart-Da9o67-B.js";import{I as _,L as oe,O as se,U as ce,q as le,w as ue}from"./report-metric-BUaneiYr.js";import{t as de}from"./widget-state-CkIY1A43.js";import{C as fe,D as v,E as pe,S as y,T as me,b,t as x,w as S,x as C}from"./src-Dat9aWi5.js";import{n as w,t as T}from"./src-naH-BIVt.js";import{n as E,t as D}from"./register-stats-mocks-BX9NiP1L.js";import{n as he,t as O}from"./force-stats-mock-state-DelfQsUN.js";var k,A,j,M,N,P,F,I,L,R,ge=e((()=>{k=`_root_erick_1`,A=`_backLink_erick_9`,j=`_content_erick_17`,M=`_bodyHeader_erick_25`,N=`_stateArea_erick_32`,P=`_chartArea_erick_38`,F=`_leaderboardPanel_erick_48`,I=`_leaderboard_erick_48`,L=`_geoChart_erick_64`,R={root:k,backLink:A,content:j,bodyHeader:M,stateArea:N,chartArea:P,leaderboardPanel:F,leaderboard:I,geoChart:L}}));function _e(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function ve({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{primary:i,comparison:a,comparisonRows:o,hasComparison:s,isLoading:c,isFetching:l,hasData:u,isError:d,refetch:f}=h({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),ee=i.isPlaceholderData||a.isPlaceholderData,p=(o?.rows??[]).map(_e).filter(e=>e!==null);return{data:p,hasComparison:s,isLoading:c,isFetching:l,hasData:u,isError:p.length===0&&d,isPlaceholderData:ee,refetch:f}}var ye=e((()=>{m()}));function z(e){return e.toUpperCase()===`TW`?`Taiwan`:e.toUpperCase()}function be({max:e,geoGranularity:r}){let{reportParams:i}=le(),[o,s]=(0,a.useState)(()=>new Set(H)),{drillDownItem:c,drillDown:f,resetDrillDown:p}=l();(0,a.useEffect)(()=>{r===`city`&&p()},[p,r]);let m=r===`country`?c:void 0,h=r===`country`&&m?`region`:r,{data:g,hasComparison:_,isLoading:oe,isFetching:ce,isError:fe,isPlaceholderData:v,refetch:pe}=ve({reportParams:i,max:e,geoMode:h,countryFilter:h===`region`?m?.code:void 0}),[y,me]=(0,a.useState)({geoMode:h,selectedCountry:m});(0,a.useEffect)(()=>{v||me({geoMode:h,selectedCountry:m})},[m,h,v]);let b=v?y.geoMode:h,x=v?y.selectedCountry:m,S=x?.code.toUpperCase(),C=b===`region`&&!!S&&!o.has(S),w=b===`region`&&!!x&&!C,T=w?x:void 0,E=b===`city`,D=(0,a.useMemo)(()=>{let e=new Map;return E?(g.forEach(t=>{let n=t.countryCode.toUpperCase(),r=e.get(n);e.set(n,{countryFull:t.countryFull,value:(r?.value??0)+t.value})}),Array.from(e.entries())):[]},[g,E]),he=(0,a.useCallback)(e=>{let t=`${e.message??``} ${e.detailedMessage??``}`,n=!!S&&C,r=!!S&&H.has(S);!n&&!r&&!t.includes(xe)||(e.id&&typeof window<`u`&&window.google?.visualization?.errors?.removeError?.(e.id),n&&(H.add(S),s(e=>{if(e.has(S))return e;let t=new Set(e);return t.add(S),t})))},[S,C]),O=(0,a.useMemo)(()=>{let e=[n(b===`region`&&!w?`Location`:`Country`,`jetpack-premium-analytics-pkg`),n(`Views`,`jetpack-premium-analytics-pkg`)];if(T){let t=T.code.toUpperCase(),n=g.filter(e=>e.countryCode.toUpperCase()===t).reduce((e,t)=>e+t.value,0);return[e,[{v:z(t),f:T.name},n]]}return E?[e,...D.map(([e,t])=>[{v:z(e),f:t.countryFull},t.value])]:[e,...g.map(e=>[e.label,e.value])]},[D,g,T,b,E,w]),k=(0,a.useMemo)(()=>{let e=te(g.map(e=>e.value),_?g.map(e=>e.previousValue):[]);return g.map(r=>{let i=ne(r.countryCode),a=r.previousValue,o=r.countryCode;return{id:r.key,...se({label:r.label,media:{kind:`flag`,url:i??void 0,country:r.countryFull},action:b===`country`&&o?{kind:`drillDown`,onClick:()=>f({code:o,name:r.countryFull}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),r.countryFull)}:{kind:`static`}}),currentValue:r.value,previousValue:a,currentShare:ie(r.value,e),previousShare:_&&a!==void 0?ie(a,e):void 0,delta:_&&a!==void 0?re(r.value,a):void 0}})},[g,b,_,f]),A=x?(0,V.jsx)(ue,{label:n(`All Locations`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:p,className:R.backLink}):null,j=A?(0,V.jsx)(d,{direction:`row`,align:`center`,className:R.bodyHeader,children:A}):null;return(0,V.jsxs)(`div`,{className:R.content,children:[j,(0,V.jsx)(`div`,{className:R.stateArea,children:(0,V.jsx)(de,{isLoading:oe,isFetching:ce,isError:fe,isEmpty:g.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:pe}]},empty:{icon:ee,description:n(`No location data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,V.jsxs)(`div`,{className:R.chartArea,children:[(0,V.jsx)(`div`,{className:R.leaderboardPanel,children:(0,V.jsx)(ae,{data:k,withOverlayLabel:!0,withComparison:_,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:R.leaderboard})}),(0,V.jsx)(`div`,{className:R.geoChart,children:(0,V.jsx)(u,{data:O,resizeDebounceTime:100,region:C?x?.code??`world`:`world`,resolution:C?`provinces`:`countries`,onError:he})})]})})})]})}function B({attributes:e={}}){let t=e?.max??10,n=e?.geoGranularity??`country`;return(0,V.jsx)(ce,{attributes:e,children:(0,V.jsx)(`div`,{className:R.root,children:(0,V.jsx)(be,{max:t,geoGranularity:n})})})}var V,xe,H,Se=e((()=>{x(),p(),o(),r(),f(),ge(),ye(),V=i(),xe=`Requested map does not exist`,H=new Set})),Ce,we=e((()=>{r(),c(),T(),Ce={icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`},{id:`geoGranularity`,label:n(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:w,elements:[{label:n(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:n(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{max:10,geoGranularity:`country`}}}})),Te,Ee,De,Oe,ke,Ae,je,Me=e((()=>{Te=`jpa/locations`,Ee=`Locations`,De=`Where your visitors are viewing from — by country, region, or city.`,Oe={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},ke=`stats`,Ae=`framed`,je={name:Te,title:Ee,description:De,help:Oe,category:ke,presentation:Ae}}));function Ne({withComparison:e,geoGranularity:t}){return{geoGranularity:t,max:10,reportParams:g(e)}}function U(e){return(0,G.jsx)(B,{attributes:Ne(e)})}function W(e){return(0,G.jsx)(B,{attributes:{geoGranularity:`country`,max:10,reportParams:g(!1,e)}})}function Pe(e){return(0,G.jsx)(B,{...e})}function Fe({withComparison:e,geoGranularity:t,...n}){return(0,G.jsx)(me,{...n,widgetType:Le,renderModule:Ie,renderComponent:Pe,attributes:Ne({withComparison:e,geoGranularity:t})})}var G,Ie,Le,Re,K,q,J,Y,X,Z,Q,$;e((()=>{m(),pe(),fe(),b(),_(),D(),he(),Se(),we(),Me(),G=i(),oe(),E(),Ie=`storybook/locations`,Le=y(je,Ce),Re={title:`Packages/Premium Analytics/Widgets/Locations`,component:B,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country or city, with country drill-down into regions, using the global dashboard date range. The Countries/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:U,args:{withComparison:!1,geoGranularity:`country`},decorators:[C]},q={render:U,args:{withComparison:!0,geoGranularity:`country`},decorators:[C]},J={render:U,args:{withComparison:!1,geoGranularity:`city`},decorators:[C]},Y={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(O(`stats/location-views`,`loading`),()=>O(`stats/location-views`,null))},X={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(O(`stats/location-views`,`error`),()=>O(`stats/location-views`,null))},Z={render:()=>W(`last-365-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(O(`stats/location-views`,`empty`),()=>O(`stats/location-views`,null))},Q={render:e=>(0,G.jsx)(Fe,{...e}),args:{...S,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...v,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: false,
    geoGranularity: 'country'
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: true,
    geoGranularity: 'country'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: false,
    geoGranularity: 'city'
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderLocationsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/location-views', 'loading');
    return () => forceStatsMockState('stats/location-views', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderLocationsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/location-views', 'error');
    return () => forceStatsMockState('stats/location-views', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderLocationsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
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
      options: ['country', 'city'],
      description: 'The "View by" toolbar attribute rendered by the widget host.'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as CitiesMode,K as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,Re as default};