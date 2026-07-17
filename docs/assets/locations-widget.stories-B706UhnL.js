import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{Ot as s,n as c}from"./build-module-DmVuor49.js";import{r as l}from"./hooks-DrOYig81.js";import{t as ee}from"./geo-chart-mYqZBwem.js";import{R as te,t as u}from"./build-module-8J9jVgyz.js";import{S as ne,t as d}from"./src-B3le4dug.js";import{L as re,S as ie,Yn as f,Yt as p,_ as ae,ut as m}from"./chart-tooltip-DBv7LA1C.js";import{t as oe}from"./leaderboard-chart-Y9uwnxmT.js";import{C as h,N as se,S as g,f as ce,g as le,k as ue}from"./report-metric-Db_B5iSk.js";import{t as de}from"./widget-state-BjOTAdtj.js";import{S as fe,b as _,t as pe,x as v,y as me}from"./src-D7XBPU8G.js";import{n as y,r as b}from"./with-widget-canvas-Dz43KNHY.js";import{n as x,t as S}from"./src-DWHqqK_5.js";import{n as C,t as w}from"./register-stats-mocks-BORJWNTy.js";import{n as T,t as E}from"./force-stats-mock-state-BZjRoQF9.js";var D,O,k,A,j,M,N,P,F,I,L,R,he=e((()=>{D=`_root_k2l6z_1`,O=`_backLink_k2l6z_9`,k=`_content_k2l6z_17`,A=`_bodyHeader_k2l6z_25`,j=`_stateArea_k2l6z_32`,M=`_chartArea_k2l6z_38`,N=`_leaderboardPanel_k2l6z_48`,P=`_leaderboard_k2l6z_48`,F=`_leaderboardLabel_k2l6z_64`,I=`_geoChart_k2l6z_81`,L=`_leaderboardImage_k2l6z_117`,R={root:D,backLink:O,content:k,bodyHeader:A,stateArea:j,chartArea:M,leaderboardPanel:N,leaderboard:P,leaderboardLabel:F,geoChart:I,leaderboardImage:L}}));function ge(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function _e({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{primary:i,comparison:a,comparisonRows:o,hasComparison:s,isLoading:c,isFetching:l,hasData:ee,isError:te,refetch:u}=p({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),ne=i.isPlaceholderData||a.isPlaceholderData,d=(o?.rows??[]).map(ge).filter(e=>e!==null);return{data:d,hasComparison:s,isLoading:c,isFetching:l,hasData:ee,isError:d.length===0&&te,isPlaceholderData:ne,refetch:u}}var ve=e((()=>{m()}));function z(e){return e.toUpperCase()===`TW`?`Taiwan`:e.toUpperCase()}function ye({max:e,geoGranularity:r}){let{reportParams:i}=se(),[o,s]=(0,a.useState)(()=>new Set(H)),{drillDownItem:c,drillDown:u,resetDrillDown:d}=l();(0,a.useEffect)(()=>{r===`city`&&d()},[d,r]);let f=r===`country`?c:void 0,p=r===`country`&&f?`region`:r,{data:m,hasComparison:h,isLoading:g,isFetching:ue,isError:fe,isPlaceholderData:_,refetch:pe}=_e({reportParams:i,max:e,geoMode:p,countryFilter:p===`region`?f?.code:void 0}),[v,me]=(0,a.useState)({geoMode:p,selectedCountry:f});(0,a.useEffect)(()=>{_||me({geoMode:p,selectedCountry:f})},[f,p,_]);let y=_?v.geoMode:p,b=_?v.selectedCountry:f,x=b?.code.toUpperCase(),S=y===`region`&&!!x&&!o.has(x),C=y===`region`&&!!b&&!S,w=C?b:void 0,T=y===`city`,E=(0,a.useMemo)(()=>{let e=new Map;return T?(m.forEach(t=>{let n=t.countryCode.toUpperCase(),r=e.get(n);e.set(n,{countryFull:t.countryFull,value:(r?.value??0)+t.value})}),Array.from(e.entries())):[]},[m,T]),D=(0,a.useCallback)(e=>{let t=`${e.message??``} ${e.detailedMessage??``}`,n=!!x&&S,r=!!x&&H.has(x);!n&&!r&&!t.includes(be)||(e.id&&typeof window<`u`&&window.google?.visualization?.errors?.removeError?.(e.id),n&&(H.add(x),s(e=>{if(e.has(x))return e;let t=new Set(e);return t.add(x),t})))},[x,S]),O=(0,a.useMemo)(()=>{let e=[n(y===`region`&&!C?`Location`:`Country`,`jetpack-premium-analytics`),n(`Views`,`jetpack-premium-analytics`)];if(w){let t=w.code.toUpperCase(),n=m.filter(e=>e.countryCode.toUpperCase()===t).reduce((e,t)=>e+t.value,0);return[e,[{v:z(t),f:w.name},n]]}return T?[e,...E.map(([e,t])=>[{v:z(e),f:t.countryFull},t.value])]:[e,...m.map(e=>[e.label,e.value])]},[E,m,w,y,T,C]),k=(0,a.useMemo)(()=>{let e=Math.max(...m.map(e=>e.value),0),r=Math.max(...m.map(e=>e.previousValue??0),0);return m.map(i=>{let a=ae(i.countryCode),o=i.previousValue;return{id:i.key,label:(0,V.jsx)(`div`,{className:R.leaderboardLabel,children:(0,V.jsx)(le,{label:i.label,imageUrl:a??void 0,imageAlt:t(n(`Flag of %s`,`jetpack-premium-analytics`),i.countryFull),imageClassName:R.leaderboardImage})}),currentValue:i.value,previousValue:o,currentShare:e>0?i.value/e*100:0,previousShare:h&&o!==void 0?ie(o,r):void 0,delta:h&&o!==void 0?re(i.value,o):void 0,...y===`country`&&i.countryCode&&{onClick:()=>u({code:i.countryCode,name:i.countryFull}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics`),i.countryFull)}}})},[m,y,h,u]),A=b?(0,V.jsx)(ce,{label:n(`All Locations`,`jetpack-premium-analytics`),ariaLabel:n(`View all locations`,`jetpack-premium-analytics`),onClick:d,className:R.backLink}):null,j=A?(0,V.jsx)(te,{direction:`row`,align:`center`,className:R.bodyHeader,children:A}):null;return(0,V.jsxs)(`div`,{className:R.content,children:[j,(0,V.jsx)(`div`,{className:R.stateArea,children:(0,V.jsx)(de,{isLoading:g,isFetching:ue,isError:fe,isEmpty:m.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:pe}]},empty:{icon:ne,description:n(`No location data in this period.`,`jetpack-premium-analytics`)},children:(0,V.jsxs)(`div`,{className:R.chartArea,children:[(0,V.jsx)(`div`,{className:R.leaderboardPanel,children:(0,V.jsx)(oe,{data:k,withOverlayLabel:!0,withComparison:h,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:R.leaderboard})}),(0,V.jsx)(`div`,{className:R.geoChart,children:(0,V.jsx)(ee,{data:O,resizeDebounceTime:100,region:S?b?.code??`world`:`world`,resolution:S?`provinces`:`countries`,onError:D})})]})})})]})}function B({attributes:e={}}){let t=e?.max??10,n=e?.geoGranularity??`country`;return(0,V.jsx)(ue,{attributes:e,children:(0,V.jsx)(`div`,{className:R.root,children:(0,V.jsx)(ye,{max:t,geoGranularity:n})})})}var V,be,H,xe=e((()=>{pe(),d(),o(),r(),u(),he(),ve(),V=i(),be=`Requested map does not exist`,H=new Set})),U,Se=e((()=>{r(),c(),S(),U={name:`jpa/locations`,title:n(`Locations`,`jetpack-premium-analytics`),help:{content:n(`Visitors’ viewing location by countries, regions and cities.`,`jetpack-premium-analytics`)},icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics`),type:`integer`},{id:`geoGranularity`,label:n(`View by`,`jetpack-premium-analytics`),type:`text`,Edit:x,elements:[{label:n(`Countries`,`jetpack-premium-analytics`),value:`country`},{label:n(`Cities`,`jetpack-premium-analytics`),value:`city`}],relevance:`high`}],example:{attributes:{max:10,geoGranularity:`country`}}}}));function Ce({withComparison:e,geoGranularity:t}){return{geoGranularity:t,max:10,reportParams:f(e)}}function W(e){return(0,K.jsx)(B,{attributes:Ce(e)})}function G(e){return(0,K.jsx)(B,{attributes:{geoGranularity:`country`,max:10,reportParams:f(!1,e)}})}function we(e){return(0,K.jsx)(B,{...e})}function Te({withComparison:e,geoGranularity:t,...n}){return(0,K.jsx)(_,{...n,widgetType:De,renderModule:Ee,renderComponent:we,attributes:Ce({withComparison:e,geoGranularity:t})})}var K,Ee,De,Oe,q,J,Y,X,Z,Q,$,ke;e((()=>{m(),v(),y(),g(),w(),T(),xe(),Se(),K=i(),h(),C(),Ee=`storybook/locations`,De={name:U.name,title:U.title,icon:U.icon,attributes:U.attributes,example:U.example,presentation:`framed`},Oe={title:`Packages/Premium Analytics/Widgets/Locations`,component:B,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country or city, with country drill-down into regions, using the global dashboard date range. The Countries/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},q={render:W,args:{withComparison:!1,geoGranularity:`country`},decorators:[b]},J={render:W,args:{withComparison:!0,geoGranularity:`country`},decorators:[b]},Y={render:W,args:{withComparison:!1,geoGranularity:`city`},decorators:[b]},X={render:()=>G(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(E(`stats/location-views`,`loading`),()=>E(`stats/location-views`,null))},Z={render:()=>G(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(E(`stats/location-views`,`error`),()=>E(`stats/location-views`,null))},Q={render:()=>G(`last-365-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(E(`stats/location-views`,`empty`),()=>E(`stats/location-views`,null))},$={render:e=>(0,K.jsx)(Te,{...e}),args:{...me,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...fe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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