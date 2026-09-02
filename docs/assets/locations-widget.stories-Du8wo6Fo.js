import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{h as o,t as s}from"./build-module-DuNGIx6S.js";import{Zi as c,t as l}from"./build-module-CR6EsQjA.js";import{pn as ee,t as u}from"./src-A2Mxa-_a.js";import{b as te,g as d,r as ne}from"./hooks-3fsig7pC.js";import{t as re}from"./geo-chart-BxnygYez.js";import{t as ie}from"./types-BRp4aAtL.js";import{t as f,w as ae}from"./src-CldFJNXL.js";import{n as p,t as oe}from"./src-D9N0yzPf.js";import{Q as se,Zt as m,t as h}from"./src-Cy1y5d9o.js";import"./constants-B1kGztHF.js";import{J as ce,f as g,gt as le,mt as ue,p as _,pt as de}from"./chart-tooltip-DcSTPqrd.js";import{r as fe}from"./leaderboard-skeleton-BKm7c8Q6.js";import{G as v,K as y,N as pe,S as b,b as me,w as he}from"./report-metric-DEghQ1d5.js";import{t as ge}from"./widget-state-CkTJshCh.js";import{C as _e,D as ve,E as x,O as ye,S as be,T as xe,b as Se,k as S,t as Ce,w as we,x as C}from"./src-Vp2H0mY7.js";import{n as Te,t as Ee}from"./register-stats-mocks-DC1hdg-3.js";import{n as De,t as w}from"./force-stats-mock-state-BVRZOBQx.js";var T,E,D,O,k,A,j,M,N,P,Oe=e((()=>{T=`_root_mw6wj_1`,E=`_backLink_mw6wj_9`,D=`_content_mw6wj_17`,O=`_bodyHeader_mw6wj_24`,k=`_stateArea_mw6wj_31`,A=`_chartArea_mw6wj_36`,j=`_leaderboardPanel_mw6wj_46`,M=`_leaderboard_mw6wj_46`,N=`_geoChart_mw6wj_62`,P={root:T,backLink:E,content:D,bodyHeader:O,stateArea:k,chartArea:A,leaderboardPanel:j,leaderboard:M,geoChart:N}}));function ke(e){if(!e.countryCode)return null;let t=typeof e.label==`string`?e.label:String(e.label),n=e.countryFull??e.countryCode;return{key:`${e.countryCode}:${t}`,label:t,countryCode:e.countryCode,countryFull:n,value:e.views,previousValue:e.previousViews,region:e.region??``}}function Ae({reportParams:e,max:t,geoMode:n=`country`,countryFilter:r}){let{comparisonRows:i,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:l,refetch:ee}=se({...e,geoMode:n,max:t,...r?{filter_by_country:r}:{}},{maxRows:t}),u=(i?.rows??[]).map(ke).filter(e=>e!==null);return{data:u,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:u.length===0&&l,refetch:ee}}var je=e((()=>{h()}));function F(e){return e.toUpperCase()===`TW`?`Taiwan`:e.toUpperCase()}function Me(e){let n=e.locations.slice(0,Fe),i=n.map(e=>`${e.label}: ${p(e.value)}`),a=e.locations.length-n.length;return a>0&&i.push(t(r(`…and %d more location`,`…and %d more locations`,a,`jetpack-premium-analytics-pkg`),a)),i.join(`<br />`)}function Ne({geoGranularity:e}){let{reportParams:r}=te(),[i,a]=(0,o.useState)(()=>new Set(R)),{drillDownItem:s,drillDown:c,resetDrillDown:l}=ne();(0,o.useEffect)(()=>{e!==`country`&&l()},[l,e]);let u=e===`country`?s:void 0,d=e===`country`&&u?`region`:e,{data:f,hasComparison:p,isLoading:oe,isFetching:se,isError:m,refetch:h}=Ae({reportParams:r,max:10,geoMode:d,countryFilter:u?.code}),g=u?.code.toUpperCase(),_=d===`region`&&!!g&&!i.has(g),v=d===`region`&&u&&!_?u:void 0,y=d===`city`||d===`region`&&!u,b=(0,o.useMemo)(()=>{let e=new Map;return y?(f.forEach(t=>{let n=t.countryCode.toUpperCase(),r=e.get(n);e.set(n,{countryFull:t.countryFull,value:(r?.value??0)+t.value,locations:[...r?.locations??[],t]})}),Array.from(e.entries())):[]},[f,y]),me=(0,o.useCallback)(e=>{let t=`${e.message??``} ${e.detailedMessage??``}`,n=!!g&&_,r=!!g&&R.has(g);!n&&!r&&!t.includes(Pe)||(e.id&&typeof window<`u`&&window.google?.visualization?.errors?.removeError?.(e.id),n&&(R.add(g),a(e=>{if(e.has(g))return e;let t=new Set(e);return t.add(g),t})))},[g,_]),_e=(0,o.useMemo)(()=>{let e=[n(_?`Location`:`Country`,`jetpack-premium-analytics-pkg`),n(`Views`,`jetpack-premium-analytics-pkg`)];if(v){let t=v.code.toUpperCase(),n=f.filter(e=>e.countryCode.toUpperCase()===t).reduce((e,t)=>e+t.value,0);return[e,[{v:F(t),f:v.name},n]]}if(y){let t=d===`region`;return[t?[...e,{type:`string`,role:ie.tooltip,p:{html:!0}}]:e,...b.map(([e,n])=>{let r=[{v:F(e),f:n.countryFull},n.value];return t?[...r,Me(n)]:r})]}return[e,...f.map(e=>[e.label,e.value])]},[b,f,v,d,y,_]),ve=(0,o.useMemo)(()=>{let e=ue(f.map(e=>e.value),p?f.map(e=>e.previousValue):[]);return f.map(r=>{let i=ce(r.countryCode),a=r.previousValue,o=r.countryCode;return{id:r.key,...pe({label:r.label,media:{kind:`flag`,url:i??void 0,country:r.countryFull},action:d===`country`&&o?{kind:`drillDown`,onClick:()=>c({code:o,name:r.countryFull}),ariaLabel:t(n(`View regions in %s`,`jetpack-premium-analytics-pkg`),r.countryFull)}:{kind:`static`}}),currentValue:r.value,previousValue:a,currentShare:de(r.value,e),previousShare:p&&a!==void 0?de(a,e):void 0,delta:p&&a!==void 0?le(r.value,a):void 0}})},[f,d,p,c]),x=u?(0,L.jsx)(he,{label:n(`All locations`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all locations`,`jetpack-premium-analytics-pkg`),onClick:l,className:P.backLink}):null,ye=x?(0,L.jsx)(ee,{direction:`row`,align:`center`,className:P.bodyHeader,children:x}):null;return(0,L.jsxs)(`div`,{className:P.content,children:[ye,(0,L.jsx)(`div`,{className:P.stateArea,children:(0,L.jsx)(ge,{isLoading:oe,isFetching:se,isError:m,isEmpty:f.length===0,error:{description:n(`We couldn't load location data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:h}]},empty:{icon:ae,description:n(`No location data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,L.jsxs)(`div`,{className:P.chartArea,children:[(0,L.jsx)(`div`,{className:P.leaderboardPanel,children:(0,L.jsx)(fe,{data:ve,withOverlayLabel:!0,withComparison:p,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},className:P.leaderboard})}),(0,L.jsx)(`div`,{className:P.geoChart,children:(0,L.jsx)(re,{data:_e,resizeDebounceTime:100,region:_?u?.code??`world`:`world`,resolution:_?`provinces`:`countries`,onError:me})})]})})})]})}function I({attributes:e={}}){let t=e?.geoGranularity??B,n=Object.prototype.hasOwnProperty.call(z,t)?t:B;return(0,L.jsx)(d,{attributes:e,children:(0,L.jsxs)(`div`,{className:P.root,children:[(0,L.jsx)(Ne,{geoGranularity:n}),(0,L.jsx)(b,{children:(0,L.jsx)(me,{report:`locations`,section:z[n]})})]})})}var L,Pe,R,z,B,Fe,Ie=e((()=>{Ce(),oe(),f(),s(),i(),u(),Oe(),je(),L=a(),Pe=`Requested map does not exist`,R=new Set,z={country:`countries`,region:`regions`,city:`cities`},B=`country`,Fe=10})),Le,Re=e((()=>{i(),l(),g(),Le={icon:c,attributes:[{id:`geoGranularity`,label:n(`View by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:_,elements:[{label:n(`Countries`,`jetpack-premium-analytics-pkg`),value:`country`},{label:n(`Regions`,`jetpack-premium-analytics-pkg`),value:`region`},{label:n(`Cities`,`jetpack-premium-analytics-pkg`),value:`city`}],relevance:`high`}],example:{attributes:{geoGranularity:`country`}}}})),ze,Be,Ve,He,Ue,We,Ge,Ke=e((()=>{ze=`jpa/locations`,Be=`Top locations`,Ve=`Where your visitors are viewing from — by country, region, or city.`,He={content:`The countries, regions, and cities where your visitors came from, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Ue=`stats`,We=`framed`,Ge={name:ze,title:Be,description:Ve,help:He,category:Ue,presentation:We}}));function qe({withComparison:e,geoGranularity:t}){return{geoGranularity:t,reportParams:m(e)}}function V(e){return(0,U.jsx)(I,{attributes:qe(e)})}function H(e){return(0,U.jsx)(I,{attributes:{geoGranularity:`country`,reportParams:m(!1,e)}})}function Je(e){return(0,U.jsx)(I,{...e})}function Ye({withComparison:e,geoGranularity:t,...n}){return(0,U.jsx)(xe,{...n,widgetType:W,renderModule:Xe,renderComponent:Je,attributes:qe({withComparison:e,geoGranularity:t})})}var U,Xe,W,Ze,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),x(),_e(),ye(),Se(),v(),Ee(),De(),Ie(),Re(),Ke(),U=a(),y(),Te(),Xe=`storybook/locations`,W=be(Ge,Le),Ze={title:`Packages/Premium Analytics/Widgets/Locations`,component:I,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:"The \"Locations\" widget. Shows visitor views by country, region, or city, with country drill-down into regions, using the global dashboard date range. The Countries/Regions/Cities view is the `geoGranularity` attribute (`relevance: 'high'`), exposed as a control by the widget host."}}}},G={render:V,args:{withComparison:!1,geoGranularity:`country`},decorators:[C,S]},K={render:V,args:{withComparison:!0,geoGranularity:`country`},decorators:[C,S]},q={render:V,args:{withComparison:!1,geoGranularity:`region`},decorators:[C,S]},J={render:V,args:{withComparison:!1,geoGranularity:`city`},decorators:[C,S]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/location-views`,`loading`),()=>w(`stats/location-views`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/location-views`,`error`),()=>w(`stats/location-views`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/location-views`,`empty`),()=>w(`stats/location-views`,null))},Q={render:e=>(0,U.jsx)(Ye,{...e}),args:{...we,widgetWidth:2,widgetHeight:1,withComparison:!0,geoGranularity:`country`},argTypes:{...ve,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},geoGranularity:{control:`radio`,options:[`country`,`region`,`city`],description:`The "View by" toolbar attribute rendered by the widget host.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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