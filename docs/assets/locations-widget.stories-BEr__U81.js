import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,t as r}from"./build-module-DyKOxfM8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{_ as a,t as o}from"./build-module-CbwHEf9N.js";import{Qi as s,n as c}from"./build-module-CDRs4YxF.js";import{lr as ee,t as l}from"./src-qvECei_r.js";import{$ as u,E as d,K as f,M as p,O as te,q as m,rt as ne,w as h}from"./report-metric-B_XzB90i.js";import{t as re}from"./geo-chart-ChY-rxrv.js";import{S as ie,t as ae}from"./src-tEZrN6jJ.js";import{r as oe}from"./hooks-OyfSqsw-.js";import{M as se,Q as ce,Tt as g,Z as le,et as ue,hr as _,pn as v}from"./chart-tooltip-C8ZGvC-d.js";import{t as de}from"./leaderboard-chart-D5dIzcZ7.js";import{t as fe}from"./widget-state-DXH_sJfv.js";import{C as pe,D as y,E as me,O as b,S as x,T as S,b as C,k as w,t as T,w as E,x as D}from"./src-CsviWOIg.js";import{n as he,t as ge}from"./src-8_8m4m8U.js";import{n as _e,t as O}from"./register-stats-mocks-E_Xodcr6.js";import{n as k,t as A}from"./force-stats-mock-state-5_eW_cT_.js";var j,M,N,P,F,I,L,ve,ye,R,be=e((()=>{j=`_root_erick_1`,M=`_backLink_erick_9`,N=`_content_erick_17`,P=`_bodyHeader_erick_25`,F=`_stateArea_erick_32`,I=`_chartArea_erick_38`,L=`_leaderboardPanel_erick_48`,ve=`_leaderboard_erick_48`,ye=`_geoChart_erick_64`,R={root:j,backLink:M,content:N,bodyHeader:P,stateArea:F,chartArea:I,leaderboardPanel:L,leaderboard:ve,geoChart:ye}}));function xe(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function Se({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{primary:i,comparison:a,comparisonRows:o,hasComparison:s,isLoading:c,isFetching:ee,hasData:l,isError:u,refetch:d}=v({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),f=i.isPlaceholderData||a.isPlaceholderData,p=(o?.rows??[]).map(xe).filter(e=>e!==null);return{data:p,hasComparison:s,isLoading:c,isFetching:ee,hasData:l,isError:p.length===0&&u,isPlaceholderData:f,refetch:d}}var Ce=e((()=>{g()}));function we(e){return e.toUpperCase()===`TW`?`Taiwan`:e.toUpperCase()}function Te({max:e,geoGranularity:r}){let{reportParams:i}=ne(),[o,s]=(0,a.useState)(()=>new Set(V)),{drillDownItem:c,drillDown:l,resetDrillDown:u}=oe();(0,a.useEffect)(()=>{r===`city`&&u()},[u,r]);let d=r===`country`?c:void 0,f=r===`country`&&d?`region`:r,{data:m,hasComparison:h,isLoading:ae,isFetching:g,isError:_,isPlaceholderData:v,refetch:pe}=Se({reportParams:i,max:e,geoMode:f,countryFilter:f===`region`?d?.code:void 0}),[y,me]=(0,a.useState)({geoMode:f,selectedCountry:d});(0,a.useEffect)(()=>{v||me({geoMode:f,selectedCountry:d})},[d,f,v]);let b=v?y.geoMode:f,x=v?y.selectedCountry:d,S=x?.code.toUpperCase(),C=b===`region`&&!!S&&!o.has(S),w=b===`region`&&!!x&&!C,T=w?x:void 0,E=b===`city`,D=(0,a.useMemo)(()=>{let e=new Map;return E?(m.forEach(t=>{let n=t.countryCode.toUpperCase(),r=e.get(n);e.set(n,{countryFull:t.countryFull,value:(r?.value??0)+t.value})}),Array.from(e.entries())):[]},[m,E]),he=(0,a.useCallback)(e=>{let t=`${e.message??``} ${e.detailedMessage??``}`,n=!!S&&C,r=!!S&&V.has(S);!n&&!r&&!t.includes(Ee)||(e.id&&typeof window<`u`&&window.google?.visualization?.errors?.removeError?.(e.id),n&&(V.add(S),s(e=>{if(e.has(S))return e;let t=new Set(e);return t.add(S),t})))},[S,C]),ge=(0,a.useMemo)(()=>{let e=[n(b===`region`&&!w?`Location`:`Country`,`jetpack-premium-analytics-pkg`),n(`Views`,`jetpack-premium-analytics-pkg`)];if(T){let t=T.code.toUpperCase(),n=m.filter(e=>e.countryCode.toUpperCase()===t).reduce((e,t)=>e+t.value,0);return[e,[{v:we(t),f:T.name},n]]}return E?[e,...D.map(([e,t])=>[{v:we(e),f:t.countryFull},t.value])]:[e,...m.map(e=>[e.label,e.value])]},[D,m,T,b,E,w]),_e=(0,a.useMemo)(()=>{let e=ce(m.map(e=>e.value),h?m.map(e=>e.previousValue):[]);return m.map(r=>{let i=se(r.countryCode),a=r.previousValue,o=r.countryCode;return{id:r.key,...p({label:r.label,media:{kind:`flag`,url:i??void 0,country:r.countryFull},action:b===`country`&&o?{kind:`drillDown`,onClick:()=>l({code:o,name:r.countryFull}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),r.countryFull)}:{kind:`static`}}),currentValue:r.value,previousValue:a,currentShare:le(r.value,e),previousShare:h&&a!==void 0?le(a,e):void 0,delta:h&&a!==void 0?ue(r.value,a):void 0}})},[m,b,h,l]),O=x?(0,B.jsx)(te,{label:n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:u,className:R.backLink}):null,k=O?(0,B.jsx)(ee,{direction:`row`,align:`center`,className:R.bodyHeader,children:O}):null;return(0,B.jsxs)(`div`,{className:R.content,children:[k,(0,B.jsx)(`div`,{className:R.stateArea,children:(0,B.jsx)(fe,{isLoading:ae,isFetching:g,isError:_,isEmpty:m.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:pe}]},empty:{icon:ie,description:n(`No location data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,B.jsxs)(`div`,{className:R.chartArea,children:[(0,B.jsx)(`div`,{className:R.leaderboardPanel,children:(0,B.jsx)(de,{data:_e,withOverlayLabel:!0,withComparison:h,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:R.leaderboard})}),(0,B.jsx)(`div`,{className:R.geoChart,children:(0,B.jsx)(re,{data:ge,resizeDebounceTime:100,region:C?x?.code??`world`:`world`,resolution:C?`provinces`:`countries`,onError:he})})]})})})]})}function z({attributes:e={}}){let t=e?.max??10,n=e?.geoGranularity??`country`;return(0,B.jsx)(u,{attributes:e,children:(0,B.jsxs)(`div`,{className:R.root,children:[(0,B.jsx)(Te,{max:t,geoGranularity:n}),(0,B.jsx)(d,{children:(0,B.jsx)(h,{report:`locations`,section:n===`city`?`cities`:`countries`})})]})})}var B,Ee,V,De=e((()=>{T(),ae(),o(),r(),l(),be(),Ce(),B=i(),Ee=`Requested map does not exist`,V=new Set})),Oe,ke=e((()=>{r(),c(),ge(),Oe={icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`},{id:`geoGranularity`,label:n(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:he,elements:[{label:n(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:n(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{max:10,geoGranularity:`country`}}}})),Ae,je,Me,Ne,Pe,Fe,Ie,Le=e((()=>{Ae=`jpa/locations`,je=`Top locations`,Me=`Where your visitors are viewing from — by country, region, or city.`,Ne={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Pe=`stats`,Fe=`framed`,Ie={name:Ae,title:je,description:Me,help:Ne,category:Pe,presentation:Fe}}));function Re({withComparison:e,geoGranularity:t}){return{geoGranularity:t,max:10,reportParams:_(e)}}function H(e){return(0,W.jsx)(z,{attributes:Re(e)})}function U(e){return(0,W.jsx)(z,{attributes:{geoGranularity:`country`,max:10,reportParams:_(!1,e)}})}function ze(e){return(0,W.jsx)(z,{...e})}function Be({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(S,{...n,widgetType:He,renderModule:Ve,renderComponent:ze,attributes:Re({withComparison:e,geoGranularity:t})})}var W,Ve,He,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),me(),pe(),b(),C(),f(),O(),k(),De(),ke(),Le(),W=i(),m(),_e(),Ve=`storybook/locations`,He=x(Ie,Oe),G={title:`Packages/Premium Analytics/Widgets/Locations`,component:z,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country or city, with country drill-down into regions, using the global dashboard date range. The Countries/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},K={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[D,w]},q={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[D,w]},J={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[D,w]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[D,w],beforeEach:()=>(A(`stats/location-views`,`loading`),()=>A(`stats/location-views`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[D,w],beforeEach:()=>(A(`stats/location-views`,`error`),()=>A(`stats/location-views`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[D,w],beforeEach:()=>(A(`stats/location-views`,`empty`),()=>A(`stats/location-views`,null))},Q={render:e=>(0,W.jsx)(Be,{...e}),args:{...E,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...y,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
      options: ['country', 'city'],
      description: 'The "View by" toolbar attribute rendered by the widget host.'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as CitiesMode,K as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,G as default};