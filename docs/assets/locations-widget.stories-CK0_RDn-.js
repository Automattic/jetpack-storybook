import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{Ot as s,n as c}from"./build-module-DmVuor49.js";import{r as l}from"./hooks-BZbMBRv-.js";import{t as ee}from"./geo-chart-oE5OG7Ly.js";import{R as u,t as d}from"./build-module-tgGieqUZ.js";import{S as te,t as f}from"./src-B3le4dug.js";import{L as ne,S as re,Yn as p,Yt as m,_ as ie,ut as h}from"./chart-tooltip-D391HsEs.js";import{t as ae}from"./leaderboard-chart-BsvsfHxv.js";import{C as g,N as oe,S as se,f as ce,g as le,k as _}from"./report-metric-rOGqqN_8.js";import{t as ue}from"./widget-state-CzHLjliM.js";import{S as de,b as v,t as fe,x as y,y as pe}from"./src-Cv7mlpCY.js";import{n as b,r as x}from"./with-widget-canvas-Dz43KNHY.js";import{n as S,t as C}from"./register-stats-mocks-IZuWy5pg.js";import{n as w,t as T}from"./force-stats-mock-state-D7Q5aRpf.js";var E,D,O,k,A,j,M,N,P,F,I,L,me=e((()=>{E=`_root_k2l6z_1`,D=`_backLink_k2l6z_9`,O=`_content_k2l6z_17`,k=`_bodyHeader_k2l6z_25`,A=`_stateArea_k2l6z_32`,j=`_chartArea_k2l6z_38`,M=`_leaderboardPanel_k2l6z_48`,N=`_leaderboard_k2l6z_48`,P=`_leaderboardLabel_k2l6z_64`,F=`_geoChart_k2l6z_81`,I=`_leaderboardImage_k2l6z_117`,L={root:E,backLink:D,content:O,bodyHeader:k,stateArea:A,chartArea:j,leaderboardPanel:M,leaderboard:N,leaderboardLabel:P,geoChart:F,leaderboardImage:I}}));function he(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function ge({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{primary:i,comparison:a,comparisonRows:o,hasComparison:s,isLoading:c,isFetching:l,hasData:ee,isError:u,refetch:d}=m({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),te=i.isPlaceholderData||a.isPlaceholderData,f=(o?.rows??[]).map(he).filter(e=>e!==null);return{data:f,hasComparison:s,isLoading:c,isFetching:l,hasData:ee,isError:f.length===0&&u,isPlaceholderData:te,refetch:d}}var _e=e((()=>{h()}));function R(e){return e.toUpperCase()===`TW`?`Taiwan`:e.toUpperCase()}function ve({max:e,geoGranularity:r}){let{reportParams:i}=oe(),[o,s]=(0,a.useState)(()=>new Set(H)),{drillDownItem:c,drillDown:d,resetDrillDown:f}=l();(0,a.useEffect)(()=>{r===`city`&&f()},[f,r]);let p=r===`country`?c:void 0,m=r===`country`&&p?`region`:r,{data:h,hasComparison:g,isLoading:se,isFetching:_,isError:de,isPlaceholderData:v,refetch:fe}=ge({reportParams:i,max:e,geoMode:m,countryFilter:m===`region`?p?.code:void 0}),[y,pe]=(0,a.useState)({geoMode:m,selectedCountry:p});(0,a.useEffect)(()=>{v||pe({geoMode:m,selectedCountry:p})},[p,m,v]);let b=v?y.geoMode:m,x=v?y.selectedCountry:p,S=x?.code.toUpperCase(),C=b===`region`&&!!S&&!o.has(S),w=b===`region`&&!!x&&!C,T=w?x:void 0,E=b===`city`,D=(0,a.useMemo)(()=>{let e=new Map;return E?(h.forEach(t=>{let n=t.countryCode.toUpperCase(),r=e.get(n);e.set(n,{countryFull:t.countryFull,value:(r?.value??0)+t.value})}),Array.from(e.entries())):[]},[h,E]),O=(0,a.useCallback)(e=>{let t=`${e.message??``} ${e.detailedMessage??``}`,n=!!S&&C,r=!!S&&H.has(S);!n&&!r&&!t.includes(V)||(e.id&&typeof window<`u`&&window.google?.visualization?.errors?.removeError?.(e.id),n&&(H.add(S),s(e=>{if(e.has(S))return e;let t=new Set(e);return t.add(S),t})))},[S,C]),k=(0,a.useMemo)(()=>{let e=[n(b===`region`&&!w?`Location`:`Country`,`jetpack-premium-analytics`),n(`Views`,`jetpack-premium-analytics`)];if(T){let t=T.code.toUpperCase(),n=h.filter(e=>e.countryCode.toUpperCase()===t).reduce((e,t)=>e+t.value,0);return[e,[{v:R(t),f:T.name},n]]}return E?[e,...D.map(([e,t])=>[{v:R(e),f:t.countryFull},t.value])]:[e,...h.map(e=>[e.label,e.value])]},[D,h,T,b,E,w]),A=(0,a.useMemo)(()=>{let e=Math.max(...h.map(e=>e.value),0),r=Math.max(...h.map(e=>e.previousValue??0),0);return h.map(i=>{let a=ie(i.countryCode),o=i.previousValue;return{id:i.key,label:(0,B.jsx)(`div`,{className:L.leaderboardLabel,children:(0,B.jsx)(le,{label:i.label,imageUrl:a??void 0,imageAlt:t(n(`Flag of %s`,`jetpack-premium-analytics`),i.countryFull),imageClassName:L.leaderboardImage})}),currentValue:i.value,previousValue:o,currentShare:e>0?i.value/e*100:0,previousShare:g&&o!==void 0?re(o,r):void 0,delta:g&&o!==void 0?ne(i.value,o):void 0,...b===`country`&&i.countryCode&&{onClick:()=>d({code:i.countryCode,name:i.countryFull}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics`),i.countryFull)}}})},[h,b,g,d]),j=x?(0,B.jsx)(ce,{label:n(`All Locations`,`jetpack-premium-analytics`),ariaLabel:n(`View all locations`,`jetpack-premium-analytics`),onClick:f,className:L.backLink}):null,M=j?(0,B.jsx)(u,{direction:`row`,align:`center`,className:L.bodyHeader,children:j}):null;return(0,B.jsxs)(`div`,{className:L.content,children:[M,(0,B.jsx)(`div`,{className:L.stateArea,children:(0,B.jsx)(ue,{isLoading:se,isFetching:_,isError:de,isEmpty:h.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:fe}]},empty:{icon:te,description:n(`No location data in this period.`,`jetpack-premium-analytics`)},children:(0,B.jsxs)(`div`,{className:L.chartArea,children:[(0,B.jsx)(`div`,{className:L.leaderboardPanel,children:(0,B.jsx)(ae,{data:A,withOverlayLabel:!0,withComparison:g,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:L.leaderboard})}),(0,B.jsx)(`div`,{className:L.geoChart,children:(0,B.jsx)(ee,{data:k,resizeDebounceTime:100,region:C?x?.code??`world`:`world`,resolution:C?`provinces`:`countries`,onError:O})})]})})})]})}function z({attributes:e={}}){let t=e?.max??10,n=e?.geoGranularity??`country`;return(0,B.jsx)(_,{attributes:e,children:(0,B.jsx)(`div`,{className:L.root,children:(0,B.jsx)(ve,{max:t,geoGranularity:n})})})}var B,V,H,ye=e((()=>{fe(),f(),o(),r(),d(),me(),_e(),B=i(),V=`Requested map does not exist`,H=new Set})),U,be=e((()=>{r(),c(),U={name:`jpa/locations`,title:n(`Locations`,`jetpack-premium-analytics`),help:{content:n(`Visitors’ viewing location by countries, regions and cities.`,`jetpack-premium-analytics`)},icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics`),type:`integer`},{id:`geoGranularity`,label:n(`View by`,`jetpack-premium-analytics`),type:`text`,elements:[{label:n(`Countries`,`jetpack-premium-analytics`),value:`country`},{label:n(`Cities`,`jetpack-premium-analytics`),value:`city`}],relevance:`high`}],example:{attributes:{max:10,geoGranularity:`country`}}}}));function xe({withComparison:e,geoGranularity:t}){return{geoGranularity:t,max:10,reportParams:p(e)}}function W(e){return(0,K.jsx)(z,{attributes:xe(e)})}function G(e){return(0,K.jsx)(z,{attributes:{geoGranularity:`country`,max:10,reportParams:p(!1,e)}})}function Se(e){return(0,K.jsx)(z,{...e})}function Ce({withComparison:e,geoGranularity:t,...n}){return(0,K.jsx)(v,{...n,widgetType:Te,renderModule:we,renderComponent:Se,attributes:xe({withComparison:e,geoGranularity:t})})}var K,we,Te,Ee,q,J,Y,X,Z,Q,$,De;e((()=>{h(),y(),b(),se(),C(),w(),ye(),be(),K=i(),g(),S(),we=`storybook/locations`,Te={name:U.name,title:U.title,icon:U.icon,attributes:U.attributes,example:U.example,presentation:`framed`},Ee={title:`Packages/Premium Analytics/Widgets/Locations`,component:z,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country or city, with country drill-down into regions, using the global dashboard date range. The Countries/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},q={render:W,args:{withComparison:!1,geoGranularity:`country`},decorators:[x]},J={render:W,args:{withComparison:!0,geoGranularity:`country`},decorators:[x]},Y={render:W,args:{withComparison:!1,geoGranularity:`city`},decorators:[x]},X={render:()=>G(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(T(`stats/location-views`,`loading`),()=>T(`stats/location-views`,null))},Z={render:()=>G(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(T(`stats/location-views`,`error`),()=>T(`stats/location-views`,null))},Q={render:()=>G(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(T(`stats/location-views`,`empty`),()=>T(`stats/location-views`,null))},$={render:e=>(0,K.jsx)(Ce,{...e}),args:{...pe,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...de,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: false,
    geoGranularity: 'country'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: true,
    geoGranularity: 'country'
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: false,
    geoGranularity: 'city'
  },
  decorators: [withWidgetCanvas]
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderLocationsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/location-views', 'loading');
    return () => forceStatsMockState('stats/location-views', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderLocationsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/location-views', 'error');
    return () => forceStatsMockState('stats/location-views', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => renderLocationsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/location-views', 'empty');
    return () => forceStatsMockState('stats/location-views', null);
  }
}`,...Q.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral location
glyph and the "stats will appear here" copy).`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},De=[`Default`,`WithComparison`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{Y as CitiesMode,q as Default,Q as Empty,Z as Error,X as Loading,$ as WidgetDashboardWithWidget,J as WithComparison,De as __namedExportsOrder,Ee as default};