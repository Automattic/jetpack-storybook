import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,t as r}from"./build-module-DyKOxfM8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{_ as a,t as o}from"./build-module-CbwHEf9N.js";import{Qi as s,n as c}from"./build-module-CDRs4YxF.js";import{lr as ee,t as l}from"./src-DPTIMDrz.js";import{E as u,J as d,O as f,P as p,Y as m,nt as h,ot as te,w as g}from"./report-metric-aApf3fEZ.js";import{t as ne}from"./geo-chart-ChY-rxrv.js";import{S as re,t as ie}from"./src-Cvyt29m2.js";import{r as ae}from"./hooks-DG3CMPyT.js";import{$ as oe,Dt as _,P as se,_r as v,et as ce,hn as y,nt as le}from"./chart-tooltip-2PM2X2w-.js";import{t as ue}from"./leaderboard-chart-CPcgf3MO.js";import{t as de}from"./widget-state-BY9OAfMP.js";import{C as fe,D as b,E as pe,O as x,S,T as C,b as w,k as T,t as E,w as D,x as O}from"./src-ZkTwF5EY.js";import{n as me,t as he}from"./src-DgGJMYYg.js";import{n as ge,t as k}from"./register-stats-mocks-JVzBtYfR.js";import{n as A,t as j}from"./force-stats-mock-state-RsZ9as56.js";var M,N,P,F,I,L,R,_e,ve,z,ye=e((()=>{M=`_root_erick_1`,N=`_backLink_erick_9`,P=`_content_erick_17`,F=`_bodyHeader_erick_25`,I=`_stateArea_erick_32`,L=`_chartArea_erick_38`,R=`_leaderboardPanel_erick_48`,_e=`_leaderboard_erick_48`,ve=`_geoChart_erick_64`,z={root:M,backLink:N,content:P,bodyHeader:F,stateArea:I,chartArea:L,leaderboardPanel:R,leaderboard:_e,geoChart:ve}}));function be(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function xe({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{primary:i,comparison:a,comparisonRows:o,hasComparison:s,isLoading:c,isFetching:ee,hasData:l,isError:u,refetch:d}=y({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),f=i.isPlaceholderData||a.isPlaceholderData,p=(o?.rows??[]).map(be).filter(e=>e!==null);return{data:p,hasComparison:s,isLoading:c,isFetching:ee,hasData:l,isError:p.length===0&&u,isPlaceholderData:f,refetch:d}}var Se=e((()=>{_()}));function Ce(e){return e.toUpperCase()===`TW`?`Taiwan`:e.toUpperCase()}function we({max:e,geoGranularity:r}){let{reportParams:i}=te(),[o,s]=(0,a.useState)(()=>new Set(H)),{drillDownItem:c,drillDown:l,resetDrillDown:u}=ae();(0,a.useEffect)(()=>{r===`city`&&u()},[u,r]);let d=r===`country`?c:void 0,m=r===`country`&&d?`region`:r,{data:h,hasComparison:g,isLoading:ie,isFetching:_,isError:v,isPlaceholderData:y,refetch:fe}=xe({reportParams:i,max:e,geoMode:m,countryFilter:m===`region`?d?.code:void 0}),[b,pe]=(0,a.useState)({geoMode:m,selectedCountry:d});(0,a.useEffect)(()=>{y||pe({geoMode:m,selectedCountry:d})},[d,m,y]);let x=y?b.geoMode:m,S=y?b.selectedCountry:d,C=S?.code.toUpperCase(),w=x===`region`&&!!C&&!o.has(C),T=x===`region`&&!!S&&!w,E=T?S:void 0,D=x===`city`,O=(0,a.useMemo)(()=>{let e=new Map;return D?(h.forEach(t=>{let n=t.countryCode.toUpperCase(),r=e.get(n);e.set(n,{countryFull:t.countryFull,value:(r?.value??0)+t.value})}),Array.from(e.entries())):[]},[h,D]),me=(0,a.useCallback)(e=>{let t=`${e.message??``} ${e.detailedMessage??``}`,n=!!C&&w,r=!!C&&H.has(C);!n&&!r&&!t.includes(Te)||(e.id&&typeof window<`u`&&window.google?.visualization?.errors?.removeError?.(e.id),n&&(H.add(C),s(e=>{if(e.has(C))return e;let t=new Set(e);return t.add(C),t})))},[C,w]),he=(0,a.useMemo)(()=>{let e=[n(x===`region`&&!T?`Location`:`Country`,`jetpack-premium-analytics-pkg`),n(`Views`,`jetpack-premium-analytics-pkg`)];if(E){let t=E.code.toUpperCase(),n=h.filter(e=>e.countryCode.toUpperCase()===t).reduce((e,t)=>e+t.value,0);return[e,[{v:Ce(t),f:E.name},n]]}return D?[e,...O.map(([e,t])=>[{v:Ce(e),f:t.countryFull},t.value])]:[e,...h.map(e=>[e.label,e.value])]},[O,h,E,x,D,T]),ge=(0,a.useMemo)(()=>{let e=ce(h.map(e=>e.value),g?h.map(e=>e.previousValue):[]);return h.map(r=>{let i=se(r.countryCode),a=r.previousValue,o=r.countryCode;return{id:r.key,...p({label:r.label,media:{kind:`flag`,url:i??void 0,country:r.countryFull},action:x===`country`&&o?{kind:`drillDown`,onClick:()=>l({code:o,name:r.countryFull}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),r.countryFull)}:{kind:`static`}}),currentValue:r.value,previousValue:a,currentShare:oe(r.value,e),previousShare:g&&a!==void 0?oe(a,e):void 0,delta:g&&a!==void 0?le(r.value,a):void 0}})},[h,x,g,l]),k=S?(0,V.jsx)(f,{label:n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:u,className:z.backLink}):null,A=k?(0,V.jsx)(ee,{direction:`row`,align:`center`,className:z.bodyHeader,children:k}):null;return(0,V.jsxs)(`div`,{className:z.content,children:[A,(0,V.jsx)(`div`,{className:z.stateArea,children:(0,V.jsx)(de,{isLoading:ie,isFetching:_,isError:v,isEmpty:h.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:fe}]},empty:{icon:re,description:n(`No location data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,V.jsxs)(`div`,{className:z.chartArea,children:[(0,V.jsx)(`div`,{className:z.leaderboardPanel,children:(0,V.jsx)(ue,{data:ge,withOverlayLabel:!0,withComparison:g,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:z.leaderboard})}),(0,V.jsx)(`div`,{className:z.geoChart,children:(0,V.jsx)(ne,{data:he,resizeDebounceTime:100,region:w?S?.code??`world`:`world`,resolution:w?`provinces`:`countries`,onError:me})})]})})})]})}function B({attributes:e={}}){let t=e?.max??10,n=e?.geoGranularity??`country`;return(0,V.jsx)(h,{attributes:e,children:(0,V.jsxs)(`div`,{className:z.root,children:[(0,V.jsx)(we,{max:t,geoGranularity:n}),(0,V.jsx)(u,{children:(0,V.jsx)(g,{report:`locations`,section:n===`city`?`cities`:`countries`})})]})})}var V,Te,H,Ee=e((()=>{E(),ie(),o(),r(),l(),ye(),Se(),V=i(),Te=`Requested map does not exist`,H=new Set})),De,Oe=e((()=>{r(),c(),he(),De={icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`},{id:`geoGranularity`,label:n(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:me,elements:[{label:n(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:n(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{max:10,geoGranularity:`country`}}}})),ke,Ae,je,Me,Ne,Pe,Fe,Ie=e((()=>{ke=`jpa/locations`,Ae=`Top locations`,je=`Where your visitors are viewing from — by country, region, or city.`,Me={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Ne=`stats`,Pe=`framed`,Fe={name:ke,title:Ae,description:je,help:Me,category:Ne,presentation:Pe}}));function Le({withComparison:e,geoGranularity:t}){return{geoGranularity:t,max:10,reportParams:v(e)}}function U(e){return(0,G.jsx)(B,{attributes:Le(e)})}function W(e){return(0,G.jsx)(B,{attributes:{geoGranularity:`country`,max:10,reportParams:v(!1,e)}})}function Re(e){return(0,G.jsx)(B,{...e})}function ze({withComparison:e,geoGranularity:t,...n}){return(0,G.jsx)(C,{...n,widgetType:Ve,renderModule:Be,renderComponent:Re,attributes:Le({withComparison:e,geoGranularity:t})})}var G,Be,Ve,K,q,J,Y,X,Z,Q,$,He;e((()=>{_(),pe(),fe(),x(),w(),d(),k(),A(),Ee(),Oe(),Ie(),G=i(),m(),ge(),Be=`storybook/locations`,Ve=S(Fe,De),K={title:`Packages/Premium Analytics/Widgets/Locations`,component:B,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country or city, with country drill-down into regions, using the global dashboard date range. The Countries/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},q={render:U,args:{withComparison:!1,geoGranularity:`country`},decorators:[O,T]},J={render:U,args:{withComparison:!0,geoGranularity:`country`},decorators:[O,T]},Y={render:U,args:{withComparison:!1,geoGranularity:`city`},decorators:[O,T]},X={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[O,T],beforeEach:()=>(j(`stats/location-views`,`loading`),()=>j(`stats/location-views`,null))},Z={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[O,T],beforeEach:()=>(j(`stats/location-views`,`error`),()=>j(`stats/location-views`,null))},Q={render:()=>W(`last-365-days`),tags:[`!autodocs`],decorators:[O,T],beforeEach:()=>(j(`stats/location-views`,`empty`),()=>j(`stats/location-views`,null))},$={render:e=>(0,G.jsx)(ze,{...e}),args:{...D,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...b,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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