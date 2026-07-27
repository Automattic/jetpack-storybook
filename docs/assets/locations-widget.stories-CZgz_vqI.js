import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{Ot as s,n as c}from"./build-module-DmVuor49.js";import{r as l}from"./hooks-C_PgYsvU.js";import{t as ee}from"./geo-chart-DyjLNQJh.js";import{R as u,t as d}from"./build-module-iNgY12ZR.js";import{S as te,t as f}from"./src-B3le4dug.js";import{E as ne,G as p,J as re,K as ie,ln as m,ur as h,xt as g}from"./chart-tooltip-BS0AHuyV.js";import{t as ae}from"./leaderboard-chart-CbpVeilC.js";import{I as _,L as v,O as oe,U as se,q as ce,w as le}from"./report-metric-CypFTt88.js";import{t as ue}from"./widget-state-DnMIufY4.js";import{C as de,D as y,E as fe,S as b,T as pe,b as x,t as S,w as C,x as w}from"./src-DxVm3OnV.js";import{n as T,t as E}from"./src-4y6VNgNE.js";import{n as D,t as O}from"./register-stats-mocks-Cz0eqO3K.js";import{n as me,t as k}from"./force-stats-mock-state-Cf3ymO9f.js";var A,j,M,he,N,P,F,I,L,R,ge=e((()=>{A=`_root_erick_1`,j=`_backLink_erick_9`,M=`_content_erick_17`,he=`_bodyHeader_erick_25`,N=`_stateArea_erick_32`,P=`_chartArea_erick_38`,F=`_leaderboardPanel_erick_48`,I=`_leaderboard_erick_48`,L=`_geoChart_erick_64`,R={root:A,backLink:j,content:M,bodyHeader:he,stateArea:N,chartArea:P,leaderboardPanel:F,leaderboard:I,geoChart:L}}));function _e(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function ve({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{primary:i,comparison:a,comparisonRows:o,hasComparison:s,isLoading:c,isFetching:l,hasData:ee,isError:u,refetch:d}=m({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),te=i.isPlaceholderData||a.isPlaceholderData,f=(o?.rows??[]).map(_e).filter(e=>e!==null);return{data:f,hasComparison:s,isLoading:c,isFetching:l,hasData:ee,isError:f.length===0&&u,isPlaceholderData:te,refetch:d}}var ye=e((()=>{g()}));function z(e){return e.toUpperCase()===`TW`?`Taiwan`:e.toUpperCase()}function be({max:e,geoGranularity:r}){let{reportParams:i}=ce(),[o,s]=(0,a.useState)(()=>new Set(U)),{drillDownItem:c,drillDown:d,resetDrillDown:f}=l();(0,a.useEffect)(()=>{r===`city`&&f()},[f,r]);let m=r===`country`?c:void 0,h=r===`country`&&m?`region`:r,{data:g,hasComparison:_,isLoading:v,isFetching:se,isError:de,isPlaceholderData:y,refetch:fe}=ve({reportParams:i,max:e,geoMode:h,countryFilter:h===`region`?m?.code:void 0}),[b,pe]=(0,a.useState)({geoMode:h,selectedCountry:m});(0,a.useEffect)(()=>{y||pe({geoMode:h,selectedCountry:m})},[m,h,y]);let x=y?b.geoMode:h,S=y?b.selectedCountry:m,C=S?.code.toUpperCase(),w=x===`region`&&!!C&&!o.has(C),T=x===`region`&&!!S&&!w,E=T?S:void 0,D=x===`city`,O=(0,a.useMemo)(()=>{let e=new Map;return D?(g.forEach(t=>{let n=t.countryCode.toUpperCase(),r=e.get(n);e.set(n,{countryFull:t.countryFull,value:(r?.value??0)+t.value})}),Array.from(e.entries())):[]},[g,D]),me=(0,a.useCallback)(e=>{let t=`${e.message??``} ${e.detailedMessage??``}`,n=!!C&&w,r=!!C&&U.has(C);!n&&!r&&!t.includes(H)||(e.id&&typeof window<`u`&&window.google?.visualization?.errors?.removeError?.(e.id),n&&(U.add(C),s(e=>{if(e.has(C))return e;let t=new Set(e);return t.add(C),t})))},[C,w]),k=(0,a.useMemo)(()=>{let e=[n(x===`region`&&!T?`Location`:`Country`,`jetpack-premium-analytics`),n(`Views`,`jetpack-premium-analytics`)];if(E){let t=E.code.toUpperCase(),n=g.filter(e=>e.countryCode.toUpperCase()===t).reduce((e,t)=>e+t.value,0);return[e,[{v:z(t),f:E.name},n]]}return D?[e,...O.map(([e,t])=>[{v:z(e),f:t.countryFull},t.value])]:[e,...g.map(e=>[e.label,e.value])]},[O,g,E,x,D,T]),A=(0,a.useMemo)(()=>{let e=ie(g.map(e=>e.value),_?g.map(e=>e.previousValue):[]);return g.map(r=>{let i=ne(r.countryCode),a=r.previousValue,o=r.countryCode;return{id:r.key,...oe({label:r.label,media:{kind:`flag`,url:i??void 0,country:r.countryFull},action:x===`country`&&o?{kind:`drillDown`,onClick:()=>d({code:o,name:r.countryFull}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics`),r.countryFull)}:{kind:`static`}}),currentValue:r.value,previousValue:a,currentShare:p(r.value,e),previousShare:_&&a!==void 0?p(a,e):void 0,delta:_&&a!==void 0?re(r.value,a):void 0}})},[g,x,_,d]),j=S?(0,V.jsx)(le,{label:n(`All Locations`,`jetpack-premium-analytics`),ariaLabel:n(`View all locations`,`jetpack-premium-analytics`),onClick:f,className:R.backLink}):null,M=j?(0,V.jsx)(u,{direction:`row`,align:`center`,className:R.bodyHeader,children:j}):null;return(0,V.jsxs)(`div`,{className:R.content,children:[M,(0,V.jsx)(`div`,{className:R.stateArea,children:(0,V.jsx)(ue,{isLoading:v,isFetching:se,isError:de,isEmpty:g.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:fe}]},empty:{icon:te,description:n(`No location data in this period.`,`jetpack-premium-analytics`)},children:(0,V.jsxs)(`div`,{className:R.chartArea,children:[(0,V.jsx)(`div`,{className:R.leaderboardPanel,children:(0,V.jsx)(ae,{data:A,withOverlayLabel:!0,withComparison:_,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:R.leaderboard})}),(0,V.jsx)(`div`,{className:R.geoChart,children:(0,V.jsx)(ee,{data:k,resizeDebounceTime:100,region:w?S?.code??`world`:`world`,resolution:w?`provinces`:`countries`,onError:me})})]})})})]})}function B({attributes:e={}}){let t=e?.max??10,n=e?.geoGranularity??`country`;return(0,V.jsx)(se,{attributes:e,children:(0,V.jsx)(`div`,{className:R.root,children:(0,V.jsx)(be,{max:t,geoGranularity:n})})})}var V,H,U,xe=e((()=>{S(),f(),o(),r(),d(),ge(),ye(),V=i(),H=`Requested map does not exist`,U=new Set})),Se,Ce=e((()=>{r(),c(),E(),Se={icon:s,attributes:[{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics`),type:`integer`},{id:`geoGranularity`,label:n(`View by`,`jetpack-premium-analytics`),type:`text`,Edit:T,elements:[{label:n(`Countries`,`jetpack-premium-analytics`),value:`country`},{label:n(`Cities`,`jetpack-premium-analytics`),value:`city`}],relevance:`high`}],example:{attributes:{max:10,geoGranularity:`country`}}}})),we,Te,Ee,De,Oe,ke,Ae,je=e((()=>{we=`jpa/locations`,Te=`Locations`,Ee=`Where your visitors are viewing from — by country, region, or city.`,De={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Oe=`stats`,ke=`framed`,Ae={name:we,title:Te,description:Ee,help:De,category:Oe,presentation:ke}}));function Me({withComparison:e,geoGranularity:t}){return{geoGranularity:t,max:10,reportParams:h(e)}}function W(e){return(0,K.jsx)(B,{attributes:Me(e)})}function G(e){return(0,K.jsx)(B,{attributes:{geoGranularity:`country`,max:10,reportParams:h(!1,e)}})}function Ne(e){return(0,K.jsx)(B,{...e})}function Pe({withComparison:e,geoGranularity:t,...n}){return(0,K.jsx)(pe,{...n,widgetType:Ie,renderModule:Fe,renderComponent:Ne,attributes:Me({withComparison:e,geoGranularity:t})})}var K,Fe,Ie,Le,q,J,Y,X,Z,Q,$,Re;e((()=>{g(),fe(),de(),x(),_(),O(),me(),xe(),Ce(),je(),K=i(),v(),D(),Fe=`storybook/locations`,Ie=b(Ae,Se),Le={title:`Packages/Premium Analytics/Widgets/Locations`,component:B,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country or city, with country drill-down into regions, using the global dashboard date range. The Countries/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},q={render:W,args:{withComparison:!1,geoGranularity:`country`},decorators:[w]},J={render:W,args:{withComparison:!0,geoGranularity:`country`},decorators:[w]},Y={render:W,args:{withComparison:!1,geoGranularity:`city`},decorators:[w]},X={render:()=>G(`last-90-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(k(`stats/location-views`,`loading`),()=>k(`stats/location-views`,null))},Z={render:()=>G(`last-7-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(k(`stats/location-views`,`error`),()=>k(`stats/location-views`,null))},Q={render:()=>G(`last-365-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(k(`stats/location-views`,`empty`),()=>k(`stats/location-views`,null))},$={render:e=>(0,K.jsx)(Pe,{...e}),args:{...C,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...y,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Re=[`Default`,`WithComparison`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{Y as CitiesMode,q as Default,Q as Empty,Z as Error,X as Loading,$ as WidgetDashboardWithWidget,J as WithComparison,Re as __namedExportsOrder,Le as default};