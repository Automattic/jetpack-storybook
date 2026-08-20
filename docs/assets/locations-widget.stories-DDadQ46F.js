import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,t as r}from"./build-module-DyKOxfM8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{_ as a,t as o}from"./build-module-CbwHEf9N.js";import{Qi as s,n as c}from"./build-module-CDRs4YxF.js";import{ln as l,t as u}from"./src-C9hFneLT.js";import{$ as d,E as ee,G as f,K as p,M as te,S as m,rt as ne,w as h}from"./report-metric-DRvIAU-G.js";import{t as re}from"./geo-chart-DbInNXAr.js";import{t as g,w as ie}from"./src-BKLK-O8P.js";import{Gt as _,U as ae,t as v}from"./src-DxSjl9JX.js";import{r as oe}from"./hooks-DTfOgoPJ.js";import"./constants-B1kGztHF.js";import{R as se,c as y,it as ce,l as b,ot as le,rt as ue}from"./chart-tooltip-BtYilAkZ.js";import{r as de}from"./leaderboard-skeleton-BKkv_vbO.js";import{t as fe}from"./widget-state-Dn-2njGy.js";import{C as x,D as S,E as pe,O as me,S as he,T as C,b as ge,k as w,t as _e,w as ve,x as T}from"./src-N4TJtXmk.js";import{n as ye,t as be}from"./register-stats-mocks-DJjDRorO.js";import{n as xe,t as E}from"./force-stats-mock-state-DLWoi86d.js";var D,O,k,A,j,M,N,P,F,I,Se=e((()=>{D=`_root_erick_1`,O=`_backLink_erick_9`,k=`_content_erick_17`,A=`_bodyHeader_erick_25`,j=`_stateArea_erick_32`,M=`_chartArea_erick_38`,N=`_leaderboardPanel_erick_48`,P=`_leaderboard_erick_48`,F=`_geoChart_erick_64`,I={root:D,backLink:O,content:k,bodyHeader:A,stateArea:j,chartArea:M,leaderboardPanel:N,leaderboard:P,geoChart:F}}));function Ce(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function we({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{comparisonRows:i,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:l,refetch:u}=ae({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),d=(i?.rows??[]).map(Ce).filter(e=>e!==null);return{data:d,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:d.length===0&&l,refetch:u}}var Te=e((()=>{v()}));function Ee(e){return e.toUpperCase()===`TW`?`Taiwan`:e.toUpperCase()}function De({geoGranularity:e}){let{reportParams:r}=ne(),[i,o]=(0,a.useState)(()=>new Set(z)),{drillDownItem:s,drillDown:c,resetDrillDown:u}=oe();(0,a.useEffect)(()=>{e!==`country`&&u()},[u,e]);let d=e===`country`?s:void 0,f=e===`country`&&d?`region`:e,{data:p,hasComparison:m,isLoading:h,isFetching:g,isError:_,refetch:ae}=we({reportParams:r,max:10,geoMode:f,countryFilter:d?.code}),v=d?.code.toUpperCase(),y=f===`region`&&!!v&&!i.has(v),b=f===`region`&&d&&!y?d:void 0,x=f===`city`||f===`region`&&!d,S=(0,a.useMemo)(()=>{let e=new Map;return x?(p.forEach(t=>{let n=t.countryCode.toUpperCase(),r=e.get(n);e.set(n,{countryFull:t.countryFull,value:(r?.value??0)+t.value})}),Array.from(e.entries())):[]},[p,x]),pe=(0,a.useCallback)(e=>{let t=`${e.message??``} ${e.detailedMessage??``}`,n=!!v&&y,r=!!v&&z.has(v);!n&&!r&&!t.includes(Oe)||(e.id&&typeof window<`u`&&window.google?.visualization?.errors?.removeError?.(e.id),n&&(z.add(v),o(e=>{if(e.has(v))return e;let t=new Set(e);return t.add(v),t})))},[v,y]),me=(0,a.useMemo)(()=>{let e=[n(y?`Location`:`Country`,`jetpack-premium-analytics-pkg`),n(`Views`,`jetpack-premium-analytics-pkg`)];if(b){let t=b.code.toUpperCase(),n=p.filter(e=>e.countryCode.toUpperCase()===t).reduce((e,t)=>e+t.value,0);return[e,[{v:Ee(t),f:b.name},n]]}return x?[e,...S.map(([e,t])=>[{v:Ee(e),f:t.countryFull},t.value])]:[e,...p.map(e=>[e.label,e.value])]},[S,p,b,x,y]),he=(0,a.useMemo)(()=>{let e=ce(p.map(e=>e.value),m?p.map(e=>e.previousValue):[]);return p.map(r=>{let i=se(r.countryCode),a=r.previousValue,o=r.countryCode;return{id:r.key,...te({label:r.label,media:{kind:`flag`,url:i??void 0,country:r.countryFull},action:f===`country`&&o?{kind:`drillDown`,onClick:()=>c({code:o,name:r.countryFull}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),r.countryFull)}:{kind:`static`}}),currentValue:r.value,previousValue:a,currentShare:ue(r.value,e),previousShare:m&&a!==void 0?ue(a,e):void 0,delta:m&&a!==void 0?le(r.value,a):void 0}})},[p,f,m,c]),C=d?(0,R.jsx)(ee,{label:n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:u,className:I.backLink}):null,ge=C?(0,R.jsx)(l,{direction:`row`,align:`center`,className:I.bodyHeader,children:C}):null;return(0,R.jsxs)(`div`,{className:I.content,children:[ge,(0,R.jsx)(`div`,{className:I.stateArea,children:(0,R.jsx)(fe,{isLoading:h,isFetching:g,isError:_,isEmpty:p.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:ae}]},empty:{icon:ie,description:n(`No location data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,R.jsxs)(`div`,{className:I.chartArea,children:[(0,R.jsx)(`div`,{className:I.leaderboardPanel,children:(0,R.jsx)(de,{data:he,withOverlayLabel:!0,withComparison:m,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:I.leaderboard})}),(0,R.jsx)(`div`,{className:I.geoChart,children:(0,R.jsx)(re,{data:me,resizeDebounceTime:100,region:y?d?.code??`world`:`world`,resolution:y?`provinces`:`countries`,onError:pe})})]})})})]})}function L({attributes:e={}}){let t=e?.geoGranularity??V,n=Object.prototype.hasOwnProperty.call(B,t)?t:V;return(0,R.jsx)(d,{attributes:e,children:(0,R.jsxs)(`div`,{className:I.root,children:[(0,R.jsx)(De,{geoGranularity:n}),(0,R.jsx)(h,{children:(0,R.jsx)(m,{report:`locations`,section:B[n]})})]})})}var R,Oe,z,B,V,ke=e((()=>{_e(),g(),o(),r(),u(),Se(),Te(),R=i(),Oe=`Requested map does not exist`,z=new Set,B={country:`countries`,region:`regions`,city:`cities`},V=`country`})),Ae,je=e((()=>{r(),c(),y(),Ae={icon:s,attributes:[{id:`geoGranularity`,label:n(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:b,elements:[{label:n(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:n(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:n(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),Me,Ne,Pe,Fe,Ie,Le,Re,ze=e((()=>{Me=`jpa/locations`,Ne=`Top locations`,Pe=`Where your visitors are viewing from — by country, region, or city.`,Fe={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Ie=`stats`,Le=`framed`,Re={name:Me,title:Ne,description:Pe,help:Fe,category:Ie,presentation:Le}}));function Be({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:_(e)}}function H(e){return(0,W.jsx)(L,{attributes:Be(e)})}function U(e){return(0,W.jsx)(L,{attributes:{geoGranularity:`country`,reportParams:_(!1,e)}})}function Ve(e){return(0,W.jsx)(L,{...e})}function He({withComparison:e,geoGranularity:t,...n}){return(0,W.jsx)(C,{...n,widgetType:We,renderModule:Ue,renderComponent:Ve,attributes:Be({withComparison:e,geoGranularity:t})})}var W,Ue,We,Ge,G,K,q,J,Y,X,Z,Q,$;e((()=>{v(),pe(),x(),me(),ge(),f(),be(),xe(),ke(),je(),ze(),W=i(),p(),ye(),Ue=`storybook/locations`,We=he(Re,Ae),Ge={title:`Packages/Premium Analytics/Widgets/Locations`,component:L,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with country drill-down into regions, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:H,args:{withComparison:!1,geoGranularity:`country`},decorators:[T,w]},K={render:H,args:{withComparison:!0,geoGranularity:`country`},decorators:[T,w]},q={render:H,args:{withComparison:!1,geoGranularity:`region`},decorators:[T,w]},J={render:H,args:{withComparison:!1,geoGranularity:`city`},decorators:[T,w]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/location-views`,`loading`),()=>E(`stats/location-views`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/location-views`,`error`),()=>E(`stats/location-views`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/location-views`,`empty`),()=>E(`stats/location-views`,null))},Q={render:e=>(0,W.jsx)(He,{...e}),args:{...ve,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...S,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: false,
    geoGranularity: 'country'
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: true,
    geoGranularity: 'country'
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderLocationsWidget,
  args: {
    withComparison: false,
    geoGranularity: 'region'
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
      options: ['country', 'region', 'city'],
      description: 'The "View by" toolbar attribute rendered by the widget host.'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as CitiesMode,G as Default,Z as Empty,X as Error,Y as Loading,q as RegionsMode,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,Ge as default};