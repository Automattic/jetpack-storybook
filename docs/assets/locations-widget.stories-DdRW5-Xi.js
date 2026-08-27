import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{_ as o,t as s}from"./build-module-CbwHEf9N.js";import{Qi as c,n as l}from"./build-module-CDRs4YxF.js";import{ln as ee,t as u}from"./src-DK-Pk1OQ.js";import{b as te,g as d,r as ne}from"./hooks-DUOrsHNJ.js";import{t as re}from"./geo-chart-DYrfsck6.js";import{t as ie}from"./types-BRp4aAtL.js";import{t as f,w as ae}from"./src-B64ifip5.js";import{J as p,qt as m,t as h}from"./src-B6uEpSpZ.js";import{n as g,t as _}from"./src-BDa7rUop.js";import"./constants-B1kGztHF.js";import{f as v,ft as oe,ht as se,p as y,pt as ce,q as le}from"./chart-tooltip-CGYcCFon.js";import{r as ue}from"./leaderboard-skeleton-ulRQ6g0H.js";import{E as de,K as b,P as fe,S as x,q as S,w as pe}from"./report-metric-BNr0NJxZ.js";import{t as me}from"./widget-state-CSopoMAz.js";import{C as he,D as ge,E as C,O as _e,S as ve,T as ye,b as be,k as w,t as xe,w as Se,x as T}from"./src-DEA7VHtw.js";import{n as Ce,t as we}from"./register-stats-mocks-BQ_8evxb.js";import{n as Te,t as E}from"./force-stats-mock-state-pbrEDrGY.js";var D,O,k,A,j,M,N,P,Ee,F,De=e((()=>{D=`_root_d6luj_1`,O=`_backLink_d6luj_9`,k=`_content_d6luj_17`,A=`_bodyHeader_d6luj_25`,j=`_stateArea_d6luj_32`,M=`_chartArea_d6luj_38`,N=`_leaderboardPanel_d6luj_48`,P=`_leaderboard_d6luj_48`,Ee=`_geoChart_d6luj_64`,F={root:D,backLink:O,content:k,bodyHeader:A,stateArea:j,chartArea:M,leaderboardPanel:N,leaderboard:P,geoChart:Ee}}));function Oe(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function ke({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{comparisonRows:i,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:l,refetch:ee}=p({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),u=(i?.rows??[]).map(Oe).filter(e=>e!==null);return{data:u,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:u.length===0&&l,refetch:ee}}var Ae=e((()=>{h()}));function je(e){return e.toUpperCase()===`TW`?`Taiwan`:e.toUpperCase()}function Me(e){let n=e.locations.slice(0,Fe),i=n.map(e=>`${e.label}: ${g(e.value)}`),a=e.locations.length-n.length;return a>0&&i.push(t(r(`…and %d more location`,`…and %d more locations`,a,`jetpack-premium-analytics-pkg`),a)),i.join(`<br />`)}function Ne({geoGranularity:e}){let{reportParams:r}=te(),[i,a]=(0,o.useState)(()=>new Set(R)),{drillDownItem:s,drillDown:c,resetDrillDown:l}=ne();(0,o.useEffect)(()=>{e!==`country`&&l()},[l,e]);let u=e===`country`?s:void 0,d=e===`country`&&u?`region`:e,{data:f,hasComparison:p,isLoading:m,isFetching:h,isError:g,refetch:_}=ke({reportParams:r,max:10,geoMode:d,countryFilter:u?.code}),v=u?.code.toUpperCase(),y=d===`region`&&!!v&&!i.has(v),b=d===`region`&&u&&!y?u:void 0,x=d===`city`||d===`region`&&!u,S=(0,o.useMemo)(()=>{let e=new Map;return x?(f.forEach(t=>{let n=t.countryCode.toUpperCase(),r=e.get(n);e.set(n,{countryFull:t.countryFull,value:(r?.value??0)+t.value,locations:[...r?.locations??[],t]})}),Array.from(e.entries())):[]},[f,x]),pe=(0,o.useCallback)(e=>{let t=`${e.message??``} ${e.detailedMessage??``}`,n=!!v&&y,r=!!v&&R.has(v);!n&&!r&&!t.includes(Pe)||(e.id&&typeof window<`u`&&window.google?.visualization?.errors?.removeError?.(e.id),n&&(R.add(v),a(e=>{if(e.has(v))return e;let t=new Set(e);return t.add(v),t})))},[v,y]),he=(0,o.useMemo)(()=>{let e=[n(y?`Location`:`Country`,`jetpack-premium-analytics-pkg`),n(`Views`,`jetpack-premium-analytics-pkg`)];if(b){let t=b.code.toUpperCase(),n=f.filter(e=>e.countryCode.toUpperCase()===t).reduce((e,t)=>e+t.value,0);return[e,[{v:je(t),f:b.name},n]]}if(x){let t=d===`region`;return[t?[...e,{type:`string`,role:ie.tooltip,p:{html:!0}}]:e,...S.map(([e,n])=>{let r=[{v:je(e),f:n.countryFull},n.value];return t?[...r,Me(n)]:r})]}return[e,...f.map(e=>[e.label,e.value])]},[S,f,b,d,x,y]),ge=(0,o.useMemo)(()=>{let e=ce(f.map(e=>e.value),p?f.map(e=>e.previousValue):[]);return f.map(r=>{let i=le(r.countryCode),a=r.previousValue,o=r.countryCode;return{id:r.key,...fe({label:r.label,media:{kind:`flag`,url:i??void 0,country:r.countryFull},action:d===`country`&&o?{kind:`drillDown`,onClick:()=>c({code:o,name:r.countryFull}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),r.countryFull)}:{kind:`static`}}),currentValue:r.value,previousValue:a,currentShare:oe(r.value,e),previousShare:p&&a!==void 0?oe(a,e):void 0,delta:p&&a!==void 0?se(r.value,a):void 0}})},[f,d,p,c]),C=u?(0,L.jsx)(de,{label:n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:l,className:F.backLink}):null,_e=C?(0,L.jsx)(ee,{direction:`row`,align:`center`,className:F.bodyHeader,children:C}):null;return(0,L.jsxs)(`div`,{className:F.content,children:[_e,(0,L.jsx)(`div`,{className:F.stateArea,children:(0,L.jsx)(me,{isLoading:m,isFetching:h,isError:g,isEmpty:f.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:_}]},empty:{icon:ae,description:n(`No location data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,L.jsxs)(`div`,{className:F.chartArea,children:[(0,L.jsx)(`div`,{className:F.leaderboardPanel,children:(0,L.jsx)(ue,{data:ge,withOverlayLabel:!0,withComparison:p,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:F.leaderboard})}),(0,L.jsx)(`div`,{className:F.geoChart,children:(0,L.jsx)(re,{data:he,resizeDebounceTime:100,region:y?u?.code??`world`:`world`,resolution:y?`provinces`:`countries`,onError:pe})})]})})})]})}function I({attributes:e={}}){let t=e?.geoGranularity??B,n=Object.prototype.hasOwnProperty.call(z,t)?t:B;return(0,L.jsx)(d,{attributes:e,children:(0,L.jsxs)(`div`,{className:F.root,children:[(0,L.jsx)(Ne,{geoGranularity:n}),(0,L.jsx)(pe,{children:(0,L.jsx)(x,{report:`locations`,section:z[n]})})]})})}var L,Pe,R,z,B,Fe,Ie=e((()=>{xe(),_(),f(),s(),i(),u(),De(),Ae(),L=a(),Pe=`Requested map does not exist`,R=new Set,z={country:`countries`,region:`regions`,city:`cities`},B=`country`,Fe=10})),Le,Re=e((()=>{i(),l(),v(),Le={icon:c,attributes:[{id:`geoGranularity`,label:n(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:y,elements:[{label:n(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:n(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:n(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),ze,Be,Ve,He,Ue,We,Ge,Ke=e((()=>{ze=`jpa/locations`,Be=`Top locations`,Ve=`Where your visitors are viewing from — by country, region, or city.`,He={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Ue=`stats`,We=`framed`,Ge={name:ze,title:Be,description:Ve,help:He,category:Ue,presentation:We}}));function qe({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:m(e)}}function V(e){return(0,U.jsx)(I,{attributes:qe(e)})}function H(e){return(0,U.jsx)(I,{attributes:{geoGranularity:`country`,reportParams:m(!1,e)}})}function Je(e){return(0,U.jsx)(I,{...e})}function Ye({withComparison:e,geoGranularity:t,...n}){return(0,U.jsx)(ye,{...n,widgetType:W,renderModule:Xe,renderComponent:Je,attributes:qe({withComparison:e,geoGranularity:t})})}var U,Xe,W,Ze,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),C(),he(),_e(),be(),b(),we(),Te(),Ie(),Re(),Ke(),U=a(),S(),Ce(),Xe=`storybook/locations`,W=ve(Ge,Le),Ze={title:`Packages/Premium Analytics/Widgets/Locations`,component:I,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with country drill-down into regions, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:V,args:{withComparison:!1,geoGranularity:`country`},decorators:[T,w]},K={render:V,args:{withComparison:!0,geoGranularity:`country`},decorators:[T,w]},q={render:V,args:{withComparison:!1,geoGranularity:`region`},decorators:[T,w]},J={render:V,args:{withComparison:!1,geoGranularity:`city`},decorators:[T,w]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/location-views`,`loading`),()=>E(`stats/location-views`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/location-views`,`error`),()=>E(`stats/location-views`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/location-views`,`empty`),()=>E(`stats/location-views`,null))},Q={render:e=>(0,U.jsx)(Ye,{...e}),args:{...Se,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...ge,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`RegionsMode`,`CitiesMode`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as CitiesMode,G as Default,Z as Empty,X as Error,Y as Loading,q as RegionsMode,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,Ze as default};