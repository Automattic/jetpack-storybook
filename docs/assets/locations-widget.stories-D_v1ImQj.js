import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{Ot as s,n as c}from"./build-module-DmVuor49.js";import{r as ee}from"./hooks-CbYAaNZf.js";import{t as te}from"./geo-chart-_tmOxvoh.js";import{R as l,t as u}from"./build-module-f6nw9llR.js";import{S as ne,t as d}from"./src-B3le4dug.js";import{E as re,G as ie,K as ae,cr as f,sn as p,yt as m}from"./chart-tooltip-Bng5hHZ0.js";import{t as oe}from"./leaderboard-chart-BVBM0scS.js";import{E as se,F as h,G as ce,P as g,S as le,V as _}from"./report-metric-BNxHdhqI.js";import{t as ue}from"./widget-state-eiZxw_lk.js";import{C as de,D as v,E as fe,S as y,T as pe,b,t as x,w as S,x as C}from"./src-DM6U6HKv.js";import{n as w,t as T}from"./src-Dxpd9Iyh.js";import{n as E,t as D}from"./register-stats-mocks-Jv0Oy5Qt.js";import{n as me,t as O}from"./force-stats-mock-state-D6K_OmLr.js";var k,A,j,M,N,P,F,I,L,R,he=e((()=>{k=`_root_erick_1`,A=`_backLink_erick_9`,j=`_content_erick_17`,M=`_bodyHeader_erick_25`,N=`_stateArea_erick_32`,P=`_chartArea_erick_38`,F=`_leaderboardPanel_erick_48`,I=`_leaderboard_erick_48`,L=`_geoChart_erick_64`,R={root:k,backLink:A,content:j,bodyHeader:M,stateArea:N,chartArea:P,leaderboardPanel:F,leaderboard:I,geoChart:L}}));function ge(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function _e({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{primary:i,comparison:a,comparisonRows:o,hasComparison:s,isLoading:c,isFetching:ee,hasData:te,isError:l,refetch:u}=p({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),ne=i.isPlaceholderData||a.isPlaceholderData,d=(o?.rows??[]).map(ge).filter(e=>e!==null);return{data:d,hasComparison:s,isLoading:c,isFetching:ee,hasData:te,isError:d.length===0&&l,isPlaceholderData:ne,refetch:u}}var ve=e((()=>{m()}));function z(e){return e.toUpperCase()===`TW`?`Taiwan`:e.toUpperCase()}function ye({max:e,geoGranularity:r}){let{reportParams:i}=ce(),[o,s]=(0,a.useState)(()=>new Set(U)),{drillDownItem:c,drillDown:u,resetDrillDown:d}=ee();(0,a.useEffect)(()=>{r===`city`&&d()},[d,r]);let f=r===`country`?c:void 0,p=r===`country`&&f?`region`:r,{data:m,hasComparison:h,isLoading:g,isFetching:_,isError:de,isPlaceholderData:v,refetch:fe}=_e({reportParams:i,max:e,geoMode:p,countryFilter:p===`region`?f?.code:void 0}),[y,pe]=(0,a.useState)({geoMode:p,selectedCountry:f});(0,a.useEffect)(()=>{v||pe({geoMode:p,selectedCountry:f})},[f,p,v]);let b=v?y.geoMode:p,x=v?y.selectedCountry:f,S=x?.code.toUpperCase(),C=b===`region`&&!!S&&!o.has(S),w=b===`region`&&!!x&&!C,T=w?x:void 0,E=b===`city`,D=(0,a.useMemo)(()=>{let e=new Map;return E?(m.forEach(t=>{let n=t.countryCode.toUpperCase(),r=e.get(n);e.set(n,{countryFull:t.countryFull,value:(r?.value??0)+t.value})}),Array.from(e.entries())):[]},[m,E]),me=(0,a.useCallback)(e=>{let t=`${e.message??``} ${e.detailedMessage??``}`,n=!!S&&C,r=!!S&&U.has(S);!n&&!r&&!t.includes(H)||(e.id&&typeof window<`u`&&window.google?.visualization?.errors?.removeError?.(e.id),n&&(U.add(S),s(e=>{if(e.has(S))return e;let t=new Set(e);return t.add(S),t})))},[S,C]),O=(0,a.useMemo)(()=>{let e=[n(b===`region`&&!w?`Location`:`Country`,`jetpack-premium-analytics`),n(`Views`,`jetpack-premium-analytics`)];if(T){let t=T.code.toUpperCase(),n=m.filter(e=>e.countryCode.toUpperCase()===t).reduce((e,t)=>e+t.value,0);return[e,[{v:z(t),f:T.name},n]]}return E?[e,...D.map(([e,t])=>[{v:z(e),f:t.countryFull},t.value])]:[e,...m.map(e=>[e.label,e.value])]},[D,m,T,b,E,w]),k=(0,a.useMemo)(()=>{let e=Math.max(...m.map(e=>e.value),0),r=Math.max(...m.map(e=>e.previousValue??0),0);return m.map(i=>{let a=re(i.countryCode),o=i.previousValue,s=i.countryCode;return{id:i.key,...se({label:i.label,media:{kind:`flag`,url:a??void 0,country:i.countryFull},action:b===`country`&&s?{kind:`drillDown`,onClick:()=>u({code:s,name:i.countryFull}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics`),i.countryFull)}:{kind:`static`}}),currentValue:i.value,previousValue:o,currentShare:ie(i.value,e),previousShare:h&&o!==void 0?ie(o,r):void 0,delta:h&&o!==void 0?ae(i.value,o):void 0}})},[m,b,h,u]),A=x?(0,V.jsx)(le,{label:n(`All Locations`,`jetpack-premium-analytics`),ariaLabel:n(`View all locations`,`jetpack-premium-analytics`),onClick:d,className:R.backLink}):null,j=A?(0,V.jsx)(l,{direction:`row`,align:`center`,className:R.bodyHeader,children:A}):null;return(0,V.jsxs)(`div`,{className:R.content,children:[j,(0,V.jsx)(`div`,{className:R.stateArea,children:(0,V.jsx)(ue,{isLoading:g,isFetching:_,isError:de,isEmpty:m.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:fe}]},empty:{icon:ne,description:n(`No location data in this period.`,`jetpack-premium-analytics`)},children:(0,V.jsxs)(`div`,{className:R.chartArea,children:[(0,V.jsx)(`div`,{className:R.leaderboardPanel,children:(0,V.jsx)(oe,{data:k,withOverlayLabel:!0,withComparison:h,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:R.leaderboard})}),(0,V.jsx)(`div`,{className:R.geoChart,children:(0,V.jsx)(te,{data:O,resizeDebounceTime:100,region:C?x?.code??`world`:`world`,resolution:C?`provinces`:`countries`,onError:me})})]})})})]})}function B({attributes:e={}}){let t=e?.max??10,n=e?.geoGranularity??`country`;return(0,V.jsx)(_,{attributes:e,children:(0,V.jsx)(`div`,{className:R.root,children:(0,V.jsx)(ye,{max:t,geoGranularity:n})})})}var V,H,U,be=e((()=>{x(),d(),o(),r(),u(),he(),ve(),V=i(),H=`Requested map does not exist`,U=new Set})),xe,Se=e((()=>{r(),c(),T(),xe={icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics`),type:`integer`},{id:`geoGranularity`,label:n(`View by`,`jetpack-premium-analytics`),type:`text`,Edit:w,elements:[{label:n(`Countries`,`jetpack-premium-analytics`),value:`country`},{label:n(`Cities`,`jetpack-premium-analytics`),value:`city`}],relevance:`high`}],example:{attributes:{max:10,geoGranularity:`country`}}}})),Ce,we,Te,Ee,De,Oe,ke,Ae=e((()=>{Ce=`jpa/locations`,we=`Locations`,Te=`Where your visitors are viewing from — by country, region, or city.`,Ee={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},De=`stats`,Oe=`framed`,ke={name:Ce,title:we,description:Te,help:Ee,category:De,presentation:Oe}}));function je({withComparison:e,geoGranularity:t}){return{geoGranularity:t,max:10,reportParams:f(e)}}function W(e){return(0,K.jsx)(B,{attributes:je(e)})}function G(e){return(0,K.jsx)(B,{attributes:{geoGranularity:`country`,max:10,reportParams:f(!1,e)}})}function Me(e){return(0,K.jsx)(B,{...e})}function Ne({withComparison:e,geoGranularity:t,...n}){return(0,K.jsx)(pe,{...n,widgetType:Fe,renderModule:Pe,renderComponent:Me,attributes:je({withComparison:e,geoGranularity:t})})}var K,Pe,Fe,Ie,q,J,Y,X,Z,Q,$,Le;e((()=>{m(),fe(),de(),b(),g(),D(),me(),be(),Se(),Ae(),K=i(),h(),E(),Pe=`storybook/locations`,Fe=y(ke,xe),Ie={title:`Packages/Premium Analytics/Widgets/Locations`,component:B,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country or city, with country drill-down into regions, using the global dashboard date range. The Countries/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},q={render:W,args:{withComparison:!1,geoGranularity:`country`},decorators:[C]},J={render:W,args:{withComparison:!0,geoGranularity:`country`},decorators:[C]},Y={render:W,args:{withComparison:!1,geoGranularity:`city`},decorators:[C]},X={render:()=>G(`last-90-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(O(`stats/location-views`,`loading`),()=>O(`stats/location-views`,null))},Z={render:()=>G(`last-7-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(O(`stats/location-views`,`error`),()=>O(`stats/location-views`,null))},Q={render:()=>G(`last-365-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(O(`stats/location-views`,`empty`),()=>O(`stats/location-views`,null))},$={render:e=>(0,K.jsx)(Ne,{...e}),args:{...S,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...v,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Le=[`Default`,`WithComparison`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{Y as CitiesMode,q as Default,Q as Empty,Z as Error,X as Loading,$ as WidgetDashboardWithWidget,J as WithComparison,Le as __namedExportsOrder,Ie as default};