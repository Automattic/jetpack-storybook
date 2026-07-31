import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{Ot as s,n as c}from"./build-module-DmVuor49.js";import{H as l,J as u,N as d,Q as f,V as p,k as m}from"./report-metric-CSzTDTEC.js";import{t as ee}from"./geo-chart-DyZu8CWy.js";import{R as te,t as h}from"./build-module-BtbpArrT.js";import{S as ne,t as g}from"./src-B3le4dug.js";import{r as re}from"./hooks-DiQVK1YZ.js";import{J as ie,O as ae,X as oe,ln as _,q as v,ur as y,xt as b}from"./chart-tooltip-C9kWQuko.js";import{t as se}from"./leaderboard-chart-rn-gD18-.js";import{t as ce}from"./widget-state-ejfU-hpe.js";import{C as le,D as x,E as ue,S,T as de,b as C,t as w,w as T,x as E}from"./src-BvIqA6q0.js";import{n as D,t as O}from"./src-dAczne-4.js";import{n as k,t as A}from"./register-stats-mocks-DWVFklIk.js";import{n as fe,t as j}from"./force-stats-mock-state-DptOSwOl.js";var M,N,P,pe,me,he,ge,F,I,L,_e=e((()=>{M=`_root_erick_1`,N=`_backLink_erick_9`,P=`_content_erick_17`,pe=`_bodyHeader_erick_25`,me=`_stateArea_erick_32`,he=`_chartArea_erick_38`,ge=`_leaderboardPanel_erick_48`,F=`_leaderboard_erick_48`,I=`_geoChart_erick_64`,L={root:M,backLink:N,content:P,bodyHeader:pe,stateArea:me,chartArea:he,leaderboardPanel:ge,leaderboard:F,geoChart:I}}));function ve(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function ye({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{primary:i,comparison:a,comparisonRows:o,hasComparison:s,isLoading:c,isFetching:l,hasData:u,isError:d,refetch:f}=_({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),p=i.isPlaceholderData||a.isPlaceholderData,m=(o?.rows??[]).map(ve).filter(e=>e!==null);return{data:m,hasComparison:s,isLoading:c,isFetching:l,hasData:u,isError:m.length===0&&d,isPlaceholderData:p,refetch:f}}var be=e((()=>{b()}));function R(e){return e.toUpperCase()===`TW`?`Taiwan`:e.toUpperCase()}function xe({max:e,geoGranularity:r}){let{reportParams:i}=f(),[o,s]=(0,a.useState)(()=>new Set(H)),{drillDownItem:c,drillDown:l,resetDrillDown:u}=re();(0,a.useEffect)(()=>{r===`city`&&u()},[u,r]);let p=r===`country`?c:void 0,h=r===`country`&&p?`region`:r,{data:g,hasComparison:_,isLoading:y,isFetching:b,isError:le,isPlaceholderData:x,refetch:ue}=ye({reportParams:i,max:e,geoMode:h,countryFilter:h===`region`?p?.code:void 0}),[S,de]=(0,a.useState)({geoMode:h,selectedCountry:p});(0,a.useEffect)(()=>{x||de({geoMode:h,selectedCountry:p})},[p,h,x]);let C=x?S.geoMode:h,w=x?S.selectedCountry:p,T=w?.code.toUpperCase(),E=C===`region`&&!!T&&!o.has(T),D=C===`region`&&!!w&&!E,O=D?w:void 0,k=C===`city`,A=(0,a.useMemo)(()=>{let e=new Map;return k?(g.forEach(t=>{let n=t.countryCode.toUpperCase(),r=e.get(n);e.set(n,{countryFull:t.countryFull,value:(r?.value??0)+t.value})}),Array.from(e.entries())):[]},[g,k]),fe=(0,a.useCallback)(e=>{let t=`${e.message??``} ${e.detailedMessage??``}`,n=!!T&&E,r=!!T&&H.has(T);!n&&!r&&!t.includes(V)||(e.id&&typeof window<`u`&&window.google?.visualization?.errors?.removeError?.(e.id),n&&(H.add(T),s(e=>{if(e.has(T))return e;let t=new Set(e);return t.add(T),t})))},[T,E]),j=(0,a.useMemo)(()=>{let e=[n(C===`region`&&!D?`Location`:`Country`,`jetpack-premium-analytics-pkg`),n(`Views`,`jetpack-premium-analytics-pkg`)];if(O){let t=O.code.toUpperCase(),n=g.filter(e=>e.countryCode.toUpperCase()===t).reduce((e,t)=>e+t.value,0);return[e,[{v:R(t),f:O.name},n]]}return k?[e,...A.map(([e,t])=>[{v:R(e),f:t.countryFull},t.value])]:[e,...g.map(e=>[e.label,e.value])]},[A,g,O,C,k,D]),M=(0,a.useMemo)(()=>{let e=ie(g.map(e=>e.value),_?g.map(e=>e.previousValue):[]);return g.map(r=>{let i=ae(r.countryCode),a=r.previousValue,o=r.countryCode;return{id:r.key,...d({label:r.label,media:{kind:`flag`,url:i??void 0,country:r.countryFull},action:C===`country`&&o?{kind:`drillDown`,onClick:()=>l({code:o,name:r.countryFull}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),r.countryFull)}:{kind:`static`}}),currentValue:r.value,previousValue:a,currentShare:v(r.value,e),previousShare:_&&a!==void 0?v(a,e):void 0,delta:_&&a!==void 0?oe(r.value,a):void 0}})},[g,C,_,l]),N=w?(0,B.jsx)(m,{label:n(`All Locations`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:u,className:L.backLink}):null,P=N?(0,B.jsx)(te,{direction:`row`,align:`center`,className:L.bodyHeader,children:N}):null;return(0,B.jsxs)(`div`,{className:L.content,children:[P,(0,B.jsx)(`div`,{className:L.stateArea,children:(0,B.jsx)(ce,{isLoading:y,isFetching:b,isError:le,isEmpty:g.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:ue}]},empty:{icon:ne,description:n(`No location data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,B.jsxs)(`div`,{className:L.chartArea,children:[(0,B.jsx)(`div`,{className:L.leaderboardPanel,children:(0,B.jsx)(se,{data:M,withOverlayLabel:!0,withComparison:_,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:L.leaderboard})}),(0,B.jsx)(`div`,{className:L.geoChart,children:(0,B.jsx)(ee,{data:j,resizeDebounceTime:100,region:E?w?.code??`world`:`world`,resolution:E?`provinces`:`countries`,onError:fe})})]})})})]})}function z({attributes:e={}}){let t=e?.max??10,n=e?.geoGranularity??`country`;return(0,B.jsx)(u,{attributes:e,children:(0,B.jsx)(`div`,{className:L.root,children:(0,B.jsx)(xe,{max:t,geoGranularity:n})})})}var B,V,H,Se=e((()=>{w(),g(),o(),r(),h(),_e(),be(),B=i(),V=`Requested map does not exist`,H=new Set})),Ce,we=e((()=>{r(),c(),O(),Ce={icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`},{id:`geoGranularity`,label:n(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:D,elements:[{label:n(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:n(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{max:10,geoGranularity:`country`}}}})),Te,Ee,De,Oe,ke,Ae,je,Me=e((()=>{Te=`jpa/locations`,Ee=`Top locations`,De=`Where your visitors are viewing from — by country, region, or city.`,Oe={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},ke=`stats`,Ae=`framed`,je={name:Te,title:Ee,description:De,help:Oe,category:ke,presentation:Ae}}));function Ne({withComparison:e,geoGranularity:t}){return{geoGranularity:t,max:10,reportParams:y(e)}}function U(e){return(0,G.jsx)(z,{attributes:Ne(e)})}function W(e){return(0,G.jsx)(z,{attributes:{geoGranularity:`country`,max:10,reportParams:y(!1,e)}})}function Pe(e){return(0,G.jsx)(z,{...e})}function Fe({withComparison:e,geoGranularity:t,...n}){return(0,G.jsx)(de,{...n,widgetType:Le,renderModule:Ie,renderComponent:Pe,attributes:Ne({withComparison:e,geoGranularity:t})})}var G,Ie,Le,Re,K,q,J,Y,X,Z,Q,$;e((()=>{b(),ue(),le(),C(),p(),A(),fe(),Se(),we(),Me(),G=i(),l(),k(),Ie=`storybook/locations`,Le=S(je,Ce),Re={title:`Packages/Premium Analytics/Widgets/Locations`,component:z,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country or city, with country drill-down into regions, using the global dashboard date range. The Countries/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:U,args:{withComparison:!1,geoGranularity:`country`},decorators:[E]},q={render:U,args:{withComparison:!0,geoGranularity:`country`},decorators:[E]},J={render:U,args:{withComparison:!1,geoGranularity:`city`},decorators:[E]},Y={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>(j(`stats/location-views`,`loading`),()=>j(`stats/location-views`,null))},X={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>(j(`stats/location-views`,`error`),()=>j(`stats/location-views`,null))},Z={render:()=>W(`last-365-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>(j(`stats/location-views`,`empty`),()=>j(`stats/location-views`,null))},Q={render:e=>(0,G.jsx)(Fe,{...e}),args:{...T,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...x,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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