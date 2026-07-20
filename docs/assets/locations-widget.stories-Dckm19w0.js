import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{Ot as s,n as c}from"./build-module-DmVuor49.js";import{r as ee}from"./hooks-CMdavdRW.js";import{t as l}from"./geo-chart-CKL6eT0v.js";import{R as u,t as d}from"./build-module-DDCHq_4V.js";import{S as te,t as f}from"./src-B3le4dug.js";import{$t as p,L as ne,R as re,dt as m,er as h,v as ie}from"./chart-tooltip-GpHdAVzI.js";import{t as ae}from"./leaderboard-chart-8NFbrbTX.js";import{H as oe,M as g,R as _,b as se,j as ce,w as le}from"./report-metric-FDsK4MBA.js";import{t as ue}from"./widget-state-BblrWOxE.js";import{C as de,S as v,T as fe,b as y,t as pe,w as b,x}from"./src-DQaQSFBR.js";import{n as S,t as C}from"./src-9_oLSm8e.js";import{n as w,t as T}from"./register-stats-mocks-C81YIoQq.js";import{n as E,t as D}from"./force-stats-mock-state-DF5Nd9G8.js";var O,k,A,j,M,N,P,F,I,L,R,z,me=e((()=>{O=`_root_k2l6z_1`,k=`_backLink_k2l6z_9`,A=`_content_k2l6z_17`,j=`_bodyHeader_k2l6z_25`,M=`_stateArea_k2l6z_32`,N=`_chartArea_k2l6z_38`,P=`_leaderboardPanel_k2l6z_48`,F=`_leaderboard_k2l6z_48`,I=`_leaderboardLabel_k2l6z_64`,L=`_geoChart_k2l6z_81`,R=`_leaderboardImage_k2l6z_117`,z={root:O,backLink:k,content:A,bodyHeader:j,stateArea:M,chartArea:N,leaderboardPanel:P,leaderboard:F,leaderboardLabel:I,geoChart:L,leaderboardImage:R}}));function he(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function ge({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{primary:i,comparison:a,comparisonRows:o,hasComparison:s,isLoading:c,isFetching:ee,hasData:l,isError:u,refetch:d}=p({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),te=i.isPlaceholderData||a.isPlaceholderData,f=(o?.rows??[]).map(he).filter(e=>e!==null);return{data:f,hasComparison:s,isLoading:c,isFetching:ee,hasData:l,isError:f.length===0&&u,isPlaceholderData:te,refetch:d}}var _e=e((()=>{m()}));function ve(e){return e.toUpperCase()===`TW`?`Taiwan`:e.toUpperCase()}function ye({max:e,geoGranularity:r}){let{reportParams:i}=oe(),[o,s]=(0,a.useState)(()=>new Set(H)),{drillDownItem:c,drillDown:d,resetDrillDown:f}=ee();(0,a.useEffect)(()=>{r===`city`&&f()},[f,r]);let p=r===`country`?c:void 0,m=r===`country`&&p?`region`:r,{data:h,hasComparison:g,isLoading:_,isFetching:ce,isError:de,isPlaceholderData:v,refetch:fe}=ge({reportParams:i,max:e,geoMode:m,countryFilter:m===`region`?p?.code:void 0}),[y,pe]=(0,a.useState)({geoMode:m,selectedCountry:p});(0,a.useEffect)(()=>{v||pe({geoMode:m,selectedCountry:p})},[p,m,v]);let b=v?y.geoMode:m,x=v?y.selectedCountry:p,S=x?.code.toUpperCase(),C=b===`region`&&!!S&&!o.has(S),w=b===`region`&&!!x&&!C,T=w?x:void 0,E=b===`city`,D=(0,a.useMemo)(()=>{let e=new Map;return E?(h.forEach(t=>{let n=t.countryCode.toUpperCase(),r=e.get(n);e.set(n,{countryFull:t.countryFull,value:(r?.value??0)+t.value})}),Array.from(e.entries())):[]},[h,E]),O=(0,a.useCallback)(e=>{let t=`${e.message??``} ${e.detailedMessage??``}`,n=!!S&&C,r=!!S&&H.has(S);!n&&!r&&!t.includes(be)||(e.id&&typeof window<`u`&&window.google?.visualization?.errors?.removeError?.(e.id),n&&(H.add(S),s(e=>{if(e.has(S))return e;let t=new Set(e);return t.add(S),t})))},[S,C]),k=(0,a.useMemo)(()=>{let e=[n(b===`region`&&!w?`Location`:`Country`,`jetpack-premium-analytics`),n(`Views`,`jetpack-premium-analytics`)];if(T){let t=T.code.toUpperCase(),n=h.filter(e=>e.countryCode.toUpperCase()===t).reduce((e,t)=>e+t.value,0);return[e,[{v:ve(t),f:T.name},n]]}return E?[e,...D.map(([e,t])=>[{v:ve(e),f:t.countryFull},t.value])]:[e,...h.map(e=>[e.label,e.value])]},[D,h,T,b,E,w]),A=(0,a.useMemo)(()=>{let e=Math.max(...h.map(e=>e.value),0),r=Math.max(...h.map(e=>e.previousValue??0),0);return h.map(i=>{let a=ie(i.countryCode),o=i.previousValue;return{id:i.key,label:(0,V.jsx)(`div`,{className:z.leaderboardLabel,children:(0,V.jsx)(le,{label:i.label,imageUrl:a??void 0,imageAlt:t(n(`Flag of %s`,`jetpack-premium-analytics`),i.countryFull),imageClassName:z.leaderboardImage})}),currentValue:i.value,previousValue:o,currentShare:ne(i.value,e),previousShare:g&&o!==void 0?ne(o,r):void 0,delta:g&&o!==void 0?re(i.value,o):void 0,...b===`country`&&i.countryCode&&{onClick:()=>d({code:i.countryCode,name:i.countryFull}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics`),i.countryFull)}}})},[h,b,g,d]),j=x?(0,V.jsx)(se,{label:n(`All Locations`,`jetpack-premium-analytics`),ariaLabel:n(`View all locations`,`jetpack-premium-analytics`),onClick:f,className:z.backLink}):null,M=j?(0,V.jsx)(u,{direction:`row`,align:`center`,className:z.bodyHeader,children:j}):null;return(0,V.jsxs)(`div`,{className:z.content,children:[M,(0,V.jsx)(`div`,{className:z.stateArea,children:(0,V.jsx)(ue,{isLoading:_,isFetching:ce,isError:de,isEmpty:h.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:fe}]},empty:{icon:te,description:n(`No location data in this period.`,`jetpack-premium-analytics`)},children:(0,V.jsxs)(`div`,{className:z.chartArea,children:[(0,V.jsx)(`div`,{className:z.leaderboardPanel,children:(0,V.jsx)(ae,{data:A,withOverlayLabel:!0,withComparison:g,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:z.leaderboard})}),(0,V.jsx)(`div`,{className:z.geoChart,children:(0,V.jsx)(l,{data:k,resizeDebounceTime:100,region:C?x?.code??`world`:`world`,resolution:C?`provinces`:`countries`,onError:O})})]})})})]})}function B({attributes:e={}}){let t=e?.max??10,n=e?.geoGranularity??`country`;return(0,V.jsx)(_,{attributes:e,children:(0,V.jsx)(`div`,{className:z.root,children:(0,V.jsx)(ye,{max:t,geoGranularity:n})})})}var V,be,H,xe=e((()=>{pe(),f(),o(),r(),d(),me(),_e(),V=i(),be=`Requested map does not exist`,H=new Set})),U,Se=e((()=>{r(),c(),C(),U={name:`jpa/locations`,title:n(`Locations`,`jetpack-premium-analytics`),help:{content:n(`The countries, regions, and cities where your visitors came from, sorted by views.`,`jetpack-premium-analytics`),links:[{label:n(`Learn more`,`jetpack-premium-analytics`),href:`https://jetpack.com/support/jetpack-stats/`}]},icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics`),type:`integer`},{id:`geoGranularity`,label:n(`View by`,`jetpack-premium-analytics`),type:`text`,Edit:S,elements:[{label:n(`Countries`,`jetpack-premium-analytics`),value:`country`},{label:n(`Cities`,`jetpack-premium-analytics`),value:`city`}],relevance:`high`}],example:{attributes:{max:10,geoGranularity:`country`}}}}));function Ce({withComparison:e,geoGranularity:t}){return{geoGranularity:t,max:10,reportParams:h(e)}}function W(e){return(0,K.jsx)(B,{attributes:Ce(e)})}function G(e){return(0,K.jsx)(B,{attributes:{geoGranularity:`country`,max:10,reportParams:h(!1,e)}})}function we(e){return(0,K.jsx)(B,{...e})}function Te({withComparison:e,geoGranularity:t,...n}){return(0,K.jsx)(de,{...n,widgetType:De,renderModule:Ee,renderComponent:we,attributes:Ce({withComparison:e,geoGranularity:t})})}var K,Ee,De,Oe,q,J,Y,X,Z,Q,$,ke;e((()=>{m(),b(),y(),ce(),T(),E(),xe(),Se(),K=i(),g(),w(),Ee=`storybook/locations`,De={name:U.name,title:U.title,icon:U.icon,attributes:U.attributes,example:U.example,presentation:`framed`},Oe={title:`Packages/Premium Analytics/Widgets/Locations`,component:B,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country or city, with country drill-down into regions, using the global dashboard date range. The Countries/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},q={render:W,args:{withComparison:!1,geoGranularity:`country`},decorators:[x]},J={render:W,args:{withComparison:!0,geoGranularity:`country`},decorators:[x]},Y={render:W,args:{withComparison:!1,geoGranularity:`city`},decorators:[x]},X={render:()=>G(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(D(`stats/location-views`,`loading`),()=>D(`stats/location-views`,null))},Z={render:()=>G(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(D(`stats/location-views`,`error`),()=>D(`stats/location-views`,null))},Q={render:()=>G(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(D(`stats/location-views`,`empty`),()=>D(`stats/location-views`,null))},$={render:e=>(0,K.jsx)(Te,{...e}),args:{...v,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...fe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},ke=[`Default`,`WithComparison`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{Y as CitiesMode,q as Default,Q as Empty,Z as Error,X as Loading,$ as WidgetDashboardWithWidget,J as WithComparison,ke as __namedExportsOrder,Oe as default};