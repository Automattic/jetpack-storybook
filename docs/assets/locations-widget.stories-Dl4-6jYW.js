import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{Ot as s,n as c}from"./build-module-DoJYX5DX.js";import{D as l,G as u,N as ee,S as d,W as f,Z as p,k as te,tt as ne}from"./report-metric-CtuHsD_3.js";import{t as re}from"./geo-chart-DyWZ0rFs.js";import{R as ie,t as m}from"./build-module-DZ6tplRt.js";import{S as ae,t as oe}from"./src-B3le4dug.js";import{r as se}from"./hooks-DLCe4_lZ.js";import{J as ce,O as le,X as ue,ln as h,q as g,ur as _,xt as v}from"./chart-tooltip-C_KXKdxW.js";import{t as de}from"./leaderboard-chart-CUZROOW-.js";import{t as fe}from"./widget-state-B8GdqNda.js";import{C as pe,D as y,E as me,O as b,S as x,T as S,b as C,k as w,t as T,w as E,x as D}from"./src-BOYaBqvu.js";import{n as he,t as O}from"./src-D484l5z4.js";import{n as k,t as A}from"./register-stats-mocks-u_6i_Awk.js";import{n as j,t as M}from"./force-stats-mock-state-CXZcG513.js";var N,P,F,I,L,R,ge,_e,ve,z,ye=e((()=>{N=`_root_erick_1`,P=`_backLink_erick_9`,F=`_content_erick_17`,I=`_bodyHeader_erick_25`,L=`_stateArea_erick_32`,R=`_chartArea_erick_38`,ge=`_leaderboardPanel_erick_48`,_e=`_leaderboard_erick_48`,ve=`_geoChart_erick_64`,z={root:N,backLink:P,content:F,bodyHeader:I,stateArea:L,chartArea:R,leaderboardPanel:ge,leaderboard:_e,geoChart:ve}}));function be(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function xe({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{primary:i,comparison:a,comparisonRows:o,hasComparison:s,isLoading:c,isFetching:l,hasData:u,isError:ee,refetch:d}=h({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),f=i.isPlaceholderData||a.isPlaceholderData,p=(o?.rows??[]).map(be).filter(e=>e!==null);return{data:p,hasComparison:s,isLoading:c,isFetching:l,hasData:u,isError:p.length===0&&ee,isPlaceholderData:f,refetch:d}}var Se=e((()=>{v()}));function Ce(e){return e.toUpperCase()===`TW`?`Taiwan`:e.toUpperCase()}function we({max:e,geoGranularity:r}){let{reportParams:i}=ne(),[o,s]=(0,a.useState)(()=>new Set(H)),{drillDownItem:c,drillDown:l,resetDrillDown:u}=se();(0,a.useEffect)(()=>{r===`city`&&u()},[u,r]);let d=r===`country`?c:void 0,f=r===`country`&&d?`region`:r,{data:p,hasComparison:m,isLoading:oe,isFetching:h,isError:_,isPlaceholderData:v,refetch:pe}=xe({reportParams:i,max:e,geoMode:f,countryFilter:f===`region`?d?.code:void 0}),[y,me]=(0,a.useState)({geoMode:f,selectedCountry:d});(0,a.useEffect)(()=>{v||me({geoMode:f,selectedCountry:d})},[d,f,v]);let b=v?y.geoMode:f,x=v?y.selectedCountry:d,S=x?.code.toUpperCase(),C=b===`region`&&!!S&&!o.has(S),w=b===`region`&&!!x&&!C,T=w?x:void 0,E=b===`city`,D=(0,a.useMemo)(()=>{let e=new Map;return E?(p.forEach(t=>{let n=t.countryCode.toUpperCase(),r=e.get(n);e.set(n,{countryFull:t.countryFull,value:(r?.value??0)+t.value})}),Array.from(e.entries())):[]},[p,E]),he=(0,a.useCallback)(e=>{let t=`${e.message??``} ${e.detailedMessage??``}`,n=!!S&&C,r=!!S&&H.has(S);!n&&!r&&!t.includes(Te)||(e.id&&typeof window<`u`&&window.google?.visualization?.errors?.removeError?.(e.id),n&&(H.add(S),s(e=>{if(e.has(S))return e;let t=new Set(e);return t.add(S),t})))},[S,C]),O=(0,a.useMemo)(()=>{let e=[n(b===`region`&&!w?`Location`:`Country`,`jetpack-premium-analytics-pkg`),n(`Views`,`jetpack-premium-analytics-pkg`)];if(T){let t=T.code.toUpperCase(),n=p.filter(e=>e.countryCode.toUpperCase()===t).reduce((e,t)=>e+t.value,0);return[e,[{v:Ce(t),f:T.name},n]]}return E?[e,...D.map(([e,t])=>[{v:Ce(e),f:t.countryFull},t.value])]:[e,...p.map(e=>[e.label,e.value])]},[D,p,T,b,E,w]),k=(0,a.useMemo)(()=>{let e=ce(p.map(e=>e.value),m?p.map(e=>e.previousValue):[]);return p.map(r=>{let i=le(r.countryCode),a=r.previousValue,o=r.countryCode;return{id:r.key,...ee({label:r.label,media:{kind:`flag`,url:i??void 0,country:r.countryFull},action:b===`country`&&o?{kind:`drillDown`,onClick:()=>l({code:o,name:r.countryFull}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),r.countryFull)}:{kind:`static`}}),currentValue:r.value,previousValue:a,currentShare:g(r.value,e),previousShare:m&&a!==void 0?g(a,e):void 0,delta:m&&a!==void 0?ue(r.value,a):void 0}})},[p,b,m,l]),A=x?(0,V.jsx)(te,{label:n(`All Locations`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:u,className:z.backLink}):null,j=A?(0,V.jsx)(ie,{direction:`row`,align:`center`,className:z.bodyHeader,children:A}):null;return(0,V.jsxs)(`div`,{className:z.content,children:[j,(0,V.jsx)(`div`,{className:z.stateArea,children:(0,V.jsx)(fe,{isLoading:oe,isFetching:h,isError:_,isEmpty:p.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:pe}]},empty:{icon:ae,description:n(`No location data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,V.jsxs)(`div`,{className:z.chartArea,children:[(0,V.jsx)(`div`,{className:z.leaderboardPanel,children:(0,V.jsx)(de,{data:k,withOverlayLabel:!0,withComparison:m,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:z.leaderboard})}),(0,V.jsx)(`div`,{className:z.geoChart,children:(0,V.jsx)(re,{data:O,resizeDebounceTime:100,region:C?x?.code??`world`:`world`,resolution:C?`provinces`:`countries`,onError:he})})]})})})]})}function B({attributes:e={}}){let t=e?.max??10,n=e?.geoGranularity??`country`;return(0,V.jsx)(p,{attributes:e,children:(0,V.jsxs)(`div`,{className:z.root,children:[(0,V.jsx)(we,{max:t,geoGranularity:n}),(0,V.jsx)(l,{children:(0,V.jsx)(d,{report:`locations`,section:n===`city`?`cities`:`countries`})})]})})}var V,Te,H,Ee=e((()=>{T(),oe(),o(),r(),m(),ye(),Se(),V=i(),Te=`Requested map does not exist`,H=new Set})),De,Oe=e((()=>{r(),c(),O(),De={icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`},{id:`geoGranularity`,label:n(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:he,elements:[{label:n(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:n(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{max:10,geoGranularity:`country`}}}})),ke,Ae,je,Me,Ne,Pe,Fe,Ie=e((()=>{ke=`jpa/locations`,Ae=`Top locations`,je=`Where your visitors are viewing from — by country, region, or city.`,Me={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Ne=`stats`,Pe=`framed`,Fe={name:ke,title:Ae,description:je,help:Me,category:Ne,presentation:Pe}}));function Le({withComparison:e,geoGranularity:t}){return{geoGranularity:t,max:10,reportParams:_(e)}}function U(e){return(0,G.jsx)(B,{attributes:Le(e)})}function W(e){return(0,G.jsx)(B,{attributes:{geoGranularity:`country`,max:10,reportParams:_(!1,e)}})}function Re(e){return(0,G.jsx)(B,{...e})}function ze({withComparison:e,geoGranularity:t,...n}){return(0,G.jsx)(S,{...n,widgetType:Ve,renderModule:Be,renderComponent:Re,attributes:Le({withComparison:e,geoGranularity:t})})}var G,Be,Ve,K,q,J,Y,X,Z,Q,$,He;e((()=>{v(),me(),pe(),b(),C(),f(),A(),j(),Ee(),Oe(),Ie(),G=i(),u(),k(),Be=`storybook/locations`,Ve=x(Fe,De),K={title:`Packages/Premium Analytics/Widgets/Locations`,component:B,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country or city, with country drill-down into regions, using the global dashboard date range. The Countries/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},q={render:U,args:{withComparison:!1,geoGranularity:`country`},decorators:[D,w]},J={render:U,args:{withComparison:!0,geoGranularity:`country`},decorators:[D,w]},Y={render:U,args:{withComparison:!1,geoGranularity:`city`},decorators:[D,w]},X={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[D,w],beforeEach:()=>(M(`stats/location-views`,`loading`),()=>M(`stats/location-views`,null))},Z={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[D,w],beforeEach:()=>(M(`stats/location-views`,`error`),()=>M(`stats/location-views`,null))},Q={render:()=>W(`last-365-days`),tags:[`!autodocs`],decorators:[D,w],beforeEach:()=>(M(`stats/location-views`,`empty`),()=>M(`stats/location-views`,null))},$={render:e=>(0,G.jsx)(ze,{...e}),args:{...E,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...y,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: false,
    geoGranularity: 'country'
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: true,
    geoGranularity: 'country'
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
}`,...$.parameters?.docs?.source}}},He=[`Default`,`WithComparison`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{Y as CitiesMode,q as Default,Q as Empty,Z as Error,X as Loading,$ as WidgetDashboardWithWidget,J as WithComparison,He as __namedExportsOrder,K as default};